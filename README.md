# Pyrotho

Pyrotho is a friendly, gamified web application for learning Python through short lessons, guided explanations, exercises, levels, and XP rewards.

## Features

- Step-by-step Python lessons
- Multiple-choice and written exercises
- XP and level progression
- Guided hints and explanations
- Natural text-to-speech support
- Offline-capable Progressive Web App
- Local progress storage
- English, Spanish, French, and Turkish language support
- Responsive desktop and mobile interface

## Requirements

- Python 3.9 or newer
- An internet connection for natural text-to-speech
- A modern web browser

## Run Locally

Clone the repository:

```bash
git clone https://github.com/harunalagoz456-ops/pyrotho.git
cd pyrotho
```

Start the application:

```bash
./start.sh
```

Then open:

```text
http://127.0.0.1:8765
```

During the first launch, Pyrotho creates a local Python virtual environment and installs the dependencies listed in `requirements.txt`.

## Run Tests

```bash
python3 -m unittest discover -s tests -v
```

## Project Structure

```text
pyrotho/
├── css/                    # Application styles
├── icons/                  # PWA icons
├── js/                     # Lessons and application logic
├── tests/                  # Automated server tests
├── index.html              # Main application page
├── manifest.webmanifest    # PWA configuration
├── requirements.txt        # Python dependencies
├── server.py               # Static file and text-to-speech server
├── start.sh                # Local startup script
└── sw.js                   # Service worker
```

## Technology Stack

- HTML5
- CSS3
- JavaScript ES modules
- Python HTTP server
- `edge-tts`
- Service Worker
- Web App Manifest
- Browser Local Storage

## Languages

- English
- Español
- Français
- Türkçe

## Privacy and Security

Pyrotho stores learning progress locally in the browser. The local server only exposes the files required by the web application. Hidden files, cached speech files, tests, and server source files are not publicly served.

Text submitted for natural speech generation is processed through the `edge-tts` service. If the natural voice service is unavailable, Pyrotho falls back to the browser’s built-in speech synthesis.

## License

No license has been specified yet. Add a `LICENSE` file before distributing or accepting external contributions.
