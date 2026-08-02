# Pyrotho

Learn Python with Pyro — levels, XP, and friendly coaching.

## Run locally (original)

```bash
./start.sh
```

Then open http://127.0.0.1:8765

## Run with FastAPI (recommended for production/development)

```bash
pip install -r requirements.txt
uvicorn server_fastapi:app --host 127.0.0.1 --port 8765
```

This variant includes CORS restrictions and a simple rate limiter. See server_fastapi.py for details.
