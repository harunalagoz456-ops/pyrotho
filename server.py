#!/usr/bin/env python3
"""Pyrotho local server: static files + natural TTS via edge-tts (free Microsoft voices)."""

from __future__ import annotations

import asyncio
import hashlib
import json
import mimetypes
import os
import re
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parent
CACHE = ROOT / ".tts-cache"
CACHE.mkdir(exist_ok=True)

mimetypes.add_type("application/manifest+json", ".webmanifest")
mimetypes.add_type("text/javascript", ".js")
mimetypes.add_type("image/png", ".png")

VOICES = {
    "en": "en-US-JennyNeural",
    "es": "es-ES-ElviraNeural",
    "fr": "fr-FR-DeniseNeural",
    "tr": "tr-TR-EmelNeural",
}

MAX_TEXT = 1200
MAX_REQUEST_BYTES = 16 * 1024
PUBLIC_PATHS = {"index.html", "manifest.webmanifest", "sw.js", "css", "icons", "js"}


def voice_for(lang: str) -> str:
    return VOICES.get((lang or "en")[:2].lower(), VOICES["en"])


def cache_path(text: str, lang: str) -> Path:
    key = hashlib.sha256(f"{lang}|{voice_for(lang)}|{text}".encode("utf-8")).hexdigest()
    return CACHE / f"{key}.mp3"


async def synthesize(text: str, lang: str) -> bytes:
    import edge_tts

    path = cache_path(text, lang)
    if path.exists() and path.stat().st_size > 0:
        return path.read_bytes()

    communicate = edge_tts.Communicate(text, voice_for(lang), rate="-5%")
    await communicate.save(str(path))
    return path.read_bytes()


def run_tts(text: str, lang: str) -> bytes:
    return asyncio.run(synthesize(text, lang))


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

        def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        super().end_headers()

    def translate_path(self, path: str) -> str:
        """Keep private files and caches outside the public surface."""
        translated = Path(super().translate_path(path)).resolve()

        try:
            relative = translated.relative_to(ROOT)
        except ValueError:
            return str(ROOT / "__not_found__")

        if any(part.startswith(".") for part in relative.parts):
            return str(ROOT / "__not_found__")

        if relative.parts and relative.parts[0] not in PUBLIC_PATHS:
            return str(ROOT / "__not_found__")

        return str(translated)
    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/tts":
            qs = parse_qs(parsed.query)
            text = (qs.get("text") or [""])[0].strip()
            lang = (qs.get("lang") or ["en"])[0]
            self._tts_response(text, lang)
            return
        if parsed.path == "/api/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"ok": True, "tts": "edge-tts"}).encode())
            return
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path != "/api/tts":
            self.send_error(404)
            return
                try:
            length = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            self.send_error(400, "Invalid Content-Length")
            return

        if length < 0 or length > MAX_REQUEST_BYTES:
            self.send_error(413, "Request body too large")
            return
        raw = self.rfile.read(length) if length else b"{}"
        try:
            data = json.loads(raw.decode("utf-8") or "{}")
        except json.JSONDecodeError:
            self.send_error(400, "Invalid JSON")
            return
        text = str(data.get("text") or "").strip()
        lang = str(data.get("lang") or "en")
        self._tts_response(text, lang)

    def _tts_response(self, text: str, lang: str):
        text = re.sub(r"\s+", " ", text).strip()
        if not text:
            self.send_error(400, "Missing text")
            return
        if len(text) > MAX_TEXT:
            text = text[:MAX_TEXT]
        try:
            audio = run_tts(text, lang)
                except Exception:  # noqa: BLE001  # noqa: BLE001
            self.send_response(502)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
                        self.wfile.write(json.dumps({"error": "Speech service unavailable"}).encode())
            return

        self.send_response(200)
        self.send_header("Content-Type", "audio/mpeg")
        self.send_header("Content-Length", str(len(audio)))
        self.end_headers()
        self.wfile.write(audio)

    def log_message(self, fmt, *args):
        # quieter logs
        if args and isinstance(args[0], str) and args[0].startswith("GET /api/"):
            super().log_message(fmt, *args)
        elif args and isinstance(args[0], str) and "POST /api/" in args[0]:
            super().log_message(fmt, *args)


def main():
    port = int(os.environ.get("PORT", "8765"))
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Pyrotho running at http://127.0.0.1:{port}")
    print("Natural voice: edge-tts (Microsoft neural voices)")
    print("Stop with Ctrl+C")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nBye!")


if __name__ == "__main__":
    main()
