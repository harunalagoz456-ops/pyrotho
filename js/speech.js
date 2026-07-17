/** Natural voice via local edge-tts server, with browser TTS fallback. */

const LANG_MAP = {
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  tr: "tr-TR",
};

let speaking = false;
let onEndCallback = null;
let currentAudio = null;
let naturalAvailable = null; // null = unknown, true/false after probe

function finish(cb) {
  speaking = false;
  onEndCallback = null;
  cb?.();
}

export function stopSpeech() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = "";
    currentAudio = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  const cb = onEndCallback;
  onEndCallback = null;
  speaking = false;
  cb?.();
}

export function isSpeaking() {
  return speaking;
}

async function probeNatural() {
  if (naturalAvailable !== null) return naturalAvailable;
  try {
    const res = await fetch("/api/health", { cache: "no-store" });
    naturalAvailable = res.ok;
  } catch {
    naturalAvailable = false;
  }
  return naturalAvailable;
}

async function speakNatural(text, lang, { onStart, onEnd }) {
  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, lang }),
  });
  if (!res.ok) throw new Error("TTS failed");

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const audio = new Audio(url);
  currentAudio = audio;

  audio.onplay = () => {
    speaking = true;
    onStart?.();
  };
  audio.onended = () => {
    URL.revokeObjectURL(url);
    currentAudio = null;
    finish(onEnd);
  };
  audio.onerror = () => {
    URL.revokeObjectURL(url);
    currentAudio = null;
    finish(onEnd);
  };

  onEndCallback = onEnd || null;
  await audio.play();
  return true;
}

function speakBrowser(text, lang, { onStart, onEnd }) {
  if (!window.speechSynthesis || !text) {
    onEnd?.();
    return false;
  }

  const utter = new SpeechSynthesisUtterance(text);
  const code = LANG_MAP[lang] || "en-US";
  utter.lang = code;
  utter.rate = 0.95;
  utter.pitch = 1.05;

  const voices = window.speechSynthesis.getVoices?.() || [];
  const prefix = code.slice(0, 2).toLowerCase();
  const voice =
    voices.find((v) => v.lang?.toLowerCase().startsWith(prefix)) || null;
  if (voice) utter.voice = voice;

  utter.onstart = () => {
    speaking = true;
    onStart?.();
  };
  utter.onend = () => finish(onEnd);
  utter.onerror = () => finish(onEnd);

  onEndCallback = onEnd || null;
  window.speechSynthesis.speak(utter);
  return true;
}

/**
 * Prefer natural edge-tts audio; fall back to browser voice if server is down.
 * Returns true if playback was started (or requested).
 */
export function speakText(text, lang = "en", hooks = {}) {
  if (!text) {
    hooks.onEnd?.();
    return false;
  }

  stopSpeech();

  (async () => {
    const ok = await probeNatural();
    try {
      if (ok) {
        await speakNatural(text, lang, hooks);
        return;
      }
    } catch {
      naturalAvailable = false;
    }
    // fallback
    setTimeout(() => speakBrowser(text, lang, hooks), 60);
  })();

  return true;
}

export function warmVoices() {
  probeNatural();
  if (!window.speechSynthesis) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

export async function hasNaturalVoice() {
  return probeNatural();
}
