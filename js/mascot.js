/** Cute chubby Pyro with a soft student hat. */
export function mascotSvg(mood = "happy") {
  const isSad = mood === "sad";
  const isCheer = mood === "cheer";

  const eyes = isCheer
    ? `<path d="M50 78 Q60 90 70 78" fill="none" stroke="#2a1810" stroke-width="4.2" stroke-linecap="round"/>
       <path d="M90 78 Q100 90 110 78" fill="none" stroke="#2a1810" stroke-width="4.2" stroke-linecap="round"/>`
    : isSad
      ? `<ellipse cx="58" cy="82" rx="11" ry="12" fill="#fff"/>
         <ellipse cx="102" cy="82" rx="11" ry="12" fill="#fff"/>
         <circle cx="58" cy="85" r="4.5" fill="#2a1810"/>
         <circle cx="102" cy="85" r="4.5" fill="#2a1810"/>
         <path d="M48 70 Q58 66 68 70" fill="none" stroke="#2a1810" stroke-width="2.6" stroke-linecap="round" opacity="0.4"/>
         <path d="M92 70 Q102 66 112 70" fill="none" stroke="#2a1810" stroke-width="2.6" stroke-linecap="round" opacity="0.4"/>
         <path d="M54 94 L49 101" stroke="#8ecbff" stroke-width="2.8" stroke-linecap="round"/>
         <path d="M106 94 L111 101" stroke="#8ecbff" stroke-width="2.8" stroke-linecap="round"/>`
      : `<ellipse cx="58" cy="80" rx="12" ry="13" fill="#fff"/>
         <ellipse cx="102" cy="80" rx="12" ry="13" fill="#fff"/>
         <circle cx="61" cy="82" r="5.4" fill="#2a1810"/>
         <circle cx="105" cy="82" r="5.4" fill="#2a1810"/>
         <circle cx="63.2" cy="79" r="2" fill="#fff"/>
         <circle cx="107.2" cy="79" r="2" fill="#fff"/>
         <path d="M46 68 Q58 61 70 68" fill="none" stroke="#2a1810" stroke-width="3" stroke-linecap="round"/>
         <path d="M90 68 Q102 61 114 68" fill="none" stroke="#2a1810" stroke-width="3" stroke-linecap="round"/>`;

  const mouth = isSad
    ? `<path d="M62 112 Q80 102 98 112" fill="none" stroke="#3a1600" stroke-width="4.2" stroke-linecap="round"/>`
    : isCheer
      ? `<path d="M56 104 Q80 128 104 104" fill="#ff6b7a" stroke="#3a1600" stroke-width="3" stroke-linecap="round"/>
         <ellipse cx="80" cy="114" rx="9" ry="5.5" fill="#ff9aa5"/>`
      : `<path d="M58 106 Q80 122 102 106" fill="none" stroke="#3a1600" stroke-width="4.2" stroke-linecap="round"/>
         <circle cx="80" cy="109" r="2.4" fill="#ff8f9a" opacity="0.75"/>`;

  const blush = isSad ? "0.14" : "0.55";

  const extras = isCheer
    ? `<g class="cheer-bits">
         <circle cx="20" cy="52" r="4" fill="#ffd166"/>
         <circle cx="140" cy="56" r="3.5" fill="#ff8a3d"/>
         <circle cx="26" cy="96" r="3" fill="#4ecdc4"/>
         <circle cx="134" cy="100" r="3.2" fill="#ff6b6b"/>
         <path d="M22 68 L24 74 L30 74 L25 78 L27 84 L22 80 L17 84 L19 78 L14 74 L20 74 Z" fill="#ffd166"/>
         <path d="M138 78 L140 82 L144 82 L141 85 L142 89 L138 86 L134 89 L135 85 L132 82 L136 82 Z" fill="#fff3c4"/>
       </g>`
    : "";

  return `
  <svg class="mascot mood-${mood}" viewBox="0 0 160 170" role="img" aria-label="Pyro">
    <defs>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffd08a"/>
        <stop offset="40%" stop-color="#ffb05c"/>
        <stop offset="100%" stop-color="#ff7a45"/>
      </linearGradient>
      <linearGradient id="bellyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fff6d8"/>
        <stop offset="100%" stop-color="#ffe2a0"/>
      </linearGradient>
      <linearGradient id="hatGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2ec4a6"/>
        <stop offset="100%" stop-color="#148f78"/>
      </linearGradient>
      <linearGradient id="hatBand" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="100%" stop-color="#ff9f1c"/>
      </linearGradient>
      <radialGradient id="cheek" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ff8fa0" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#ff8fa0" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <ellipse cx="80" cy="156" rx="44" ry="8" fill="rgba(0,0,0,0.15)"/>
    ${extras}

    <!-- chubby body -->
    <path d="M34 108 C28 68, 46 30, 80 26 C114 30, 132 68, 126 108 C120 140, 40 140, 34 108 Z" fill="url(#bodyGrad)"/>
    <ellipse cx="80" cy="112" rx="34" ry="38" fill="url(#bellyGrad)"/>
    <circle cx="52" cy="64" r="7" fill="#ffe4b0" opacity="0.55"/>
    <circle cx="110" cy="70" r="5.5" fill="#ffe4b0" opacity="0.45"/>

    <!-- tiny arms -->
    <ellipse cx="32" cy="104" rx="11" ry="8" fill="#ffb05c" transform="rotate(-20 32 104)"/>
    <ellipse cx="128" cy="104" rx="11" ry="8" fill="#ffb05c" transform="rotate(20 128 104)"/>

    ${eyes}
    <ellipse cx="44" cy="96" rx="11" ry="8" fill="url(#cheek)" opacity="${blush}"/>
    <ellipse cx="116" cy="96" rx="11" ry="8" fill="url(#cheek)" opacity="${blush}"/>
    <ellipse cx="80" cy="94" rx="3.4" ry="2.6" fill="#e86a3a" opacity="0.9"/>
    ${mouth}

    <!-- soft student hat -->
    <ellipse cx="80" cy="34" rx="46" ry="10" fill="#148f78"/>
    <path d="M42 34 Q42 8 80 4 Q118 8 118 34 Z" fill="#1db89a"/>
    <path d="M42 34 Q42 8 80 4 Q118 8 118 34 Z" fill="url(#hatGrad)"/>
    <rect x="40" y="30" width="80" height="10" rx="5" fill="url(#hatBand)"/>
    <!-- cute badge on hat -->
    <circle cx="80" cy="35" r="7.5" fill="#fff6d0"/>
    <circle cx="80" cy="35" r="3.2" fill="#148f78"/>
    <circle cx="80" cy="35" r="1.4" fill="#ffd166"/>
    <!-- pompom -->
    <circle cx="80" cy="2" r="9" fill="#ffd166"/>
    <circle cx="77" cy="-1" r="2.2" fill="#fff6d0" opacity="0.8"/>

    <ellipse cx="70" cy="104" rx="9" ry="13" fill="#fff" opacity="0.16"/>
  </svg>`;
}
