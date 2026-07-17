/** Preset cartoon avatars — no real photos. */

export const AVATAR_IDS = ["fox", "panda", "cat", "owl", "robot", "bunny"];

const LABELS = {
  fox: { en: "Fox", es: "Zorro", fr: "Renard", tr: "Tilki" },
  panda: { en: "Panda", es: "Panda", fr: "Panda", tr: "Panda" },
  cat: { en: "Cat", es: "Gato", fr: "Chat", tr: "Kedi" },
  owl: { en: "Owl", es: "Búho", fr: "Hibou", tr: "Baykuş" },
  robot: { en: "Robot", es: "Robot", fr: "Robot", tr: "Robot" },
  bunny: { en: "Bunny", es: "Conejo", fr: "Lapin", tr: "Tavşan" },
};

let uidSeq = 0;

export function avatarLabel(id, lang) {
  return LABELS[id]?.[lang] || LABELS[id]?.en || id;
}

export function isValidAvatar(id) {
  return AVATAR_IDS.includes(id);
}

function defs(uid, kind) {
  const rings = {
    fox: ["#ffd28a", "#ff8f4a"],
    panda: ["#e8eef8", "#9aa8c7"],
    cat: ["#ffe2a8", "#f0a45a"],
    owl: ["#e8d2b0", "#9a7048"],
    robot: ["#b8ecff", "#3db4f5"],
    bunny: ["#ffd6e8", "#f48fb1"],
  };
  const [a, b] = rings[kind] || rings.fox;
  return `
    <defs>
      <radialGradient id="${uid}-bg" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
        <stop offset="55%" stop-color="${a}"/>
        <stop offset="100%" stop-color="${b}"/>
      </radialGradient>
      <linearGradient id="${uid}-shine" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fff" stop-opacity="0.55"/>
        <stop offset="45%" stop-color="#fff" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="${uid}-cheek" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ff8fa0" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#ff8fa0" stop-opacity="0"/>
      </radialGradient>
      <filter id="${uid}-soft" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.4" flood-color="#1a2e35" flood-opacity="0.18"/>
      </filter>
      <clipPath id="${uid}-clip"><circle cx="50" cy="50" r="48"/></clipPath>
    </defs>
  `;
}

function faceFox(uid) {
  return `
    <ellipse cx="22" cy="26" rx="15" ry="20" fill="#ff8a3d" transform="rotate(-30 22 26)"/>
    <ellipse cx="78" cy="26" rx="15" ry="20" fill="#ff8a3d" transform="rotate(30 78 26)"/>
    <ellipse cx="22" cy="28" rx="7" ry="10" fill="#ffd7a8" transform="rotate(-30 22 28)" opacity="0.85"/>
    <ellipse cx="78" cy="28" rx="7" ry="10" fill="#ffd7a8" transform="rotate(30 78 28)" opacity="0.85"/>
    <circle cx="50" cy="54" r="34" fill="#ffb05c"/>
    <ellipse cx="50" cy="62" rx="20" ry="16" fill="#fff0d4"/>
    <circle cx="37" cy="50" r="5.2" fill="#2a1810"/>
    <circle cx="63" cy="50" r="5.2" fill="#2a1810"/>
    <circle cx="38.6" cy="48.4" r="1.8" fill="#fff"/>
    <circle cx="64.6" cy="48.4" r="1.8" fill="#fff"/>
    <ellipse cx="50" cy="58" rx="5.5" ry="3.8" fill="#e86a3a"/>
    <path d="M42 67 Q50 74 58 67" fill="none" stroke="#3a1600" stroke-width="2.4" stroke-linecap="round"/>
    <circle cx="30" cy="60" r="7" fill="url(#${uid}-cheek)"/>
    <circle cx="70" cy="60" r="7" fill="url(#${uid}-cheek)"/>
  `;
}

function facePanda(uid) {
  return `
    <ellipse cx="18" cy="22" rx="13" ry="11" fill="#1f2430"/>
    <ellipse cx="82" cy="22" rx="13" ry="11" fill="#1f2430"/>
    <circle cx="50" cy="54" r="34" fill="#f7f9fc"/>
    <ellipse cx="28" cy="44" rx="13" ry="15" fill="#1f2430"/>
    <ellipse cx="72" cy="44" rx="13" ry="15" fill="#1f2430"/>
    <circle cx="34" cy="45" r="5.5" fill="#fff"/>
    <circle cx="66" cy="45" r="5.5" fill="#fff"/>
    <circle cx="35.2" cy="46.2" r="2.6" fill="#1f2430"/>
    <circle cx="67.2" cy="46.2" r="2.6" fill="#1f2430"/>
    <circle cx="36.4" cy="45" r="0.9" fill="#fff"/>
    <circle cx="68.4" cy="45" r="0.9" fill="#fff"/>
    <ellipse cx="50" cy="58" rx="9" ry="7" fill="#1f2430"/>
    <ellipse cx="50" cy="56.5" rx="4.5" ry="3.5" fill="#fff"/>
    <path d="M40 70 Q50 77 60 70" fill="none" stroke="#1f2430" stroke-width="2.3" stroke-linecap="round"/>
    <circle cx="32" cy="62" r="6" fill="url(#${uid}-cheek)"/>
    <circle cx="68" cy="62" r="6" fill="url(#${uid}-cheek)"/>
  `;
}

function faceCat(uid) {
  return `
    <path d="M16 44 L28 8 L44 40 Z" fill="#ffc878"/>
    <path d="M56 40 L72 8 L84 44 Z" fill="#ffc878"/>
    <path d="M22 38 L29 16 L38 36 Z" fill="#ff9aa5"/>
    <path d="M62 36 L71 16 L78 38 Z" fill="#ff9aa5"/>
    <circle cx="50" cy="56" r="32" fill="#ffd18a"/>
    <ellipse cx="38" cy="52" rx="4.8" ry="6" fill="#2a1810"/>
    <ellipse cx="62" cy="52" rx="4.8" ry="6" fill="#2a1810"/>
    <circle cx="39.4" cy="50.2" r="1.5" fill="#fff"/>
    <circle cx="63.4" cy="50.2" r="1.5" fill="#fff"/>
    <path d="M46 61 L50 66 L54 61" fill="none" stroke="#e86a3a" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M50 66 Q40 71 30 64" fill="none" stroke="#2a1810" stroke-width="1.3" opacity="0.35"/>
    <path d="M50 66 Q60 71 70 64" fill="none" stroke="#2a1810" stroke-width="1.3" opacity="0.35"/>
    <path d="M40 74 Q50 80 60 74" fill="none" stroke="#3a1600" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="30" cy="64" r="6.5" fill="url(#${uid}-cheek)"/>
    <circle cx="70" cy="64" r="6.5" fill="url(#${uid}-cheek)"/>
  `;
}

function faceOwl() {
  return `
    <ellipse cx="50" cy="18" rx="22" ry="11" fill="#8d6b4a"/>
    <circle cx="50" cy="54" r="33" fill="#c9a57a"/>
    <ellipse cx="50" cy="72" rx="18" ry="10" fill="#a67c52" opacity="0.55"/>
    <circle cx="34" cy="48" r="15" fill="#fff6e8"/>
    <circle cx="66" cy="48" r="15" fill="#fff6e8"/>
    <circle cx="34" cy="49" r="7.5" fill="#2a1810"/>
    <circle cx="66" cy="49" r="7.5" fill="#2a1810"/>
    <circle cx="36.2" cy="46.8" r="2.2" fill="#fff"/>
    <circle cx="68.2" cy="46.8" r="2.2" fill="#fff"/>
    <path d="M45 62 L50 72 L55 62 Z" fill="#ff9f1c"/>
    <path d="M36 80 Q50 88 64 80" fill="none" stroke="#5c4030" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="20" cy="68" rx="8" ry="13" fill="#a67c52" opacity="0.65"/>
    <ellipse cx="80" cy="68" rx="8" ry="13" fill="#a67c52" opacity="0.65"/>
  `;
}

function faceRobot(uid) {
  return `
    <rect x="46" y="10" width="8" height="16" rx="3" fill="#38bdf8"/>
    <circle cx="50" cy="10" r="5.5" fill="#fbbf24"/>
    <circle cx="50" cy="10" r="2.2" fill="#fff7cc"/>
    <rect x="16" y="28" width="68" height="52" rx="16" fill="#5ec8f8"/>
    <rect x="24" y="38" width="52" height="28" rx="10" fill="#e8f7ff"/>
    <circle cx="38" cy="52" r="6.5" fill="#0ea5e9"/>
    <circle cx="62" cy="52" r="6.5" fill="#0ea5e9"/>
    <circle cx="38" cy="52" r="2.6" fill="#fff"/>
    <circle cx="62" cy="52" r="2.6" fill="#fff"/>
    <rect x="38" y="70" width="24" height="6" rx="3" fill="#0284c7"/>
    <rect x="8" y="44" width="10" height="18" rx="4" fill="#38bdf8"/>
    <rect x="82" y="44" width="10" height="18" rx="4" fill="#38bdf8"/>
    <circle cx="28" cy="72" r="5" fill="url(#${uid}-cheek)"/>
    <circle cx="72" cy="72" r="5" fill="url(#${uid}-cheek)"/>
  `;
}

function faceBunny(uid) {
  return `
    <ellipse cx="33" cy="16" rx="11" ry="26" fill="#f7c0d6"/>
    <ellipse cx="67" cy="16" rx="11" ry="26" fill="#f7c0d6"/>
    <ellipse cx="33" cy="16" rx="4.5" ry="15" fill="#ff9aa5"/>
    <ellipse cx="67" cy="16" rx="4.5" ry="15" fill="#ff9aa5"/>
    <circle cx="50" cy="58" r="32" fill="#ffe4ec"/>
    <circle cx="37" cy="54" r="5.2" fill="#2a1810"/>
    <circle cx="63" cy="54" r="5.2" fill="#2a1810"/>
    <circle cx="38.6" cy="52.4" r="1.7" fill="#fff"/>
    <circle cx="64.6" cy="52.4" r="1.7" fill="#fff"/>
    <ellipse cx="50" cy="64" rx="5.5" ry="3.8" fill="#ff8fa0"/>
    <path d="M42 73 Q50 80 58 73" fill="none" stroke="#3a1600" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="30" cy="66" r="7" fill="url(#${uid}-cheek)"/>
    <circle cx="70" cy="66" r="7" fill="url(#${uid}-cheek)"/>
  `;
}

const FACES = {
  fox: faceFox,
  panda: facePanda,
  cat: faceCat,
  owl: () => faceOwl(),
  robot: faceRobot,
  bunny: faceBunny,
};

/** Polished circular cartoon face SVGs. */
export function avatarSvg(id, size = 96) {
  const kind = isValidAvatar(id) ? id : "fox";
  const uid = `av${++uidSeq}`;
  const faceFn = FACES[kind];
  const face = faceFn.length ? faceFn(uid) : faceFn();

  return `
    <svg class="avatar-svg" data-avatar="${kind}" width="${size}" height="${size}" viewBox="0 0 100 100" role="img" aria-hidden="true">
      ${defs(uid, kind)}
      <circle cx="50" cy="50" r="48" fill="url(#${uid}-bg)" filter="url(#${uid}-soft)"/>
      <g clip-path="url(#${uid}-clip)">
        ${face}
        <ellipse cx="32" cy="22" rx="22" ry="12" fill="url(#${uid}-shine)"/>
      </g>
      <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2"/>
      <circle cx="50" cy="50" r="48.5" fill="none" stroke="rgba(26,46,53,0.08)" stroke-width="1.5"/>
    </svg>
  `;
}

export function avatarPickerHtml(selectedId, lang, { name = "avatar", compact = false } = {}) {
  const current = isValidAvatar(selectedId) ? selectedId : "fox";
  const buttons = AVATAR_IDS.map((id) => {
    const selected = id === current ? "selected" : "";
    return `
      <label class="avatar-option ${selected}" data-avatar-id="${id}">
        <input type="radio" name="${name}" value="${id}" ${id === current ? "checked" : ""} />
        ${avatarSvg(id, compact ? 44 : 58)}
        <span class="avatar-name">${avatarLabel(id, lang)}</span>
      </label>
    `;
  }).join("");
  return `<div class="avatar-grid ${compact ? "compact" : ""}" role="radiogroup">${buttons}</div>`;
}
