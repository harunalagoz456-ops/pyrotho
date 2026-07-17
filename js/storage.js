const KEY = "pyrotho-save-v2";

const PROFILE_VERSION = 2;

const defaultState = () => ({
  lang: "en",
  onboarded: false,
  profileVersion: 0,
  name: "",
  age: "",
  reason: "",
  avatar: "fox",
  notifyTime: "18:00",
  notifyEnabled: false,
  lastNotifyDate: "",
  xp: 0,
  mood: 100,
  completed: [],
  earnedSteps: [],
  createdAt: Date.now(),
});

function normalizeLoaded(rawObj) {
  const state = { ...defaultState(), ...rawObj };
  if (!Array.isArray(state.earnedSteps)) state.earnedSteps = [];
  if (!Array.isArray(state.completed)) state.completed = [];
  if (!state.avatar) state.avatar = "fox";
  const complete =
    state.profileVersion >= PROFILE_VERSION &&
    Boolean(state.name && state.age && state.reason && state.notifyTime);
  if (!complete) state.onboarded = false;
  return state;
}

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      const old = localStorage.getItem("pyrotho-save-v1");
      if (old) return normalizeLoaded(JSON.parse(old));
      return defaultState();
    }
    return normalizeLoaded(JSON.parse(raw));
  } catch {
    return defaultState();
  }
}

export { PROFILE_VERSION };

export function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function xpToLevel(xp) {
  let level = 1;
  let need = 100;
  let remaining = xp;
  while (remaining >= need) {
    remaining -= need;
    level += 1;
    need = Math.round(need * 1.25);
  }
  return { level, intoLevel: remaining, need };
}
