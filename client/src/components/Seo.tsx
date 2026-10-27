import { getPageSeo, getPageStructuredData, SITE_NAME, SITE_URL } from "@shared/siteSeo";
import { useEffect } from "react";
import { useLocation } from "wouter";

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
    const config = getPageSeo(location);
    const canonicalUrl = config.canonicalPath ? `${SITE_URL}${config.canonicalPath}` : undefined;

    document.title = config.title;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: config.description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: config.noindex ? "noindex, nofollow" : "index, follow",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: config.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: config.description,
    });
    if (canonicalUrl) {
      upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    } else {
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    } else {
      canonical?.remove();
    }

    const structuredData = getPageStructuredData(location);
    let schema = document.head.querySelector<HTMLScriptElement>("#site-structured-data");
    if (structuredData) {
      if (!schema) {
        schema = document.createElement("script");
        schema.id = "site-structured-data";
        schema.type = "application/ld+json";
        document.head.appendChild(schema);
      }
      schema.textContent = JSON.stringify(structuredData);
    } else {
      schema?.remove();
    }
  }, [location]);

  return null;
}
