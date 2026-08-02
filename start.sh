#!/bin/zsh
cd "$(dirname "$0")"

if [ ! -d .venv ]; then
  python3 -m venv .venv
fi

.venv/bin/python -c "import edge_tts" 2>/dev/null || .venv/bin/pip install -r requirements.txt

exec .venv/bin/python server.py
