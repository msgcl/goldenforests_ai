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
    ecotourism: siteCopySectionMetaSchema,
    home: siteCopySectionMetaSchema,
    nursery: siteCopySectionMetaSchema,
    plantation: siteCopySectionMetaSchema,
    management: siteCopySectionMetaSchema,
    photoGallery: siteCopySectionMetaSchema,
    faq: siteCopySectionMetaSchema,
  }),
});

export const contactPageCopySchema = z.object({
  badge: nonEmptyString,
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
});

export const aboutPageCopySchema = z.object({
  header: pageHeaderSchema,
  overviewEyebrow: nonEmptyString,
  overviewParagraphs: nonEmptyStringArray,
  visionTitle: nonEmptyString,
  visionDescription: nonEmptyString,
  missionTitle: nonEmptyString,
  missionDescription: nonEmptyString,
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

export const ecotourismPageCopySchema = z.object({
  header: pageHeaderSchema,
  introParagraphs: nonEmptyStringArray,
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
  pillarDescriptions: nonEmptyStringArray,
  differentiationEyebrow: nonEmptyString,
  differentiationTitle: nonEmptyString,
  differentiatorTitles: nonEmptyStringArray,
  differentiatorDescriptions: nonEmptyStringArray,
  missionEyebrow: nonEmptyString,
  missionStatement: nonEmptyString,
  missionPanelText: nonEmptyString,
  missionCtaLabel: nonEmptyString,
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
    ecotourism: pageTypographySchema,
    home: pageTypographySchema,
    nursery: pageTypographySchema,
    plantation: pageTypographySchema,
    management: pageTypographySchema,
    photoGallery: pageTypographySchema,
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
  ecotourism: ecotourismPageCopySchema,
  home: homePageCopySchema,
  nursery: nurseryPageCopySchema,
  plantation: plantationPageCopySchema,
  management: managementPageCopySchema,
  photoGallery: photoGalleryPageCopySchema,
  faq: faqPageCopySchema,
  _meta: siteCopyMetaSchema,
});

export type SiteCopy = z.infer<typeof siteCopySchema>;

const defaultSiteCopyUpdatedAt = "2026-03-22T00:00:00.000Z";

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
    ecotourism: {},
    home: {},
    nursery: {},
    plantation: {},
    management: {},
    photoGallery: {},
    faq: {},
  },
  contact: {
    badge: "Direct Contact",
    intro: "Get in touch with Golden Forests for partnership, operations, and client support.",
    formTitle: "Contact us",
    formDescription:
      "Complete the registration request form below and our team will review your details and respond through the appropriate Pipedrive workflow.",
    firstNameLabel: "First name",
    lastNameLabel: "Last name",
    emailLabel: "Email *",
    messageLabel: "Message *",
    submitLabel: "Submit",
    submittingLabel: "Submitting...",
    detailsTitle: "Contact Details",
    detailsDescription: "Reach our offices directly through the contact points below.",
    mobileLabel: "Mobile",
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
    phoneNumbers: ["+971 (0) 50 974 5232", "+971 (0) 50 944 0661"],
    emailValue: "office@goldenforests.ai",
    emailHref: "mailto:office@goldenforests.ai",
    websiteValue: "www.goldenforests.ai",
    websiteHref: "https://www.goldenforests.ai/",
    holdingCompanyLabel: "Golden Forests ADGM Holding Company",
    holdingCompanyAddress: [
      "Golden Forests ADGM Holding SPV LTD",
      "ADGM, Office 3702, Floor 37, Addax Port Office Tower, Tamouh, Abu Dhabi, Al Reem Island, United Arab Emirates",
    ],
    salesOfficeTitle: "Sales & Marketing",
    salesOfficeCompany: "Golden Forests Investment in Agricultural Enterprises & Management",
    salesOfficeAddress: [
      "IDZA Business Park, DDP 75773-001, A1-3641379065, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE",
    ],
    managementOfficeAddress: [
      "Crassna Agroforestry Development Inc. (CADI)",
      "Level 24, Philippines Stock Exchange Tower, One Bonafacio Street, 5th Ave Cor. 28th Street, BGC, Taguig City, Philippines",
    ],
  },
  about: {
    header: {
      badge: "Company Overview",
      title: "Golden Forests",
      description:
        "Golden Forests is an alternative investment company offering private and professional investors access to sustainably managed, high-value agroforestry plantations in the Philippines.",
    },
    overviewEyebrow: "Growing Wealth. Preserving Nature.",
    overviewParagraphs: [
      "We specialise in two of the world's most valuable natural commodities: agarwood, cultivated from Aquilaria crassna, and our proprietary Sweet Elena Carabao mango, a university-developed hybrid variety exclusive to Golden Forests.",
      "Our plantations in Southern Zambales are supported by an AI-enabled agroforestry intelligence platform that brings together GPS-verified tree locations, drone surveillance, satellite geotagging, and independent annual auditing for institutional-grade transparency.",
      "Golden Forests combines advanced cultivation science, structured plantation management, and measurable environmental stewardship to create long-term value for investors, communities, and the land.",
    ],
    visionTitle: "Vision",
    visionDescription:
      "To lead the future of sustainable agroforestry in Asia through Agroforestry Intelligence, setting the benchmark for premium, high-value crops by uniting artificial intelligence, advanced science, and best-in-class genetics.",
    missionTitle: "Mission",
    missionDescription:
      "To position sustainable agroforestry as a compelling alternative investment opportunity, delivering outstanding long-term returns whilst creating meaningful local impact and environmental sustainability.",
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
      "Southern Zambales sites are selected through agro-climatic evaluation to optimise growth conditions, land efficiency, and harvest quality.",
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
        "The Golden Forests mango programme offers direct ownership of proprietary Sweet Elena Carabao mango trees cultivated on professionally managed plantations in Southern Zambales.",
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
      "The exposé highlights additional private and professional investor volume discounts, combined-portfolio pricing benefits, and upside scenarios tied to premium export grades, off-season pricing, and optimal yield performance.",
  },
  agarwoodLifeCycle: {
    header: {
      badge: "Process Flow",
      title: "The Life Cycle of Aquilaria crassna Agarwood",
      description:
        "Ten-year lifecycle reference for agarwood plantation development, from seed collection to inoculation, harvesting, and resin extraction.",
    },
    overviewTitle: "General Agarwood Overview",
    overviewPoints: [
      "Aquilaria crassna is cultivated in Zambales province under a professionally managed 10-year plantation cycle.",
      "Agarwood is a premium commodity used in luxury fragrance, incense, oils, and wellness applications.",
      "Global demand is concentrated in the Middle East, Asia, and Europe, while legal wild supply is constrained by CITES controls.",
      "The model combines controlled inoculation, traceable production, and regulated export pathways.",
      "The 2026 rollout targets 35,000 agarwood trees, scaling by 10% per year.",
    ],
    commercialTitle: "Commercial & Financial Model",
    commercialPoints: [
      "Projected annualized return is approximately 18.5% over a 10-year lifecycle.",
      "Base tree sales assumptions use USD 292.50 per tree with market-linked export realization.",
      "Projected yield benchmarks are ~1.5 kg per tree in year 9 and ~2.0 kg in year 10.",
      "Harvest realization is modeled 50% in year 9 and 50% in year 10.",
      "Net proceeds are distributed after 10% management commission under sales and management contracts.",
    ],
    insuranceTitle: "Harvest Guarantee Insurance",
    insuranceDescription:
      "Agarwood protection measures are structured to support long-cycle asset security through surplus planting, replacement coverage, and disciplined yield planning.",
    insurancePoints: [
      "20% surplus trees are planted as mortality buffer.",
      "100% replacement guarantee is applied for covered loss events.",
      "Yield and pricing assumptions use conservative baselines.",
    ],
    stageTitles: [
      "1. Propagation and Field Planting",
      "2. Establishment and Growth",
      "3. Controlled Inoculation",
      "4. Harvest and Extraction",
    ],
    stagePeriods: ["Year 0", "Years 1 to 6", "Years 7 to 8", "Years 9 to 10"],
    stageDetails: [
      "Nursery propagation supports July 2026 out-planting in Zambales province. Planting density is targeted at about 1,667 trees per hectare, with cassava intercropping during years 1-2 to support early canopy protection.",
      "Trees are managed under structured maintenance protocols including irrigation, nutrition, and health monitoring. This phase focuses on vigorous growth and orchard stability before resin induction.",
      "Controlled inoculation induces resin formation in mature trees. Golden Forests applies exclusively licensed inoculation technology and technical protocols to support quality and consistency in oud formation.",
      "Harvesting and oud/resin chip extraction are scheduled across two seasons, typically 50% in year 9 and 50% in year 10. Returns remain linked to actual export sales using conservative assumptions.",
    ],
  },
  ecotourism: {
    header: {
      badge: "Experience Program",
      title: "Ecotourism: Experience Your Investment",
      description:
        "Premium client travel experiences linked to plantation oversight in Zambales province and onward island destinations via Clark International Airport.",
    },
    introParagraphs: [
      "Through our exclusive ecotourism program, clients are welcomed to visit their plantation sites and see their assets performing on the ground. Each visit includes a two-night stay at a premium hotel and transportation, supported by dedicated staff to ensure a smooth, well-coordinated experience across the Philippines.",
      "The program is designed to pair financial oversight with personal travel value. Clients can combine field visibility in Zambales province with convenient onward routes to Cebu, Coron, Boracay, Bohol, El Nido, and Surigao through Clark.",
    ],
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
    galleryTitle: "Destination Gallery",
    featuredDestinationNames: [
      "San Antonio Beaches, Zambales",
      "Sundowners Resort, Botolan",
      "Clark International Airport (CRK)",
      "Cebu",
      "Oslob, Cebu",
      "Coron",
      "Boracay",
      "Bohol",
      "El Nido",
      "Surigao / Siargao Gateway",
    ],
    featuredDestinationDetails: [
      "Pundaquit, Anawangin, Nagsasa, and Capones",
      "Signature luxury stop in the Zambales route",
      "Primary flight gateway to island destinations",
      "Historical landmarks and beach destinations",
      "Whale shark watching + snorkelling",
      "Lagoons, limestone cliffs, and diving routes",
      "White Beach, clear waters, and sunset shoreline",
      "Chocolate Hills, Panglao, and eco-attractions",
      "Palawan gateway for island-hopping lagoons",
      "Cloud 9 surf routes and Sohoton access",
    ],
    featuredDestinationImages: [
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352600/golden-forests/ecotourism-san-antonio-beaches.jpg",
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352600/golden-forests/ecotourism-sundowners-resort.jpg",
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352676/golden-forests/ecotourism-clark-airport.jpg",
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352804/golden-forests/ecotourism-cebu.jpg",
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774413175/golden-forests/ecotourism-oslob-cebu-whale-shark-snorkelling.jpg",
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352601/golden-forests/ecotourism-coron.jpg",
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352805/golden-forests/ecotourism-boracay.png",
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352808/golden-forests/ecotourism-bohol.jpg",
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352980/golden-forests/ecotourism-el-nido.jpg",
      "https://res.cloudinary.com/dz49fckfu/image/upload/v1774352602/golden-forests/ecotourism-cloud9-siargao.webp",
    ],
  },
  home: {
    heroBadge: "Tree Investment Site",
    heroTitle: "Sustainable plantation investment, structured around science, transparency, and long-term value.",
    heroParagraphs: [
      "Golden Forests is an alternative investment company offering private and professional investors access to sustainably managed, high-value agroforestry plantations in the Philippines.",
      "We specialise in two of the world's most valuable natural commodities: agarwood, cultivated from Aquilaria crassna, one of the world's rarest and most valuable trees, and our proprietary Sweet Elena Carabao mango, a university-developed dwarf hybrid variety exclusive to Golden Forests. Our plantations are established across carefully selected sites in Southern Zambales, chosen using rigorous agro-climatic evaluation criteria to optimise growth conditions for both crops and deliver outstanding harvest yields.",
    ],
    primaryCtaLabel: "Explore the Company",
    secondaryCtaLabel: "Review Plantation Operations",
    narrativeEyebrow: "Why Golden Forests",
    narrativeParagraphs: [
      "What sets Golden Forests apart is the science and technology behind every plantation. We are the first company to be issued a Wildlife Permit by the Philippine Department of Environment and Natural Resources to cultivate exotic Aquilaria crassna, using exclusively licensed inoculation formulas from Thailand designed specifically for this DNA strain. Our mango programme employs university-developed dwarfing techniques enabling high-density cultivation at more than four times the industry standard, maximising both yield and land efficiency. Every investment is backed by a proprietary AI-enabled agroforestry intelligence platform, delivering institutional-grade transparency through GPS-verified tree locations, drone surveillance, satellite geotagging and independent annual auditing.",
      "For every tree purchased, we plant one native endemic Philippine species, working closely with local communities to ensure that the prosperity generated by our plantations is shared by investors, people and the land. Golden Forests maintains collaborative research relationships with President Ramon Magsaysay State University, Visayas State University and the University of the Philippines Los Banos, supporting continuous innovation in sustainable agroforestry.",
      "Our mission is to deliver exceptional returns through sustainable plantation investment, creating lasting value for investors, communities, and the environment.",
    ],
    pillarTitles: [
      "High-value crop focus",
      "Southern Zambales sites",
      "Shared prosperity model",
    ],
    pillarDescriptions: [
      "Agarwood and proprietary Sweet Elena Carabao mango create a diversified plantation model across premium biological assets.",
      "Plantations are positioned across carefully selected sites using rigorous agro-climatic evaluation criteria.",
      "Each tree purchased is paired with one native endemic Philippine species, aligning investor returns with community and land stewardship.",
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
    missionEyebrow: "Golden Forests Mission",
    missionStatement: "To deliver exceptional returns through sustainable plantation investment, creating lasting value for investors, communities, and the environment.",
    missionPanelText: "For investors. For the land. For the people.",
    missionCtaLabel: "Speak with Golden Forests",
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
      badge: "Field Execution",
      title: "Plantation Operations â€“ Zambales",
      description:
        "Operational rollout for Aquilaria crassna agarwood and Sweet Elena Carabao mango in Zambales province, including July 2026 deployment and 2026 scale targets of 35,000 agarwood trees and 15,000 mango trees.",
    },
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
      ecotourism: { updatedAt: defaultSiteCopyUpdatedAt },
      home: { updatedAt: defaultSiteCopyUpdatedAt },
      nursery: { updatedAt: defaultSiteCopyUpdatedAt },
      plantation: { updatedAt: defaultSiteCopyUpdatedAt },
      management: { updatedAt: defaultSiteCopyUpdatedAt },
      photoGallery: { updatedAt: defaultSiteCopyUpdatedAt },
      faq: { updatedAt: defaultSiteCopyUpdatedAt },
    },
  },
};

export function normalizeSiteCopy(parsed: unknown): SiteCopy {
  const data = (parsed ?? {}) as Partial<SiteCopy> & Record<string, any>;

  const normalizedContact = { ...defaultSiteCopy.contact, ...(data.contact ?? {}) };

  if (!normalizedContact.holdingCompanyAddress.some((line) => line.includes("Golden Forests ADGM Holding SPV LTD"))) {
    normalizedContact.holdingCompanyAddress = [
      "Golden Forests ADGM Holding SPV LTD",
      ...normalizedContact.holdingCompanyAddress,
    ];
  }

  if (
    normalizedContact.salesOfficeCompany !==
    "Golden Forests Investment in Agricultural Enterprises & Management"
  ) {
    normalizedContact.salesOfficeCompany =
      "Golden Forests Investment in Agricultural Enterprises & Management";
  }

  if (!normalizedContact.managementOfficeAddress.some((line) => line.includes("Crassna Agroforestry Development Inc. (CADI)"))) {
    normalizedContact.managementOfficeAddress = [
      "Crassna Agroforestry Development Inc. (CADI)",
      ...normalizedContact.managementOfficeAddress,
    ];
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

  const oslobName = "Oslob, Cebu";
  const oslobDetail = "Whale shark watching + snorkelling";
  const oslobImage = "https://res.cloudinary.com/dz49fckfu/image/upload/v1774413175/golden-forests/ecotourism-oslob-cebu-whale-shark-snorkelling.jpg";
  if (!normalizedEcotourism.featuredDestinationNames.includes(oslobName)) {
    const insertAt = Math.min(Math.max(normalizedEcotourism.featuredDestinationNames.indexOf("Cebu") + 1, 0), normalizedEcotourism.featuredDestinationNames.length);
    normalizedEcotourism.featuredDestinationNames = [...normalizedEcotourism.featuredDestinationNames];
    normalizedEcotourism.featuredDestinationDetails = [...normalizedEcotourism.featuredDestinationDetails];
    normalizedEcotourism.featuredDestinationImages = [...normalizedEcotourism.featuredDestinationImages];
    normalizedEcotourism.featuredDestinationNames.splice(insertAt, 0, oslobName);
    normalizedEcotourism.featuredDestinationDetails.splice(insertAt, 0, oslobDetail);
    normalizedEcotourism.featuredDestinationImages.splice(insertAt, 0, oslobImage);
  }

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
    ecotourism: {
      ...defaultSiteCopy.ecotourism,
      ...normalizedEcotourism,
      header: { ...defaultSiteCopy.ecotourism.header, ...(data.ecotourism?.header ?? {}) },
    },
    home: { ...defaultSiteCopy.home, ...(data.home ?? {}) },
    nursery: {
      ...defaultSiteCopy.nursery,
      ...(data.nursery ?? {}),
      header: { ...defaultSiteCopy.nursery.header, ...(data.nursery?.header ?? {}) },
    },
    plantation: {
      ...defaultSiteCopy.plantation,
      ...(data.plantation ?? {}),
      header: { ...defaultSiteCopy.plantation.header, ...(data.plantation?.header ?? {}) },
    },
    management: {
      ...defaultSiteCopy.management,
      ...(data.management ?? {}),
      header: { ...defaultSiteCopy.management.header, ...(data.management?.header ?? {}) },
    },
    photoGallery: { ...defaultSiteCopy.photoGallery, ...(data.photoGallery ?? {}) },
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
