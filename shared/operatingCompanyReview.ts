import changes from "./operatingCompanyReview.json";
import markCordChanges from "./markCordReview.json";

/** Apply the lawyer-priority editorial revision once to previously saved copy. */
export function applyOperatingCompanyReview(input: unknown): unknown {
  if (!input || typeof input !== "object" || Array.isArray(input)) return input;
  const copy = structuredClone(input) as Record<string, any>;
  if (copy._meta?.operatingCompanyReview === "2026-10-15-mark-cord") return copy;
  const pendingChanges = copy._meta?.operatingCompanyReview === "2026-10-15"
    ? markCordChanges
    : [...changes, ...markCordChanges];
  for (const { section, field, value } of pendingChanges) {
    copy[section] = { ...copy[section], [field]: structuredClone(value) };
  }
  const sections = { ...copy._meta?.sections };
  for (const { section } of pendingChanges) {
    sections[section] = { updatedAt: "2026-10-15T00:00:00.000Z" };
  }
  copy._meta = {
    ...copy._meta,
    sections,
    updatedAt: "2026-10-15T00:00:00.000Z",
    operatingCompanyReview: "2026-10-15-mark-cord",
  };
  return copy;
}
