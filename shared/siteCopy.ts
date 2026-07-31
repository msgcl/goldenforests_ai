import { z } from "zod";

const nonEmptyString = z.string().min(1);
const nonEmptyStringArray = z.array(nonEmptyString).min(1);

const pageHeaderSchema = z.object({
  badge: nonEmptyString,
  title: nonEmptyString,
  description: nonEmptyString,
});

const legalPageCopySchema = z.object({
  title: nonEmptyString,
  subtitle: nonEmptyString,
  body: nonEmptyString,
});

export const brandFontOptionSchema = z.enum(["open-sans", "playfair-display"]);
const pageTypographySchema = z.record(brandFontOptionSchema);

const siteCopySectionMetaSchema = z.object({
  updatedAt: nonEmptyString,
});

const siteCopyMetaSchema = z.object({
  updatedAt: nonEmptyString,
  sections: z.object({
    contact: siteCopySectionMetaSchema,
    about: siteCopySectionMetaSchema,
    disclaimer: siteCopySectionMetaSchema,
    privacyPolicy: siteCopySectionMetaSchema,
    cookiePolicy: siteCopySectionMetaSchema,
    compliance: siteCopySectionMetaSchema,
    technology: siteCopySectionMetaSchema,
    impact: siteCopySectionMetaSchema,
    clientServices: siteCopySectionMetaSchema,
    mangoProgram: siteCopySectionMetaSchema,
    agarwoodLifeCycle: siteCopySectionMetaSchema,
    investment: siteCopySectionMetaSchema,
    ecotourism: siteCopySectionMetaSchema,
    home: siteCopySectionMetaSchema,
    nursery: siteCopySectionMetaSchema,
    plantation: siteCopySectionMetaSchema,
    management: siteCopySectionMetaSchema,
    photoGallery: siteCopySectionMetaSchema,
    videos: siteCopySectionMetaSchema,
    faq: siteCopySectionMetaSchema,
  }),
});

export const contactPageCopySchema = z.object({
  badge: nonEmptyString,
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  intro: nonEmptyString,
  formTitle: nonEmptyString,
  formDescription: nonEmptyString,
  firstNameLabel: nonEmptyString,
  lastNameLabel: nonEmptyString,
  emailLabel: nonEmptyString,
  messageLabel: nonEmptyString,
  submitLabel: nonEmptyString,
  submittingLabel: nonEmptyString,
  detailsTitle: nonEmptyString,
  detailsDescription: nonEmptyString,
  mobileLabel: nonEmptyString,
  emailInfoLabel: nonEmptyString,
  websiteLabel: nonEmptyString,
  salesOfficeLabel: nonEmptyString,
  managementOfficeLabel: nonEmptyString,
  firstNamePlaceholder: nonEmptyString,
  lastNamePlaceholder: nonEmptyString,
  emailPlaceholder: nonEmptyString,
  messagePlaceholder: nonEmptyString,
  successTitle: nonEmptyString,
  successDescription: nonEmptyString,
  errorTitle: nonEmptyString,
  errorDescription: nonEmptyString,
  phoneNumbers: nonEmptyStringArray,
  emailValue: nonEmptyString,
  emailHref: nonEmptyString,
  websiteValue: nonEmptyString,
  websiteHref: nonEmptyString,
  holdingCompanyLabel: nonEmptyString,
  holdingCompanyAddress: nonEmptyStringArray,
  salesOfficeTitle: nonEmptyString,
  salesOfficeCompany: nonEmptyString,
  salesOfficeAddress: nonEmptyStringArray,
  managementOfficeAddress: nonEmptyStringArray,
  resourcesTitle: nonEmptyString,
  resourceLabels: nonEmptyStringArray,
  resourceHrefs: nonEmptyStringArray,
});

export const aboutPageCopySchema = z.object({
  header: pageHeaderSchema,
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  overviewEyebrow: nonEmptyString,
  overviewTitle: nonEmptyString,
  overviewParagraphs: nonEmptyStringArray,
  uspSectionTitle: nonEmptyString,
  uspCardTitles: nonEmptyStringArray,
  uspCardDescriptions: nonEmptyStringArray,
  commitmentSectionTitle: nonEmptyString,
  commitmentColumnTitles: nonEmptyStringArray,
  commitmentItemTitles: z.array(nonEmptyStringArray).min(1),
  commitmentItemDescriptions: z.array(nonEmptyStringArray).min(1),
  visionTitle: nonEmptyString,
  visionDescription: nonEmptyString,
  missionTitle: nonEmptyString,
  missionDescription: nonEmptyString,
  leadershipSectionTitle: nonEmptyString,
  leadershipNames: nonEmptyStringArray,
  leadershipImageUrls: z.array(z.string()).min(1),
  leadershipTitles: nonEmptyStringArray,
  leadershipDescriptions: nonEmptyStringArray,
  boardSectionTitle: nonEmptyString,
  boardNames: nonEmptyStringArray,
  boardImageUrls: z.array(z.string()).min(1),
  boardTitles: nonEmptyStringArray,
  boardDescriptions: nonEmptyStringArray,
  highlightTitles: nonEmptyStringArray,
  highlightDescriptions: nonEmptyStringArray,
  differentiatorsEyebrow: nonEmptyString,
  differentiatorsTitle: nonEmptyString,
  differentiatorTitles: nonEmptyStringArray,
  differentiatorDescriptions: nonEmptyStringArray,
  investmentEyebrow: nonEmptyString,
  investmentTitle: nonEmptyString,
  productTitles: nonEmptyStringArray,
  productReturnProfiles: nonEmptyStringArray,
  productDescriptions: nonEmptyStringArray,
  productValues: nonEmptyStringArray,
  frameworkEyebrow: nonEmptyString,
  frameworkTitle: nonEmptyString,
  frameworkItems: nonEmptyStringArray,
});

export const compliancePageCopySchema = z.object({
  header: pageHeaderSchema,
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  highlightItems: nonEmptyStringArray,
  complianceTitles: nonEmptyStringArray,
  complianceDescriptions: nonEmptyStringArray,
  mandatesTitle: nonEmptyString,
  mandateTitles: nonEmptyStringArray,
  mandateDescriptions: nonEmptyStringArray,
});

export const technologyPageCopySchema = z.object({
  header: pageHeaderSchema,
  stackTitle: nonEmptyString,
  stackTitles: nonEmptyStringArray,
  stackDescriptions: nonEmptyStringArray,
  benefitsTitle: nonEmptyString,
  benefits: nonEmptyStringArray,
});

export const videosPageCopySchema = z.object({
  heroBadge: nonEmptyString,
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  featuredVideoEyebrow: nonEmptyString,
  featuredVideoTitle: nonEmptyString,
  featuredVideoDescription: nonEmptyString,
  featuredVideoRuntime: nonEmptyString,
  cinematicVideoEyebrow: nonEmptyString,
  cinematicVideoTitle: nonEmptyString,
  cinematicVideoDescription: nonEmptyString,
  cinematicVideoRuntime: nonEmptyString,
});

export const impactPageCopySchema = z.object({
  header: pageHeaderSchema,
  cardTitles: nonEmptyStringArray,
  cardDescriptions: nonEmptyStringArray,
  standardsTitle: nonEmptyString,
  standardsDescription: nonEmptyString,
});

export const clientServicesPageCopySchema = z.object({
  header: pageHeaderSchema,
  serviceTitles: nonEmptyStringArray,
  serviceDescriptions: nonEmptyStringArray,
  serviceBullets: z.array(nonEmptyStringArray).min(1),
  visitationTitle: nonEmptyString,
  visitationDescription: nonEmptyString,
  logisticsTitle: nonEmptyString,
  logisticsDescription: nonEmptyString,
  itineraryTitle: nonEmptyString,
  itineraryDescription: nonEmptyString,
});

export const mangoProgramPageCopySchema = z.object({
  header: pageHeaderSchema,
  overviewTitle: nonEmptyString,
  overviewPoints: nonEmptyStringArray,
  insuranceTitle: nonEmptyString,
  insuranceDescription: nonEmptyString,
  insurancePoints: nonEmptyStringArray,
  benefitsTitle: nonEmptyString,
  benefitsPoints: nonEmptyStringArray,
  snapshotTitle: nonEmptyString,
  snapshotLabels: nonEmptyStringArray,
  snapshotValues: nonEmptyStringArray,
  snapshotFootnote: nonEmptyString,
});

export const agarwoodLifeCyclePageCopySchema = z.object({
  header: pageHeaderSchema,
  overviewTitle: nonEmptyString,
  overviewPoints: nonEmptyStringArray,
  commercialTitle: nonEmptyString,
  commercialPoints: nonEmptyStringArray,
  insuranceTitle: nonEmptyString,
  insuranceDescription: nonEmptyString,
  insurancePoints: nonEmptyStringArray,
  stageTitles: nonEmptyStringArray,
  stagePeriods: nonEmptyStringArray,
  stageDetails: nonEmptyStringArray,
});

export const investmentPageCopySchema = z.object({
  header: pageHeaderSchema,
  agarwoodEyebrow: nonEmptyString,
  agarwoodTitle: nonEmptyString,
  agarwoodIntroParagraphs: nonEmptyStringArray,
  agarwoodMarketTitle: nonEmptyString,
  agarwoodMarketDescription: nonEmptyString,
  agarwoodReturnsTitle: nonEmptyString,
  agarwoodReturnsDescription: nonEmptyString,
  agarwoodStrengthsTitle: nonEmptyString,
  agarwoodStrengths: nonEmptyStringArray,
  agarwoodLearnMoreLabel: nonEmptyString,
  agarwoodLearnMoreHref: nonEmptyString,
  agarwoodDownloadLabel: nonEmptyString,
  agarwoodDownloadHref: nonEmptyString,
  agarwoodContactLabel: nonEmptyString,
  mangoEyebrow: nonEmptyString,
  mangoTitle: nonEmptyString,
  mangoIntroParagraphs: nonEmptyStringArray,
  mangoMarketTitle: nonEmptyString,
  mangoMarketDescription: nonEmptyString,
  mangoReturnsTitle: nonEmptyString,
  mangoReturnsDescription: nonEmptyString,
  mangoStrengthsTitle: nonEmptyString,
  mangoStrengths: nonEmptyStringArray,
  mangoLearnMoreLabel: nonEmptyString,
  mangoLearnMoreHref: nonEmptyString,
  mangoDownloadLabel: nonEmptyString,
  mangoDownloadHref: nonEmptyString,
  mangoContactLabel: nonEmptyString,
  portfolioEyebrow: nonEmptyString,
  portfolioTitle: nonEmptyString,
  portfolioDescription: nonEmptyString,
  portfolioBenefits: nonEmptyStringArray,
  portfolioDownloadLabel: nonEmptyString,
  portfolioDownloadHref: nonEmptyString,
  portfolioContactLabel: nonEmptyString,
  faqTitle: nonEmptyString,
  faqDescription: nonEmptyString,
  faqQuestions: nonEmptyStringArray,
  faqAnswers: nonEmptyStringArray,
  faqDocumentLabel: nonEmptyString,
  faqDocumentHref: nonEmptyString,
});

export const ecotourismPageCopySchema = z.object({
  header: pageHeaderSchema,
  introParagraphs: nonEmptyStringArray,
  ctaLabel: nonEmptyString,
  featuredVideoEyebrow: nonEmptyString,
  featuredVideoTitle: nonEmptyString,
  featuredVideoDescription: nonEmptyString,
  guideTitle: nonEmptyString,
  guideItems: nonEmptyStringArray,
  flightsTitle: nonEmptyString,
  flightItems: nonEmptyStringArray,
  routeTitle: nonEmptyString,
  routeSteps: nonEmptyStringArray,
  contextTitle: nonEmptyString,
  contextItems: nonEmptyStringArray,
  galleryTitle: nonEmptyString,
  featuredDestinationNames: nonEmptyStringArray,
  featuredDestinationDetails: nonEmptyStringArray,
  featuredDestinationImages: nonEmptyStringArray,
});

export const homePageCopySchema = z.object({
  heroBadge: nonEmptyString,
  heroTitle: nonEmptyString,
  heroParagraphs: nonEmptyStringArray,
  primaryCtaLabel: nonEmptyString,
  secondaryCtaLabel: nonEmptyString,
  narrativeEyebrow: nonEmptyString,
  narrativeParagraphs: nonEmptyStringArray,
  pillarTitles: nonEmptyStringArray,
  pillarTaglines: nonEmptyStringArray,
  pillarDescriptions: nonEmptyStringArray,
  pillarBullets: nonEmptyStringArray,
  differentiationEyebrow: nonEmptyString,
  differentiationTitle: nonEmptyString,
  differentiatorTitles: nonEmptyStringArray,
  differentiatorDescriptions: nonEmptyStringArray,
  investmentSectionEyebrow: nonEmptyString,
  investmentSectionTitle: nonEmptyString,
  investmentOpportunityTitles: nonEmptyStringArray,
  investmentOpportunityDescriptions: nonEmptyStringArray,
  investmentOpportunityLearnMoreLabels: nonEmptyStringArray,
  investmentOpportunityLearnMoreHrefs: nonEmptyStringArray,
  investmentOpportunityDownloadLabels: nonEmptyStringArray,
  investmentOpportunityDownloadHrefs: nonEmptyStringArray,
  credibilityEyebrow: nonEmptyString,
  credibilityTitle: nonEmptyString,
  credibilityPartnerNames: nonEmptyStringArray,
  credibilityPartnerLeadLines: nonEmptyStringArray,
  credibilityPartnerBodyLines: nonEmptyStringArray,
  credibilityPartnerDescriptions: nonEmptyStringArray,
  credibilityPartnerLogoUrls: nonEmptyStringArray,
  credibilityPartnerLogoAlts: nonEmptyStringArray,
  missionEyebrow: nonEmptyString,
  missionStatement: nonEmptyString,
  missionPanelText: nonEmptyString,
  missionCtaLabel: nonEmptyString,
  missionSecondaryCtaLabel: nonEmptyString,
  closingTitles: nonEmptyStringArray,
  closingDescriptions: nonEmptyStringArray,
});

export const nurseryPageCopySchema = z.object({
  header: pageHeaderSchema,
  overviewEyebrow: nonEmptyString,
  overviewTitle: nonEmptyString,
  overviewDescription: nonEmptyString,
  stockLabels: nonEmptyStringArray,
  stockDescriptions: nonEmptyStringArray,
  saleHeaderPrefix: nonEmptyString,
  saleCardLabels: nonEmptyStringArray,
  saleCardNotes: nonEmptyStringArray,
  galleryTitle: nonEmptyString,
  galleryLinkLabel: nonEmptyString,
  propagationTitle: nonEmptyString,
  propagationDescriptions: nonEmptyStringArray,
  dashboardTitle: nonEmptyString,
  growthLabels: nonEmptyStringArray,
  growthDescriptions: nonEmptyStringArray,
  mortalityLabel: nonEmptyString,
  updatedPrefix: nonEmptyString,
  emptyStateLabel: nonEmptyString,
  technologyTitle: nonEmptyString,
  technologyTitles: nonEmptyStringArray,
  technologyDescriptions: nonEmptyStringArray,
});

export const plantationPageCopySchema = z.object({
  header: pageHeaderSchema,
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  overviewEyebrow: nonEmptyString,
  overviewTitle: nonEmptyString,
  overviewDescription: nonEmptyString,
  overviewParagraphs: nonEmptyStringArray,
  overviewPortalCtaLabel: nonEmptyString,
  overviewPortalCtaHref: nonEmptyString,
  overviewCardTitles: nonEmptyStringArray,
  overviewCardDescriptions: nonEmptyStringArray,
  intelligenceSectionTitle: nonEmptyString,
  intelligenceSectionDescription: nonEmptyString,
  intelligenceTitles: nonEmptyStringArray,
  intelligenceTaglines: nonEmptyStringArray,
  intelligenceDescriptions: nonEmptyStringArray,
  universitySectionTitle: nonEmptyString,
  universitySectionIntro: nonEmptyString,
  universitySectionDescription: nonEmptyString,
  universityPartnerNames: nonEmptyStringArray,
  universityPartnerLeadLines: nonEmptyStringArray,
  universityPartnerBodyLines: nonEmptyStringArray,
  universityPartnerDescriptions: nonEmptyStringArray,
  riskSectionTitle: nonEmptyString,
  riskSectionDescription: nonEmptyString,
  riskTitles: nonEmptyStringArray,
  riskTaglines: nonEmptyStringArray,
  riskDescriptions: nonEmptyStringArray,
  environmentalSectionTitle: nonEmptyString,
  environmentalSectionSubtitle: nonEmptyString,
  environmentalSectionDescription: nonEmptyString,
  environmentalSectionTagline: nonEmptyString,
  environmentalItems: nonEmptyStringArray,
  transparencySectionTitle: nonEmptyString,
  transparencySectionDescription: nonEmptyString,
  transparencyItems: nonEmptyStringArray,
  transparencyPrimaryCtaLabel: nonEmptyString,
  transparencyPrimaryCtaHref: nonEmptyString,
  transparencySecondaryCtaLabel: nonEmptyString,
  transparencySecondaryCtaHref: nonEmptyString,
  coverageEyebrow: nonEmptyString,
  coverageTitle: nonEmptyString,
  coverageDescription: nonEmptyString,
  coverageHighlightTitles: nonEmptyStringArray,
  coverageHighlightDescriptions: nonEmptyStringArray,
  galleryTitle: nonEmptyString,
  galleryDescription: nonEmptyString,
  milestoneTitle: nonEmptyString,
  milestoneDescription: nonEmptyString,
  milestoneLabels: nonEmptyStringArray,
  milestoneValues: nonEmptyStringArray,
  milestoneNotes: nonEmptyStringArray,
  landPreparationTitle: nonEmptyString,
  soilProtocolTitle: nonEmptyString,
  soilProtocolDescription: nonEmptyString,
  cassavaTitle: nonEmptyString,
  cassavaDescription: nonEmptyString,
  lifecycleTitle: nonEmptyString,
  agarwoodLabel: nonEmptyString,
  agarwoodSubtitle: nonEmptyString,
  mangoLabel: nonEmptyString,
  mangoSubtitle: nonEmptyString,
  agarwoodLifecycleTitles: nonEmptyStringArray,
  agarwoodLifecycleDescriptions: nonEmptyStringArray,
  mangoLifecycleTitles: nonEmptyStringArray,
  mangoLifecycleDescriptions: nonEmptyStringArray,
});

export const managementPageCopySchema = z.object({
  header: pageHeaderSchema,
  helperText: nonEmptyString,
  categoryTitles: nonEmptyStringArray,
  fallbackDetailText: nonEmptyString,
});

export const photoGalleryPageCopySchema = z.object({
  backButtonLabel: nonEmptyString,
  heroBadge: nonEmptyString,
  heroTitle: nonEmptyString,
  heroDescription: nonEmptyString,
  statLabels: nonEmptyStringArray,
  browseCollectionsTitle: nonEmptyString,
  browseCollectionsDescription: nonEmptyString,
  currentCollectionLabel: nonEmptyString,
  noResultsTitle: nonEmptyString,
  noResultsDescription: nonEmptyString,
  searchPlaceholder: nonEmptyString,
  viewHint: nonEmptyString,
  categoryCountLabel: nonEmptyString,
  showingLabel: nonEmptyString,
  filteredResultsLabel: nonEmptyString,
  currentCollectionValueLabel: nonEmptyString,
  collectionsLabelSuffix: nonEmptyString,
  searchResultsTitle: nonEmptyString,
  fullGallerySuffix: nonEmptyString,
  searchSummaryPrefix: nonEmptyString,
  searchSummaryMatchSuffix: nonEmptyString,
  collectionSummarySingular: nonEmptyString,
  collectionSummaryPlural: nonEmptyString,
  categoryLabels: nonEmptyStringArray,
  categorySubtitles: nonEmptyStringArray,
});

export const faqPageCopySchema = z.object({
  header: pageHeaderSchema,
  sectionTitles: nonEmptyStringArray,
  marketQuestions: nonEmptyStringArray,
  marketAnswers: nonEmptyStringArray,
  missionQuestions: nonEmptyStringArray,
  missionAnswers: nonEmptyStringArray,
  ownershipQuestions: nonEmptyStringArray,
  ownershipAnswers: nonEmptyStringArray,
  technologyQuestions: nonEmptyStringArray,
  technologyAnswers: nonEmptyStringArray,
  harvestQuestions: nonEmptyStringArray,
  harvestAnswers: nonEmptyStringArray,
});

export const siteCopySchema = z.object({
  typography: z.object({
    contact: pageTypographySchema,
    about: pageTypographySchema,
    disclaimer: pageTypographySchema,
    privacyPolicy: pageTypographySchema,
    cookiePolicy: pageTypographySchema,
    compliance: pageTypographySchema,
    technology: pageTypographySchema,
    impact: pageTypographySchema,
    clientServices: pageTypographySchema,
    mangoProgram: pageTypographySchema,
    agarwoodLifeCycle: pageTypographySchema,
    investment: pageTypographySchema,
    ecotourism: pageTypographySchema,
    home: pageTypographySchema,
    nursery: pageTypographySchema,
    plantation: pageTypographySchema,
    management: pageTypographySchema,
    photoGallery: pageTypographySchema,
    videos: pageTypographySchema,
    faq: pageTypographySchema,
  }),
  contact: contactPageCopySchema,
  about: aboutPageCopySchema,
  disclaimer: legalPageCopySchema,
  privacyPolicy: legalPageCopySchema,
  cookiePolicy: legalPageCopySchema,
  compliance: compliancePageCopySchema,
  technology: technologyPageCopySchema,
  impact: impactPageCopySchema,
  clientServices: clientServicesPageCopySchema,
  mangoProgram: mangoProgramPageCopySchema,
  agarwoodLifeCycle: agarwoodLifeCyclePageCopySchema,
  investment: investmentPageCopySchema,
  ecotourism: ecotourismPageCopySchema,
  home: homePageCopySchema,
  nursery: nurseryPageCopySchema,
  plantation: plantationPageCopySchema,
  management: managementPageCopySchema,
  photoGallery: photoGalleryPageCopySchema,
  videos: videosPageCopySchema,
  faq: faqPageCopySchema,
  _meta: siteCopyMetaSchema,
});

export type SiteCopy = z.infer<typeof siteCopySchema>;

const defaultSiteCopyUpdatedAt = "2026-07-20T00:00:00.000Z";
const july2026ContentCutoff = Date.parse(defaultSiteCopyUpdatedAt);
const cookieConsentCopyUpdatedAt = "2026-07-31T00:00:00.000Z";
const cookieConsentCopyCutoff = Date.parse(cookieConsentCopyUpdatedAt);
const removedSweetElenaCultivationRightsLine = "Golden Forests holds exclusive cultivation rights to Sweet Elena.";
export const defaultSiteCopy: SiteCopy = {
  typography: {
    contact: {},
    about: {},
    disclaimer: {},
    privacyPolicy: {},
    cookiePolicy: {},
    compliance: {},
    technology: {},
    impact: {},
    clientServices: {},
    mangoProgram: {},
    agarwoodLifeCycle: {},
    investment: {},
    ecotourism: {},
    home: {},
    nursery: {},
    plantation: {},
    management: {},
    photoGallery: {},
    videos: {},
    faq: {},
  },
  contact: {
    badge: "Get In Touch",
    heroTitle: "Connect With Our Team",
    heroDescription: "Discuss the proposed fund share structure and request the current materials for professional investors.",
    intro:
      "Eligible professional and corporate investors can contact our team to discuss the proposed agarwood and mango fund structure, eligibility requirements and current due-diligence materials.",
    formTitle: "Enquiry Form",
    formDescription:
      "Complete the enquiry form below and our team will respond directly regarding your investment objectives.",
    firstNameLabel: "First name",
    lastNameLabel: "Last name",
    emailLabel: "Email *",
    messageLabel: "Message *",
    submitLabel: "Submit",
    submittingLabel: "Submitting...",
    detailsTitle: "Golden Forests Agroforestry Intelligence",
    detailsDescription: "Investment in Agricultural Enterprises & Management FZCO",
    mobileLabel: "Phone",
    emailInfoLabel: "Email",
    websiteLabel: "Website",
    salesOfficeLabel: "Sales & Marketing Head Office",
    managementOfficeLabel: "Plantation Management Office",
    firstNamePlaceholder: "First name",
    lastNamePlaceholder: "Last name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    successTitle: "Message sent",
    successDescription: "Your message has been received.",
    errorTitle: "Submission failed",
    errorDescription: "Please try again in a moment.",
    phoneNumbers: ["+971 50 974 5232"],
    emailValue: "office@goldenforests.ai",
    emailHref: "mailto:office@goldenforests.ai",
    websiteValue: "www.goldenforests.ai",
    websiteHref: "https://www.goldenforests.ai/",
    holdingCompanyLabel: "Office Address",
    holdingCompanyAddress: [
      "IDZA Business Park, DDP 75773-001",
      "A1-3641379065, Dubai Digital Park",
      "Dubai Silicon Oasis, Dubai, UAE",
    ],
    salesOfficeTitle: "Sales & Marketing",
    salesOfficeCompany: "Golden Forests Agroforestry Intelligence",
    salesOfficeAddress: [
      "Investment in Agricultural Enterprises & Management FZCO",
      "IDZA Business Park, DDP 75773-001",
      "A1-3641379065, Dubai Digital Park",
      "Dubai Silicon Oasis, Dubai, UAE",
    ],
    managementOfficeAddress: [
      "Crassna Agroforestry Development Inc. (CADI)",
      "Level 24, Philippines Stock Exchange Tower, One Bonifacio Street, 5th Ave Cor. 28th Street, BGC, Taguig City, Philippines",
    ],
    resourcesTitle: "Investor Resources",
    resourceLabels: [
      "Request Agarwood exposé",
      "Request Mango exposé",
      "View FAQ Document",
      "Request Business Prospectus",
    ],
    resourceHrefs: [
      "https://webforms.pipedrive.com/f/6Ox6XFcTiL7Gkj7c8kPmK8LtXoKWm7FKGyfDUa8d5X3aNO0lKTy5EAKb11khVTtd2r",
      "https://webforms.pipedrive.com/f/6xQwKZ6bimvjlCRgZoVzczm8SQ2MomeApjsqHTj3T0x6NcKw4DsPP0nIFMEltUvlkv",
      "/GF-FAQ-July-2026.pdf",
      "/contact",
    ],
  },
  about: {
    header: {
      badge: "Company Overview",
      title: "Golden Forests",
      description:
        "Golden Forests provides eligible professional and corporate investors with access to managed Philippine agroforestry exposure through a proposed fund share structure.",
    },
    heroTitle: "For shareholders. For the land. For the people.",
    heroDescription: "Supporting long-term agroforestry participation through structured governance and professionally managed operations.",
    overviewEyebrow: "Growing Wealth. Preserving Nature.",
    overviewTitle: "About us",
    overviewParagraphs: [
      "Golden Forests provides access to professionally managed agarwood and mango plantation exposure in the Philippines through a Singapore Variable Capital Company structure with two crop-specific sub-funds",
      "Eligible professional and corporate investors would subscribe for shares in the relevant fund. Each share may use an underlying tree-equivalent reference for economic allocation and tracking, but shareholders do not acquire direct ownership of any individual tree, planting block, land or plantation asset.",
      "The operating model combines long-term biological growth, AI-enabled plantation management, scientific partnerships, structured reporting and a native-species reforestation programme. Final rights, economics and protections are governed only by definitive offering, subscription and constitutional documents.",
    ],
    uspSectionTitle: "Built on science, regulation, and measurable stewardship.",
    uspCardTitles: [
      "80 Years Combined Management Experience",
      "Exclusive Cultivation Technology",
      "First-Mover Regulatory Position",
      "Scientific Partnerships",
      "AI-Enabled Plantation Intelligence",
      "1:1 Reforestation Programme",
    ],
    uspCardDescriptions: [
      "Proven leadership across agroforestry, governance, and emerging-market operations.",
      "Licensed agarwood inoculation formulas and DNA-verified Thai genetics support premium resin quality and commercial readiness.",
      "Golden Forests holds the first Wildlife Permit issued by the DENR for Aquilaria crassna cultivation in the Philippines.",
      "Research support from PRMSU, VSU, and UPLB strengthens cultivation protocols, elite variety development, and continuous innovation.",
      "Proprietary monitoring combines drone surveillance, geotagging, and predictive analytics to optimise biological asset performance.",
      "One native Philippine tree is intended to be planted for each corresponding underlying commercial tree represented in the fund allocation model.",
    ],
    commitmentSectionTitle: "Our Commitment",
    commitmentColumnTitles: ["For Investors", "For the Land", "For the People"],
    commitmentItemTitles: [
      ["FUND SHAREHOLDING. TRANSPARENT BY DESIGN.", "ILLUSTRATIVE HARVEST ECONOMICS."],
      ["ONE UNDERLYING TREE. ONE NATIVE TREE.", "RESPONSIBLE STEWARDSHIP."],
      ["EMPLOYMENT ROOTED IN THE COMMUNITY.", "COMMUNITY. PARTNERSHIP. PURPOSE."],
    ],
    commitmentItemDescriptions: [
      [
        "Professional and corporate investors participate as shareholders in the relevant fund rather than as owners of individual trees. Fund-managed inventory is intended to be supported by GPS-referenced records, periodic reporting and independent audit processes, subject to the definitive governing documents.",
        "Agarwood is modelled for harvest realisation in years 9-10, while mango may begin producing harvest proceeds from year 5 and continue through year 25. All figures are illustrative, depend on actual operating and market outcomes, and do not guarantee distributions or recovery of capital.",
      ],
      [
        "The operating model includes a one-to-one reforestation programme: one native Philippine species is intended to be planted for each corresponding underlying commercial tree represented in the fund allocation model.",
        "Biodiversity, carbon and certification initiatives remain subject to implementation, measurement and independent verification. Preliminary environmental estimates are not certified carbon credits and are not included in the core investor economics.",
      ],
      [
        "Our plantations provide stable employment for local communities in Zambales province, with continuous training and career progression opportunities for all employees. Fair wages are aligned with UN Global Compact principles, ensuring that the people who care for our plantations share in their success. We invest in our people with the same long-term commitment we bring to our trees.",
        "We work collaboratively with local communities, supporting economic development whilst respecting traditional land relationships and cultural practices that have shaped the region for generations. Our operations are designed to create lasting local benefit that extends well beyond direct employment. The prosperity of our plantations belongs to the land and the people that make it possible.",
      ],
    ],
    visionTitle: "Vision",
    visionDescription:
      "Lead sustainable agroforestry in Asia through Agroforestry Intelligence, combining artificial intelligence, advanced science and elite genetics to create long-term value, resilient ecosystems and thriving communities.",
    missionTitle: "Mission",
    missionDescription:
      "Operate a sustainable and professionally managed agroforestry platform focused on premium crops, disciplined cultivation, structured governance and long-term value for shareholders, communities and the environment.",
    leadershipSectionTitle: "Leadership Team",
    leadershipNames: ["Charles McKenzie", "Mark LM Quinn", "Cord Kabus-Duprée"],
    leadershipImageUrls: ["", "", ""],
    leadershipTitles: ["Chairman of the Board", "President & Chief Executive Officer", "Chief Marketing and Sales Officer"],
    leadershipDescriptions: [
      "Executive with over 30 years of leadership in asset management and fixed-income investments across London, Frankfurt and Sydney, including senior roles at Deutsche Morgan Grenfell, Aberdeen Asset Management, JP Morgan Asset Management and Fidelity International. Charlie brings institutional fixed-income strategy, portfolio leadership and corporate governance expertise to Golden Forests. He holds a BSc (Hons) in Economics from the University of Southampton and an MBA (Finance) from Bayes Business School, City, University of London.",
      "Seasoned international entrepreneur and executive with 25+ years of experience structuring, financing and scaling commercially viable projects across renewable energy, carbon markets, agroforestry and sustainable infrastructure in emerging markets. Mark founded and leads Crassna Agroforestry Development Inc. (Philippines), developing large-scale privately managed agarwood and high-density mango plantations through international IP licensing, long-term financial structuring, capital raising and regulatory approvals. He serves as Member and Advisor to the Philippines British Business Council and brings deep expertise across carbon finance, emissions trading, renewable energy, international trade and technology commercialisation, with project execution experience across Asia, Africa, Europe and the Middle East.",
      "More than 20 years in financial advisory, family-office engagement and international investor relations, with prior senior roles in European wealth and institutional capital networks and 12 years with Horbach Wirtschaftsberatung GmbH (Swiss Life Group Germany). Cord leads strategic marketing and sales, investor development and international client relations for Golden Forests. He holds a Master's in Business Administration and CFP certification.",
    ],
    boardSectionTitle: "Board of Directors",
    boardNames: ["Marciano Gecolea", "R.A.G Ferdinand Domingo", "Adele Frances"],
    boardImageUrls: ["", "", ""],
    boardTitles: ["Agroforestry Director", "Agri-Science Director", "Commercial Director"],
    boardDescriptions: [
      "Licensed forester with over three decades of agroforestry and plantation leadership, including regional responsibility across Southeast Asia for large-scale agarwood projects from land acquisition to processing and value-added production. Marciano brings sustainable agroforestry systems expertise, land suitability and GIS-guided plantation planning, permitting, environmental compliance and community-based livelihood integration. He holds a Master's in Resource Management from Lincoln University and a BS Forestry from UP Los Baños.",
      "Associate Professor and Director of PRMSU Mango Research and Development Centre with more than 40 years of experience in mango cultivation, SMART mango production and commercialisation of pre- and post-production mango technologies. Ferdinand leads research and deployment of dwarf mango technology, integrated pest and disease management, with copyrighted studies on mango cecid fly, mango twig borer bio-ecology and productivity enhancement for carabao mango. He holds a Master's in Agricultural Technology Education from Central Luzon State University.",
      "Executive with expertise in commercial strategy, brand positioning, market development and investor relations across financial services, sustainable investment and alternative assets. Specialising in market entry, go-to-market execution and commercial growth. With over 20 years of leadership across financial services, sustainable and alternative investment and real estate, Adele has built commercial infrastructures for international scale-ups, designed go-to-market frameworks across 10 markets and repositioned brands for growth. Her prior roles include RTP Global, Druce, MFS Investment Management, RBC Wealth Management, Invesco and Brewin Dolphin.",
    ],
    highlightTitles: [
      "Flagship Crops",
      "Transparency",
      "Environmental Impact",
    ],
    highlightDescriptions: [
      "Agarwood and mango programmes balance shorter and longer commercial horizons within one structured plantation model.",
      "GPS-referenced fund inventory, operational monitoring and independent audit processes are intended to support traceable asset management.",
      "Each corresponding underlying commercial tree in the fund allocation model is intended to be matched by one native Philippine tree.",
    ],
    differentiatorsEyebrow: "What Sets Golden Forests Apart",
    differentiatorsTitle: "Built on science, regulation, and measurable stewardship",
    differentiatorTitles: [
      "80 Years Combined Management Experience",
      "Exclusive Cultivation Technology",
      "First-Mover Regulatory Position",
      "Scientific Partnerships",
      "AI-Enabled Plantation Intelligence",
      "1:1 Reforestation Programme",
    ],
    differentiatorDescriptions: [
      "Proven leadership across agroforestry, governance, and emerging-market operations.",
      "Licensed agarwood inoculation formulas and DNA-verified Thai genetics support premium resin quality and commercial readiness.",
      "Golden Forests holds the first Wildlife Permit issued by the DENR for Aquilaria crassna cultivation in the Philippines.",
      "Research support from PRMSU, VSU, and UPLB strengthens cultivation protocols, elite variety development, and continuous innovation.",
      "Proprietary monitoring combines drone surveillance, geotagging, and predictive analytics to optimise biological asset performance.",
      "One native Philippine tree is intended to be planted for each corresponding underlying commercial tree in the fund allocation model.",
    ],
    investmentEyebrow: "Investment Products",
    investmentTitle: "Structured around premium biological assets",
    productTitles: [
      "Aquilaria crassna Agarwood",
      "Sweet Elena mango",
    ],
    productReturnProfiles: [
      "Illustrative harvest realisation in years 9-10",
      "Illustrative harvest proceeds from years 5-25",
    ],
    productDescriptions: [
      "Harvest targeted in years 9 to 10, supported by licensed inoculation protocols and structured plantation oversight.",
      "A proprietary university-developed hybrid designed for premium quality, efficient orchard density, and long-term annual production.",
    ],
    productValues: [
      "Tree-equivalent share reference",
      "Tree-equivalent share reference",
    ],
    frameworkEyebrow: "Agroforestry Intelligence",
    frameworkTitle: "The operating framework behind every plantation",
    frameworkItems: [
      "Agroforestry Intelligence integrates agronomic science, AI-enabled monitoring systems, and structured plantation management across the cultivation lifecycle.",
      "Zambales province sites are selected through agro-climatic evaluation to optimise growth conditions, land efficiency, and harvest quality.",
      "Operations are built around fund-level traceability, auditable reporting and long-horizon stewardship for eligible professional investors seeking alternative real-asset exposure.",
    ],
  },
  disclaimer: {
    title: "Risk Warning and Disclaimer",
    subtitle: "Last updated: July 2026",
    body: `## Important Notice
This website is published by Golden Forests Group and is intended for informational purposes only. Nothing on this website constitutes a financial promotion, investment advice, a solicitation to invest, or an offer to buy or sell any financial instrument or investment product.

## No Investment Advice
The information contained on this website does not constitute and should not be construed as investment, legal, tax or regulatory advice. Prospective investors should seek independent professional advice from appropriately qualified advisers before making any investment decision. Golden Forests Group does not provide regulated financial advice or services.

## Illustrative Economics and Forward-Looking Information
Any economics, proceeds schedules, yields, prices, costs, timelines or other forward-looking information referenced on this website are based on modelling assumptions and are provided solely for illustration. They are not forecasts, guarantees or final investor returns. Actual results may differ materially, distributions may be delayed, reduced or withheld, and investors may lose some or all of their invested capital.

## Nature of Investment
The opportunity described in the July 2026 materials is a proposed shareholding in one or more pooled, ring-fenced fund compartments associated with underlying agroforestry assets. A tree-equivalent reference is used only for economic allocation, accounting and reporting. It does not give a shareholder direct ownership of any specific tree, planting block, land or plantation asset. The proposed interests are long-term and illiquid, transfer restrictions may apply, and there may be no established secondary market.

## Proposed Structure and Definitive Documents
The fund, platform, governance, reserve, reporting, distribution and private-placement arrangements remain subject to final legal, regulatory, tax, structuring and commercial review. No investment may be accepted until the required structure and definitive documents are complete. Any investment would be made only on the basis of the final offering, subscription, constitutional and related transaction documents, which will prevail over this website.

## Key Risks
Investors should be aware of the following risks before making any investment decision.
- Biological risk: tree health may be affected by pests, disease, extreme weather events or other environmental factors. Insurance scope, availability and claims remain subject to policy terms, exclusions and annual review; replacement buffers cannot eliminate all losses.
- Market risk: the market prices of agarwood and mango are subject to fluctuation driven by global supply and demand dynamics, currency movements and other factors outside Golden Forests Group's control.
- Operational risk: actual plantation performance depends on management execution, harvest timing and yield, which may differ from projections.
- Regulatory risk: the regulatory environment in the Philippines and other relevant jurisdictions may change in ways that affect the operations or commercial viability of Golden Forests Group.
- Currency risk: returns are projected in US dollars. Investors whose base currency differs from USD may be subject to exchange rate risk.

## Jurisdiction and Geographic Scope
This website and the information it contains are directed only at eligible professional, corporate, institutional or accredited investors, as applicable in the relevant jurisdiction. They are not intended for retail investors or the general public.
Persons accessing this website are responsible for ensuring compliance with all applicable laws and regulations in their own jurisdiction. In particular:
- United Arab Emirates: this website is not intended to constitute a public offering or promotion of securities or investment products under UAE Securities and Commodities Authority (SCA) regulations or the Dubai Financial Services Authority (DFSA) rules. It is directed at professional clients and sophisticated investors only.
- United Kingdom: this website is not a financial promotion as defined under the Financial Services and Markets Act 2000. It does not constitute regulated investment advice or a solicitation to invest. Prospective UK investors should seek independent FCA-authorised advice before making any investment decision.
- European Union and Europe: this website is not directed at retail investors within the European Economic Area. It does not constitute an offer or solicitation in any jurisdiction where such an offer or solicitation would be unlawful. Investors in EU member states and other European jurisdictions should satisfy themselves that participation in plantation investment of this nature is permitted under their local laws and should seek appropriate independent advice.
- Asia: this website does not constitute an offer or solicitation in any Asian jurisdiction where such activity requires regulatory authorisation. Investors based in Singapore, Hong Kong, India, Vietnam and other Asian markets should seek independent local legal and financial advice before making any investment decision.
- Other jurisdictions: persons in jurisdictions not listed above should seek appropriate legal and financial advice to confirm whether investment of this nature is permitted in their jurisdiction before proceeding.

## Third Party Information
Where this website references third party research, market data or publications, Golden Forests Group does not warrant the accuracy or completeness of such information. Sources are cited where available and readers are encouraged to verify information independently.

## No Liability
Golden Forests Group, its directors, officers, employees and advisers accept no liability for any loss or damage arising from reliance on the information contained on this website. To the fullest extent permitted by law, all warranties and representations are excluded.

## Contact
If you have any questions regarding these disclaimers or risk warnings, please contact us at office@goldenforests.ai.`,
  },
  privacyPolicy: {
    title: "Privacy Policy",
    subtitle: "Last updated: April 2026",
    body: `## 1. Introduction
Golden Forests Group ("we", "us" or "our") is committed to protecting the personal data of all individuals who interact with our website at goldenforests.ai ("the Site"). This Privacy Policy explains what personal data we collect, how we use it, how we store it and the rights you have in relation to it.
By using the Site or submitting an enquiry through our contact form, you acknowledge that you have read and understood this Privacy Policy.

## 2. Who We Are
Golden Forests Group operates through Investment in Agricultural Enterprises and Management FZCO, registered at IDZA Business Park, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE.
For any data protection enquiries, please contact us at office@goldenforests.ai.

## 3. What Personal Data We Collect
When you submit an enquiry through the contact form on our Site, we may collect the following personal data:
- First and last name
- Email address
- Phone number (if provided)
- Country of residence
- Investment interests and preferences
- How you heard about us
- Any additional information you choose to share in your message
We do not collect sensitive personal data such as financial account details, government identification numbers or health information through our Site.

## 4. How We Use Your Personal Data
We use the personal data you provide for the following purposes:
- To respond to your enquiry and provide you with information about our investment programmes
- To send you documents or materials you have requested, such as our investment exposés or FAQ document
- To manage our relationship with you as a prospective investor
- To maintain records of investor communications for business development and commercial strategy purposes
- To comply with applicable legal and regulatory obligations
We will not use your personal data for unsolicited marketing purposes without your prior consent and we will never sell your personal data to third parties.

## 5. Legal Basis for Processing
We process your personal data on the following legal bases:
- Consent: where you have given us explicit consent to process your data, for example by ticking the GDPR consent box on our contact form
- Legitimate interests: where processing is necessary for our legitimate business interests, such as responding to investor enquiries and managing our pipeline, provided these interests are not overridden by your rights
- Legal obligation: where processing is required to comply with applicable laws or regulations

## 6. How We Store Your Data
Your personal data is stored securely within PipeDrive, our customer relationship management (CRM) platform. PipeDrive is a data processor acting on our behalf and is subject to appropriate data processing agreements. For more information about PipeDrive's data security and privacy practices, please visit www.pipedrive.com/en/privacy.
We take appropriate technical and organisational measures to protect your data against unauthorised access, loss or disclosure.
We will retain your personal data for as long as is necessary to fulfil the purposes for which it was collected, or as required by applicable law. Where you have provided consent, we will retain your data until you withdraw that consent or request deletion.

## 7. Who We Share Your Data With
We may share your personal data with the following categories of third parties:
- PipeDrive, our CRM platform, for the purpose of storing and managing investor enquiries and communications
- PandaDoc, our document management and outreach platform, where used to respond to your enquiry
- Our internal team members who are responsible for investor relations, sales and marketing
- Professional advisers such as legal or compliance advisers, where necessary
We do not share your personal data with any other third parties without your consent, unless required to do so by law.

## 8. International Data Transfers
Golden Forests Group operates across multiple jurisdictions. Your personal data may be processed by team members or systems located outside your country of residence, including in the UAE, the Philippines and Europe. PipeDrive and PandaDoc may also process data outside your home jurisdiction. Where such transfers occur, we ensure appropriate safeguards are in place in accordance with applicable data protection laws.

## 9. Your Rights
Depending on your jurisdiction, you may have the following rights in relation to your personal data:
- The right to access the personal data we hold about you
- The right to request correction of inaccurate or incomplete data
- The right to request deletion of your personal data
- The right to withdraw consent at any time, where processing is based on consent
- The right to object to processing based on legitimate interests
- The right to data portability, where applicable
To exercise any of these rights, please contact us at office@goldenforests.ai. We will respond to all requests within 30 days. In some circumstances we may be unable to fulfil your request, in which case we will explain our reasons.

## 10. Cookies
Our Site may use cookies and similar tracking technologies to improve your browsing experience and to gather analytical data about how the Site is used. You will be presented with a cookie consent notice when you first visit the Site, through which you can manage your preferences.
Where configured, we may use analytics tools such as Google Analytics 4, Microsoft Clarity or Hotjar only after you opt in to analytics cookies. For more information please refer to our Cookie Policy.

## 11. Third Party Links
Our Site contains a link to our plantation management portal at https://cadi-website.onrender.com/. This Privacy Policy applies only to goldenforests.ai. We are not responsible for the privacy practices of third-party sites and encourage you to review their policies before providing any personal data.

## 12. Children
Our Site is not directed at children under the age of 18 and we do not knowingly collect personal data from minors. If you believe we have inadvertently collected data from a minor, please contact us and we will delete it promptly.

## 13. Changes to This Policy
We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The date at the top of this page will be updated accordingly. We encourage you to review this policy periodically.

## 14. Contact Us
If you have any questions, concerns or requests relating to this Privacy Policy or the way we handle your personal data, please contact us at:
Golden Forests Group
Investment in Agricultural Enterprises and Management FZCO
IDZA Business Park, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE
Email: office@goldenforests.ai`,
  },
  cookiePolicy: {
    title: "Cookie Policy",
    subtitle: "Last updated: 31 July 2026",
    body: `## 1. What Are Cookies
Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work efficiently, to improve the user experience and to provide information to website owners. Cookies do not contain personally identifiable information on their own, though they may be linked to personal data we hold about you in accordance with our Privacy Policy.

## 2. How We Use Cookies
Our website at goldenforests.ai uses cookies for the following purposes:
- To ensure the website functions correctly and pages load as intended
- With your permission, to analyse how visitors use the Site so that we can improve it
- With your permission, to understand where our visitors are coming from and how they found us
- To record your cookie preferences
We do not use cookies to serve advertising or to track your activity across other websites.

## 3. Types of Cookies We Use
Essential cookies are required for the Site to operate securely. The gf_cookie_consent cookie remembers your choices for up to 180 days. The connect.sid cookie supports authenticated administrator sessions for up to 12 hours. These cookies cannot be disabled through our preference panel.
Analytics cookies are optional and are disabled unless you opt in. Where an analytics service is configured, it may collect information such as pages visited, approximate location, device information, traffic source and time spent on the Site. Supported providers are Google Analytics 4, Microsoft Clarity and Hotjar. The services actually active may change as our measurement configuration changes.
Functional cookies and similar technologies are optional. If you allow them, the embedded Pipedrive enquiry form can load on the Contact page. If you decline, you can still open the form directly on Pipedrive's website.

## 4. Third Party Cookies
After you opt in to the relevant category, third-party services may set or access cookies under their own policies. These providers may include Google Analytics 4, Microsoft Clarity, Hotjar and Pipedrive. We block their scripts or embedded content before the relevant permission is granted.

## 5. Your Cookie Choices
When you first visit the Site, you will be presented with a cookie consent banner through which you can accept all optional cookies, reject them or choose by category. Optional cookies are off unless you make a positive choice to allow them.
You can change or withdraw your choice at any time using the Cookie Preferences link in the website footer. Withdrawing analytics consent removes analytics cookies accessible to our Site and reloads the page to stop active analytics scripts. A third party may require you to clear cookies set on its own domain through your browser.
You can also control cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies or be notified when a new cookie is set. Please note that disabling certain cookies may affect the functionality of the Site. For guidance on managing cookies in your browser, please refer to your browser's help documentation.

## 6. Cookie Retention
The length of time a cookie remains on your device depends on its purpose and provider. Our consent preference is retained for up to 180 days and administrator sessions for up to 12 hours. Optional third-party cookie retention is determined by the relevant provider and may change. You can delete cookies sooner through your browser settings.

## 7. Changes to This Policy
We may update this Cookie Policy from time to time to reflect changes in the cookies we use or applicable law. The date at the top of this page will be updated accordingly. We encourage you to review this policy periodically.

## 8. Contact Us
If you have any questions about our use of cookies, please contact us at:
Golden Forests Group
Investment in Agricultural Enterprises and Management FZCO
IDZA Business Park, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE
Email: office@goldenforests.ai`,
  },
  compliance: {
    header: {
      badge: "Legal & Regulatory",
      title: "Compliance Framework",
      description:
        "The operating model is built around regulated cultivation, documented trade pathways, and auditable governance controls for clients.",
    },
    heroTitle: "Permitting and Regulatory Position",
    heroDescription:
      "Regulatory preparedness is a strategic operating requirement in agroforestry. CADI execute under defined permits, compliance documentation, and structured oversight to support lawful cultivation and export operations.",
    highlightItems: [
      "Pre-established permitting foundations for Aquilaria crassna operations",
      "CITES-aligned export pathway integrated into operational planning",
      "Structured ownership contracts with annual audits and GPS verification",
      "PEFC/FSC certification pathway targeted for 2027",
      "Regional Wildlife Culture permit for plantation operations",
      "Bureau of Customs (BOC) certifications for import and export",
    ],
    complianceTitles: [
      "DENR Approval",
      "CITES Compliance",
      "Supply Chain Accreditation",
      "Client Governance Controls",
    ],
    complianceDescriptions: [
      "Golden Forests is positioned as a first mover with regulatory approvals for Aquilaria crassna cultivation in the Philippines.",
      "Operations are structured for CITES-aligned documentation, traceability, and legal trade workflows for agarwood exports.",
      "Program roadmap targets PEFC and FSC certification by 2027 to strengthen responsible supply chain credibility.",
      "Sales and management contracts, annual audits, GPS verification, and portal reporting are embedded into the client model.",
    ],
    mandatesTitle: "Further Legal Mandates",
    mandateTitles: [
      "PEFC Certification Pathway for Mango",
      "FSC Certification Pathway for Agarwood",
      "Contract and Governance Controls",
    ],
    mandateDescriptions: [
      "The mango program targets PEFC (Programme for the Endorsement of Forest Certification) certification by 2027 to support responsible environmental stewardship, sustainable practices, and premium export market access.",
      "The agarwood program targets FSC (Forest Stewardship Council) certification, with the application scheduled for Q4 2027, to strengthen compliant forestry operations and premium market access.",
      "The client model is supported by sales and management contracts, annual reporting protocols, and governance controls designed for transparent operational oversight.",
    ],
  },
  technology: {
    header: {
      badge: "Agroforestry Intelligence",
      title: "Agroforestry Intelligence",
      description:
        "What sets Golden Forests apart is the way we fuse sustainability, science, and technology into every plantation - a model we call Agroforestry Intelligence.",
    },
    stackTitle: "How the model works",
    stackTitles: [
      "Targeting premium plantation opportunities",
      "Securing high-performing land",
      "Science-based plantation management",
      "AI and precision farming",
      "Shared prosperity through reforestation",
    ],
    stackDescriptions: [
      "Our experts evaluate and target the most attractive plantation opportunities in high-value crops in Asia, allowing Golden Forests to build its own premium brands.",
      "Our project managers secure high-profitable land locations that combine strong yields with positive impact.",
      "Our plantation management applies best-practice, science-based agronomy and rigorous, sustainable management standards across every site.",
      "Our proprietary AI platform, combined with precision farming, maximises harvest yields and strengthens decision-making across the plantation lifecycle.",
      "For every tree purchased, we plant a native tree with local communities, ensuring prosperity is shared with the people and the land.",
    ],
    benefitsTitle: "Why it matters",
    benefits: [
      "Sustainability, science, and technology are integrated into one operating model.",
      "Plantation opportunity selection is disciplined and yield-focused.",
      "Land strategy prioritises both profitability and measurable impact.",
      "Agronomy standards are managed with rigorous, science-based oversight.",
      "AI and precision farming support stronger harvest performance.",
      "Every investment extends value to local communities and the wider landscape.",
    ],
  },
  videos: {
    heroBadge: "Media Showcase",
    heroTitle: "Golden Forests Video Gallery",
    heroDescription:
      "A curated selection of featured Golden Forests videos, showcasing plantation operations, site experience, and the wider story behind the programme.",
    featuredVideoEyebrow: "Featured Film",
    featuredVideoTitle: "Inside Golden Forests Operations",
    featuredVideoDescription:
      "Watch a closer look at nursery activity, plantation development, and the operational environment behind the Golden Forests programme.",
    featuredVideoRuntime: "1 min 28 sec",
    cinematicVideoEyebrow: "Cinematic Journey",
    cinematicVideoTitle: "Experience the Visit Before You Arrive",
    cinematicVideoDescription:
      "A preview of the plantation visit experience, connecting plantation oversight in Zambales with the wider travel programme, premium hospitality, and onward access through Clark to key island destinations.",
    cinematicVideoRuntime: "3 min 55 sec",
  },
  impact: {
    header: {
      badge: "Community & Environment",
      title: "Positive Impact",
      description:
        "The investment model links commercial performance with measurable environmental and social outcomes in Zambales province.",
    },
    cardTitles: ["1:1 Reforestation Programme", "Local Employment & Training"],
    cardDescriptions: [
      "For each commercial agarwood or mango tree purchased, one exotic species tree is planted alongside it. With 50,000 trees available for investment and 50,000 local exotic trees planted in parallel, the reforestation programme manages 100,000 trees in total.",
      "Operations prioritize local employment and community engagement, with field teams trained on plantation care, monitoring procedures, and responsible production practices.",
    ],
    standardsTitle: "Responsible Production Standards",
    standardsDescription:
      "Production systems are designed for certified, traceable, and responsible outputs, linking client participation to long-term ecological restoration and transparent sustainability reporting.",
  },
  clientServices: {
    header: {
      badge: "Asset Administration",
      title: "Client Services",
      description:
        "Client services support professional shareholders through regulated onboarding, fund governance, operational visibility, and transparent reporting across the plantation lifecycle.",
    },
    serviceTitles: ["Sub-Fund Shareholding & Governance", "Professional Reporting"],
    serviceDescriptions: [
      "Eligible professional clients subscribe through licensed private-placement intermediaries and receive shares in the relevant ring-fenced VCC sub-fund. A share is valued on a tree-equivalent basis but does not convey ownership of an individual tree or other plantation asset.",
      "Reporting is designed to provide professional shareholders with periodic visibility at sub-fund, planting-block, and biological-asset-pool level, subject to the definitive documents and administrator capabilities.",
    ],
    serviceBullets: [
      [
        "Subscription Agreement and applicable governing documents",
        "Evidence of shares issued and entry in the shareholder register",
        "Licensed fund-manager and administrator oversight",
        "Ring-fenced accounting for each crop sub-fund",
        "Share transfers subject to eligibility, approvals, and compliance checks",
      ],
      [
        "Periodic fund and plantation-operations reports",
        "Independent audit and field-verification outputs",
        "Harvest, yield, and material-exception reporting",
        "Shareholder communications and document access",
      ],
    ],
    visitationTitle: "Client Visitation Programme",
    visitationDescription:
      "Golden Forests clients can inspect operations directly through a structured plantation visit program, including curated two-night premium accommodation options including transportation.",
    logisticsTitle: "Logistics",
    logisticsDescription:
      "Zambales province operations are accessible from Clark, Manila, and Subic corridors, with Clark approximately 1.5 hours away and Manila about 4.5 hours by road, plus onward access from Clark to major island destinations. Negros province operations are accessible via Manila airport to Bacolod, being 1.5 hours away from the plantation site.",
    itineraryTitle: "Itinerary",
    itineraryDescription:
      "Typical itineraries include nursery review, plantation walkthrough, management briefing, and optional extended travel from Clark.",
  },
  mangoProgram: {
    header: {
      badge: "Premium Fruit Investment",
      title: "Mango Programme",
      description:
        "The Golden Forests mango programme offers direct ownership of proprietary Sweet Elena mango trees cultivated on professionally managed plantations in Zambales province.",
    },
    overviewTitle: "What Is Sweet Elena mango?",
    overviewPoints: [
      "Carabao mango is recognised as the Philippines' finest mango cultivar, internationally acclaimed for exceptional sweetness, smooth texture, and golden flesh.",
      "Golden Forests has scientifically propagated a proprietary Sweet Elena Carabao hybrid, combining Carabao and Elena genetics with dwarfing techniques for premium fruit quality and high-density production.",
      "The programme serves four main applications: premium fresh fruit export, dried mango products, juice and processing, and the domestic premium market.",
      "Primary international demand comes from the Middle East, East Asia, Europe, and North America, where Philippine Carabao provenance commands premium market recognition.",
    ],
    insuranceTitle: "Risk Management and Ownership Structure",
    insuranceDescription:
      "The mango programme is built around direct tree ownership and a five-layer protection framework designed to support long-horizon investor confidence.",
    insurancePoints: [
      "Direct legal ownership of individually identified GPS-verified Sweet Elena mango trees.",
      "20% mortality buffer with replacement trees vested at no additional cost where required.",
      "Conservative fruiting assumptions projecting only 80% of planted trees producing annually.",
      "Comprehensive insurance coverage through plantation protection policies.",
      "Professional management, annual audits, GPS verification, and transparent reporting across the full lifecycle.",
    ],
    benefitsTitle: "Golden Forests Competitive Advantages",
    benefitsPoints: [
      "Exclusive PRMSU-developed Dwarf Sweet Elena Carabao variety with high-density cultivation of 416 trees per hectare.",
      "Prime Zambales location with strong climate, soil conditions, drip irrigation, and fertigation support.",
      "Scientific partnerships with PRMSU, UPLB, and supporting institutions for cultivar development, post-harvest quality, and continuous improvement.",
      "AI-enabled plantation intelligence using drones, satellite geotagging, environmental monitoring, and predictive analytics.",
      "GPS-verified transparency for every client tree with digital ownership records and annual independent verification.",
      "1:1 native species reforestation, planting one Philippine endemic tree for every commercial mango tree purchased.",
    ],
    snapshotTitle: "Investment Snapshot",
    snapshotLabels: [
      "Standard Introductory Pricing",
      "High-Density Cultivation",
      "Commercial Production Begins",
      "Stable Yield Phase",
      "Golden Forests Commission",
      "Combined Portfolio Benefit",
    ],
    snapshotValues: [
      "USD 592.50 per tree",
      "416 trees per hectare",
      "Year 5",
      "Years 10-25",
      "20% of gross fruit sales",
      "+2.5% discount when combined with agarwood",
    ],
    snapshotFootnote:
      "The expos� highlights additional private and professional investor volume discounts, combined-portfolio pricing benefits, and upside scenarios tied to premium export grades, off-season pricing, and optimal yield performance.",
  },
  agarwoodLifeCycle: {
    header: {
      badge: "Programme Overview",
      title: "Agarwood Programme",
      description:
        "A light overview of how Golden Forests approaches agarwood cultivation, plantation care, and long-term resin production in the Philippines.",
    },
    overviewTitle: "What The Programme Covers",
    overviewPoints: [
      "Golden Forests cultivates Aquilaria crassna on professionally managed plantation land in Zambales province.",
      "The programme is designed around long-term tree care, monitored growth, and structured resin development.",
      "Agarwood is valued across fragrance, incense, oil, and specialty wellness markets.",
      "Operations combine plantation management, documented oversight, and traceable field execution from planting to harvest readiness.",
    ],
    commercialTitle: "Why Agarwood",
    commercialPoints: [
      "Agarwood is one of the most recognized premium forestry products because of its rarity, fragrance profile, and international demand.",
      "The crop develops over a multi-year cycle, making disciplined field management and timing especially important.",
      "Golden Forests focuses on cultivation quality, plantation consistency, and preparation for later resin formation.",
      "The programme is structured to support a clear operational path from establishment through maturity and eventual harvest.",
    ],
    insuranceTitle: "How It Is Managed",
    insuranceDescription:
      "The agarwood programme is managed as a guided plantation cycle with attention to field conditions, plant health, and readiness at each stage of growth.",
    insurancePoints: [
      "Planting and early establishment are supported by site preparation, spacing protocols, and maintenance routines.",
      "Growth is monitored over time so trees can progress toward the maturity needed for resin development.",
      "Harvest planning is approached as the final stage of a longer operational cycle rather than a short-term crop event.",
    ],
    stageTitles: [
      "1. Nursery and Field Establishment",
      "2. Managed Growth Phase",
      "3. Resin Development Phase",
      "4. Harvest Preparation",
    ],
    stagePeriods: ["Planting Stage", "Early to Mid Growth", "Maturity Stage", "Later Cycle"],
    stageDetails: [
      "Young trees begin in nursery care before being transferred to prepared plantation blocks with spacing, irrigation, and support systems in place.",
      "As the plantation develops, the focus stays on steady growth, maintenance, and keeping trees healthy under monitored field conditions.",
      "Once trees are mature enough, the programme moves toward resin development using structured technical processes and controlled oversight.",
      "The later stage centers on harvest readiness, operational planning, and preparing mature trees for the next commercial step in the cycle.",
    ],
  },
  investment: {
    header: {
      badge: "Investment Overview",
      title: "Premium Agroforestry Investment",
      description: "Proposed fund shareholding. Professional management. Long-term agroforestry exposure.",
    },
    agarwoodEyebrow: "Agarwood Programme",
    agarwoodTitle: "AGARWOOD: Aquilaria crassna",
    agarwoodIntroParagraphs: [
      "One of the world's most valuable natural products. Cultivated exclusively by Golden Forests.",
      "Aquilaria crassna is a tropical tree species that produces agarwood, prized for its complex fragrance. When inoculated with specific fungi, the tree creates dense, resinous heartwood known as oud, commanding premium prices across global luxury markets for perfumery, incense and traditional medicine.",
      "Golden Forests cultivates Aquilaria crassna using exclusive licensed inoculation technology, producing superior resin quality and consistent yields.",
    ],
    agarwoodMarketTitle: "A scarce natural product serving established luxury and cultural markets.",
    agarwoodMarketDescription:
      "Rising demand across Middle Eastern, Asian and luxury Western markets, combined with supply constraints from CITES regulations and depleted wild populations, creates sustained price pressure. Cultivated agarwood from verified sustainable sources commands premium positioning.",
    agarwoodReturnsTitle: "Illustrative harvest realisation in years 9-10.",
    agarwoodReturnsDescription:
      "The current model uses tree-equivalent shares in a proposed agarwood fund compartment. Harvest proceeds are modelled for years 9-10 after a 10% Agarwood Management Revenue Share and applicable costs. Outcomes and distributions are not guaranteed and remain subject to definitive documents.",
    agarwoodStrengthsTitle: "Competitive Strengths",
    agarwoodStrengths: [
      "First company issued a Wildlife Permit by the Philippine Department of Environment and Natural Resources (DENR) to cultivate Aquilaria crassna, delivering a significant first-mover regulatory advantage",
      "Licensed inoculation protocols producing superior resin quality",
      "CITES regulations limit wild harvesting, increasing cultivated oud value",
      "Established demand from luxury fragrance houses, traditional medicine markets and high-net-worth collectors",
    ],
    agarwoodLearnMoreLabel: "Learn More",
    agarwoodLearnMoreHref: "/contact",
    agarwoodDownloadLabel: "Request Agarwood exposé",
    agarwoodDownloadHref: "https://webforms.pipedrive.com/f/6Ox6XFcTiL7Gkj7c8kPmK8LtXoKWm7FKGyfDUa8d5X3aNO0lKTy5EAKb11khVTtd2r",
    agarwoodContactLabel: "Contact Our Team",
    mangoEyebrow: "Mango Programme",
    mangoTitle: "MANGO: Sweet Elena mango",
    mangoIntroParagraphs: [
      "A proprietary variety. Exclusive to Golden Forests.",
      "Sweet Elena is an exclusive Carabao mango cultivar developed through proprietary dwarfing techniques and selective breeding in collaboration with President Ramon Magsaysay State University. This variety produces premium export-grade fruit with exceptional sweetness, extended shelf life and year-round fruiting capability, a significant advantage over standard mango varieties limited to seasonal production.",
    ],
    mangoMarketTitle: "Premium Philippine mango exposure with domestic and export-market potential.",
    mangoMarketDescription:
      "Premium varieties command significant price premiums in international export markets. Year-round production capability positions Sweet Elena to supply high-value markets during off-season periods when competing supply is limited.",
    mangoReturnsTitle: "Illustrative harvest proceeds from years 5-25.",
    mangoReturnsDescription:
      "The current model uses tree-equivalent shares in a proposed mango fund compartment. Mango may begin producing in year 5, with potential shareholder distributions after a 20% Mango Harvesting Commission and permitted operating deductions. Timing and amounts are not guaranteed.",
    mangoStrengthsTitle: "Competitive Strengths",
    mangoStrengths: [
      "Sweet Elena mango supported by cultivar research and dwarfing techniques",
      "High-density cultivation: 416 trees per hectare versus 100-150 for traditional mango plantations",
      "Year-round fruiting cycles enable harvest during high-price periods",
      "Export-grade quality commands price premiums over domestic varieties",
      "Long-duration production model extending through year 25, subject to actual yields and operating conditions",
    ],
    mangoLearnMoreLabel: "Learn More",
    mangoLearnMoreHref: "/contact",
    mangoDownloadLabel: "Request Mango exposé",
    mangoDownloadHref: "https://webforms.pipedrive.com/f/6xQwKZ6bimvjlCRgZoVzczm8SQ2MomeApjsqHTj3T0x6NcKw4DsPP0nIFMEltUvlkv",
    mangoContactLabel: "Contact Our Team",
    portfolioEyebrow: "Portfolio Strategy",
    portfolioTitle: "Diversification Through Complementary Assets",
    portfolioDescription:
      "Agarwood and mango occupy different markets and operate on different timelines. A combined fund allocation may diversify crop and harvest timing, but it does not eliminate biological, market, operational, liquidity or regulatory risk.",
    portfolioBenefits: [
      "Timeline diversification: 10-year agarwood cycle complements 25-year mango lifecycle",
      "Market diversification: luxury goods and agricultural commodities respond to different economic drivers",
      "Illustrative timing: mango proceeds may begin in year 5, with agarwood realisation modelled for years 9-10",
      "Risk diversification: dual-crop exposure may reduce, but cannot remove, single-commodity concentration risk",
    ],
    portfolioDownloadLabel: "Request Current Investment Materials",
    portfolioDownloadHref: "/contact",
    portfolioContactLabel: "Speak to Our Team",
    faqTitle: "Frequently Asked Questions",
    faqDescription:
      "Have more questions?",
    faqQuestions: [
      "Who can invest, and what is the minimum subscription?",
      "What do I own as a shareholder?",
      "What documentation would I receive?",
      "How are fees, costs and distributions structured?",
      "How are plantation losses and replacement stock handled?",
    ],
    faqAnswers: [
      "The opportunity is intended only for eligible professional and corporate investors, not retail clients. The current materials use USD 100,000 as an indicative reference subscription, but the actual minimum and eligibility requirements will be determined by the relevant platform and definitive offering documents.",
      "Investors would hold shares in the relevant fund compartment. A share may economically correspond to an underlying tree-equivalent reference, but shareholders do not directly own or receive a proprietary interest in any individual tree, planting block, land or plantation asset.",
      "Subject to completion of the structure, investors would receive the relevant subscription and shareholder documentation, evidence of their shareholding, and reporting or communications provided under the governing documents.",
      "The current base case applies a 10% Agarwood Management Revenue Share to realised agarwood sales and a 20% Mango Harvesting Commission to gross mango sales, together with permitted crop-specific costs and deductions. Final mechanics and any distributions are governed exclusively by definitive documents.",
      "The operating model includes approximately 20% surplus replacement stock and insurance is expected to be maintained for specified plantation risks. These controls reduce but do not eliminate loss; coverage, exclusions, claims and replacement arrangements remain subject to applicable policies and governing documents.",
    ],
    faqDocumentLabel: "View FAQ Document",
    faqDocumentHref: "/GF-FAQ-July-2026.pdf",
  },
  ecotourism: {
    header: {
      badge: "Plantation Visit Programme",
      title: "See the plantation operations first hand",
      description:
        "Optional visits for eligible professional and corporate investors, arranged subject to operational availability",
    },
    introParagraphs: [
      "Golden Forests intends to offer eligible professional and corporate investors the opportunity to visit operational plantation sites in Zambales and Negros, Philippines and, where applicable, view assets associated with the relevant fund.",
      "A visit may include guided plantation access, operational briefings and discussions with management or technical teams. The itinerary, hospitality, access and timing are confirmed individually and remain subject to plantation conditions and availability.",
      "A site visit is provided for operational familiarisation only and does not replace independent legal, financial, tax or operational due diligence.",
    ],
    ctaLabel: "Register Your Interest",
    featuredVideoEyebrow: "Plantation Visit Video",
    featuredVideoTitle: "Experience the Visit Before You Arrive",
    featuredVideoDescription:
      "A preview of the plantation visit experience, connecting plantation oversight in Zambales with the wider travel programme, premium hospitality, and onward access through Clark to key island destinations.",
    guideTitle: "Travel Guide Overview",
    guideItems: [
      "Beaches in San Antonio, Zambales",
      "Sundowners Resort in Botolan, Zambales",
      "Clark International Airport (CRK), Pampanga",
      "Flight routes to Cebu, Coron, El Nido, Bohol, Surigao, and Boracay",
    ],
    flightsTitle: "Clark Flight Destinations",
    flightItems: [
      "Cebu (CEB)",
      "Coron / Busuanga (USU)",
      "Boracay via Caticlan (MPH)",
      "Bohol-Panglao (TAG)",
      "El Nido (ENI)",
      "Surigao (SUG), gateway to Siargao and Sohoton Cove",
    ],
    routeTitle: "Suggested Route From Manila",
    routeSteps: [
      "Travel north from Metro Manila to Zambales province by car (Approx. 4.5 hours).",
      "Visit Pundaquit, Anawangin, Nagsasa, and Capones.",
      "Continue north to Botolan for Sundowners Zambales.",
      "Travel east to Clark International Airport (about 2 hours by car).",
      "Fly from Clark to Cebu, Coron, Surigao, El Nido, Bohol, or Boracay.",
    ],
    contextTitle: "Travel Context",
    contextItems: [
      "Zambales combines plantation oversight with high-value leisure access.",
      "Clark International Airport functions as the practical connector for island circuits.",
      "Clients can structure visits as: Zambales coast + resort + island destination.",
    ],
    galleryTitle: "Plantation Visit Gallery",
    featuredDestinationNames: [
      "San Antonio Beaches, Zambales",
      "Manami Resort, Sipalay",
      "Plantation Drone & Surveillance View",
      "Clark International Airport",
    ],
    featuredDestinationDetails: [
      "The local area surrounding the plantation sites in Southern Zambales.",
      "A five-star luxury nature resort in Sipalay, Negros Occidental, offering private villas and suites in a secluded coastal setting.",
      "A live operational perspective from the plantation environment and monitoring footprint.",
      "A practical gateway for international investors travelling into the region.",
    ],
    featuredDestinationImages: [
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352600/golden-forests/ecotourism-san-antonio-beaches.jpg",
      "https://www.manamiresort.com/wp-content/uploads/sites/6/2025/01/Manami_Main-Pool-1024x683-1.jpg",
      "https://res.cloudinary.com/dezfh7wug/image/upload/v1776242289/golden-forests/asset-management-plantation-drone-20260415.png",
      "https://res.cloudinary.com/dezfh7wug/image/upload/v1776242289/golden-forests/asset-management-clark-airport-20260415.png",
    ],
  },
  home: {
    heroBadge: "Tree Investment Site",
    heroTitle: "Structured access to sustainable agroforestry.",
    heroParagraphs: [
      "Golden Forests provides eligible professional investors with access to managed Philippine agroforestry through shares in dedicated, ring-fenced sub-funds of a Singapore Variable Capital Company (VCC). Subscriptions are introduced through appropriately licensed private-placement intermediaries and remain subject to the definitive offering documents and investor eligibility checks.",
      "The two sub-funds provide separate exposure to income derived from harvested Aquilaria crassna agarwood and Sweet Elena mango. Each share is valued on a tree-equivalent basis for economic allocation and accounting only; shareholders do not own any specific tree, planting block, land, or plantation asset.",
    ],
    primaryCtaLabel: "Request Information",
    secondaryCtaLabel: "Review Plantation Operations",
    narrativeEyebrow: "Why Golden Forests",
    narrativeParagraphs: [
      "Golden Forests combines Philippine operating capability, crop-specific cultivation, AI-enabled monitoring and research relationships with leading agricultural universities. GPS-referenced fund inventory, operational reporting and audit processes are intended to support institutional visibility.",
      "The operating model includes one native Philippine tree for each corresponding underlying commercial tree represented in the fund allocation model, alongside community employment and long-term environmental stewardship.",
      "Our mission is to operate a professionally managed agroforestry platform that supports responsible capital formation, sustainable production and enduring value for shareholders, communities and the environment.",
    ],
    pillarTitles: [
      "Structured Fund Access",
      "Professional Management",
      "Environmental Impact",
    ],
    pillarTaglines: [
      "PROFESSIONAL INVESTORS.\nFUND SHAREHOLDING.\nSTRUCTURED GOVERNANCE.",
      "EXPERT CULTIVATION.\nADVANCED TECHNOLOGY.\nRESEARCH-BACKED RESULTS.",
      "ONE-TO-ONE NATIVE TREE REFORESTATION.",
    ],
    pillarDescriptions: [
      "Fund shareholding. Structured reporting.",
      "Advanced technology. Research-backed results.",
      "One native Philippine tree for each corresponding underlying commercial tree represented in the fund allocation model.",
    ],
    pillarBullets: [
      "Proposed crop-specific fund compartments.",
      "Tree-equivalent references for economic allocation and reporting only.",
      "Shareholder rights governed by definitive transaction documents.",
      "AI-enabled drone surveillance monitors growth conditions.",
      "Environmental sensors track soil health and climate patterns.",
      "Strategic partnerships with leading Philippine agricultural universities.",
      "Measurable sustainability through PEFC certification pathways.",
      "Biodiversity monitoring.",
      "Verifiable carbon sequestration.",
    ],
    differentiationEyebrow: "Built for investor confidence",
    differentiationTitle: "The differentiation is in the permit, the platform, and the plantation science.",
    differentiatorTitles: [
      "Regulated first-mover position",
      "Science-led plantation execution",
      "Agroforestry Intelligence",
      "Research collaboration",
    ],
    differentiatorDescriptions: [
      "Golden Forests holds the first Wildlife Permit issued by the DENR for exotic Aquilaria crassna cultivation in the Philippines.",
      "Exclusive inoculation formulas, DNA-aligned cultivation protocols, and university-developed mango dwarfing techniques shape every hectare.",
      "GPS-referenced fund inventory, drone surveillance, geotagging and audit processes are intended to support institutional visibility.",
      "PRMSU, VSU, and UPLB support continuous refinement of cultivation, productivity, and sustainable agroforestry innovation.",
    ],
    investmentSectionEyebrow: "Dual Investment Opportunities",
    investmentSectionTitle: "Two crop-specific pathways with different harvest horizons.",
    investmentOpportunityTitles: ["Agarwood", "Mango"],
    investmentOpportunityDescriptions: [
      "Aquilaria crassna exposure through tree-equivalent fund shares, with licensed inoculation technology and illustrative harvest realisation in years 7-10.",
      "Sweet Elena mango exposure through tree-equivalent fund shares, with production modelled from year 5 through year 25. Distributions are not guaranteed.",
    ],
    investmentOpportunityLearnMoreLabels: ["Learn More", "Learn More"],
    investmentOpportunityLearnMoreHrefs: ["/investment#agarwood", "/investment#mango"],
    investmentOpportunityDownloadLabels: ["Request Agarwood exposé", "Request Mango exposé"],
    investmentOpportunityDownloadHrefs: [
      "https://webforms.pipedrive.com/f/6Ox6XFcTiL7Gkj7c8kPmK8LtXoKWm7FKGyfDUa8d5X3aNO0lKTy5EAKb11khVTtd2r",
      "https://webforms.pipedrive.com/f/6xQwKZ6bimvjlCRgZoVzczm8SQ2MomeApjsqHTj3T0x6NcKw4DsPP0nIFMEltUvlkv",
    ],
    credibilityEyebrow:
      "Every cultivation decision Golden Forests makes is informed by active research partnerships with three of the Philippines’ leading agricultural universities.",
    credibilityTitle: "Strategic research partnerships with leading Philippine agricultural universities.",
    credibilityPartnerNames: [
      "President Ramon Magsaysay State University",
      "Visayas State University",
      "University of the Philippines Los Baños",
    ],
    credibilityPartnerLeadLines: [
      "Mango research and cultivar development.",
      "Soil science and integrated pest management.",
      "Elite variety propagation.",
    ],
    credibilityPartnerBodyLines: [
      "Research partner in Sweet Elena's development, supporting the dwarfing and induced flowering protocols.",
      "Soil health and pest management research applied directly to plantation cultivation across Zambales province.",
      "Cultivation protocols and propagation expertise supporting consistent, premium production standards across both programmes.",
    ],
    credibilityPartnerDescriptions: [
      "Mango research and cultivar development. Research partner in Sweet Elena's development, supporting the dwarfing and induced flowering protocols.",
      "Soil science and integrated pest management. Soil health and pest management research applied directly to plantation cultivation across Zambales province.",
      "Elite variety propagation. Cultivation protocols and propagation expertise supporting consistent, premium production standards across both programmes.",
    ],
    credibilityPartnerLogoUrls: [
      "https://res.cloudinary.com/dezfh7wug/image/upload/v1774841394/golden-forests/President_Ramon_Magsaysay_State_University.png",
      "https://res.cloudinary.com/dezfh7wug/image/upload/v1774841395/golden-forests/VSU_Seal_2022.png",
      "https://res.cloudinary.com/dezfh7wug/image/upload/v1774841396/golden-forests/University_of_the_Philippines_seal_2017.png",
    ],
    credibilityPartnerLogoAlts: [
      "President Ramon Magsaysay State University logo",
      "Visayas State University logo",
      "University of the Philippines Los Baños logo",
    ],
    missionEyebrow: "Closing CTA",
    missionStatement: "Long-term agroforestry exposure. Disciplined operations. Responsible stewardship.",
    missionPanelText: " ",
    missionCtaLabel: "Contact Our Team",
    missionSecondaryCtaLabel: "Download Overview",
    closingTitles: [
      "Agarwood opportunity",
      "Mango programme",
      "Impact alongside long-term participation",
    ],
    closingDescriptions: [
      "One of the world's rarest and most valuable trees, cultivated through a controlled programme supported by licensed inoculation formulas.",
      "Sweet Elena mango applies university-developed dwarfing techniques to support high-density planting and stronger land efficiency.",
      "The model is designed so plantation prosperity is shared with investors, local communities, and the wider Philippine landscape.",
    ],
  },
  nursery: {
    header: {
      badge: "Propagation Site",
      title: "Nursery Operations",
      description:
        "The nursery facility in Zambales province prepares agarwood and mango planting stock for planned fourth-quarter 2026 deployment, subject to operational readiness.",
    },
    overviewEyebrow: "Current nursery stock",
    overviewTitle: "Propagation Overview",
    overviewDescription: "Live nursery counts for Aquilaria crassna agarwood and Sweet Elena mango.",
    stockLabels: ["Aquilaria crassna agarwood seedlings", "Sweet Elena mango seedlings"],
    stockDescriptions: [
      "Healthy nursery stock prepared for the current Aquilaria crassna program.",
      "Healthy nursery stock prepared for the current Sweet Elena Carabao program.",
    ],
    saleHeaderPrefix: "Available for sale as of",
    saleCardLabels: [
      "Agarwood seedlings available for sale",
      "Sweet Elena mango seedlings available for sale",
      "Carabao mango inventory available for sale",
    ],
    saleCardNotes: ["Current inventory", "Current inventory", "Current inventory"],
    galleryTitle: "Live Seedling Gallery",
    galleryLinkLabel: "View full gallery",
    propagationTitle: "Stock Propagation",
    propagationDescriptions: [
      "Aquilaria crassna stock is raised under standardized nursery protocols before field deployment. A 20% surplus planting buffer is maintained to support replacement commitments and mortality controls.",
      "Carabao x Elena mango stock is propagated using grafting and dwarfing techniques, induced flowering applications that support earlier fruiting, pest & disease control, and manageable canopy structure for high-density planting. A 20% surplus planting buffer is maintained to support replacement commitments and mortality controls.",
    ],
    dashboardTitle: "Growth Dashboard",
    growthLabels: ["Agarwood Height", "Mango Height"],
    growthDescriptions: [
      "Average tracked nursery growth for Aquilaria crassna.",
      "Average tracked nursery growth for Sweet Elena mango.",
    ],
    mortalityLabel: "Mortality Rate",
    updatedPrefix: "Updated:",
    emptyStateLabel: "No data available",
    technologyTitle: "Nursery Technology Protocol",
    technologyTitles: ["Smart Irrigation", "Climate Control", "Pest Management", "Soil Analytics"],
    technologyDescriptions: [
      "Automated moisture-based watering systems reduce water waste and prevent root rot.",
      "UV-filtered shade netting and ambient temperature regulation for optimized photosynthesis.",
      "Organic, preemptive prophylactic treatments to ensure robust disease resistance.",
      "Continuous pH and macronutrient monitoring of custom substrate blends.",
    ],
  },
  plantation: {
    header: {
      badge: "Operations",
      title: "Professionally Managed Philippine Plantations",
      description:
        "AI-enabled intelligence. Scientific partnerships. Transparent operations.",
    },
    heroTitle: "Professionally Managed Philippine Plantations",
    heroDescription: "AI-enabled intelligence. Scientific partnerships. Transparent operations.",
    overviewEyebrow: "Zambales and Negros Operations",
    overviewTitle: "Zambales and Negros Operations",
    overviewDescription:
      "Golden Forests operates agarwood and mango plantations in Zambales and Negros province, combining advanced agricultural science with AI-enabled monitoring systems to optimise tree health, growth conditions and harvest outcomes.",
    overviewParagraphs: [
      "Golden Forests operates agarwood and mango plantations in Zambales and Negros province, combining advanced agricultural science with AI-enabled monitoring systems to optimise tree health, growth conditions and harvest outcomes.",
      "Every plantation is secured with 24-hour on-site security, solar-powered irrigation infrastructure and structured maintenance protocols ensuring consistent care throughout cultivation cycles.",
    ],
    overviewPortalCtaLabel: "Explore Our Plantation Operations",
    overviewPortalCtaHref: "https://cadi-website.onrender.com/",
    intelligenceSectionTitle: "Agroforestry Intelligence",
    intelligenceSectionDescription: "Golden Forests applies Agroforestry Intelligence as an operating discipline, not just a technology layer.",
    intelligenceTitles: ["Real-time Monitoring", "Predictive Analytics", "Precision Agriculture"],
    intelligenceTaglines: ["Every tree, every condition, every day.", "Data that drives decisions.", "Science applied at plantation level."],
    intelligenceDescriptions: [
      "Soil moisture, nutrients and pH levels tracked continuously alongside climate analysis and early pest detection through aerial canopy surveillance.",
      "Growth tracking, yield forecasting and harvest timing optimisation ensure resources are deployed at exactly the right moment.",
      "Smart irrigation, drone-supported health mapping and targeted fertilisation protocols maximise biological asset performance across every site.",
    ],
    universitySectionTitle: "University Partnerships",
    universitySectionIntro: "Science is at the root of everything we do",
    universitySectionDescription:
      "Every cultivation decision Golden Forests makes is informed by active research partnerships with three of the Philippines’ leading agricultural universities.",
    universityPartnerNames: [
      "President Ramon Magsaysay State University (PRMSU)",
      "Visayas State University (VSU)",
      "University of the Philippines Los Baños (UPLB)",
    ],
    universityPartnerLeadLines: [
      "Sweet Elena mango cultivar development.",
      "Soil science research.",
      "Elite variety propagation.",
    ],
    universityPartnerBodyLines: [
      "Dwarfing techniques and induced flowering protocols.",
      "Integrated pest management and environmental sustainability.",
      "Post-harvest technologies and certification pathways.",
    ],
    universityPartnerDescriptions: [
      "Sweet Elena mango cultivar development. Dwarfing techniques and induced flowering protocols.",
      "Soil science research. Integrated pest management and environmental sustainability.",
      "Elite variety propagation. Post-harvest technologies and certification pathways.",
    ],
    riskSectionTitle: "Operational Risk Controls",
    riskSectionDescription: "Controls are designed to manage plantation risks; they cannot eliminate risk or guarantee investor outcomes.",
    riskTitles: ["Harvesting Buffer", "Replacement Tree Buffer", "Diversified Cultivation Sites", "Professional Agronomic Management"],
    riskTaglines: ["Fruit Resilience", "Mortality resilience.", "Strength in spread.", "Rigorous by design."],
    riskDescriptions: [
      "Mango harvesting-return projections incorporate only 80% of allocated trees fruiting annually, providing a 20% buffer within the modeled yield assumptions.",
      "The operating model includes approximately 20% surplus planting stock to support mortality replacement within fund-managed inventory. Replacement timing and suitability depend on actual conditions.",
      "Multiple plantation locations across Zambales reduce concentration risk from localised weather events or operational challenges.",
      "Quarterly plantation inspections, structured maintenance protocols and continuous monitoring throughout every cultivation cycle.",
    ],
    environmentalSectionTitle: "Environmental Commitment",
    environmentalSectionSubtitle: " ",
    environmentalSectionDescription:
      "The operating model intends to plant one native Philippine species for each corresponding underlying commercial tree represented in the fund allocation model, supporting restoration and biodiversity objectives alongside plantation operations.",
    environmentalSectionTagline: "Sustainability Pathways: measurable commitments, not aspirations.",
    environmentalItems: [
      "PEFC certification progress",
      "FSC certification pathway",
      "Biodiversity monitoring and habitat restoration",
      "Carbon sequestration tracking and verification",
      "Preliminary 25-year projection: approximately 1.16 million tonnes of CO₂ sequestered across agarwood, mango and native-tree planting",
      "Native Philippine tree species account for approximately 568,000 tonnes, or 49%, of projected sequestration",
      "Projection uses age-adjusted, maturity-weighted rates and IPCC LULUCF carbon-accounting guidance",
      "Any carbon-credit issuance would require project registration, monitoring and independent verification under an applicable standard",
      "Sustainable resource management aligned with UN Global Compact principles",
    ],
    transparencySectionTitle: "Investor Transparency",
    transparencySectionDescription: "Operational visibility is designed around the relevant fund, planting blocks and biological-asset pools—not direct ownership of individual trees.",
    transparencyItems: [
      "FUND-MANAGED ASSET TRACEABILITY. GPS-referenced or geotagged records support fund-level inventory and operational control; they do not assign specific trees to individual shareholders.",
      "SECURE INVESTOR VISIBILITY. The reporting model contemplates portal access to operational dashboards and documentation, subject to implementation and the governing documents.",
      "REPORTING THROUGHOUT THE LIFECYCLE. The current framework contemplates quarterly operational updates, annual financial reporting where applicable and material-event notices.",
      "OPTIONAL PLANTATION ACCESS. Eligible professional and corporate investors may request a visit to operational sites and relevant fund assets, subject to arrangements and availability.",
    ],
    transparencyPrimaryCtaLabel: "Explore Our Plantation Operations",
    transparencyPrimaryCtaHref: "https://cadi-website.onrender.com/",
    transparencySecondaryCtaLabel: "Contact Our Team",
    transparencySecondaryCtaHref: "/contact",
    overviewCardTitles: ["Site Preparation", "Crop Programs", "Managed Oversight"],
    overviewCardDescriptions: [
      "Plantation operations are structured around staged land preparation, irrigation readiness, planting density control, and field execution planning across Zambales province.",
      "The operational overview covers both Aquilaria crassna agarwood and Sweet Elena mango, each managed under crop-specific cultivation and harvest timelines.",
      "Execution is supported by professional plantation management, operational monitoring, and documented workflows designed for investor visibility and long-term stewardship.",
    ],
    coverageEyebrow: "What This Covers",
    coverageTitle: "The essentials of plantation readiness, crop structure, and operational management.",
    coverageDescription:
      "Golden Forests plantation operations bring together site preparation, crop-specific execution, and managed oversight across both agarwood and mango programs. The detailed operational portal remains available on the main Golden Forests website.",
    coverageHighlightTitles: ["Agarwood rollout", "Mango operations"],
    coverageHighlightDescriptions: [
      "Structured field deployment, monitored growth stages, and resin-cycle management.",
      "High-density orchard planning supported by dwarfing techniques and annual production management.",
    ],
    galleryTitle: "Secured Land & Preparations",
    galleryDescription: "Current documentation of field preparation and planned fourth-quarter 2026 deployment readiness.",
    milestoneTitle: "Q4 2026: Planned Field Deployment",
    milestoneDescription:
      "The current illustrative launch profile targets fourth-quarter 2026 field deployment, subject to legal, administrative and operational completion. Planning includes spacing compliance, irrigation setup, monitoring readiness and early-stage cassava intercropping for agarwood shade.",
    milestoneLabels: ["Agarwood Spacing", "Mango Spacing", "Cassava Intercrop", "2026 Plantation Scale"],
    milestoneValues: ["3m x 2m", "6m x 4m", "Years 1-2", "31,000 Trees"],
    milestoneNotes: [
      "Approx. 1,667 trees per hectare",
      "Approx. 416 trees per hectare",
      "Shade support for young agarwood trees",
      "Illustrative launch inventory: 23,000 agarwood + 8,000 mango",
    ],
    landPreparationTitle: "Land Preparation",
    soilProtocolTitle: "Soil Protocol",
    soilProtocolDescription:
      "Deep ripping and mechanical leveling. Construction of complex contour drainage and terracing to prevent soil erosion during heavy rains while capturing optimal surface moisture.",
    cassavaTitle: "Cassava Intercropping",
    cassavaDescription:
      "During years 1-2, cassava is planted between young agarwood rows as a shade-support intercrop while seedlings establish root systems and canopy resilience.",
    lifecycleTitle: "Lifecycle Management",
    agarwoodLabel: "Agarwood",
    agarwoodSubtitle: "Aquilaria crassna 10-year resin cycle",
    mangoLabel: "Mango",
    mangoSubtitle: "Carabao x Elena annual fruiting cycle",
    agarwoodLifecycleTitles: [
      "Years 0-2: Establishment",
      "Years 3-6: Monitoring & Maintenance",
      "Years 7-8: Innoculation",
      "Years 9-10: Harvest & Extraction",
    ],
    agarwoodLifecycleDescriptions: [
      "Field planting, cassava shade support, irrigation setup, and structured nutrition management focus on strong root anchoring and early canopy development.",
      "Trees remain under scheduled pruning, weed suppression, and AI-assisted health monitoring while trunk and canopy mass build toward inoculation maturity.",
      "Aquilaria crassna enters the controlled inoculation phase, using documented technical protocols to induce resin formation in mature trees.",
      "Harvest and resin extraction are scheduled across years 9 and 10 under documented compliance workflows and controlled realization planning.",
    ],
    mangoLifecycleTitles: [
      "Year 0: Grafting & Nursery",
      "Years 1-4: Establishment & Growth",
      "Years 5-9: Fruiting & Yield Ramp-Up",
      "Years 10-25: Stable Production, Harvest & Sales",
    ],
    mangoLifecycleDescriptions: [
      "Carabao-Elena hybrid mangoes are prepared on dwarf rootstock for high-density planting, with nursery conditioning aligned to the field rollout.",
      "Young trees receive regular care, irrigation, pruning, induced flowering applications, and pest & disease management to build canopy structure and orchard stability.",
      "First fruiting begins in year 5 at about 30 kg per tree, then ramps up annually through years 6 to 9 as productivity increases toward mature output.",
      "Trees target about 100 kg per year under stable annual production, with flower induction supporting harvest cycles and output allocated across export and domestic sales.",
    ],
  },
  management: {
    header: {
      badge: "Leadership",
      title: "Management Team",
      description:
        "Our operations are guided by a multi-disciplinary team combining 80 years within corporate governance, agricultural science, and large-scale operational logistics.",
    },
    helperText: "Click any profile card to view the member's full profile.",
    categoryTitles: ["Executive Management", "Board of Directors"],
    fallbackDetailText: "Details available upon request.",
  },
  photoGallery: {
    backButtonLabel: "Back to Home",
    heroBadge: "Visual Archive",
    heroTitle: "Operational Photo Gallery",
    heroDescription:
      "A curated visual record of nursery propagation, plantation rollout, facilities, and field operations across the Golden Forests plantation programme.",
    statLabels: ["Total Media", "Categories", "Videos", "Current Collection"],
    browseCollectionsTitle: "Browse Collections",
    browseCollectionsDescription: "Switch between the main visual archives.",
    currentCollectionLabel: "Current Collection",
    noResultsTitle: "No matching media found",
    noResultsDescription: "Try a different search term or switch to another category to browse the archive.",
    searchPlaceholder: "Search by title, description, or location...",
    viewHint: "Click any photo to open the full media view.",
    categoryCountLabel: "Category Count",
    showingLabel: "Showing",
    filteredResultsLabel: "Filtered Results",
    currentCollectionValueLabel: "Current Collection",
    collectionsLabelSuffix: "collections",
    searchResultsTitle: "Search Results",
    fullGallerySuffix: "Full Gallery",
    searchSummaryPrefix: "Found",
    searchSummaryMatchSuffix: "matching",
    collectionSummarySingular: "media item available in this collection.",
    collectionSummaryPlural: "media items available in this collection.",
    categoryLabels: ["Nursery", "Plantation", "Facilities", "Team"],
    categorySubtitles: [
      "Propagation, conditioning, and seedling health tracking",
      "Field deployment, land preparation, and growing blocks",
      "Operational assets, infrastructure, and support environments",
      "Management, field staff, and personnel documentation",
    ],
  },
  faq: {
    header: {
      badge: "Investor FAQ",
      title: "Frequently Asked Questions",
      description:
        "Key information for eligible professional and corporate investors on the proposed fund structure, plantation operations, reporting, fees and risks.",
    },
    sectionTitles: [
      "Market Opportunity",
      "Mission, Values, and Sustainability",
      "Fund Shareholding and Investor Information",
      "Technology, Fees, and Operations",
      "Harvests, Returns, and Practical Questions",
    ],
    marketQuestions: [
      "What is the global demand for mangoes?",
      "What is the global demand for agarwood, oud oil, and agarwood chips?",
      "Who is Golden Forests?",
      "Who can invest, and what is the indicative subscription?",
    ],
    marketAnswers: [
      "Mangoes are among the world's most consumed fruits, with global demand continuing to rise as premium export supply remains limited. Golden Forests positions Sweet Elena mango within that higher-value international market.",
      "Agarwood is one of the world's highest-value natural commodities. Its chips are used in incense, medicine, perfumery, and cosmetics, while distilled oud oil continues to benefit from strong luxury fragrance demand across global markets.",
      "Golden Forests is a next-generation agroforestry company combining scientific expertise, AI-enabled plantation management, and sustainable operations to build enduring value for investors, local communities, and the land.",
      "The proposed opportunity is intended only for eligible professional and corporate investors and is not offered to retail clients. Current materials use USD 100,000 as an indicative reference subscription; the actual minimum is subject to the relevant platform and definitive offering terms.",
    ],
    missionQuestions: [
      "What is Golden Forests' mission?",
      "What are Golden Forests' core values?",
      "What is Golden Forests' commitment to sustainability?",
      "What ethical practices does Golden Forests follow?",
    ],
    missionAnswers: [
      "Golden Forests aims to operate a professionally managed agroforestry platform that supports responsible capital formation, environmental resilience and long-term value for shareholders and local communities.",
      "The business is guided by integrity, professionalism, sustainability, quality, innovation, and community empowerment. These principles shape governance, plantation standards, investor relations, and day-to-day field operations.",
      "The plantations are designed around biodiversity, responsible soil and water stewardship, reduced chemical dependency, and waste-conscious cultivation practices that support long-term land health and ecosystem resilience.",
      "Golden Forests emphasises fair treatment of workers, safe conditions, environmental responsibility, staff development, and alignment with recognised sustainability and compliance standards.",
    ],
    ownershipQuestions: [
      "Who owns the plantation assets and what do I own as a shareholder?",
      "What happens if Golden Forests were ever to cease operations?",
      "What documentation would I receive for my subscription?",
      "Can I transfer my shares to someone else?",
    ],
    ownershipAnswers: [
      "The relevant fund is intended to own the underlying plantation assets. Eligible investors would subscribe for shares in one or both crop-specific fund compartments. Tree-equivalent references are used for economic allocation and tracking only and do not confer direct ownership of individual trees, planting blocks, land or plantation assets.",
      "A shareholder's position would be governed by the relevant fund documents and applicable law. If the operator ceased operations, the fund's governance arrangements could include seeking shareholder approval for a replacement operator or another permitted action; no specific outcome is guaranteed.",
      "Subject to completion of the structure, investors would receive the relevant subscription and shareholder documents, evidence of shareholding, and periodic reports or communications provided in accordance with the governing documents.",
      "Transfers would be subject to the fund's constitutional documents, shareholder agreement, eligibility requirements, approvals and compliance checks. Shares should be treated as long-term and illiquid.",
    ],
    technologyQuestions: [
      "What does the AI in goldenforests.ai stand for?",
      "How does Golden Forests use technology in plantation management?",
      "How is water supply managed for plantations?",
      "What fees does Golden Forests charge?",
    ],
    technologyAnswers: [
      "It stands for Agroforestry Intelligence: Golden Forests' proprietary application of artificial intelligence, precision agriculture, monitoring systems, and data-driven plantation management to improve efficiency, yield, and oversight.",
      "The platform supports crop monitoring, yield prediction, irrigation and fertilisation optimisation, pest and disease detection, and more precise use of water and plantation inputs.",
      "Plantations are equipped with irrigation and drainage systems connected to wells and solar-powered pumps, supporting consistent and sustainable water availability throughout the year.",
      "The current base case applies a 10% Agarwood Management Revenue Share to realised agarwood sales and a 20% Mango Harvesting Commission to gross mango sales. Crop-specific audit, reporting, logistics, certification, maintenance and harvesting deductions may also apply. Final mechanics are governed exclusively by definitive documents.",
    ],
    harvestQuestions: [
      "Will I receive annual distributions from the mango fund?",
      "How long is the harvest period for mango trees?",
      "How are damaged trees handled?",
      "How and when do investors receive harvest income?",
      "Why invest in agroforestry in the Philippines?",
    ],
    harvestAnswers: [
      "Not necessarily. Mango production is modelled to begin in year 5, but any shareholder distribution depends on actual harvest proceeds, permitted deductions, reserves, the fund's governing documents and applicable law. Timing and amounts are not guaranteed.",
      "Mango trees typically produce for about 25 years before productivity gradually declines and replacement becomes appropriate.",
      "The operating model includes approximately 20% surplus replacement stock for fund-managed inventory. Replacement arrangements reduce but do not eliminate biological risk and remain subject to actual conditions and governing documents.",
      "Any distributions, if declared, would be paid by the relevant fund to shareholders in accordance with its governing documents, applicable law and normal banking and compliance processes.",
      "The Philippines offers favourable agro-climatic conditions, lower operating costs, and strong long-term potential for high-value crops. Golden Forests pairs that location advantage with annual audits, physical tree verification, and transparent investor access.",
    ],
  },
  _meta: {
    updatedAt: defaultSiteCopyUpdatedAt,
    sections: {
      contact: { updatedAt: defaultSiteCopyUpdatedAt },
      about: { updatedAt: defaultSiteCopyUpdatedAt },
      disclaimer: { updatedAt: defaultSiteCopyUpdatedAt },
      privacyPolicy: { updatedAt: defaultSiteCopyUpdatedAt },
      cookiePolicy: { updatedAt: defaultSiteCopyUpdatedAt },
      compliance: { updatedAt: defaultSiteCopyUpdatedAt },
      technology: { updatedAt: defaultSiteCopyUpdatedAt },
      impact: { updatedAt: defaultSiteCopyUpdatedAt },
      clientServices: { updatedAt: defaultSiteCopyUpdatedAt },
      mangoProgram: { updatedAt: defaultSiteCopyUpdatedAt },
      agarwoodLifeCycle: { updatedAt: defaultSiteCopyUpdatedAt },
      investment: { updatedAt: defaultSiteCopyUpdatedAt },
      ecotourism: { updatedAt: defaultSiteCopyUpdatedAt },
      home: { updatedAt: defaultSiteCopyUpdatedAt },
      nursery: { updatedAt: defaultSiteCopyUpdatedAt },
      plantation: { updatedAt: defaultSiteCopyUpdatedAt },
      management: { updatedAt: defaultSiteCopyUpdatedAt },
      photoGallery: { updatedAt: defaultSiteCopyUpdatedAt },
      videos: { updatedAt: defaultSiteCopyUpdatedAt },
      faq: { updatedAt: defaultSiteCopyUpdatedAt },
    },
  },
};

export function normalizeSiteCopy(parsed: unknown): SiteCopy {
  const data = (parsed ?? {}) as Partial<SiteCopy> & Record<string, any>;
  const july2026MigratedSections: Array<keyof SiteCopy["_meta"]["sections"]> = [
    "contact",
    "about",
    "disclaimer",
    "investment",
    "ecotourism",
    "home",
    "nursery",
    "plantation",
    "faq",
  ];
  const sectionNeedsJuly2026Refresh = (section: keyof SiteCopy["_meta"]["sections"]) => {
    const sectionUpdatedAt = data._meta?.sections?.[section]?.updatedAt ?? data._meta?.updatedAt;
    const parsedUpdatedAt = Date.parse(sectionUpdatedAt ?? "");

    return !Number.isFinite(parsedUpdatedAt) || parsedUpdatedAt < july2026ContentCutoff;
  };
  const sectionNeedsCookieConsentRefresh = (
    section: "privacyPolicy" | "cookiePolicy",
  ) => {
    const sectionUpdatedAt = data._meta?.sections?.[section]?.updatedAt ?? data._meta?.updatedAt;
    const parsedUpdatedAt = Date.parse(sectionUpdatedAt ?? "");

    return !Number.isFinite(parsedUpdatedAt) || parsedUpdatedAt < cookieConsentCopyCutoff;
  };

  const normalizedContact = { ...defaultSiteCopy.contact, ...(data.contact ?? {}) };
  normalizedContact.resourceLabels = (normalizedContact.resourceLabels ?? defaultSiteCopy.contact.resourceLabels).map((label) => {
    if (label === "Download Agarwood Exposé" || label === "Agarwood exposé") {
      return "Request Agarwood exposé";
    }

    if (label === "Download Mango Exposé" || label === "Mango exposé") {
      return "Request Mango exposé";
    }

    if (label === "View Full FAQ Document" || label === "View full FAQs" || label === "Request FAQ Document") {
      return "View FAQ Document";
    }

    if (label === "View Business Prospectus") {
      return "Request Business Prospectus";
    }

    return label;
  }).filter((label) => label !== "Download Investment Overview");
  if (!normalizedContact.resourceLabels.includes("Request Business Prospectus")) {
    normalizedContact.resourceLabels.push("Request Business Prospectus");
  }
  const contactResourceHrefByLabel = new Map<string, string>([
    ["Request Agarwood exposé", "https://webforms.pipedrive.com/f/6Ox6XFcTiL7Gkj7c8kPmK8LtXoKWm7FKGyfDUa8d5X3aNO0lKTy5EAKb11khVTtd2r"],
    ["Request Mango exposé", "https://webforms.pipedrive.com/f/6xQwKZ6bimvjlCRgZoVzczm8SQ2MomeApjsqHTj3T0x6NcKw4DsPP0nIFMEltUvlkv"],
    ["View FAQ Document", "/GF-FAQ-July-2026.pdf"],
    ["Request Business Prospectus", "/contact"],
  ]);
  normalizedContact.resourceHrefs = normalizedContact.resourceLabels.map(
    (label, index) => contactResourceHrefByLabel.get(label) ?? normalizedContact.resourceHrefs?.[index] ?? "/contact",
  );

  if (sectionNeedsJuly2026Refresh("contact")) {
    normalizedContact.heroDescription = defaultSiteCopy.contact.heroDescription;
    normalizedContact.intro = defaultSiteCopy.contact.intro;
    normalizedContact.emailValue = defaultSiteCopy.contact.emailValue;
    normalizedContact.emailHref = defaultSiteCopy.contact.emailHref;
    normalizedContact.managementOfficeAddress = [...defaultSiteCopy.contact.managementOfficeAddress];
    normalizedContact.resourceLabels = [...defaultSiteCopy.contact.resourceLabels];
    normalizedContact.resourceHrefs = [...defaultSiteCopy.contact.resourceHrefs];
  }

  const normalizedAbout = {
    ...defaultSiteCopy.about,
    ...(data.about ?? {}),
    header: { ...defaultSiteCopy.about.header, ...(data.about?.header ?? {}) },
  };

  const usesLegacyAboutHeader =
    normalizedAbout.header.badge === "Corporate Profile" ||
    normalizedAbout.header.title === "About Us" ||
    /Crassna Agroforestry Development Inc|CADI/i.test(normalizedAbout.header.description);

  if (usesLegacyAboutHeader) {
    normalizedAbout.header = { ...defaultSiteCopy.about.header };
  }
  normalizedAbout.uspCardTitles = normalizedAbout.uspCardTitles.map((title) =>
    title === "80+ Years Combined Management Experience" ||
    title === "140 Years Combined Management Experience"
      ? "80 Years Combined Management Experience"
      : title,
  );
  normalizedAbout.differentiatorTitles = normalizedAbout.differentiatorTitles.map((title) =>
    title === "80+ Years Combined Management Experience" ||
    title === "140 Years Combined Management Experience"
      ? "80 Years Combined Management Experience"
      : title,
  );

  const legacyAboutCommitmentItemTitles = [
    ["Direct ownership with complete transparency", "Attractive projected returns", "Professional agronomic management", "Protected ownership rights"],
    ["One-to-one native tree reforestation", "PEFC certification pathways", "Measurable environmental impact", "Sustainable cultivation practices"],
    ["Local employment and skills development", "Community partnerships", "Knowledge transfer and capacity building", "Safe and ethical working conditions"],
  ];

  const legacyAboutCommitmentItemDescriptions = [
    [
      "Your investment represents verified ownership of specific trees on professionally managed plantations. GPS-verified ownership certificates, real-time operational monitoring and quarterly reporting provide institutional-grade transparency throughout cultivation cycles.",
      "Agarwood offers 18.5% projected annualised returns over 10 years. Mango offers 14-23% projected annualised returns over 25 years. Performance-based fee structures align our interests directly with yours.",
      "Eighty-plus years combined management experience across plantation agriculture, forestry science and sustainable investment. AI-enabled monitoring, university research partnerships and structured risk management protocols protect your investment.",
      "Tree ownership remains legally protected even if company operations cease. Ownership can be transferred, included in estates or held as long-term assets with flexible exit options.",
    ],
    [
      "For every commercial tree purchased, we plant one Philippine endemic species in designated restoration areas. Native reforestation supports biodiversity enhancement, habitat restoration and ecosystem resilience across Zambales province.",
      "We are progressing towards Programme for the Endorsement of Forest Certification, demonstrating commitment to internationally recognised sustainability standards and responsible forest management.",
      "Biodiversity monitoring, carbon sequestration tracking and habitat restoration metrics provide verifiable evidence of environmental contribution. Your investment actively restores degraded forestland whilst generating financial returns.",
      "Solar-powered irrigation infrastructure, integrated pest management protocols and precision agriculture techniques minimise environmental footprint whilst optimising biological asset performance.",
    ],
    [
      "Our plantations provide stable employment for local communities in Zambales province. We invest in continuous training, fair wages aligned with UN Global Compact principles, and career progression opportunities for all employees.",
      "We work collaboratively with local communities, supporting economic development whilst respecting traditional land relationships and cultural practices. Our operations create lasting local benefit beyond direct employment.",
      "Through partnerships with President Ramon Magsaysay State University, Visayas State University and University of the Philippines Los Baños, we contribute to Philippine agricultural research excellence and knowledge transfer supporting broader industry advancement.",
      "All staff are employed under Philippine labour laws with comprehensive safety protocols, benefits and ethical treatment standards. We operate with transparency, fairness and respect for all people involved in our operations.",
    ],
  ];

  const aboutUsesLegacyCommitmentCopy =
    JSON.stringify(normalizedAbout.commitmentItemTitles) === JSON.stringify(legacyAboutCommitmentItemTitles) &&
    JSON.stringify(normalizedAbout.commitmentItemDescriptions) === JSON.stringify(legacyAboutCommitmentItemDescriptions);

  if (aboutUsesLegacyCommitmentCopy) {
    normalizedAbout.commitmentItemTitles = defaultSiteCopy.about.commitmentItemTitles.map((items) => [...items]);
    normalizedAbout.commitmentItemDescriptions = defaultSiteCopy.about.commitmentItemDescriptions.map((items) => [...items]);
  }

  normalizedAbout.overviewParagraphs =
    normalizedAbout.overviewParagraphs ?? defaultSiteCopy.about.overviewParagraphs;
  normalizedAbout.overviewParagraphs = normalizedAbout.overviewParagraphs.map((paragraph) =>
    paragraph.trim() ===
    "Golden Forests provides access to professionally managed agarwood and mango plantation exposure in the Philippines through a proposed Singapore Variable Capital Company structure with crop-specific fund compartments."
      ? "Golden Forests provides access to professionally managed agarwood and mango plantation exposure in the Philippines through a Singapore Variable Capital Company structure with two crop-specific sub-funds"
      : paragraph,
  );

  normalizedAbout.leadershipImageUrls = normalizedAbout.leadershipNames.map(
    (_name, index) => normalizedAbout.leadershipImageUrls?.[index] ?? "",
  );
  normalizedAbout.boardImageUrls = normalizedAbout.boardNames.map(
    (_name, index) => normalizedAbout.boardImageUrls?.[index] ?? "",
  );

  const normalizedEcotourism = { ...defaultSiteCopy.ecotourism, ...(data.ecotourism ?? {}) };
  const southernZambalesVisitIntroduction =
    "Golden Forests intends to offer eligible professional and corporate investors the opportunity to visit operational plantation sites in Southern Zambales, Philippines and, where applicable, view assets associated with the relevant fund.";
  const zambalesAndNegrosVisitIntroduction =
    "Golden Forests intends to offer eligible professional and corporate investors the opportunity to visit operational plantation sites in Zambales and Negros, Philippines and, where applicable, view assets associated with the relevant fund.";
  normalizedEcotourism.introParagraphs = normalizedEcotourism.introParagraphs.map((paragraph) =>
    paragraph.trim() === southernZambalesVisitIntroduction ? zambalesAndNegrosVisitIntroduction : paragraph,
  );
  const ecotourismImageMap = new Map<string, string>([
    ["https://upload.wikimedia.org/wikipedia/commons/c/cf/Anawangin_Cove_at_Sunrise.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[0]],
    ["/gallery/sundowners.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[1]],
    ["https://res.cloudinary.com/dz49fckfu/image/upload/v1774352600/golden-forests/ecotourism-sundowners-resort.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[1]],
    ["https://cdn.sanity.io/images/4f3ey4m9/hospitality-production/446f2aa2312326a55e541c086aba4e7c4ee1d8b4-5972x3987.jpg?w=1200&h=800&fit=crop&auto=format&q=80", defaultSiteCopy.ecotourism.featuredDestinationImages[1]],
    ["https://www.manamiresort.com/wp-content/uploads/sites/6/2025/01/beach-resort-in-sipalay-city-2-1024x683-1.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[1]],
    ["https://upload.wikimedia.org/wikipedia/en/9/92/Clark_International_Airport_%28Mabalacat%2C_Pampanga%3B_04-22-2024%29.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[3]],
    ["https://res.cloudinary.com/dezfh7wug/image/upload/v1775462091/golden-forests/plantation-visit-drone-gallery-20260406.png", defaultSiteCopy.ecotourism.featuredDestinationImages[2]],
    ["https://res.cloudinary.com/dz49fckfu/image/upload/v1774352676/golden-forests/ecotourism-clark-airport.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[3]],
    ["https://upload.wikimedia.org/wikipedia/commons/9/90/Osme%C3%B1a_Peak%2C_Cebu%2C_Philippines.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[3]],
    ["/gallery/coron.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[4]],
    ["https://upload.wikimedia.org/wikipedia/commons/c/cd/Boracay_White_Beach.png", defaultSiteCopy.ecotourism.featuredDestinationImages[5]],
    ["https://upload.wikimedia.org/wikipedia/commons/6/68/Chocolate_Hills_Bohol_Philippines.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[6]],
    ["https://upload.wikimedia.org/wikipedia/commons/c/c7/El_Nido_Bay_December_2018.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[7]],
    ["/gallery/cloud9.webp", defaultSiteCopy.ecotourism.featuredDestinationImages[8]],
  ]);

  normalizedEcotourism.featuredDestinationImages = (normalizedEcotourism.featuredDestinationImages ?? defaultSiteCopy.ecotourism.featuredDestinationImages).map(
    (image, index) => ecotourismImageMap.get(image) ?? image ?? defaultSiteCopy.ecotourism.featuredDestinationImages[index],
  );

  const canonicalPlantationVisitNames = defaultSiteCopy.ecotourism.featuredDestinationNames;
  const usesLegacyPlantationVisitGallery =
    normalizedEcotourism.featuredDestinationNames.includes("Oslob, Cebu") ||
    normalizedEcotourism.featuredDestinationNames.length !== canonicalPlantationVisitNames.length ||
    canonicalPlantationVisitNames.some((name, index) => normalizedEcotourism.featuredDestinationNames[index] !== name);

  if (usesLegacyPlantationVisitGallery) {
    normalizedEcotourism.featuredDestinationNames = [...defaultSiteCopy.ecotourism.featuredDestinationNames];
    normalizedEcotourism.featuredDestinationDetails = [...defaultSiteCopy.ecotourism.featuredDestinationDetails];
    normalizedEcotourism.featuredDestinationImages = [...defaultSiteCopy.ecotourism.featuredDestinationImages];
  }

  if (sectionNeedsJuly2026Refresh("ecotourism")) {
    const preservedVisitImages = [...normalizedEcotourism.featuredDestinationImages];
    Object.assign(normalizedEcotourism, defaultSiteCopy.ecotourism, {
      header: { ...defaultSiteCopy.ecotourism.header },
      featuredDestinationImages: preservedVisitImages,
    });
  }

  const normalizedInvestment = {
    ...defaultSiteCopy.investment,
    ...(data.investment ?? {}),
    header: { ...defaultSiteCopy.investment.header, ...(data.investment?.header ?? {}) },
  };
  if (sectionNeedsJuly2026Refresh("investment")) {
    Object.assign(normalizedInvestment, defaultSiteCopy.investment, {
      header: { ...defaultSiteCopy.investment.header },
    });
  }

  if (sectionNeedsJuly2026Refresh("about")) {
    const preservedLeadership = {
      leadershipNames: normalizedAbout.leadershipNames,
      leadershipImageUrls: normalizedAbout.leadershipImageUrls,
      leadershipTitles: normalizedAbout.leadershipTitles,
      leadershipDescriptions: normalizedAbout.leadershipDescriptions,
      boardNames: normalizedAbout.boardNames,
      boardImageUrls: normalizedAbout.boardImageUrls,
      boardTitles: normalizedAbout.boardTitles,
      boardDescriptions: normalizedAbout.boardDescriptions,
    };
    Object.assign(normalizedAbout, defaultSiteCopy.about, preservedLeadership, {
      header: { ...defaultSiteCopy.about.header },
    });
  }
  if (
    normalizedInvestment.agarwoodDownloadLabel === "Download Agarwood Exposé" ||
    normalizedInvestment.agarwoodDownloadLabel === "Agarwood exposé"
  ) {
    normalizedInvestment.agarwoodDownloadLabel = "Request Agarwood exposé";
  }
  if (
    normalizedInvestment.mangoDownloadLabel === "Download Mango Exposé" ||
    normalizedInvestment.mangoDownloadLabel === "Mango exposé"
  ) {
    normalizedInvestment.mangoDownloadLabel = "Request Mango exposé";
  }
  if (
    normalizedInvestment.faqDocumentLabel === "Access our complete FAQ document covering ownership, operations, sustainability, regulatory compliance and more." ||
    normalizedInvestment.faqDocumentLabel === "View Full FAQ Document" ||
    normalizedInvestment.faqDocumentLabel === "Request FAQ Document"
  ) {
    normalizedInvestment.faqDocumentLabel = "View FAQ Document";
    normalizedInvestment.faqDocumentHref = "/GF-FAQ-July-2026.pdf";
  }
  if (normalizedInvestment.faqDocumentLabel === "View FAQ Document") {
    normalizedInvestment.faqDocumentHref = "/GF-FAQ-July-2026.pdf";
  }
  if (
    normalizedInvestment.portfolioTitle ===
    "Two exceptional crops. One powerful portfolio strategy."
  ) {
    normalizedInvestment.portfolioTitle =
      "Two exceptional crops.\nOne powerful portfolio strategy.";
  }
  if (
    normalizedInvestment.portfolioDescription ===
    "Two crops. Two timelines. One balanced portfolio. Combining agarwood and mango investments creates timeline diversification, market risk mitigation and enhanced portfolio returns."
  ) {
    normalizedInvestment.portfolioDescription = defaultSiteCopy.investment.portfolioDescription;
  }
  normalizedInvestment.mangoIntroParagraphs = (
    normalizedInvestment.mangoIntroParagraphs ?? defaultSiteCopy.investment.mangoIntroParagraphs
  ).filter((paragraph) => paragraph.trim() !== removedSweetElenaCultivationRightsLine);

  const legacyHomeInvestmentHrefMap = new Map<string, string>([
    ["/agarwood-life-cycle", "/investment#agarwood"],
    ["/mango-program", "/investment#mango"],
  ]);

  const normalizedHome = {
    ...defaultSiteCopy.home,
    ...(data.home ?? {}),
  };

  const legacyHomeHeroParagraph =
    "Golden Forests provides eligible professional and corporate investors with access to managed Philippine agarwood and mango exposure through a proposed fund share structure. Shareholders participate in the relevant fund and do not directly own individual trees.";

  if (
    normalizedHome.heroParagraphs.length === 1 &&
    normalizedHome.heroParagraphs[0]?.trim() === legacyHomeHeroParagraph
  ) {
    normalizedHome.heroParagraphs = [...defaultSiteCopy.home.heroParagraphs];
  }

  if (sectionNeedsJuly2026Refresh("home")) {
    const preservedPartnerLogos = [...normalizedHome.credibilityPartnerLogoUrls];
    const preservedPartnerLogoAlts = [...normalizedHome.credibilityPartnerLogoAlts];
    Object.assign(normalizedHome, defaultSiteCopy.home, {
      credibilityPartnerLogoUrls: preservedPartnerLogos,
      credibilityPartnerLogoAlts: preservedPartnerLogoAlts,
    });
  }

  const legacyHomeCredibilityEyebrow = "Credibility Markers";

  if (normalizedHome.credibilityEyebrow?.trim() === legacyHomeCredibilityEyebrow) {
    normalizedHome.credibilityEyebrow = defaultSiteCopy.home.credibilityEyebrow;
  }

  const legacyHomePillarTaglines = new Map<string, string>([
    [
      "Tangible assets. Verified ownership. Complete transparency.",
      "TANGIBLE ASSETS.\nVERIFIED OWNERSHIP.\nCOMPLETE TRANSPARENCY.",
    ],
    [
      "Expert cultivation. Advanced technology. Research-backed results.",
      "EXPERT CULTIVATION.\nADVANCED TECHNOLOGY.\nRESEARCH-BACKED RESULTS.",
    ],
    [
      "One-to-one native tree reforestation.",
      "ONE-TO-ONE NATIVE TREE REFORESTATION.",
    ],
  ]);

  normalizedHome.pillarTaglines = (
    normalizedHome.pillarTaglines ?? defaultSiteCopy.home.pillarTaglines
  ).map((tagline, index) => {
    const normalizedTagline = legacyHomePillarTaglines.get(tagline.trim()) ?? tagline;
    return normalizedTagline ?? defaultSiteCopy.home.pillarTaglines[index];
  });

  const normalizedCredibilityDescriptions =
    normalizedHome.credibilityPartnerDescriptions ?? defaultSiteCopy.home.credibilityPartnerDescriptions;
  const leadLines = normalizedHome.credibilityPartnerLeadLines ?? [];
  const bodyLines = normalizedHome.credibilityPartnerBodyLines ?? [];

  normalizedHome.credibilityPartnerLeadLines = normalizedCredibilityDescriptions.map((description, index) => {
    if (leadLines[index]) {
      return leadLines[index];
    }

    const [lead = ""] = description.split(". ");
    return lead.endsWith(".") ? lead : `${lead}.`;
  });

  normalizedHome.credibilityPartnerBodyLines = normalizedCredibilityDescriptions.map((description, index) => {
    if (bodyLines[index]) {
      return bodyLines[index];
    }

    const [, ...restParts] = description.split(". ");
    return restParts.join(". ").trim();
  });

  normalizedHome.investmentOpportunityLearnMoreHrefs = (
    normalizedHome.investmentOpportunityLearnMoreHrefs ?? defaultSiteCopy.home.investmentOpportunityLearnMoreHrefs
  ).map((href, index) => {
    const fallbackHref = index === 0 ? "/investment#agarwood" : index === 1 ? "/investment#mango" : "/investment";
    if (href === "/investment") {
      return fallbackHref;
    }

    return legacyHomeInvestmentHrefMap.get(href) ?? href ?? fallbackHref;
  });
  normalizedHome.investmentOpportunityDownloadLabels = (
    normalizedHome.investmentOpportunityDownloadLabels ?? defaultSiteCopy.home.investmentOpportunityDownloadLabels
  ).map((label, index) => {
    if (index === 0 && (label === "Download Agarwood Exposé" || label === "Agarwood exposé")) {
      return "Request Agarwood exposé";
    }

    if (index === 1 && (label === "Download Mango Exposé" || label === "Mango exposé")) {
      return "Request Mango exposé";
    }

    return label ?? defaultSiteCopy.home.investmentOpportunityDownloadLabels[index];
  });
  normalizedHome.investmentOpportunityDownloadHrefs = (
    normalizedHome.investmentOpportunityDownloadHrefs ?? defaultSiteCopy.home.investmentOpportunityDownloadHrefs
  ).map((href, index) => {
    if (index === 0) {
      return "https://webforms.pipedrive.com/f/6Ox6XFcTiL7Gkj7c8kPmK8LtXoKWm7FKGyfDUa8d5X3aNO0lKTy5EAKb11khVTtd2r";
    }

    if (index === 1) {
      return "https://webforms.pipedrive.com/f/6xQwKZ6bimvjlCRgZoVzczm8SQ2MomeApjsqHTj3T0x6NcKw4DsPP0nIFMEltUvlkv";
    }

    return href ?? defaultSiteCopy.home.investmentOpportunityDownloadHrefs[index];
  });

  const legacyPlantationOverviewDescription =
    "Professionally managed plantations in one of the Philippines' most agriculturally productive provinces.";
  const zambalesOnlyPlantationOverview =
    "Golden Forests operates agarwood and mango plantations in Zambales province, combining advanced agricultural science with AI-enabled monitoring systems to optimise tree health, growth conditions and harvest outcomes.";
  const zambalesAndNegrosPlantationOverview =
    "Golden Forests operates agarwood and mango plantations in Zambales and Negros province, combining advanced agricultural science with AI-enabled monitoring systems to optimise tree health, growth conditions and harvest outcomes.";
  const legacyUniversitySectionIntro = "Science at the root of everything we do.";
  const legacyUniversitySectionDescription =
    "Golden Forests maintains collaborative research relationships with leading Philippine agricultural institutions, supporting advanced cultivation research, elite variety development and sustainable agroforestry innovation.";
  const legacyEnvironmentalSectionSubtitle = "One-to-One Native Reforestation";

  const normalizedPlantation = {
    ...defaultSiteCopy.plantation,
    ...(data.plantation ?? {}),
    header: { ...defaultSiteCopy.plantation.header, ...(data.plantation?.header ?? {}) },
  };

  if (normalizedPlantation.overviewEyebrow === "Zambales Operations") {
    normalizedPlantation.overviewEyebrow = "Zambales and Negros Operations";
  }
  if (normalizedPlantation.overviewTitle === "Zambales Operations") {
    normalizedPlantation.overviewTitle = "Zambales and Negros Operations";
  }
  if (normalizedPlantation.riskTitles[0] === "Insurance Programme") {
    normalizedPlantation.riskTitles[0] = "Harvesting Buffer";
  }
  if (normalizedPlantation.riskTaglines[0] === "Subject to policy terms.") {
    normalizedPlantation.riskTaglines[0] = "Fruit Resilience";
  }
  if (
    normalizedPlantation.riskDescriptions[0] ===
    "Plantation insurance is expected to address specified operational risks, subject to insurer availability, policy limits, exclusions, claims assessment and annual review."
  ) {
    normalizedPlantation.riskDescriptions[0] =
      "Mango harvesting-return projections incorporate only 80% of allocated trees fruiting annually, providing a 20% buffer within the modeled yield assumptions.";
  }
  if (!normalizedPlantation.environmentalItems.some((item) => /\bFSC\b/.test(item))) {
    const pefcIndex = normalizedPlantation.environmentalItems.findIndex((item) => /\bPEFC\b/.test(item));
    normalizedPlantation.environmentalItems.splice(pefcIndex >= 0 ? pefcIndex + 1 : 0, 0, "FSC certification pathway");
  }
  const carbonCommitmentItems = [
    "Preliminary 25-year projection: approximately 1.16 million tonnes of CO₂ sequestered across agarwood, mango and native-tree planting",
    "Native Philippine tree species account for approximately 568,000 tonnes, or 49%, of projected sequestration",
    "Projection uses age-adjusted, maturity-weighted rates and IPCC LULUCF carbon-accounting guidance",
    "Any carbon-credit issuance would require project registration, monitoring and independent verification under an applicable standard",
  ];
  const carbonTrackingIndex = normalizedPlantation.environmentalItems.findIndex((item) =>
    /carbon sequestration tracking/i.test(item),
  );
  carbonCommitmentItems.forEach((item, offset) => {
    if (!normalizedPlantation.environmentalItems.includes(item)) {
      normalizedPlantation.environmentalItems.splice(
        carbonTrackingIndex >= 0 ? carbonTrackingIndex + 1 + offset : normalizedPlantation.environmentalItems.length,
        0,
        item,
      );
    }
  });

  if (sectionNeedsJuly2026Refresh("plantation")) {
    Object.assign(normalizedPlantation, defaultSiteCopy.plantation, {
      header: { ...defaultSiteCopy.plantation.header },
    });
  }

  if (normalizedPlantation.overviewDescription?.trim() === legacyPlantationOverviewDescription) {
    normalizedPlantation.overviewDescription = defaultSiteCopy.plantation.overviewDescription;
  }
  if (normalizedPlantation.overviewDescription?.trim() === zambalesOnlyPlantationOverview) {
    normalizedPlantation.overviewDescription = zambalesAndNegrosPlantationOverview;
  }

  normalizedPlantation.overviewParagraphs = (
    normalizedPlantation.overviewParagraphs ?? defaultSiteCopy.plantation.overviewParagraphs
  )
    .filter((paragraph) => paragraph.trim() !== legacyPlantationOverviewDescription)
    .map((paragraph) =>
      paragraph.trim() === zambalesOnlyPlantationOverview ? zambalesAndNegrosPlantationOverview : paragraph,
    );

  if (normalizedPlantation.universitySectionIntro?.trim() === legacyUniversitySectionIntro) {
    normalizedPlantation.universitySectionIntro = defaultSiteCopy.plantation.universitySectionIntro;
  }

  const usesLegacyUniversitySectionCopy =
    !normalizedPlantation.universitySectionIntro?.trim() &&
    normalizedPlantation.universitySectionDescription?.trim() === legacyUniversitySectionDescription;

  if (usesLegacyUniversitySectionCopy) {
    normalizedPlantation.universitySectionIntro = defaultSiteCopy.plantation.universitySectionIntro;
    normalizedPlantation.universitySectionDescription = defaultSiteCopy.plantation.universitySectionDescription;
  }

  if (normalizedPlantation.environmentalSectionSubtitle?.trim() === legacyEnvironmentalSectionSubtitle) {
    normalizedPlantation.environmentalSectionSubtitle = defaultSiteCopy.plantation.environmentalSectionSubtitle;
  }

  const plantationPartnerDescriptions =
    normalizedPlantation.universityPartnerDescriptions ?? defaultSiteCopy.plantation.universityPartnerDescriptions;
  const plantationPartnerLeadLines = normalizedPlantation.universityPartnerLeadLines ?? [];
  const plantationPartnerBodyLines = normalizedPlantation.universityPartnerBodyLines ?? [];

  normalizedPlantation.universityPartnerLeadLines = plantationPartnerDescriptions.map((description, index) => {
    if (plantationPartnerLeadLines[index]) {
      return plantationPartnerLeadLines[index];
    }

    const [lead = ""] = description.split(". ");
    return lead.endsWith(".") ? lead : `${lead}.`;
  });

  normalizedPlantation.universityPartnerBodyLines = plantationPartnerDescriptions.map((description, index) => {
    if (plantationPartnerBodyLines[index]) {
      return plantationPartnerBodyLines[index];
    }

    const [, ...restParts] = description.split(". ");
    return restParts.join(". ").trim();
  });

  const normalizedClientServices = {
    ...defaultSiteCopy.clientServices,
    ...(data.clientServices ?? {}),
    header: {
      ...defaultSiteCopy.clientServices.header,
      ...(data.clientServices?.header ?? {}),
    },
  };
  if (
    normalizedClientServices.serviceTitles[0] === "Individual Tree Tracking" ||
    normalizedClientServices.header.description ===
      "Client services are structured around secure ownership, lifecycle management, and transparent reporting across the full plantation cycle."
  ) {
    Object.assign(normalizedClientServices, defaultSiteCopy.clientServices, {
      header: { ...defaultSiteCopy.clientServices.header },
      serviceTitles: [...defaultSiteCopy.clientServices.serviceTitles],
      serviceDescriptions: [...defaultSiteCopy.clientServices.serviceDescriptions],
      serviceBullets: defaultSiteCopy.clientServices.serviceBullets.map((items) => [...items]),
    });
  }
  if (
    normalizedClientServices.logisticsDescription ===
    "Zambales province operations are accessible from Clark, Manila, and Subic corridors, with Clark approximately 1.5 hours away and Manila about 4.5 hours by road, plus onward access from Clark to major island destinations."
  ) {
    normalizedClientServices.logisticsDescription =
      defaultSiteCopy.clientServices.logisticsDescription;
  }

  const normalizedDisclaimer = sectionNeedsJuly2026Refresh("disclaimer")
    ? { ...defaultSiteCopy.disclaimer }
    : { ...defaultSiteCopy.disclaimer, ...(data.disclaimer ?? {}) };
  const normalizedPrivacyPolicy = sectionNeedsCookieConsentRefresh("privacyPolicy")
    ? { ...defaultSiteCopy.privacyPolicy }
    : { ...defaultSiteCopy.privacyPolicy, ...(data.privacyPolicy ?? {}) };
  const normalizedCookiePolicy = sectionNeedsCookieConsentRefresh("cookiePolicy")
    ? { ...defaultSiteCopy.cookiePolicy }
    : { ...defaultSiteCopy.cookiePolicy, ...(data.cookiePolicy ?? {}) };
  const normalizedFaq = sectionNeedsJuly2026Refresh("faq")
    ? { ...defaultSiteCopy.faq, header: { ...defaultSiteCopy.faq.header } }
    : {
        ...defaultSiteCopy.faq,
        ...(data.faq ?? {}),
        header: { ...defaultSiteCopy.faq.header, ...(data.faq?.header ?? {}) },
      };
  const normalizedNursery = sectionNeedsJuly2026Refresh("nursery")
    ? { ...defaultSiteCopy.nursery, header: { ...defaultSiteCopy.nursery.header } }
    : {
        ...defaultSiteCopy.nursery,
        ...(data.nursery ?? {}),
        header: { ...defaultSiteCopy.nursery.header, ...(data.nursery?.header ?? {}) },
      };
  const refreshedSectionKeys = [
    ...july2026MigratedSections.filter(sectionNeedsJuly2026Refresh),
    ...(["privacyPolicy", "cookiePolicy"] as const).filter(
      sectionNeedsCookieConsentRefresh,
    ),
  ];
  const normalizedSectionMeta = {
    ...defaultSiteCopy._meta.sections,
    ...(data._meta?.sections ?? {}),
  };

  refreshedSectionKeys.forEach((sectionKey) => {
    normalizedSectionMeta[sectionKey] = {
      updatedAt:
        sectionKey === "privacyPolicy" || sectionKey === "cookiePolicy"
          ? cookieConsentCopyUpdatedAt
          : defaultSiteCopy._meta.sections[sectionKey].updatedAt,
    };
  });
  const normalizedMeta: SiteCopy["_meta"] = {
    ...defaultSiteCopy._meta,
    ...(data._meta ?? {}),
    updatedAt:
      refreshedSectionKeys.length > 0
        ? defaultSiteCopy._meta.updatedAt
        : data._meta?.updatedAt ?? defaultSiteCopy._meta.updatedAt,
    sections: normalizedSectionMeta,
  };

  return siteCopySchema.parse({
    ...defaultSiteCopy,
    ...data,
    typography: {
      ...defaultSiteCopy.typography,
      ...(data.typography ?? {}),
    },
    contact: normalizedContact,
    about: normalizedAbout,
    disclaimer: normalizedDisclaimer,
    privacyPolicy: normalizedPrivacyPolicy,
    cookiePolicy: normalizedCookiePolicy,
    compliance: {
      ...defaultSiteCopy.compliance,
      ...(data.compliance ?? {}),
      header: { ...defaultSiteCopy.compliance.header, ...(data.compliance?.header ?? {}) },
    },
    technology: {
      ...defaultSiteCopy.technology,
      ...(data.technology ?? {}),
      header: { ...defaultSiteCopy.technology.header, ...(data.technology?.header ?? {}) },
    },
    impact: {
      ...defaultSiteCopy.impact,
      ...(data.impact ?? {}),
      header: { ...defaultSiteCopy.impact.header, ...(data.impact?.header ?? {}) },
    },
    clientServices: normalizedClientServices,
    mangoProgram: {
      ...defaultSiteCopy.mangoProgram,
      ...(data.mangoProgram ?? {}),
      header: { ...defaultSiteCopy.mangoProgram.header, ...(data.mangoProgram?.header ?? {}) },
    },
    agarwoodLifeCycle: {
      ...defaultSiteCopy.agarwoodLifeCycle,
      ...(data.agarwoodLifeCycle ?? {}),
      header: {
        ...defaultSiteCopy.agarwoodLifeCycle.header,
        ...(data.agarwoodLifeCycle?.header ?? {}),
      },
    },
    investment: normalizedInvestment,
    ecotourism: {
      ...defaultSiteCopy.ecotourism,
      ...normalizedEcotourism,
      header: { ...normalizedEcotourism.header },
    },
    home: normalizedHome,
    nursery: normalizedNursery,
    plantation: normalizedPlantation,
    management: {
      ...defaultSiteCopy.management,
      ...(data.management ?? {}),
      header: { ...defaultSiteCopy.management.header, ...(data.management?.header ?? {}) },
    },
    photoGallery: { ...defaultSiteCopy.photoGallery, ...(data.photoGallery ?? {}) },
    videos: { ...defaultSiteCopy.videos, ...(data.videos ?? {}) },
    faq: normalizedFaq,
    _meta: normalizedMeta,
  });
}



