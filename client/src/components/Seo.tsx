import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE_URL = "https://goldenforests.ai";
const SITE_NAME = "Golden Forests Agroforestry Intelligence";
const DEFAULT_DESCRIPTION =
  "Golden Forests provides professional and institutional investors with curated access to sustainable plantation and agroforestry opportunities across Asia.";

type SeoConfig = {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
};

const seoByPath: Record<string, SeoConfig> = {
  "/crop-specific-pathways": {
    title: "Crop-specific Pathways | Golden Forests",
    description: "Explore agarwood, mango and their complementary harvest horizons and crop economics.",
    canonicalPath: "/crop-specific-pathways",
  },
  "/visitation-programme": {
    title: "Visitation Programme | Golden Forests",
    description: "Explore the Golden Forests client visitation programme, visit logistics and plantation itineraries.",
    canonicalPath: "/visitation-programme",
  },
  "/crop-economics": {
    title: "Philippine Crop Economics & Assumptions | Golden Forests",
    description: "Explore illustrative Philippine crop-linked cash flows, modeled deductions and harvest timing, distinct from investor distribution rights and fund performance.",
    canonicalPath: "/crop-economics",
  },
  "/why-golden-forests": {
    title: "Why Golden Forests | Sustainable Agroforestry",
    description: "Explore Golden Forests’ approach to long-term agroforestry, scientific cultivation, responsible stewardship and strategic partnerships.",
    canonicalPath: "/why-golden-forests",
  },
  "/": {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    canonicalPath: "/",
  },
  "/home": {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    canonicalPath: "/",
  },
  "/investment": {
    title: "Investment Opportunities & Participation | Golden Forests",
    description:
      "Explore direct company investment, plantation assets, strategic partnerships and separate introductions to independent licensed fund managers.",
    canonicalPath: "/investment",
  },
  "/investment/agarwood": {
    title: "Agarwood Plantation Operations | Golden Forests",
    description:
      "Learn about Golden Forests' agarwood plantation operations in the Philippines.",
    canonicalPath: "/investment/agarwood",
  },
  "/investment/mango": {
    title: "Mango Orchard Operations | Golden Forests",
    description:
      "Learn about Golden Forests' Philippine mango orchard operations.",
    canonicalPath: "/investment/mango",
  },
  "/golden-forests-group": {
    title: "About Golden Forests Agroforestry Intelligence",
    description:
      "Meet Golden Forests: an Asia-focused agroforestry platform combining disciplined oversight, scientific cultivation and technology-enabled monitoring.",
    canonicalPath: "/golden-forests-group",
  },
  "/company-profile": {
    title: "About Golden Forests Agroforestry Intelligence",
    description:
      "Meet Golden Forests: an Asia-focused agroforestry platform combining disciplined oversight, scientific cultivation and technology-enabled monitoring.",
    canonicalPath: "/golden-forests-group",
  },
  "/plantation": {
    title: "Plantation Operations and Precision Farming | Golden Forests",
    description:
      "Discover how Golden Forests uses precision farming, operational oversight, and data-informed management across its plantations.",
    canonicalPath: "/plantation",
  },
  "/precision-farming": {
    title: "Plantation Operations and Precision Farming | Golden Forests",
    description:
      "Discover how Golden Forests uses precision farming, operational oversight, and data-informed management across its plantations.",
    canonicalPath: "/plantation",
  },
  "/ai-management": {
    title: "Plantation Operations and Precision Farming | Golden Forests",
    description:
      "Discover how Golden Forests uses precision farming, operational oversight, and data-informed management across its plantations.",
    canonicalPath: "/plantation",
  },
  "/asset-management": {
    title: "Visitation Programme | Golden Forests",
    description:
      "Learn about Golden Forests plantation visits, asset oversight, and ongoing client reporting.",
    canonicalPath: "/visitation-programme",
  },
  "/services": {
    title: "Agroforestry Client Services | Golden Forests",
    description:
      "Explore Golden Forests client services for professionally managed plantation assets and long-term reporting.",
    canonicalPath: "/services",
  },
  "/contact": {
    title: "Contact Golden Forests",
    description:
      "Contact Golden Forests Agroforestry Intelligence to discuss plantation opportunities, services, or a plantation visit.",
    canonicalPath: "/contact",
  },
  "/disclaimer": {
    title: "Disclaimer | Golden Forests",
    description: "Read the Golden Forests website and investment disclaimer.",
    canonicalPath: "/disclaimer",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Golden Forests",
    description: "Read the Golden Forests privacy policy.",
    canonicalPath: "/privacy-policy",
  },
  "/cookie-policy": {
    title: "Cookie Policy | Golden Forests",
    description: "Read the Golden Forests cookie policy.",
    canonicalPath: "/cookie-policy",
  },
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element!.setAttribute(name, value);
  });
}

export function Seo() {
  const [location] = useLocation();

  useEffect(() => {
    const path = location.split("?")[0].replace(/\/+$/, "") || "/";
    const config =
      seoByPath[path] ??
      ({
        title: `Page Not Found | ${SITE_NAME}`,
        description: DEFAULT_DESCRIPTION,
        canonicalPath: path,
        noindex: true,
      } satisfies SeoConfig);
    const canonicalUrl = `${SITE_URL}${config.canonicalPath === "/" ? "/" : config.canonicalPath}`;

    document.title = config.title;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: config.description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: config.noindex || path.startsWith("/admin") ? "noindex, nofollow" : "index, follow",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: config.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: config.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [location]);

  return null;
}
