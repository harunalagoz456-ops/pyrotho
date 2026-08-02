import { t } from "./i18n.js";
import { levels, lessons } from "./lessons.js";
import { loadState, saveState, xpToLevel, PROFILE_VERSION } from "./storage.js";
import { mascotSvg } from "./mascot.js";
import { avatarSvg, avatarPickerHtml, isValidAvatar, avatarLabel } from "./avatars.js";
import { gradeStep } from "./check.js";
import { getTips } from "./tips.js";
import { getTeachScript } from "./teach.js";
import { speakText, stopSpeech, warmVoices, hasNaturalVoice } from "./speech.js";
import { askNotifyPermission, startNotifyLoop } from "./notify.js";

warmVoices();
hasNaturalVoice().then((ok) => {
  if (!ok) console.info("Pyrotho: natural voice server offline — using browser voice fallback. Run: ./start.sh");
});

const app = document.getElementById("app");
const langSelect = document.getElementById("langSelect");
const playerStats = document.getElementById("playerStats");
const xpValue = document.getElementById("xpValue");
const levelValue = document.getElementById("levelValue");

let state = loadState();
let view = state.onboarded ? "home" : "landing";
let lessonId = null;
let stepIndex = 0;
let selectedOption = null;
let writtenAnswer = "";
let feedback = null;
let mascotMood = "happy";
let tipCount = 0; // how many AI tips revealed on current step
let lastXpGain = 0; // shown after correct answer / lesson finish
let voiceSpeaking = false;
let teachRevealed = false; // user chose to see/hear the explanation
let profileOpen = false; // mobile profile drawer
let profileCloseGuardUntil = 0;

function setProfileOpen(open) {
  const next = Boolean(open);
  const wasOpen = profileOpen;
  profileOpen = next;
  document.body.classList.toggle("profile-open", profileOpen);
  if (wasOpen && !profileOpen) {
    // Prevent ghost-tap on "Profilin" while the drawer slides away
    profileCloseGuardUntil = Date.now() + 450;
    document.body.classList.add("profile-closing");
    window.clearTimeout(setProfileOpen._closingTimer);
    setProfileOpen._closingTimer = window.setTimeout(() => {
      document.body.classList.remove("profile-closing");
    }, 450);
  } else if (profileOpen) {
    document.body.classList.remove("profile-closing");
  }
}
const STEP_XP = 15;

langSelect.value = state.lang;
document.documentElement.lang = state.lang;

function persist() {
  saveState(state);
  refreshStats();
}

function refreshStats() {
  const profileBtn = document.getElementById("profileBtn");
  const profileBtnLabel = document.getElementById("profileBtnLabel");
  if (state.onboarded) {
    playerStats.classList.remove("hidden");
    const { level } = xpToLevel(state.xp);
    xpValue.textContent = String(state.xp);
    levelValue.textContent = String(level);
    if (profileBtn) {
      profileBtn.hidden = false;
      const aid = isValidAvatar(state.avatar) ? state.avatar : "fox";
      profileBtn.innerHTML = `${avatarSvg(aid, 22)}<span id="profileBtnLabel">${t(state.lang, "profileTitle")}</span>`;
    }
  } else {
    playerStats.classList.add("hidden");
    if (profileBtn) profileBtn.hidden = true;
    setProfileOpen(false);
  }
}

function profilePanelHtml() {
  const avatarId = isValidAvatar(state.avatar) ? state.avatar : "fox";
  const { level, intoLevel, need } = xpToLevel(state.xp);
  const pct = Math.max(6, Math.min(100, Math.round((intoLevel / need) * 100)));
  const doneCount = state.completed.length;
  const totalLessons = lessons.length;

  return `
    <aside class="panel profile-panel" id="profilePanel">
      <div class="profile-head">
        <h2>${t(state.lang, "profileTitle")}</h2>
        <button type="button" class="btn btn-ghost profile-close" data-action="close-profile">${t(state.lang, "closeProfile")}</button>
      </div>

      <div class="profile-hero">
        <div class="profile-hero-ring">
          <div class="profile-avatar-big" id="profileAvatarPreview">${avatarSvg(avatarId, 88)}</div>
        </div>
        <div class="profile-hero-text">
          <strong class="profile-name">${escapeHtml(state.name || "—")}</strong>
          <span class="profile-face-chip" id="profileAvatarLabel">${avatarLabel(avatarId, state.lang)}</span>
        </div>
        <div class="profile-level-pill">Lv ${level}</div>
      </div>

      <div class="profile-metrics">
        <div class="profile-metric profile-metric-xp">
          <span class="profile-metric-label">XP</span>
          <strong class="profile-metric-value" id="profileXpValue">${state.xp}</strong>
          <div class="profile-mini-bar" aria-hidden="true"><span style="width:${pct}%"></span></div>
        </div>
        <div class="profile-metric">
          <span class="profile-metric-label">${t(state.lang, "profileLessons")}</span>
          <strong class="profile-metric-value">${doneCount}<span class="profile-metric-sub">/${totalLessons}</span></strong>
        </div>
      </div>

      <div class="profile-section">
        <div class="profile-section-title">${t(state.lang, "profilePickAvatar")}</div>
        ${avatarPickerHtml(avatarId, state.lang, { name: "profileAvatar", compact: true })}
      </div>

      <div class="profile-section">
        <ul class="profile-facts">
          <li>
            <span>${t(state.lang, "profileAge")}</span>
            <strong>${escapeHtml(state.age)}</strong>
          </li>
          <li>
            <span>${t(state.lang, "profileGoal")}</span>
            <strong>${escapeHtml(reasonText(state.reason))}</strong>
          </li>
          <li>
            <span>${t(state.lang, "profileReminder")}</span>
            <strong>${escapeHtml(state.notifyTime)}</strong>
          </li>
        </ul>
      </div>

      <button class="btn btn-secondary profile-edit-btn" data-action="edit-profile">${t(state.lang, "profileEdit")}</button>
    </aside>
  `;
}

function setMood(mood) {
  mascotMood = mood;
}

function speechBubble(text) {
  return `
    <div class="mascot-stage">
      ${mascotSvg(mascotMood)}
      <div class="speech">${text}</div>
    </div>
  `;
}

function orderedLessonIds() {
  return levels.flatMap((lvl) => lvl.lessons.map((l) => l.id));
}

function isUnlocked(id) {
  const ids = orderedLessonIds();
  const index = ids.indexOf(id);

  if (index < 0) return false;

  return index === 0 || state.completed.includes(ids[index - 1]);
}

function renderLanding() {
  return `
    <section class="screen hero">
      <h1 class="hero-brand">Pyrotho</h1>
      <p class="hero-line">${t(state.lang, "heroLine")}</p>
      <div class="cta-row">
        <button class="btn btn-primary" data-action="start">${t(state.lang, "start")}</button>
      </div>
      ${speechBubble(t(state.lang, "meetPyro"))}
      <p class="hero-line" style="font-size:0.95rem;opacity:0.85">${t(state.lang, "pickLanguage")}</p>
    </section>
  `;
}

const REASON_KEYS = ["school", "job", "fun", "curiosity"];
const REASON_LABELS = { school: "reasonSchool", job: "reasonJob", fun: "reasonFun", curiosity: "reasonCuriosity" };

function reasonText(reason) {
  if (REASON_LABELS[reason]) return t(state.lang, REASON_LABELS[reason]);
  return reason; // old free-text profiles
}

function renderOnboarding() {
  const ageOptions = Array.from({ length: 85 }, (_, i) => i + 15)
    .map((a) => `<option value="${a}" ${String(a) === String(state.age) ? "selected" : ""}>${a}</option>`)
    .join("");

  const reasonOptions = REASON_KEYS
    .map((key) => `<option value="${key}" ${state.reason === key ? "selected" : ""}>${t(state.lang, REASON_LABELS[key])}</option>`)
    .join("");

  const timeSlots = [
    { value: "09:00", key: "timeMorning" },
    { value: "12:00", key: "timeNoon" },
    { value: "18:00", key: "timeEvening" },
    { value: "22:00", key: "timeNight" },
  ];
  const savedTime = timeSlots.some((s) => s.value === state.notifyTime) ? state.notifyTime : "18:00";
  const timeOptions = timeSlots
    .map((s) => `<option value="${s.value}" ${s.value === savedTime ? "selected" : ""}>${t(state.lang, s.key)}</option>`)
    .join("");

  return `
    <section class="screen panel" style="max-width:560px;margin:1rem auto 0">
      <h2>${t(state.lang, "onboardingTitle")}</h2>
      ${speechBubble(t(state.lang, "onboardingHint"))}
      <form id="onboardForm" class="quiz" style="margin-top:1rem">
        <div class="field">
          <label for="nameInput">${t(state.lang, "nameLabel")}</label>
          <input id="nameInput" name="name" required maxlength="32" autocomplete="name" value="${escapeAttr(state.name)}" />
        </div>
        <div class="field">
          <label>${t(state.lang, "avatarLabel")}</label>
          <span class="field-hint">${t(state.lang, "avatarHint")}</span>
          ${avatarPickerHtml(state.avatar || "fox", state.lang, { name: "avatar" })}
        </div>
        <div class="field">
          <label for="ageInput">${t(state.lang, "ageLabel")}</label>
          <select id="ageInput" name="age" required class="field-select">
            ${String(state.age) ? "" : `<option value="" selected disabled>—</option>`}
            ${ageOptions}
          </select>
        </div>
        <div class="field">
          <label for="reasonInput">${t(state.lang, "reasonLabel")}</label>
          <select id="reasonInput" name="reason" required class="field-select">
            ${REASON_LABELS[state.reason] ? "" : `<option value="" selected disabled>—</option>`}
            ${reasonOptions}
          </select>
        </div>
        <div class="field">
          <label for="notifyInput">${t(state.lang, "notifyLabel")}</label>
          <select id="notifyInput" name="notifyTime" required class="field-select">
            ${timeOptions}
          </select>
          <span class="field-hint">${t(state.lang, "notifyHint")}</span>
        </div>
        <button class="btn btn-primary" type="submit">${t(state.lang, "next")}</button>
      </form>
    </section>
  `;
}

function nextLessonId() {
  const ids = orderedLessonIds();
  return ids.find((id) => !state.completed.includes(id)) || null;
}

function renderHome() {
  const { level, intoLevel, need } = xpToLevel(state.xp);
  const pct = Math.min(100, Math.round((intoLevel / need) * 100));
  const nextId = nextLessonId();
  const nextLesson = lessons.find((l) => l.id === nextId);

  const continueHero = nextLesson
    ? `
      <div class="continue-hero">
        <div class="meta">
          <span class="label">${t(state.lang, "nextUp")}</span>
          <span class="title">${nextLesson.title[state.lang]}</span>
        </div>
        <button class="btn btn-primary" data-action="open-lesson" data-id="${nextLesson.id}">${t(state.lang, "continue")}</button>
      </div>`
    : "";

  const levelBlocks = levels
    .map((lvl) => {
      const cards = lvl.lessons
        .map((lesson) => {
          const done = state.completed.includes(lesson.id);
          const unlocked = isUnlocked(lesson.id);
          const isCurrent = lesson.id === nextId && unlocked;
          return `
            <article class="lesson-item scroll-fx ${done ? "done" : ""} ${unlocked ? "" : "locked"} ${isCurrent ? "current" : ""}" ${isCurrent ? 'id="current-lesson"' : ""}>
              <div class="meta">
                <div class="title">${done ? "✅ " : ""}${lesson.title[state.lang]}</div>
                <div class="sub">${lesson.blurb[state.lang]} · ${t(state.lang, "xpReward", { xp: lesson.xp })}</div>
              </div>
              <div style="display:flex;gap:0.5rem;align-items:center">
                ${done ? `<span class="badge done-badge">${t(state.lang, "done")}</span>` : ""}
                ${
                  unlocked
                    ? `<button class="btn ${isCurrent ? "btn-primary" : "btn-secondary"}" data-action="open-lesson" data-id="${lesson.id}">
                        ${done ? t(state.lang, "reviewLesson") : t(state.lang, "startLesson")}
                      </button>`
                    : `<span class="badge locked-badge" title="${escapeAttr(t(state.lang, "unlockHint"))}">${t(state.lang, "locked")} 🔒</span>`
                }
              </div>
            </article>
          `;
        })
        .join("");

      return `
        <div class="level-block level-tone-${(lvl.id - 1) % 4}">
          <h3 class="level-title">
            <span class="level-num">${lvl.id}</span>
            <span class="level-title-text">${lvl.title[state.lang].replace(/^Seviye\s+\d+\s*·\s*/i, "").replace(/^Level\s+\d+\s*·\s*/i, "").replace(/^Nivel\s+\d+\s*·\s*/i, "").replace(/^Niveau\s+\d+\s*·\s*/i, "")}</span>
          </h3>
          <div class="lesson-list">${cards}</div>
        </div>
      `;
    })
    .join("");

  return `
    <section class="screen home-screen">
      <div class="home-main">
        ${speechBubble(t(state.lang, "homeHello", { name: escapeHtml(state.name) }))}
        ${continueHero}
        <div class="panel path-panel">
          <h2>${t(state.lang, "lessons")}</h2>
          <div class="progress-wrap">
            <div class="progress-meta">
              <span>${t(state.lang, "yourLevel")}: ${level}</span>
              <span>${intoLevel}/${need} ${t(state.lang, "toNextLevel")}</span>
            </div>
            <div class="bar"><span style="width:${pct}%"></span></div>
          </div>
          <div class="path-levels">${levelBlocks}</div>
        </div>
      </div>
      ${profilePanelHtml()}
      <div class="profile-backdrop" data-action="close-profile" aria-hidden="true"></div>
    </section>
  `;
}

function currentLesson() {
  return lessons.find((l) => l.id === lessonId);
}

function renderTeach() {
  const lesson = currentLesson();
  if (!lesson) {
    view = "home";
    return renderHome();
  }
  const script = getTeachScript(lesson.id, state.lang);

  if (!teachRevealed) {
    return `
      <section class="screen panel teach-panel" style="margin-top:0.75rem">
        <div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;align-items:center">
          <h2 style="margin:0">${t(state.lang, "teachTitle")}</h2>
          <span class="badge">${lesson.title[state.lang]}</span>
        </div>
        ${speechBubble(`
          <span class="mission-label">${t(state.lang, "teachTitle")}</span>
          <p class="mission-text">${escapeHtml(t(state.lang, "teachAsk"))}</p>
        `)}
        <div class="cta-row">
          <button class="btn btn-ghost" data-action="home">${t(state.lang, "backHome")}</button>
          <button class="btn btn-ai" data-action="teach-reveal">${t(state.lang, "teachYes")}</button>
          <button class="btn btn-primary" data-action="teach-practice">${t(state.lang, "teachSkip")}</button>
        </div>
      </section>
    `;
  }

  return `
    <section class="screen panel teach-panel" style="margin-top:0.75rem">
      <div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;align-items:center">
        <h2 style="margin:0">${t(state.lang, "teachTitle")}</h2>
        <span class="badge">${lesson.title[state.lang]}</span>
      </div>
      ${speechBubble(`
        <span class="mission-label">${voiceSpeaking ? t(state.lang, "teachSpeaking") : t(state.lang, "teachSteps")}</span>
        <p class="mission-text teach-script">${escapeHtml(script)}</p>
      `)}
      <div class="cta-row">
        <button class="btn btn-ghost" data-action="home">${t(state.lang, "backHome")}</button>
        ${
          voiceSpeaking
            ? `<button class="btn btn-secondary" data-action="teach-stop">${t(state.lang, "teachStop")}</button>`
            : `<button class="btn btn-ai" data-action="teach-listen">${t(state.lang, "teachListen")}</button>`
        }
        <button class="btn btn-primary" data-action="teach-practice">${t(state.lang, "teachPractice")}</button>
      </div>
    </section>
  `;
}

function startTeachVoice() {
  const lesson = currentLesson();
  if (!lesson) return;
  const script = getTeachScript(lesson.id, state.lang);
  const ok = speakText(script, state.lang, {
    onStart: () => {
      voiceSpeaking = true;
      setMood("happy");
      if (view === "teach") render();
    },
    onEnd: () => {
      voiceSpeaking = false;
      if (view === "teach") render();
    },
  });
  if (!ok) {
    voiceSpeaking = false;
  }
}

function renderLesson() {
  const lesson = currentLesson();
  if (!lesson) {
    view = "home";
    return renderHome();
  }
  const step = lesson.steps[stepIndex];
  const total = lesson.steps.length;
  const typeBadge = step.type === "write" ? t(state.lang, "typeWrite") : t(state.lang, "typeMcq");

  const tips = getTips(step, state.lang);
  const revealed = tips.slice(0, tipCount);
  const aiPanel = `
    <div class="ai-panel">
      <div class="ai-head">
        <span class="ai-badge">${t(state.lang, "aiTitle")}</span>
        <span class="ai-ask">${t(state.lang, "aiAsk")}</span>
      </div>
      ${
        revealed.length
          ? `<ol class="ai-tips">${revealed.map((tip, i) => `<li><span class="tip-n">${i + 1}</span> ${escapeHtml(tip)}</li>`).join("")}</ol>`
          : ""
      }
      ${
        tipCount < tips.length
          ? `<button class="btn btn-ai" data-action="ai-tip">${tipCount === 0 ? t(state.lang, "aiMode") : t(state.lang, "aiNext")}</button>`
          : `<p class="ai-done">${t(state.lang, "aiDone")}</p>`
      }
    </div>
  `;

  let feedbackHtml = "";
  let speechText = `
    <span class="mission-label">${t(state.lang, "pyroInstruct")}</span>
    <p class="mission-text">${escapeHtml(step.instruct[state.lang])}</p>
  `;
  if (feedback) {
    if (feedback.ok) {
      speechText = `<p class="mission-text celebrate-text">${t(state.lang, "celebrate")}</p>`;
      feedbackHtml = `
        <div class="feedback ok">
          <strong>${t(state.lang, "correctTitle")}</strong>
          <div class="xp-pop">${
            lastXpGain > 0
              ? t(state.lang, "stepXp", { xp: lastXpGain })
              : t(state.lang, "alreadyXp")
          }</div>
          <div class="xp-total-line">${t(state.lang, "xpTotal", { xp: state.xp })}</div>
        </div>`;
    } else {
      const pathText = step.path[state.lang] || step.path.en;
      feedbackHtml = `
        <div class="feedback no">
          <strong>${t(state.lang, "wrongTitle")}</strong>
          <div>${t(state.lang, "moodDown")}</div>
          <div class="hint-path">${t(state.lang, "showPath")}<pre class="path-code">${escapeHtml(pathText)}</pre></div>
        </div>`;
    }
  }

  let answerArea = "";
  if (step.type === "write") {
    answerArea = `
      <label class="write-label" for="writeInput">${t(state.lang, "writeLabel")}</label>
      <textarea id="writeInput" class="write-input" rows="5" spellcheck="false" placeholder="${escapeAttr(step.placeholder || "")}" ${feedback?.ok ? "readonly" : ""}>${escapeHtml(writtenAnswer)}</textarea>
    `;
  } else {
    const options = step.options[state.lang] || step.options.en;
    answerArea = `
      <div class="options">
        ${options
          .map((opt, i) => {
            let cls = "option";
            if (feedback && selectedOption === i) cls += feedback.ok ? " correct" : " wrong";
            if (feedback && feedback.ok && i === step.answer) cls += " correct";
            return `<button class="${cls}" data-action="pick" data-index="${i}" ${feedback?.ok ? "disabled" : ""}>${escapeHtml(opt)}</button>`;
          })
          .join("")}
      </div>
    `;
  }

  const canCheck =
    !feedback &&
    (step.type === "write" ? writtenAnswer.trim().length > 0 : selectedOption !== null);

  const nextLabel =
    stepIndex >= total - 1 ? t(state.lang, "finishLesson") : t(state.lang, "nextStep");

  const noteText = step.note ? step.note[state.lang] || step.note.en : "";
  const noteCard = noteText
    ? `
      <div class="note-card">
        <span class="note-title">${t(state.lang, "noteTitle")}</span>
        <p class="note-text">${escapeHtml(noteText)}</p>
      </div>`
    : "";

  return `
    <section class="screen panel quiz" style="margin-top:0.75rem">
      <div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;align-items:center">
        <h2 style="margin:0">${lesson.title[state.lang]}</h2>
        <div style="display:flex;gap:0.4rem">
          <span class="badge">${typeBadge}</span>
          <span class="badge">${t(state.lang, "stepOf", { current: stepIndex + 1, total })}</span>
        </div>
      </div>
      ${noteCard}
      ${speechBubble(speechText)}
      ${step.code ? `<pre class="code-box">${escapeHtml(step.code)}</pre>` : ""}
      ${answerArea}
      ${feedback?.ok ? "" : aiPanel}
      ${feedbackHtml}
      <div class="cta-row">
        <button class="btn btn-ghost" data-action="home">${t(state.lang, "backHome")}</button>
        ${
          feedback?.ok
            ? `<button class="btn btn-primary" data-action="advance">${nextLabel}</button>`
            : canCheck
              ? `<button class="btn btn-primary" data-action="check">${t(state.lang, "check")}</button>`
              : feedback && !feedback.ok
                ? `<button class="btn btn-secondary" data-action="retry">${t(state.lang, "continue")}</button>`
                : ""
        }
      </div>
    </section>
  `;
}

function renderComplete() {
  const lesson = currentLesson();
  const xp = lastXpGain || lesson?.xp || 0;
  return `
    <section class="screen panel" style="max-width:560px;margin:1rem auto 0">
      <h2>${t(state.lang, "correctTitle")}</h2>
      ${speechBubble(t(state.lang, "lessonComplete", { xp }))}
      <div class="xp-banner">
        <span class="xp-banner-gain">${t(state.lang, "xpGain", { xp })}</span>
        <span class="xp-banner-total">${t(state.lang, "xpTotal", { xp: state.xp })}</span>
      </div>
      <div class="cta-row">
        <button class="btn btn-primary" data-action="home">${t(state.lang, "backHome")}</button>
      </div>
    </section>
  `;
}

function mountProfileChrome() {
  const panel = document.getElementById("profilePanel");
  const backdrop = document.querySelector(".profile-backdrop");
  if (!panel) return;
  const mobile = window.matchMedia("(max-width: 900px)").matches;
  if (!mobile) return;
  // Keep fixed drawer on <body> so page scroll can't drag it away
  if (backdrop && backdrop.parentElement !== document.body) document.body.appendChild(backdrop);
  if (panel.parentElement !== document.body) document.body.appendChild(panel);
}

function unmountProfileChrome() {
  document.getElementById("profilePanel")?.remove();
  document.querySelectorAll(".profile-backdrop").forEach((el) => el.remove());
}

let scrollFxBound = false;
let scrollFxEnabled = false;

function updateScrollFx() {
  scrollFxBound = false;
  if (!scrollFxEnabled || view !== "home") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const y = window.scrollY || 0;
  const glow = document.querySelector(".bg-glow");
  const grid = document.querySelector(".bg-grid");
  if (glow) glow.style.transform = `translate3d(0, ${y * 0.22}px, 0) scale(1.05)`;
  if (grid) grid.style.transform = `translate3d(0, ${y * 0.1}px, 0)`;

  const vh = window.innerHeight || 1;
  const focus = vh * 0.42;
  document.querySelectorAll(".lesson-item.scroll-fx").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.bottom < -80 || rect.top > vh + 80) {
      el.style.setProperty("--sy", "0");
      el.style.setProperty("--sd", "1");
      return;
    }
    const mid = rect.top + rect.height / 2;
    const t = (mid - focus) / vh;
    const d = Math.min(1, Math.abs(t) * 1.35);
    el.style.setProperty("--sy", t.toFixed(3));
    el.style.setProperty("--sd", d.toFixed(3));
  });
}

function onScrollFx() {
  if (scrollFxBound) return;
  scrollFxBound = true;
  requestAnimationFrame(updateScrollFx);
}

function setupScrollFx() {
  scrollFxEnabled = view === "home";
  window.removeEventListener("scroll", onScrollFx);
  window.removeEventListener("resize", onScrollFx);
  if (!scrollFxEnabled) return;
  window.addEventListener("scroll", onScrollFx, { passive: true });
  window.addEventListener("resize", onScrollFx, { passive: true });
  updateScrollFx();
}

function render() {
  refreshStats();
  if (view === "landing") app.innerHTML = renderLanding();
  else if (view === "onboarding") app.innerHTML = renderOnboarding();
  else if (view === "teach") app.innerHTML = renderTeach();
  else if (view === "lesson") app.innerHTML = renderLesson();
  else if (view === "complete") app.innerHTML = renderComplete();
  else {
    app.innerHTML = renderHome();
    mountProfileChrome();
    setProfileOpen(profileOpen);
    setupScrollFx();
    requestAnimationFrame(() => {
      document.getElementById("current-lesson")?.scrollIntoView({ behavior: "smooth", block: "center" });
      updateScrollFx();
    });
  }

  if (view !== "home") {
    unmountProfileChrome();
    setProfileOpen(false);
    scrollFxEnabled = false;
  }

  const writeEl = document.getElementById("writeInput");
  if (writeEl) {
    writeEl.addEventListener("input", () => {
      writtenAnswer = writeEl.value;
      // show check button without full remount of textarea cursor — light re-render of CTAs only would be nicer; keep simple:
      const row = app.querySelector(".cta-row");
      if (!row || feedback) return;
      const has = writtenAnswer.trim().length > 0;
      const checkBtn = row.querySelector('[data-action="check"]');
      if (has && !checkBtn) {
        const btn = document.createElement("button");
        btn.className = "btn btn-primary";
        btn.dataset.action = "check";
        btn.textContent = t(state.lang, "check");
        row.appendChild(btn);
      } else if (!has && checkBtn) {
        checkBtn.remove();
      }
    });
  }
}

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(str) {
  return escapeHtml(str).replaceAll("'", "&#39;");
}

function resetStepState() {
  selectedOption = null;
  writtenAnswer = "";
  feedback = null;
  tipCount = 0;
}

function awardStepXp(lessonId, stepIdx) {
  const key = `${lessonId}:${stepIdx}`;
  if (!state.earnedSteps.includes(key)) {
    state.earnedSteps.push(key);
    state.xp += STEP_XP;
    return STEP_XP;
  }
  return 0;
}

function finishLessonRewards() {
  const lesson = currentLesson();
  if (!lesson) return;
  lastXpGain = 0;
  if (!state.completed.includes(lesson.id)) {
    state.completed.push(lesson.id);
    state.xp += lesson.xp;
    lastXpGain = lesson.xp;
  }
  state.mood = Math.min(100, state.mood + 12);
  setMood("cheer");
  persist();
  view = "complete";
  render();
  setTimeout(() => {
    if (mascotMood === "cheer") {
      setMood("happy");
      if (view === "complete") render();
    }
  }, 2200);
}

document.addEventListener("pointerup", (e) => {
  const btn = e.target.closest("[data-action='close-profile']");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  setProfileOpen(false);
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  // brand-mark uses data-go, not data-action — fine
  const action = btn.dataset.action;

  if (action === "start" || action === "edit-profile") {
    setProfileOpen(false);
    view = "onboarding";
    setMood("happy");
    render();
  } else if (action === "toggle-profile") {
    if (Date.now() < profileCloseGuardUntil) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (view !== "home") {
      stopSpeech();
      voiceSpeaking = false;
      view = "home";
      setProfileOpen(true);
      setMood(state.mood < 45 ? "sad" : "happy");
      render();
    } else {
      setProfileOpen(!profileOpen);
    }
  } else if (action === "close-profile") {
    e.preventDefault();
    e.stopPropagation();
    setProfileOpen(false);
  } else if (action === "home") {
    stopSpeech();
    voiceSpeaking = false;
    view = "home";
    lessonId = null;
    setMood(state.mood < 45 ? "sad" : "happy");
    render();
  } else if (action === "open-lesson") {
    const id = btn.dataset.id;
    if (!isUnlocked(id)) return;
    stopSpeech();
    voiceSpeaking = false;
    teachRevealed = false;
    lessonId = id;
    stepIndex = 0;
    resetStepState();
    setMood("happy");
    view = "teach";
    render();
  } else if (action === "teach-reveal") {
    teachRevealed = true;
    setMood("happy");
    render();
  } else if (action === "teach-listen") {
    startTeachVoice();
  } else if (action === "teach-stop") {
    stopSpeech();
    voiceSpeaking = false;
    render();
  } else if (action === "teach-practice") {
    stopSpeech();
    voiceSpeaking = false;
    teachRevealed = false;
    stepIndex = 0;
    resetStepState();
    setMood("happy");
    view = "lesson";
    render();
  } else if (action === "pick") {
    if (feedback?.ok) return;
    selectedOption = Number(btn.dataset.index);
    feedback = null;
    render();
  } else if (action === "check") {
    const step = currentLesson().steps[stepIndex];
    if (step.type === "write") {
      const el = document.getElementById("writeInput");
      if (el) writtenAnswer = el.value;
    }
    const ok = gradeStep(step, { selectedOption, written: writtenAnswer });
    feedback = { ok };
    if (ok) {
      lastXpGain = awardStepXp(lessonId, stepIndex);
      state.mood = Math.min(100, state.mood + 6);
      setMood("cheer");
      persist();
      render();
      setTimeout(() => {
        if (mascotMood === "cheer" && feedback?.ok) {
          setMood("happy");
          render();
        }
      }, 2200);
      return;
    }
    state.mood = Math.max(20, state.mood - 15);
    setMood("sad");
    persist();
    render();
  } else if (action === "ai-tip") {
    const step = currentLesson()?.steps[stepIndex];
    if (!step || feedback?.ok) return;
    const tips = getTips(step, state.lang);
    if (tipCount < tips.length) tipCount += 1;
    render();
  } else if (action === "retry") {
    resetStepState();
    setMood(state.mood < 45 ? "sad" : "happy");
    render();
  } else if (action === "advance") {
    const lesson = currentLesson();
    if (stepIndex >= lesson.steps.length - 1) {
      finishLessonRewards();
    } else {
      stepIndex += 1;
      resetStepState();
      setMood("happy");
      render();
    }
  }
});

app.addEventListener("submit", async (e) => {
  if (e.target.id !== "onboardForm") return;
  e.preventDefault();
  const fd = new FormData(e.target);
  state.name = String(fd.get("name") || "").trim();
  state.age = String(fd.get("age") || "").trim();
  state.reason = String(fd.get("reason") || "").trim();
  state.notifyTime = String(fd.get("notifyTime") || "18:00");
  const avatar = String(fd.get("avatar") || state.avatar || "fox");
  state.avatar = isValidAvatar(avatar) ? avatar : "fox";
  if (!state.name || !state.age || !state.reason || !state.notifyTime) return;

  const allowed = await askNotifyPermission();
  state.notifyEnabled = allowed;
  state.profileVersion = PROFILE_VERSION;
  state.onboarded = true;
  state.mood = 100;
  persist();
  setMood("cheer");
  view = "home";
  render();
});

function applyAvatarSelection(input) {
  if (!(input instanceof HTMLInputElement)) return;
  if (input.name !== "profileAvatar" && input.name !== "avatar") return;
  if (!isValidAvatar(input.value)) return;

  state.avatar = input.value;
  persist();

  const root = input.closest(".avatar-grid") || document;
  root.querySelectorAll(".avatar-option").forEach((el) => {
    const on = el.getAttribute("data-avatar-id") === state.avatar;
    el.classList.toggle("selected", on);
    const radio = el.querySelector('input[type="radio"]');
    if (radio instanceof HTMLInputElement) radio.checked = on;
  });

  const preview = document.getElementById("profileAvatarPreview");
  if (preview) preview.innerHTML = avatarSvg(state.avatar, 88);

  const label = document.getElementById("profileAvatarLabel");
  if (label) label.textContent = avatarLabel(state.avatar, state.lang);

  if (profileBtn && !profileBtn.hidden) {
    profileBtn.innerHTML = `${avatarSvg(state.avatar, 22)}<span id="profileBtnLabel">${t(state.lang, "profileTitle")}</span>`;
  }
}

document.addEventListener("change", (e) => {
  applyAvatarSelection(e.target);
});

langSelect.addEventListener("change", () => {
  stopSpeech();
  voiceSpeaking = false;
  state.lang = langSelect.value;
  document.documentElement.lang = state.lang;
  persist();
  render();
});

document.querySelector(".brand-mark")?.addEventListener("click", () => {
  view = state.onboarded ? "home" : "landing";
  setMood(state.mood < 45 ? "sad" : "happy");
  render();
});

startNotifyLoop(() => state, (s) => {
  state = s;
  saveState(state);
});

refreshStats();
render();
