import { canonicalPageHref, isRetiredPage, normalizePagePath, pagePaths } from "./pagePaths";

export const SITE_URL = "https://goldenforests.ai";
export const SITE_NAME = "Golden Forests Agroforestry Intelligence";
export const HOME_DESCRIPTION = "Golden Forests provides access to sustainable plantations, reforestation and carbon offset projects, and agroforestry opportunities across Southeast Asia.";
export const BRAND_LOGO = "https://res.cloudinary.com/dezfh7wug/image/upload/v1776227031/golden-forests/sidebar-brand-logo-20260415.png";

export type PageSeo = {
  title: string;
  description: string;
  canonicalPath?: string;
  noindex: boolean;
};

const publicPageDetails: Record<string, { title: string; description: string }> = {
  [pagePaths.home]: { title: SITE_NAME, description: HOME_DESCRIPTION },
  [pagePaths.whyGoldenForests]: { title: "Why Golden Forests | Sustainable Agroforestry", description: "Explore Golden Forests' approach to agroforestry, scientific cultivation, responsible stewardship and long-term value." },
  [pagePaths.agroforestry]: { title: "Agroforestry Opportunities & Participation | Golden Forests", description: "Explore direct equity, independent fund manager introductions, plantation ownership and strategic partnerships with Golden Forests." },
  [pagePaths.crops]: { title: "Crop Specific Operations | Golden Forests", description: "Explore Philippine agarwood and Sweet Elena mango operations, complementary harvest horizons and crop economics." },
  [pagePaths.agarwood]: { title: "Agarwood Plantation Operations | Golden Forests", description: "Learn about Golden Forests' cultivated agarwood operations, resin development and harvest planning in the Philippines." },
  [pagePaths.mango]: { title: "Sweet Elena Mango Operations | Golden Forests", description: "Explore Golden Forests' Sweet Elena mango orchards, cultivation practices and harvest planning in Zambales, Philippines." },
  [pagePaths.cropEconomics]: { title: "Projected Crop Economics & Assumptions | Golden Forests", description: "Review projected Philippine agarwood, mango and combined crop economics, model assumptions and harvest horizons. Returns are not guaranteed." },
  [pagePaths.precisionFarming]: { title: "Precision Farming & Plantation Operations | Golden Forests", description: "Discover Golden Forests' plantation science, field monitoring and precision farming in Zambales and Negros, Philippines." },
  [pagePaths.investorServices]: { title: "Investor Services | Golden Forests", description: "Explore Golden Forests investor services, opportunity selection, due diligence and operational reporting." },
  [pagePaths.visitation]: { title: "Plantation Visitation Programme | Golden Forests", description: "Plan a hosted Golden Forests plantation visit in Zambales or Negros, with site visits, travel logistics and field operations." },
  [pagePaths.group]: { title: "Golden Forests Group | Company & Leadership", description: "Meet Golden Forests Group and its leadership, and explore the company's agroforestry vision, operating capabilities and partnerships." },
  [pagePaths.contact]: { title: "Contact Golden Forests", description: "Contact the Golden Forests team about agroforestry opportunities, partnerships, investor services and plantation visits." },
  [pagePaths.disclaimer]: { title: "Disclaimer | Golden Forests", description: "Read Golden Forests' important information, investment risks and website disclaimer." },
  [pagePaths.privacy]: { title: "Privacy Policy | Golden Forests", description: "Read the Golden Forests privacy policy and how personal information is handled." },
  [pagePaths.cookies]: { title: "Cookie Policy | Golden Forests", description: "Read how Golden Forests uses cookies and manages website cookie preferences." },
};

export function getPageSeo(href: string): PageSeo {
  const path = normalizePagePath(canonicalPageHref(href));
  const details = publicPageDetails[path];
  if (details) return { ...details, canonicalPath: path, noindex: false };
  const admin = path === "/admin" || path.startsWith("/admin/");
  return {
    title: `${admin ? "Admin" : isRetiredPage(path) ? "Page Removed" : "Page Not Found"} | Golden Forests`,
    description: admin ? "Golden Forests administration." : "This page is no longer available. Visit the Golden Forests homepage to explore our current website.",
    noindex: true,
  };
}

export function getPageStructuredData(href: string) {
  if (getPageSeo(href).canonicalPath !== pagePaths.home) return undefined;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`,
        name: "Golden Forests", alternateName: [SITE_NAME, "Golden Forests AI", "goldenforests.ai"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization", "@id": `${SITE_URL}/#organization`,
        name: "Golden Forests", url: `${SITE_URL}/`, logo: BRAND_LOGO,
      },
      {
        "@type": "WebPage", "@id": `${SITE_URL}${pagePaths.home}#webpage`,
        url: `${SITE_URL}${pagePaths.home}`, name: SITE_NAME, description: HOME_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

/** Only current, indexable page URLs are published in the sitemap. */
export function createSitemap(): string {
  const urls = Object.values(pagePaths)
    .filter(path => !getPageSeo(path).noindex)
    .map(path => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
