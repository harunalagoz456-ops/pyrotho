/** Normalize and grade student answers. */

export function normalizeCode(input) {
  return String(input ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .split("\n")
    .map((line) => line.replace(/\t/g, "    ").replace(/[ \t]+$/g, ""))
    .join("\n")
    .trim();
}

export function answersMatch(user, accepted) {
  const u = normalizeCode(user);
  const list = Array.isArray(accepted) ? accepted : [accepted];
  return list.some((a) => normalizeCode(a) === u);
}

export function gradeStep(step, { selectedOption, written }) {
  if (step.type === "write") {
    return answersMatch(written, step.accept);
  }
  return selectedOption === step.answer;
}
