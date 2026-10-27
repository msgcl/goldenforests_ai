/** Mark and Cord's October 27 wording, applied to default and saved content. */
export function applyOctober27Review(copy: Record<string, any>) {
  const home = copy.home;
  if (home) {
    if (Array.isArray(home.heroParagraphs)) home.heroParagraphs = home.heroParagraphs.map((text: string) => text.replace(
      /curated access to (?:sustainable plantation and agroforestry opportunities across Asia|sustainable plantations, large-scale reforestation and carbon offset projects, and agroforestry opportunities across Southeast Asia)/g,
      "curated access to large-scale sustainable forestry and nature-based investments, including reforestation, agroforestry, and carbon offset projects across Southeast Asia",
    ));
    if (["Rooted in Intelligence", "Rooted in Agroforestry Intelligence"].includes(home.narrativeEyebrow)) {
      home.narrativeEyebrow = "Agroforestry Intelligence";
    }
    if (Array.isArray(home.pillarDescriptions)) home.pillarDescriptions = home.pillarDescriptions.map((text: string, index: number) => index === 3
      ? text.replace("plantation businesses and related industry partners", "plantation businesses, impact funds and related industry partners")
      : text);
    if (Array.isArray(home.pillarBullets)) home.pillarBullets = home.pillarBullets.map((text: string, index: number) => index === 10
      ? "Partnering on large-scale reforestation and carbon offset projects."
      : text);
  }
  const investment = copy.investment;
  if (investment) {
    if (typeof investment.partnershipDescription === "string") investment.partnershipDescription = investment.partnershipDescription.replace(
      "plantation businesses and related industry partners", "plantation businesses, impact funds and related industry partners",
    );
    if (Array.isArray(investment.partnershipPoints)) investment.partnershipPoints = investment.partnershipPoints.map((text: string, index: number) => index === 1
      ? "Partnering on large-scale reforestation and carbon offset projects."
      : text);
    const projectedWording = (text: string) => text
      .replace(/\ban illustrative\b/g, "a projected")
      .replace(/\bIllustrative\b/g, "Projected")
      .replace(/\billustrative\b/g, "projected");
    for (const field of ["scenarioTitle", "scenarioIntro", "scenarioQualification", "scenarioCashNote"]) {
      if (typeof investment[field] === "string") investment[field] = projectedWording(investment[field]);
    }
    for (const field of ["scenarioDescriptions", "scenarioAssumptions"]) {
      if (Array.isArray(investment[field])) investment[field] = investment[field].map(projectedWording);
    }
  }
  const visit = copy.ecotourism;
  if (visit && /drone|surveillance/i.test(visit.featuredDestinationNames?.[2] ?? "")) {
    visit.featuredDestinationNames[2] = "Plantation Site Visit";
    visit.featuredDestinationDetails[2] = "Visit the plantation with our team to see field operations first hand and discuss plantation development and management.";
  }
  return copy;
}
