/** Public addresses follow the current menu names. */
export const pagePaths = {
  home: "/home",
  whyGoldenForests: "/why-golden-forests",
  agroforestry: "/agroforestry-opportunities",
  crops: "/crop-specific-operations",
  agarwood: "/crop-specific-operations/agarwood",
  mango: "/crop-specific-operations/mango",
  cropEconomics: "/crop-specific-operations/crop-economics",
  precisionFarming: "/precision-farming",
  investorServices: "/investor-services",
  visitation: "/investor-services/visitation-programme",
  group: "/golden-forests-group",
  contact: "/contact",
  disclaimer: "/disclaimer",
  privacy: "/privacy-policy",
  cookies: "/cookie-policy",
} as const;

export const legacyPagePaths: Record<string, string> = {
  "/": pagePaths.home,
  "/investment": pagePaths.agroforestry,
  "/investment/agarwood": pagePaths.agarwood,
  "/investment/mango": pagePaths.mango,
  "/crop-specific-pathways": pagePaths.crops,
  "/crop-economics": pagePaths.cropEconomics,
  "/services": pagePaths.investorServices,
  "/visitation-programme": pagePaths.visitation,
  "/asset-management": pagePaths.visitation,
  "/plantation": pagePaths.precisionFarming,
  "/ai-management": pagePaths.precisionFarming,
  "/company-profile": pagePaths.group,
};

const publicPaths = new Set<string>(Object.values(pagePaths));

/** Preserve queries and section anchors while translating known local links. */
export function canonicalPageHref(href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const path = href.split(/[?#]/, 1)[0];
  const remainder = href.slice(path.length);
  const normalized = path.replace(/\/+$/, "").toLowerCase() || "/";
  const canonical = legacyPagePaths[normalized] ?? (publicPaths.has(normalized) ? normalized : undefined);
  return canonical ? canonical + remainder : href;
}

/** Normalize CMS links as well as links embedded in the default content. */
export function canonicalizePageLinks<T>(value: T): T {
  if (typeof value === "string") return canonicalPageHref(value) as T;
  if (Array.isArray(value)) return value.map(canonicalizePageLinks) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, canonicalizePageLinks(item)])) as T;
  }
  return value;
}
