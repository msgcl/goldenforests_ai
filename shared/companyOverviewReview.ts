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
function applyPageRevisions(input: unknown): unknown {
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

/** Update the homepage wording while preserving unrelated CMS content. */
export function applyCompanyOverviewReview(input: unknown): unknown {
  const reviewed = applyPageRevisions(input);
  if (!reviewed || typeof reviewed !== "object" || Array.isArray(reviewed)) return reviewed;
  const copy = reviewed as Record<string, any>;
  if (Array.isArray(copy.home?.heroParagraphs)) {
    copy.home.heroParagraphs = copy.home.heroParagraphs.map((text: string) =>
      text.replace("and the final documents", "and definitive agreements"),
    );
  }
  if (copy.home?.narrativeEyebrow === "From Land to Intelligence") {
    copy.home.narrativeEyebrow = "Rooted in Intelligence";
  }
  if (Array.isArray(copy.home?.pillarDescriptions)) {
    copy.home.pillarDescriptions = copy.home.pillarDescriptions.map((text: string) =>
      text.replace("Tailored partnerships can combine these capabilities with Golden Forests\u2019 agroforestry intelligence and operating platform.", "").trim(),
    );
  }
  if (copy.investment?.regionalTitle === "Direct Plantation Ownership") {
    copy.investment.regionalTitle = "Thai Agarwood Plantation Platform";
  }
  const plantation = copy.plantation;
  if (plantation) {
    plantation.riskDescriptions = plantation.riskDescriptions.map((text: string, index: number) => {
      const title = plantation.riskTitles[index];
      if (title === "Production Variability") return "Production planning must allow for variable fruiting and crop losses. Planning assumptions reflect only 80% of mango trees fruiting and do not guarantee a particular harvest.";
      if (title === "Replacement Planting") return "During each plantation cycle, an additional 20% volume of trees are planted to provide a replacement buffer for mortalities that may occur during the full life cycle of the tree. It does not eliminate biological loss due to Force Majeure.";
      if (title === "Site Exposure") return text.replace(/across Zambales(?= reduce)/, "across Zambales Province and Negros Island");
      return text;
    });
    plantation.environmentalSectionDescription = plantation.environmentalSectionDescription.replace("These are intentions and projected outcomes requiring baseline evidence, field records and appropriate measurement and verification.", "").trim();
    plantation.environmentalItems = plantation.environmentalItems.map((text: string) => text.replace(/^Planned (?=1:1)/, ""));
    plantation.transparencySectionTitle = "Investor Transparency";
    plantation.transparencyPrimaryCtaHref = "https://goldenforests.ph/";
    plantation.overviewPortalCtaHref = "https://goldenforests.ph/";
    const negrosParagraph = "Negros Island is highly suitable for agarwood plantations due to its fertile volcanic soils, favorable drainage, ample agricultural land, and established farming infrastructure. Its strategic location and sustainable cultivation practices further support resilient, scalable plantation development.";
    plantation.overviewParagraphs = plantation.overviewParagraphs.map((text: string) => text.replace(/^Across the province/, "Across Zambales and Negros").replace(/^Every plantation/, "Across Zambales and Negros, every plantation"));
    if (!plantation.overviewParagraphs.includes(negrosParagraph)) plantation.overviewParagraphs.splice(1, 0, negrosParagraph);
  }
  const services = copy.clientServices;
  if (services) {
    services.header.title = services.header.title.replace("Client Services", "Investor Services");
    services.serviceDescriptions = services.serviceDescriptions.map((text: string) => text.replace(/For a fund route, request a separate introduction to an independent licensed manager\. That manager provides any fund offering and approved materials\./, "For a regulated fund opportunity, request a separate introduction with an independent licensed fund manager or private placement intermediary."));
    services.itineraryDescription = services.itineraryDescription.replace("extended travel from Clark.", "extended travel from Clark or Manila Airports.");
  }
  if (copy.ecotourism?.header) {
    copy.ecotourism.header.description = "A two-day hosted plantation visit programme in Zambales province or Negros Island, Philippines.";
  }
  if (copy.home) {
    copy.home.credibilityTitle = "Science at the heart of every cultivation decision.";
    copy.home.investmentSectionTitle = "The Premium Dual-Crop Strategy";
  }
  if (copy.investment) copy.investment.mangoTitle = "Sweet Elena Mango";
  return copy;
}
