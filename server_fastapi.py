"""FastAPI-based TTS server (safe-by-default)

This file provides an example FastAPI application that:
- Restricts CORS via ALLOWED_ORIGINS env var
- Adds a simple in-memory rate limiter (token bucket per-IP)
- Uses edge-tts to synthesize audio asynchronously
- Writes/reads cache files under .tts-cache

Usage (development):
  pip install -r requirements.txt
  uvicorn server_fastapi:app --host 127.0.0.1 --port 8765

Note: This is a reference implementation. For production, run behind a reverse-proxy
and use an external cache (S3/Redis) and a robust rate-limiter.
"""

from __future__ import annotations

import asyncio
import hashlib
import json
import os
import time
from pathlib import Path
from typing import Dict

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# edge-tts is used for synthesis
import edge_tts

ROOT = Path(__file__).resolve().parent
CACHE = ROOT / ".tts-cache"
CACHE.mkdir(exist_ok=True)

VOICES = {
    "en": "en-US-JennyNeural",
    "es": "es-ES-ElviraNeural",
    "fr": "fr-FR-DeniseNeural",
    "tr": "tr-TR-EmelNeural",
}

MAX_TEXT = 1200

# Simple in-memory token-bucket rate limiter per IP
RATE_LIMIT_CAPACITY = int(os.environ.get("RATE_LIMIT_CAPACITY", "10"))  # tokens
RATE_LIMIT_WINDOW = int(os.environ.get("RATE_LIMIT_WINDOW", "60"))  # seconds

_tokens: Dict[str, Dict[str, float]] = {}


def _get_client_ip(request: Request) -> str:
    xff = request.headers.get("x-forwarded-for")
    if xff:
        return xff.split(",")[0].strip()
    return request.client.host


def _allowed_origins():
    raw = os.environ.get("ALLOWED_ORIGINS", "http://127.0.0.1:8765,http://localhost:8765")
    return [o.strip() for o in raw.split(",") if o.strip()]


class TTSRequest(BaseModel):
    text: str
    lang: str = "en"


app = FastAPI(title="Pyrotho TTS (FastAPI)")
app.add_middleware(
    CORSMiddleware,
    allow_origins=_allowed_origins(),
    allow_credentials=True,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["*"],
)


@app.middleware("http")
async def rate_limit_middleware(request: Request, call_next):
    client = _get_client_ip(request)
    now = time.time()
    entry = _tokens.get(client)
    if entry is None:
        _tokens[client] = {"tokens": RATE_LIMIT_CAPACITY - 1, "last": now}
    else:
        elapsed = now - entry["last"]
        # refill
        refill = elapsed * (RATE_LIMIT_CAPACITY / RATE_LIMIT_WINDOW)
        entry["tokens"] = min(RATE_LIMIT_CAPACITY, entry["tokens"] + refill)
        entry["last"] = now
        if entry["tokens"] < 1:
            # Too many requests
            raise HTTPException(status_code=429, detail="Rate limit exceeded")
        entry["tokens"] -= 1

    response = await call_next(request)
    return response


def voice_for(lang: str) -> str:
    return VOICES.get((lang or "en")[:2].lower(), VOICES["en"])


def cache_path(text: str, lang: str) -> Path:
    key = hashlib.sha256(f"{lang}|{voice_for(lang)}|{text}".encode("utf-8")).hexdigest()
    return CACHE / f"{key}.mp3"


async def synthesize(text: str, lang: str) -> bytes:
    path = cache_path(text, lang)
    if path.exists() and path.stat().st_size > 0:
        return path.read_bytes()

    communicate = edge_tts.Communicate(text, voice_for(lang), rate="-5%")
    await communicate.save(str(path))
    return path.read_bytes()


@app.get("/api/health")
async def health():
    return {"ok": True, "tts": "edge-tts"}


@app.post("/api/tts")
async def tts(req: TTSRequest, request: Request):
    text = " ".join(req.text.split())
    if not text:
        raise HTTPException(status_code=400, detail="Missing text")
    if len(text) > MAX_TEXT:
        text = text[:MAX_TEXT]
    try:
        audio = await synthesize(text, req.lang)
    except Exception as exc:
        raise HTTPException(status_code=502, detail=str(exc))
    return Response(content=audio, media_type="audio/mpeg")
