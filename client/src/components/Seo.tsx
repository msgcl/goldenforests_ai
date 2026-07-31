import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE_URL = "https://goldenforests.ai";
const SITE_NAME = "Golden Forests Agroforestry Intelligence";
const DEFAULT_DESCRIPTION =
  "Golden Forests Agroforestry Intelligence connects investors with professionally managed plantation assets in the Philippines, backed by AI-driven operations and transparent reporting.";

type SeoConfig = {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
};

const seoByPath: Record<string, SeoConfig> = {
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
    title: "Agroforestry Investment Opportunities | Golden Forests",
    description:
      "Explore professionally managed agarwood and mango plantation opportunities in the Philippines with Golden Forests.",
    canonicalPath: "/investment",
  },
  "/investment/agarwood": {
    title: "Agarwood Plantation Investment | Golden Forests",
    description:
      "Learn about Golden Forests' professionally managed agarwood plantation opportunity in the Philippines.",
    canonicalPath: "/investment/agarwood",
  },
  "/investment/mango": {
    title: "Mango Plantation Investment | Golden Forests",
    description:
      "Learn about Golden Forests' professionally managed Philippine mango plantation opportunity.",
    canonicalPath: "/investment/mango",
  },
  "/golden-forests-group": {
    title: "About Golden Forests Agroforestry Intelligence",
    description:
      "Meet Golden Forests and learn about our approach to technology-supported, professionally managed agroforestry in the Philippines.",
    canonicalPath: "/golden-forests-group",
  },
  "/company-profile": {
    title: "About Golden Forests Agroforestry Intelligence",
    description:
      "Meet Golden Forests and learn about our approach to technology-supported, professionally managed agroforestry in the Philippines.",
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
    title: "Plantation Visits and Asset Management | Golden Forests",
    description:
      "Learn about Golden Forests plantation visits, asset oversight, and ongoing client reporting.",
    canonicalPath: "/asset-management",
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
