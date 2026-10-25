import changes from "./companyOverviewReview.json";
import participationChanges from "./participationOverviewReview.json";
import presentationChanges from "./presentationReview.json";
import economicsChanges from "./revisedEconomicsReview.json";
import roundedChanges from "./roundedReturnsReview.json";
import confirmedChanges from "./confirmedReturnsReview.json";
import lawyerAlignmentChanges from "./lawyerAlignmentReview.json";

/** Apply Mark's November overview once, preserving subsequent CMS edits. */
function applyPreviousCompanyOverviewReview(input: unknown): unknown {
  if (!input || typeof input !== "object" || Array.isArray(input)) return input;
  const copy = structuredClone(input) as Record<string, any>;
  if (copy._meta?.companyOverviewReview === "2026-10-25-fund-participation") return copy;
  if (copy._meta?.companyOverviewReview === "2026-11-lawyer-alignment") {
    for (const field of ["pillarTitles", "pillarTaglines", "pillarBullets"]) {
      const update = lawyerAlignmentChanges.find(change => change.section === "home" && change.field === field)!;
      const values = [...(copy.home[field] ?? update.value)];
      const indices = field === "pillarBullets" ? [3, 4, 5] : [1];
      for (const index of indices) values[index] = update.value[index];
      copy.home[field] = values;
    }
    copy._meta.companyOverviewReview = "2026-10-25-fund-participation";
    copy._meta.updatedAt = "2026-10-25T00:00:00.000Z";
    copy._meta.sections = { ...copy._meta.sections, home: { updatedAt: copy._meta.updatedAt } };
    return copy;
  }
  const priorChanges = copy._meta?.companyOverviewReview === "2026-11-presentation"
    ? []
    : copy._meta?.companyOverviewReview === "2026-11-participation"
    ? presentationChanges
    : copy._meta?.companyOverviewReview === "2026-11-overview"
      ? [...participationChanges, ...presentationChanges]
      : [...changes, ...participationChanges, ...presentationChanges];
  const previousChanges = copy._meta?.companyOverviewReview === "2026-11-rounded-returns"
    ? []
    : copy._meta?.companyOverviewReview === "2026-11-revised-economics"
    ? roundedChanges
    : [...priorChanges, ...economicsChanges, ...roundedChanges];
  const pendingChanges = copy._meta?.companyOverviewReview === "2026-11-confirmed-returns"
    ? lawyerAlignmentChanges
    : [...previousChanges, ...confirmedChanges, ...lawyerAlignmentChanges];
  const timestamp = "2026-10-23T00:00:00.000Z";
  const sections = { ...copy._meta?.sections };
  for (const { section, field, value } of pendingChanges) {
    copy[section] = { ...copy[section], [field]: structuredClone(value) };
    sections[section] = { updatedAt: timestamp };
  }
  copy._meta = {
    ...copy._meta,
    sections,
    updatedAt: timestamp,
    companyOverviewReview: "2026-10-25-fund-participation",
  };
  return copy;
}

/** Apply the requested crop, fund and navigation copy update once. */
export function applyCompanyOverviewReview(input: unknown): unknown {
  if (!input || typeof input !== "object" || Array.isArray(input)) return input;
  if ((input as any)._meta?.companyOverviewReview === "2026-10-25-page-revisions") {
    const copy = structuredClone(input) as Record<string, any>;
    if (copy.home?.pillarDescriptions?.[1] === "INVEST THROUGH INDEPENDENT LICENSED FUND MANAGERS") {
      copy.home.pillarDescriptions[1] = "Invest through independent licensed fund managers.";
    }
    return copy;
  }
  const copy = applyPreviousCompanyOverviewReview(input) as Record<string, any>;
  copy.home.pillarDescriptions[1] = "Invest through independent licensed fund managers.";
  copy.home.pillarBullets[4] = "Invest in biological assets in the Philippines";
  copy.home.pillarBullets[5] = "Review fund offering memorandum and subscription agreement";
  copy.investment.regionalTitle = "Direct Plantation Ownership";
  copy.investment.readinessCtaLabel = "Visit Philippine Operations Platform";
  copy.investment.scenarioIrrs[1] = "Approx. 20%";
  copy.investment.mangoIntroParagraphs = copy.investment.mangoIntroParagraphs.map((text: string) => text.replace(/The illustrative model assumes annual harvests from (?:Year 5 to 25|Years 5-25|Year 5); actual production and timing vary\./g, "The illustrative model assumes annual harvests from Years 5-15; actual production is from years 5-25"));
  const assumptions = [...copy.investment.scenarioAssumptions];
  assumptions.pop();
  assumptions.splice(1, 0, "The illustrative mango and combined models reflect only mango yields from Years 5–15. The actual mango production cycle extends consistently from Years 5–25.");
  copy.investment.scenarioAssumptions = assumptions;
  copy._meta = { ...copy._meta, companyOverviewReview: "2026-10-25-page-revisions" };
  return copy;
}
