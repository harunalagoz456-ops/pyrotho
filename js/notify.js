/** Daily study reminder at the user's chosen local time. */

export async function askNotifyPermission() {
  if (!("Notification" in window)) return false;
  if (Notification.permission === "granted") return true;
  if (Notification.permission === "denied") return false;
  const result = await Notification.requestPermission();
  return result === "granted";
}

export function startNotifyLoop(getState, save) {
  const tick = () => {
    const state = getState();
    if (!state.onboarded || !state.notifyEnabled || !state.notifyTime) return;
    if (!("Notification" in window) || Notification.permission !== "granted") return;

    const now = new Date();
    const [hh, mm] = state.notifyTime.split(":").map(Number);
    if (Number.isNaN(hh) || Number.isNaN(mm)) return;

    const today = now.toISOString().slice(0, 10);
    if (state.lastNotifyDate === today) return;

    if (now.getHours() === hh && now.getMinutes() === mm) {
      const name = state.name || "friend";
      new Notification("Pyrotho", {
        body: `Hey ${name}! Pyro is waiting — time for a Python lesson 🐍`,
        tag: "pyrotho-daily",
      });
      state.lastNotifyDate = today;
      save(state);
    }
  };

  tick();
  return setInterval(tick, 30000);
}
