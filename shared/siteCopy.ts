import { z } from "zod";

const nonEmptyString = z.string().min(1);
const nonEmptyStringArray = z.array(nonEmptyString).min(1);

const pageHeaderSchema = z.object({
  badge: nonEmptyString,
  title: nonEmptyString,
  description: nonEmptyString,
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

const defaultSiteCopyUpdatedAt = "2026-03-22T00:00:00.000Z";
const removedSweetElenaCultivationRightsLine = "Golden Forests holds exclusive cultivation rights to Sweet Elena.";
export const defaultSiteCopy: SiteCopy = {
  typography: {
    contact: {},
    about: {},
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
    heroDescription: "Discuss direct tree ownership and how we can support your investment objectives.",
    intro:
      "Whether you're exploring agroforestry investment for the first time or ready to discuss your portfolio, our team is here to answer your questions and guide you through the investment process.",
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
    emailValue: "office@goldenforest.ai",
    emailHref: "mailto:office@goldenforest.ai",
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
      "Level 24, Philippines Stock Exchange Tower, One Bonafacio Street, 5th Ave Cor. 28th Street, BGC, Taguig City, Philippines",
    ],
    resourcesTitle: "Investor Resources",
    resourceLabels: [
      "Download Investment Overview",
      "Request Agarwood exposé",
      "Request Mango exposé",
      "Request FAQ Document",
    ],
      resourceHrefs: [
        "https://res.cloudinary.com/dezfh7wug/raw/upload/v1776245088/golden-forests/documents/GF_combined_two_pager_FINAL_20260415.pdf",
        "https://webforms.pipedrive.com/f/6Ox6XFcTiL7Gkj7c8kPmK8LtXoKWm7FKGyfDUa8d5X3aNO0lKTy5EAKb11khVTtd2r",
        "https://webforms.pipedrive.com/f/6xQwKZ6bimvjlCRgZoVzczm8SQ2MomeApjsqHTj3T0x6NcKw4DsPP0nIFMEltUvlkv",
        "https://webforms.pipedrive.com/f/73JK4Ba88zCkMatKgkRraQgTnrL6b4n2Z8f9GizT6vencLt4ooCQMslKP2Lbs2Uj07",
      ],
  },
  about: {
    header: {
      badge: "Company Overview",
      title: "Golden Forests",
      description:
        "Golden Forests is an alternative investment company offering private and professional investors access to sustainably managed, high-value agroforestry plantations in the Philippines.",
    },
    heroTitle: "For investors. For the land. For the people.",
    heroDescription: "Building sustainable value through responsible agroforestry investment.",
    overviewEyebrow: "Growing Wealth. Preserving Nature.",
    overviewTitle: "About us",
    overviewParagraphs: [
      "Golden Forests is a Philippine agroforestry investment platform specialising in professionally managed agarwood and mango plantations. We combine direct tree ownership with institutional-grade transparency, advanced agricultural science and measurable environmental impact.",
      "Operating in Zambales province, Philippines, we provide private and professional investors access to premium biological assets through verified ownership structures, AI-enabled plantation management and strategic partnerships with leading agricultural research institutions.",
      "Our approach integrates financial performance with environmental restoration and community development, creating enduring value for investors whilst supporting ecosystem health and local economic resilience.",
    ],
    uspSectionTitle: "Built on science, regulation, and measurable stewardship.",
    uspCardTitles: [
      "80+ Years Combined Management Experience",
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
      "For every commercial tree purchased, Golden Forests plants one native Philippine species to extend impact beyond the plantation itself.",
    ],
    commitmentSectionTitle: "Our Commitment",
    commitmentColumnTitles: ["For Investors", "For the Land", "For the People"],
    commitmentItemTitles: [
      ["DIRECT OWNERSHIP. TRANSPARENT BY DESIGN.", "PERFORMANCE-BASED RETURNS."],
      ["ONE TREE PURCHASED. ONE NATIVE TREE PLANTED.", "PEFC CERTIFIED."],
      ["EMPLOYMENT ROOTED IN THE COMMUNITY.", "COMMUNITY. PARTNERSHIP. PURPOSE."],
    ],
    commitmentItemDescriptions: [
      [
        "Your investment represents verified ownership of specific trees on professionally managed plantations. GPS-verified ownership certificates, real-time operational monitoring and quarterly reporting give you full visibility throughout every cultivation cycle. Tree ownership remains legally protected even if company operations cease and can be transferred, included in estates or held as a long-term asset.",
        "Agarwood offers 18.5% projected annualised returns over 10 years. Mango offers 14-23% projected annualised returns over 25 years. Both programmes are built on a simple principle: Golden Forests earns only when your trees produce, ensuring our interests are fully aligned with yours.",
      ],
      [
        "For every commercial tree purchased, we plant one Philippine endemic species in designated restoration areas across Zambales province. Native species include Narra, Agoho, Mangono, Molave, Talisay and Belite, each chosen for their contribution to ecosystem restoration. This one-to-one commitment ensures that every plantation we develop actively regenerates the land around it.",
        "We are progressing towards Programme for the Endorsement of Forest Certification, demonstrating our commitment to internationally recognised sustainability standards. Biodiversity monitoring, carbon sequestration tracking and habitat restoration metrics provide verifiable evidence of our environmental contribution. Responsible forest management is not an aspiration at Golden Forests. It is a measurable obligation.",
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
      "Position sustainable agroforestry as a compelling alternative investment, delivering outstanding long-term returns whilst creating local impact and environmental sustainability. Transform Asian tree plantations into internationally recognised, high-value assets through sustainable practices, world-class production and community partnership.",
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
      "GPS verification, drone surveillance, satellite geotagging, and independent annual auditing support visible, traceable asset management.",
      "Each commercial tree purchased is matched by the planting of one native Philippine species, extending ecological value beyond investor ownership.",
    ],
    differentiatorsEyebrow: "What Sets Golden Forests Apart",
    differentiatorsTitle: "Built on science, regulation, and measurable stewardship",
    differentiatorTitles: [
      "80+ Years Combined Management Experience",
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
      "For every commercial tree purchased, Golden Forests plants one native Philippine species to extend impact beyond the plantation itself.",
    ],
    investmentEyebrow: "Investment Products",
    investmentTitle: "Structured around premium biological assets",
    productTitles: [
      "Aquilaria crassna Agarwood",
      "Sweet Elena Carabao Mango",
    ],
    productReturnProfiles: [
      "18.5% annualised returns over 10 years",
      "14% years 1 to 15, 23% years 16 to 25",
    ],
    productDescriptions: [
      "Harvest targeted in years 9 to 10, supported by licensed inoculation protocols and structured plantation oversight.",
      "A proprietary university-developed hybrid designed for premium quality, efficient orchard density, and long-term annual production.",
    ],
    productValues: [
      "USD 292.50 per tree",
      "USD 592.50 per tree",
    ],
    frameworkEyebrow: "Agroforestry Intelligence",
    frameworkTitle: "The operating framework behind every plantation",
    frameworkItems: [
      "Agroforestry Intelligence integrates agronomic science, AI-enabled monitoring systems, and structured plantation management across the cultivation lifecycle.",
      "Zambales province sites are selected through agro-climatic evaluation to optimise growth conditions, land efficiency, and harvest quality.",
      "Operations are built around transparent ownership, auditable reporting, and long-horizon stewardship for investors seeking alternative real-asset exposure.",
    ],
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
        "Client services are structured around secure ownership, lifecycle management, and transparent reporting across the full plantation cycle.",
    },
    serviceTitles: ["Individual Tree Tracking", "Professional Reporting"],
    serviceDescriptions: [
      "Each client receives individually an identified geotagged tree and ownership certificate under sales and management contracts with GPS-verified allocation.",
      "Reporting frameworks are designed for private and institutional clients requiring annual audited updates and continuous lifecycle visibility.",
    ],
    serviceBullets: [
      [
        "Identified asset records per client holding",
        "GPS-geotagged reference location mapping",
        "Official ownership certificate per allocation",
        "Digital portal access for all clients",
        "Ownership can be transferred or inherited",
      ],
      [
        "Annual independent plantation reports",
        "Photo and field progress updates",
        "GPS-verified replacement tree reporting",
        "Real-time dashboard and documentation access",
      ],
    ],
    visitationTitle: "Client Visitation Programme",
    visitationDescription:
      "Golden Forests clients can inspect operations directly through a structured plantation visit program, including curated two-night premium accommodation options including transportation.",
    logisticsTitle: "Logistics",
    logisticsDescription:
      "Zambales province operations are accessible from Clark, Manila, and Subic corridors, with Clark approximately 1.5 hours away and Manila about 4.5 hours by road, plus onward access from Clark to major island destinations.",
    itineraryTitle: "Itinerary",
    itineraryDescription:
      "Typical itineraries include nursery review, plantation walkthrough, management briefing, and optional extended travel from Clark.",
  },
  mangoProgram: {
    header: {
      badge: "Premium Fruit Investment",
      title: "Mango Programme",
      description:
        "The Golden Forests mango programme offers direct ownership of proprietary Sweet Elena Carabao mango trees cultivated on professionally managed plantations in Zambales province.",
    },
    overviewTitle: "What Is Sweet Elena Carabao Mango?",
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
      "Direct legal ownership of individually identified GPS-verified Sweet Elena Carabao mango trees.",
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
      description: "Direct ownership. Professional management. Attractive returns.",
    },
    agarwoodEyebrow: "Agarwood Programme",
    agarwoodTitle: "AGARWOOD: Aquilaria crassna",
    agarwoodIntroParagraphs: [
      "One of the world's most valuable natural products. Cultivated exclusively by Golden Forests.",
      "Aquilaria crassna is a tropical tree species that produces agarwood, prized for its complex fragrance. When inoculated with specific fungi, the tree creates dense, resinous heartwood known as oud, commanding premium prices across global luxury markets for perfumery, incense and traditional medicine.",
      "Golden Forests cultivates Aquilaria crassna using exclusive licensed inoculation technology, producing superior resin quality and consistent yields.",
    ],
    agarwoodMarketTitle: "A USD 89 billion market driven by scarcity.",
    agarwoodMarketDescription:
      "Rising demand across Middle Eastern, Asian and luxury Western markets, combined with supply constraints from CITES regulations and depleted wild populations, creates sustained price pressure. Cultivated agarwood from verified sustainable sources commands premium positioning.",
    agarwoodReturnsTitle: "18.5% projected annualised returns over 10 years.",
    agarwoodReturnsDescription:
      "Harvest occurs in years 9-10, with revenue split 80% to tree owners and 20% operational management fee. Our performance-based fee structure ensures complete alignment of interests.",
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
    mangoTitle: "MANGO: Sweet Elena Carabao Mango",
    mangoIntroParagraphs: [
      "A proprietary variety. Exclusive to Golden Forests.",
      "Sweet Elena is an exclusive Carabao mango cultivar developed through proprietary dwarfing techniques and selective breeding in collaboration with President Ramon Magsaysay State University. This variety produces premium export-grade fruit with exceptional sweetness, extended shelf life and year-round fruiting capability, a significant advantage over standard mango varieties limited to seasonal production.",
    ],
    mangoMarketTitle: "A USD 50 billion global market. Year-round supply advantage.",
    mangoMarketDescription:
      "Premium varieties command significant price premiums in international export markets. Year-round production capability positions Sweet Elena to supply high-value markets during off-season periods when competing supply is limited.",
    mangoReturnsTitle: "14-23% projected annualised returns over 25 years.",
    mangoReturnsDescription:
      "Returns of 14% annualised in years 1-15, increasing to 23% annualised in years 16-25 as trees reach full maturity. Revenue distributions begin year 5, with 80% to tree owners and 20% operational management fee. Our performance-based fee structure ensures complete alignment of interests.",
    mangoStrengthsTitle: "Competitive Strengths",
    mangoStrengths: [
      "Proprietary Sweet Elena variety unavailable to competing growers",
      "High-density cultivation: 416 trees per hectare versus 100-150 for traditional mango plantations",
      "Year-round fruiting cycles enable harvest during high-price periods",
      "Export-grade quality commands price premiums over domestic varieties",
      "Extended 25-year productive period with increasing yields over time",
    ],
    mangoLearnMoreLabel: "Learn More",
    mangoLearnMoreHref: "/contact",
    mangoDownloadLabel: "Request Mango exposé",
    mangoDownloadHref: "https://webforms.pipedrive.com/f/6xQwKZ6bimvjlCRgZoVzczm8SQ2MomeApjsqHTj3T0x6NcKw4DsPP0nIFMEltUvlkv",
    mangoContactLabel: "Contact Our Team",
    portfolioEyebrow: "Portfolio Strategy",
    portfolioTitle: "Diversification Through Complementary Assets",
    portfolioDescription:
      "Agarwood and mango occupy different markets and operate on different timelines. Combined, they create a portfolio with built-in diversification, early cash flow and long-term capital growth.",
    portfolioBenefits: [
      "Timeline diversification: 10-year agarwood cycle complements 25-year mango lifecycle",
      "Market diversification: luxury goods and agricultural commodities respond to different economic drivers",
      "Cash flow optimisation: mango distributions begin year 5, agarwood harvest years 9-10",
      "Risk mitigation: dual-crop exposure reduces single-commodity concentration risk",
    ],
    portfolioDownloadLabel: "Download Two-pager",
    portfolioDownloadHref: "https://res.cloudinary.com/dezfh7wug/raw/upload/v1776245088/golden-forests/documents/GF_combined_two_pager_FINAL_20260415.pdf",
    portfolioContactLabel: "Speak to Our Team",
    faqTitle: "Frequently Asked Questions",
    faqDescription:
      "Have more questions?",
    faqQuestions: [
      "What is the minimum investment?",
      "Who owns the trees I purchase?",
      "What returns can I expect from my investment?",
      "What fees does Golden Forests charge?",
      "What happens if trees are destroyed or damaged?",
    ],
    faqAnswers: [
      "The minimum combined portfolio investment is USD 5,887.50 for 15 trees: 10 Aquilaria crassna agarwood trees and 5 Sweet Elena Carabao mango trees. Volume discounts available.",
      "You do. Investors retain ownership of trees purchased, with Golden Forests managing them on your behalf throughout the tree's lifecycle. Ownership remains fully protected even if the company ceases operations. You can transfer ownership or include trees as part of your estate.",
      "Agarwood offers projected 18.5% annualised returns over 10 years. Mango offers projected 14% annualised returns years 1-15, increasing to 23% annualised years 16-25. Returns depend on harvest yields, market conditions and operational execution.",
      "We charge harvest management fees only: 10% of agarwood harvest proceeds, 20% of mango harvest proceeds. We earn only when your trees produce. No hidden fees or annual management charges. This ensures our interests are fully aligned with yours.",
      "All trees are covered under our Harvest Guarantee Insurance, providing a 100% replacement guarantee for losses caused by typhoons, fire, floods, pests, disease or wild animal damage. Each plantation includes a 20% buffer stock of replacement trees, grown to the same age and size as client-owned trees.",
    ],
    faqDocumentLabel: "Request FAQ Document",
    faqDocumentHref: "https://webforms.pipedrive.com/f/73JK4Ba88zCkMatKgkRraQgTnrL6b4n2Z8f9GizT6vencLt4ooCQMslKP2Lbs2Uj07",
  },
  ecotourism: {
    header: {
      badge: "Plantation Visit Programme",
      title: "See your investment first hand",
      description:
        "A structured two-day plantation visit programme in Zambales province, Philippines",
    },
    introParagraphs: [
      "Golden Forests offers a structured client plantation visit programme, enabling investors to visit operational sites in Southern Zambales, Philippines.",
      "The Company hosts a two-day site programme including guided plantation tours, operational briefings and discussions with management and technical teams. This initiative supports transparency, operational oversight and informed participation in plantation investments.",
      "Travel and accommodation arrangements remain the responsibility of the client.",
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
      "Sundowners Resort, Botolan",
      "Plantation Drone & Surveillance View",
      "Clark International Airport",
    ],
    featuredDestinationDetails: [
      "The local area surrounding the plantation sites in Southern Zambales.",
      "The nearest quality accommodation option for investors planning an overnight stay.",
      "A live operational perspective from the plantation environment and monitoring footprint.",
      "A practical gateway for international investors travelling into the region.",
    ],
    featuredDestinationImages: [
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352600/golden-forests/ecotourism-san-antonio-beaches.jpg",
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352600/golden-forests/ecotourism-sundowners-resort.jpg",
      "https://res.cloudinary.com/dezfh7wug/image/upload/v1776242289/golden-forests/asset-management-plantation-drone-20260415.png",
      "https://res.cloudinary.com/dezfh7wug/image/upload/v1776242289/golden-forests/asset-management-clark-airport-20260415.png",
    ],
  },
  home: {
    heroBadge: "Tree Investment Site",
    heroTitle: "Your investment. Your trees. Your impact.",
    heroParagraphs: [
      "Premium Philippine agroforestry investment with verified ownership, professional management, combining 14-23% projected returns with one-to-one native tree reforestation.",
    ],
    primaryCtaLabel: "Start Your Investment Journey",
    secondaryCtaLabel: "Review Plantation Operations",
    narrativeEyebrow: "Why Golden Forests",
    narrativeParagraphs: [
      "What sets Golden Forests apart is the science and technology behind every plantation. We are the first company to be issued a Wildlife Permit by the Philippine Department of Environment and Natural Resources to cultivate exotic Aquilaria crassna, using exclusively licensed inoculation formulas from Thailand designed specifically for this DNA strain. Our mango programme employs university-developed dwarfing techniques enabling high-density cultivation at more than four times the industry standard, maximising both yield and land efficiency. Every investment is backed by a proprietary AI-enabled agroforestry intelligence platform, delivering institutional-grade transparency through GPS-verified tree locations, drone surveillance, satellite geotagging and independent annual auditing.",
      "For every tree purchased, we plant one native endemic Philippine species, working closely with local communities to ensure that the prosperity generated by our plantations is shared by investors, people and the land. Golden Forests maintains collaborative research relationships with President Ramon Magsaysay State University, Visayas State University and the University of the Philippines Los Baños, supporting continuous innovation in sustainable agroforestry.",
      "Our mission is to deliver exceptional returns through sustainable plantation investment, creating lasting value for investors, communities, and the environment.",
    ],
    pillarTitles: [
      "Direct Ownership",
      "Professional Management",
      "Environmental Impact",
    ],
    pillarTaglines: [
      "TANGIBLE ASSETS.\nVERIFIED OWNERSHIP.\nCOMPLETE TRANSPARENCY.",
      "EXPERT CULTIVATION.\nADVANCED TECHNOLOGY.\nRESEARCH-BACKED RESULTS.",
      "ONE-TO-ONE NATIVE TREE REFORESTATION.",
    ],
    pillarDescriptions: [
      "Verified ownership. Complete transparency.",
      "Advanced technology. Research-backed results.",
      "For every commercial tree purchased, one Philippine endemic tree is planted in designated restoration areas.",
    ],
    pillarBullets: [
      "GPS-verified ownership certificates.",
      "Real-time operational transparency.",
      "Every tree tracked, monitored and documented.",
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
      "GPS verification, drone surveillance, satellite geotagging, and annual auditing provide institutional-grade visibility for investors.",
      "PRMSU, VSU, and UPLB support continuous refinement of cultivation, productivity, and sustainable agroforestry innovation.",
    ],
    investmentSectionEyebrow: "Dual Investment Opportunities",
    investmentSectionTitle: "Two distinct investment pathways, structured for different return horizons.",
    investmentOpportunityTitles: ["Agarwood", "Mango"],
    investmentOpportunityDescriptions: [
      "Premium Aquilaria crassna cultivated with exclusive licensed inoculation technology. Projected 18.5% annualised returns over 10 years, delivering resinous heartwood for the global oud market.",
      "Sweet Elena Carabao mango with proprietary dwarfing techniques enabling year-round fruiting. Projected 14-23% annualised returns over 25 years, supplying premium export-grade fruit to international markets.",
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
    missionStatement: "Your trees. Your returns. Your environmental legacy.",
    missionPanelText: " ",
    missionCtaLabel: "Get Started",
    missionSecondaryCtaLabel: "Download Overview",
    closingTitles: [
      "Agarwood opportunity",
      "Mango programme",
      "Impact alongside returns",
    ],
    closingDescriptions: [
      "One of the world's rarest and most valuable trees, cultivated through a controlled programme supported by licensed inoculation formulas.",
      "Sweet Elena Carabao mango applies university-developed dwarfing techniques to support high-density planting and stronger land efficiency.",
      "The model is designed so plantation prosperity is shared with investors, local communities, and the wider Philippine landscape.",
    ],
  },
  nursery: {
    header: {
      badge: "Propagation Site",
      title: "Nursery Operations",
      description:
        "The nursery facility in Zambales province prepares agarwood and mango planting stock for July 2026 deployment, with continuous visual documentation for client transparency.",
    },
    overviewEyebrow: "Current nursery stock",
    overviewTitle: "Propagation Overview",
    overviewDescription: "Live nursery counts for Aquilaria crassna agarwood and Sweet Elena Carabao mango.",
    stockLabels: ["Aquilaria crassna agarwood seedlings", "Sweet Elena Carabao mango seedlings"],
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
      "Average tracked nursery growth for Sweet Elena Carabao mango.",
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
    overviewEyebrow: "Zambales Operations",
    overviewTitle: "Zambales Operations",
    overviewDescription:
      "Golden Forests operates agarwood and mango plantations in Zambales province, combining advanced agricultural science with AI-enabled monitoring systems to optimise tree health, growth conditions and harvest outcomes.",
    overviewParagraphs: [
      "Golden Forests operates agarwood and mango plantations in Zambales province, combining advanced agricultural science with AI-enabled monitoring systems to optimise tree health, growth conditions and harvest outcomes.",
      "Every plantation is secured with 24-hour on-site security, solar-powered irrigation infrastructure and structured maintenance protocols ensuring consistent care throughout cultivation cycles.",
    ],
    overviewPortalCtaLabel: "Explore Our Plantation Operations",
    overviewPortalCtaHref: "https://goldenforests.ph",
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
      "Sweet Elena Carabao mango cultivar development.",
      "Soil science research.",
      "Elite variety propagation.",
    ],
    universityPartnerBodyLines: [
      "Dwarfing techniques and induced flowering protocols.",
      "Integrated pest management and environmental sustainability.",
      "Post-harvest technologies and certification pathways.",
    ],
    universityPartnerDescriptions: [
      "Sweet Elena Carabao mango cultivar development. Dwarfing techniques and induced flowering protocols.",
      "Soil science research. Integrated pest management and environmental sustainability.",
      "Elite variety propagation. Post-harvest technologies and certification pathways.",
    ],
    riskSectionTitle: "Risk Management",
    riskSectionDescription: "Your investment is protected at every stage of the cultivation cycle.",
    riskTitles: ["Harvest Guarantee Insurance", "Replacement Tree Buffer", "Diversified Cultivation Sites", "Professional Agronomic Management"],
    riskTaglines: ["Complete peace of mind.", "Always prepared.", "Strength in spread.", "Rigorous by design."],
    riskDescriptions: [
      "Comprehensive coverage against typhoons, fire, flooding, pest outbreaks, disease and wild animal damage, with a 100% replacement guarantee on every tree.",
      "A 20% buffer stock of company-owned trees maintained at equivalent age and size ensures immediate replacement if required, with no interruption to your investment cycle.",
      "Multiple plantation locations across Zambales reduce concentration risk from localised weather events or operational challenges.",
      "Quarterly plantation inspections, structured maintenance protocols and continuous monitoring throughout every cultivation cycle.",
    ],
    environmentalSectionTitle: "Environmental Commitment",
    environmentalSectionSubtitle: " ",
    environmentalSectionDescription:
      "For every commercial tree purchased, Golden Forests plants one Philippine endemic species in designated restoration areas. Native species include Narra, Agoho, Mangono, Molave, Talisay and Belite, supporting ecosystem restoration and biodiversity enhancement in Zambales province.",
    environmentalSectionTagline: "Sustainability Pathways: measurable commitments, not aspirations.",
    environmentalItems: [
      "PEFC certification progress",
      "Biodiversity monitoring and habitat restoration",
      "Carbon sequestration tracking and verification",
      "Sustainable resource management aligned with UN Global Compact principles",
    ],
    transparencySectionTitle: "Client Transparency",
    transparencySectionDescription: "Complete visibility throughout your investment lifecycle.",
    transparencyItems: [
      "GPS-verified tree location coordinates",
      "Access to client operations portal with real-time monitoring",
      "Quarterly operational updates and plantation reports",
      "Structured client plantation visit programme (two-day hosted site visits in Zambales)",
    ],
    transparencyPrimaryCtaLabel: "Explore Our Plantation Operations",
    transparencyPrimaryCtaHref: "https://goldenforests.ph",
    transparencySecondaryCtaLabel: "Contact Our Team",
    transparencySecondaryCtaHref: "/contact",
    overviewCardTitles: ["Site Preparation", "Crop Programs", "Managed Oversight"],
    overviewCardDescriptions: [
      "Plantation operations are structured around staged land preparation, irrigation readiness, planting density control, and field execution planning across Zambales province.",
      "The operational overview covers both Aquilaria crassna agarwood and Sweet Elena Carabao mango, each managed under crop-specific cultivation and harvest timelines.",
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
    galleryDescription: "Current documentation of field preparation and July 2026 deployment readiness.",
    milestoneTitle: "July 2026: Field Deployment Milestone",
    milestoneDescription:
      "The July 2026 program transitions nursery stock into field planting. Deployment includes spacing compliance, irrigation setup, AI-assisted monitoring readiness, and early-stage intercropping of cassava for agarwood shade (Years 1-2).",
    milestoneLabels: ["Agarwood Spacing", "Mango Spacing", "Cassava Intercrop", "2026 Plantation Scale"],
    milestoneValues: ["3m x 2m", "6m x 4m", "Years 1-2", "50,000 Trees"],
    milestoneNotes: [
      "Approx. 1,667 trees per hectare",
      "Approx. 416 trees per hectare",
      "Shade support for young agarwood trees",
      "35,000 agarwood + 15,000 mango, each scaling by 10% p.a.",
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
        "Key questions and answers on Golden Forests, tree ownership, mango and agarwood opportunities, operations, fees, sustainability, and investor protections.",
    },
    sectionTitles: [
      "Market Opportunity",
      "Mission, Values, and Sustainability",
      "Ownership and Investor Protection",
      "Technology, Fees, and Operations",
      "Harvests, Returns, and Practical Questions",
    ],
    marketQuestions: [
      "What is the global demand for mangoes?",
      "What is the global demand for agarwood, oud oil, and agarwood chips?",
      "Who is Golden Forests?",
    ],
    marketAnswers: [
      "Mangoes are among the world's most consumed fruits, with global demand continuing to rise as premium export supply remains limited. Golden Forests positions Sweet Elena Carabao mango within that higher-value international market.",
      "Agarwood is one of the world's highest-value natural commodities. Its chips are used in incense, medicine, perfumery, and cosmetics, while distilled oud oil continues to benefit from strong luxury fragrance demand across global markets.",
      "Golden Forests is a next-generation agroforestry company combining scientific expertise, AI-enabled plantation management, and sustainable operations to build enduring value for investors, local communities, and the land.",
    ],
    missionQuestions: [
      "What is Golden Forests' mission?",
      "What are Golden Forests' core values?",
      "What is Golden Forests' commitment to sustainability?",
      "What ethical practices does Golden Forests follow?",
    ],
    missionAnswers: [
      "Golden Forests aims to deliver strong and sustainable returns for investors while advancing ethical plantation management, environmental resilience, and long-term prosperity for local communities.",
      "The business is guided by integrity, professionalism, sustainability, quality, innovation, and community empowerment. These principles shape governance, plantation standards, investor relations, and day-to-day field operations.",
      "The plantations are designed around biodiversity, responsible soil and water stewardship, reduced chemical dependency, and waste-conscious cultivation practices that support long-term land health and ecosystem resilience.",
      "Golden Forests emphasises fair treatment of workers, safe conditions, environmental responsibility, staff development, and alignment with recognised sustainability and compliance standards.",
    ],
    ownershipQuestions: [
      "Who owns the trees I purchase?",
      "What happens if Golden Forests were ever to cease operations?",
      "What documentation will I receive?",
      "Can I transfer my trees to someone else?",
    ],
    ownershipAnswers: [
      "You do. Investors become the legal owners of the trees they purchase, while Golden Forests manages propagation, planting, maintenance, harvesting, and marketing on the owner's behalf under a management agreement.",
      "Your ownership remains protected. If Golden Forests ceased operating, a replacement management company would be appointed so your trees could continue to be maintained and harvested.",
      "Investors receive a Tree Purchase Agreement, a Management Agreement, a Certificate of Ownership, and ongoing annual reporting covering tree growth, plantation performance, and harvest activity.",
      "Yes. Trees are private property and can be sold, gifted, transferred, or inherited, with updated ownership documentation issued once the new owner's details are provided.",
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
      "Golden Forests charges a harvest management fee tied to realised performance: 10% of agarwood harvest proceeds and 20% of mango harvest proceeds, aligning the company's incentives with investor outcomes.",
    ],
    harvestQuestions: [
      "Will I receive annual income from my mango trees?",
      "How long is the harvest period for mango trees?",
      "How are damaged trees handled?",
      "How and when do investors receive harvest income?",
      "Why invest in agroforestry in the Philippines?",
    ],
    harvestAnswers: [
      "Yes. Mango trees are expected to begin producing in years four to five, with annual harvest income continuing for many years thereafter, subject to plantation performance and growing conditions.",
      "Mango trees typically produce for about 25 years before productivity gradually declines and replacement becomes appropriate.",
      "Golden Forests maintains a replacement-tree buffer stock. If a client-owned tree is lost or materially damaged, a matching replacement tree is assigned so productive capacity is preserved.",
      "Harvest proceeds are distributed within the harvest year, and investors can receive payments by bank transfer, cryptocurrency on request, or in person at the Manila office, depending on the available arrangements.",
      "The Philippines offers favourable agro-climatic conditions, lower operating costs, and strong long-term potential for high-value crops. Golden Forests pairs that location advantage with annual audits, physical tree verification, and transparent investor access.",
    ],
  },
  _meta: {
    updatedAt: defaultSiteCopyUpdatedAt,
    sections: {
      contact: { updatedAt: defaultSiteCopyUpdatedAt },
      about: { updatedAt: defaultSiteCopyUpdatedAt },
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

  const normalizedContact = { ...defaultSiteCopy.contact, ...(data.contact ?? {}) };
  normalizedContact.resourceLabels = (normalizedContact.resourceLabels ?? defaultSiteCopy.contact.resourceLabels).map((label, index) => {
    if (index === 1 && (label === "Download Agarwood Exposé" || label === "Agarwood exposé")) {
      return "Request Agarwood exposé";
    }

    if (index === 2 && (label === "Download Mango Exposé" || label === "Mango exposé")) {
      return "Request Mango exposé";
    }

    if (index === 3 && (label === "View Full FAQ Document" || label === "View full FAQs")) {
      return "Request FAQ Document";
    }

    return label ?? defaultSiteCopy.contact.resourceLabels[index];
  });
  normalizedContact.resourceHrefs = (normalizedContact.resourceHrefs ?? defaultSiteCopy.contact.resourceHrefs).map((href, index) => {
    if (index === 1) {
      return "https://webforms.pipedrive.com/f/6Ox6XFcTiL7Gkj7c8kPmK8LtXoKWm7FKGyfDUa8d5X3aNO0lKTy5EAKb11khVTtd2r";
    }

    if (index === 2) {
      return "https://webforms.pipedrive.com/f/6xQwKZ6bimvjlCRgZoVzczm8SQ2MomeApjsqHTj3T0x6NcKw4DsPP0nIFMEltUvlkv";
    }

    if (index === 3) {
      return "https://webforms.pipedrive.com/f/73JK4Ba88zCkMatKgkRraQgTnrL6b4n2Z8f9GizT6vencLt4ooCQMslKP2Lbs2Uj07";
    }

    return href ?? defaultSiteCopy.contact.resourceHrefs[index];
  });

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

  normalizedAbout.leadershipImageUrls = normalizedAbout.leadershipNames.map(
    (_name, index) => normalizedAbout.leadershipImageUrls?.[index] ?? "",
  );
  normalizedAbout.boardImageUrls = normalizedAbout.boardNames.map(
    (_name, index) => normalizedAbout.boardImageUrls?.[index] ?? "",
  );

  const normalizedEcotourism = { ...defaultSiteCopy.ecotourism, ...(data.ecotourism ?? {}) };
  const ecotourismImageMap = new Map<string, string>([
    ["https://upload.wikimedia.org/wikipedia/commons/c/cf/Anawangin_Cove_at_Sunrise.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[0]],
    ["/gallery/sundowners.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[1]],
    ["https://upload.wikimedia.org/wikipedia/en/9/92/Clark_International_Airport_%28Mabalacat%2C_Pampanga%3B_04-22-2024%29.jpg", defaultSiteCopy.ecotourism.featuredDestinationImages[2]],
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

  const normalizedInvestment = {
    ...defaultSiteCopy.investment,
    ...(data.investment ?? {}),
    header: { ...defaultSiteCopy.investment.header, ...(data.investment?.header ?? {}) },
  };
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
    normalizedInvestment.faqDocumentLabel === "View Full FAQ Document"
  ) {
    normalizedInvestment.faqDocumentLabel = "Request FAQ Document";
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
  const legacyUniversitySectionIntro = "Science at the root of everything we do.";
  const legacyUniversitySectionDescription =
    "Golden Forests maintains collaborative research relationships with leading Philippine agricultural institutions, supporting advanced cultivation research, elite variety development and sustainable agroforestry innovation.";
  const legacyEnvironmentalSectionSubtitle = "One-to-One Native Reforestation";

  const normalizedPlantation = {
    ...defaultSiteCopy.plantation,
    ...(data.plantation ?? {}),
    header: { ...defaultSiteCopy.plantation.header, ...(data.plantation?.header ?? {}) },
  };

  if (normalizedPlantation.overviewDescription?.trim() === legacyPlantationOverviewDescription) {
    normalizedPlantation.overviewDescription = defaultSiteCopy.plantation.overviewDescription;
  }

  normalizedPlantation.overviewParagraphs = (
    normalizedPlantation.overviewParagraphs ?? defaultSiteCopy.plantation.overviewParagraphs
  ).filter((paragraph) => paragraph.trim() !== legacyPlantationOverviewDescription);

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

  return siteCopySchema.parse({
    ...defaultSiteCopy,
    ...data,
    typography: {
      ...defaultSiteCopy.typography,
      ...(data.typography ?? {}),
    },
    contact: normalizedContact,
    about: normalizedAbout,
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
    clientServices: {
      ...defaultSiteCopy.clientServices,
      ...(data.clientServices ?? {}),
      header: {
        ...defaultSiteCopy.clientServices.header,
        ...(data.clientServices?.header ?? {}),
      },
    },
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
      header: { ...defaultSiteCopy.ecotourism.header, ...(data.ecotourism?.header ?? {}) },
    },
    home: normalizedHome,
    nursery: {
      ...defaultSiteCopy.nursery,
      ...(data.nursery ?? {}),
      header: { ...defaultSiteCopy.nursery.header, ...(data.nursery?.header ?? {}) },
    },
    plantation: normalizedPlantation,
    management: {
      ...defaultSiteCopy.management,
      ...(data.management ?? {}),
      header: { ...defaultSiteCopy.management.header, ...(data.management?.header ?? {}) },
    },
    photoGallery: { ...defaultSiteCopy.photoGallery, ...(data.photoGallery ?? {}) },
    videos: { ...defaultSiteCopy.videos, ...(data.videos ?? {}) },
    faq: {
      ...defaultSiteCopy.faq,
      ...(data.faq ?? {}),
      header: { ...defaultSiteCopy.faq.header, ...(data.faq?.header ?? {}) },
    },
    _meta: {
      ...defaultSiteCopy._meta,
      ...(data._meta ?? {}),
      sections: {
        ...defaultSiteCopy._meta.sections,
        ...(data._meta?.sections ?? {}),
      },
    },
  });
}



