/** Progressive AI tips — nudge → idea → stronger hint (not full spoil unless last). */

export function getTips(step, lang) {
  const pack = step.tips?.[lang] || step.tips?.en;
  if (Array.isArray(pack) && pack.length) return pack;

  // fallback if a step forgot tips
  const path = step.path?.[lang] || step.path?.en || "";
  return [
    "Think about what Python expects here — names, quotes, or symbols.",
    "Compare each option to common beginner mistakes (wrong keyword, missing quotes, wrong case).",
    path ? `Stronger hint: look toward → ${path.split("\n")[0]}` : "Try the simplest valid Python syntax.",
  ];
}
