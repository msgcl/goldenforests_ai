import { getPageSeo, getPageStructuredData, SITE_NAME, SITE_URL } from "@shared/siteSeo";

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);
}

/** Send the same SEO information to every visitor, before JavaScript executes. */
export function applyHtmlSeo(template: string, href: string): string {
  const seo = getPageSeo(href);
  let html = template.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "");
  html = html.replace(/<meta\b[^>]*>/gi, tag => /(?:name|property)\s*=\s*["'](?:description|robots|og:title|og:description|og:url|og:type|og:site_name)["']/i.test(tag) ? "" : tag);
  html = html.replace(/<link\b[^>]*rel\s*=\s*["']canonical["'][^>]*>/gi, "");
  html = html.replace(/<script\b[^>]*id\s*=\s*["']site-structured-data["'][^>]*>[\s\S]*?<\/script>/gi, "");
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="${seo.noindex ? "noindex, nofollow" : "index, follow"}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
  ];
  if (seo.canonicalPath) {
    const url = escapeHtml(SITE_URL + seo.canonicalPath);
    tags.push(`<link rel="canonical" href="${url}" />`, `<meta property="og:url" content="${url}" />`);
  }
  const structuredData = getPageStructuredData(href);
  if (structuredData) {
    const json = JSON.stringify(structuredData).replace(/</g, "\\u003c");
    tags.push(`<script id="site-structured-data" type="application/ld+json">${json}</script>`);
  }
  return html.replace(/<\/head>/i, tags.join("\n    ") + "\n  </head>");
}

export function removedPageHtml(href: string): string {
  return applyHtmlSeo(`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0;background:#092722;color:#f7f3ea;font-family:Arial,sans-serif"><main style="max-width:640px;margin:12vh auto;padding:32px"><p>Golden Forests</p><h1>This page is no longer available</h1><p>Please visit our homepage to explore the current website.</p><a href="/home" style="color:#e2c99f">Visit Golden Forests</a></main></body></html>`, href);
}
