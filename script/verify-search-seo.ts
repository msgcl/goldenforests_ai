import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { applyHtmlSeo, escapeHtml, removedPageHtml } from "../server/htmlSeo";
import { canonicalPageHref, isRetiredPage, legacyPagePaths, pagePaths, retiredPagePaths } from "../shared/pagePaths";
import { createSitemap, getPageSeo, getPageStructuredData, HOME_DESCRIPTION, SITE_NAME, SITE_URL } from "../shared/siteSeo";

const template = readFileSync("client/index.html", "utf8");
function checkDocument(html: string, path: string) {
  const seo = getPageSeo(path);
  assert.equal((html.match(/<title>/g) ?? []).length, 1, path);
  assert.ok(html.includes(`<title>${escapeHtml(seo.title)}</title>`), path);
  assert.ok(html.includes(`<meta name="description" content="${escapeHtml(seo.description)}" />`), path);
  assert.ok(html.includes(`content="${seo.noindex ? "noindex, nofollow" : "index, follow"}"`), path);
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
  assert.equal(canonicals.length, seo.canonicalPath ? 1 : 0, path);
  if (seo.canonicalPath) assert.equal(canonicals[0][1], SITE_URL + seo.canonicalPath, path);
  const schema = html.match(/<script id="site-structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.equal(Boolean(schema), seo.canonicalPath === pagePaths.home, path);
  if (schema) assert.deepEqual(JSON.parse(schema[1]), getPageStructuredData(path));
}
for (const path of Object.values(pagePaths)) {
  const html = applyHtmlSeo(template, path + "?source=test#section");
  checkDocument(html, path);
  assert.match(html, /google-site-verification/);
  assert.match(html, /src="\/src\/main.tsx"/);
  checkDocument(applyHtmlSeo(html, pagePaths.contact), pagePaths.contact);
  assert.equal(getPageSeo(path).noindex, false);
}
for (const path of ["/admin", "/admin/login", "/missing-page", ...retiredPagePaths]) {
  checkDocument(applyHtmlSeo(template, path), path);
  assert.equal(getPageSeo(path).noindex, true);
}
const removed = removedPageHtml("/impact");
assert.match(removed, /This page is no longer available/);
assert.match(removed, /href="\/home"/);
assert.doesNotMatch(removed, /<script|rel="canonical"/);
const home = getPageStructuredData(pagePaths.home)!;
assert.equal(home["@graph"][0].name, "Golden Forests");
assert.equal(home["@graph"][0].url, SITE_URL + "/");
assert.equal(getPageSeo(pagePaths.home).title, SITE_NAME);
assert.equal(getPageSeo(pagePaths.home).description, HOME_DESCRIPTION);
const sitemapUrls = [...createSitemap().matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(new Set(sitemapUrls), new Set(Object.values(pagePaths).map(path => SITE_URL + path)));
for (const path of retiredPagePaths) assert.ok(!sitemapUrls.includes(SITE_URL + path));
for (const oldPath of Object.keys(legacyPagePaths)) assert.ok(!sitemapUrls.includes(SITE_URL + oldPath));
console.log("PASS: initial HTML titles, descriptions, canonicals, homepage schema, error noindex and active-only sitemap");

// Explicitly cover every example shown in the user's Search Console report.
const screenshotRemoved = ["/impact", "/management", "/technology", "/compliance", "/photo-gallery", "/ai-technology"];
const screenshotRenamed: Record<string, string> = {
  "/": pagePaths.home,
  "/plantation-visit": pagePaths.visitation,
  "/agarwood-life-cycle": pagePaths.agarwood,
  "/mango-program": pagePaths.mango,
  "/asset-management": pagePaths.visitation,
  "/services": pagePaths.investorServices,
  "/investment/mango": pagePaths.mango,
  "/investment": pagePaths.agroforestry,
  "/about": pagePaths.group,
};
const screenshotCurrent = [pagePaths.cookies, pagePaths.privacy, pagePaths.disclaimer];
assert.equal(screenshotRemoved.length + Object.keys(screenshotRenamed).length + screenshotCurrent.length, 18);
for (const path of screenshotRemoved) {
  assert.equal(isRetiredPage(path), true, path);
  assert.equal(getPageSeo(path).noindex, true, path);
}
for (const [oldPath, current] of Object.entries(screenshotRenamed)) {
  assert.equal(isRetiredPage(oldPath), false, oldPath);
  assert.equal(canonicalPageHref(oldPath), current);
  assert.equal(getPageSeo(current).noindex, false, current);
}
for (const path of screenshotCurrent) {
  assert.equal(isRetiredPage(path), false, path);
  assert.equal(getPageSeo(path).canonicalPath, path);
  assert.equal(getPageSeo(path).noindex, false, path);
}
console.log("PASS: all 18 indexed examples classified; homepage and current legal pages remain indexable");

const base = process.argv[2];
if (base) {
  for (const path of Object.values(pagePaths)) {
    const response = await fetch(base + path + "?source=test", { redirect: "manual" });
    assert.equal(response.status, 200, path);
    assert.equal(response.headers.get("x-robots-tag"), null, path);
    checkDocument(await response.text(), path);
  }
  for (const path of retiredPagePaths) {
    const response = await fetch(base + path.toUpperCase() + "/?source=old", { redirect: "manual" });
    assert.equal(response.status, 410, path);
    assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow", path);
    const html = await response.text();
    checkDocument(html, path);
    assert.doesNotMatch(html, /<script/);
  }
  for (const path of ["/admin", "/admin/login"]) {
    const response = await fetch(base + path, { redirect: "manual" });
    assert.equal(response.status, 200, path);
    assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow", path);
    checkDocument(await response.text(), path);
  }
  const missing = await fetch(base + "/not-a-real-page", { redirect: "manual" });
  assert.equal(missing.status, 404);
  assert.equal(missing.headers.get("x-robots-tag"), "noindex, nofollow");
  checkDocument(await missing.text(), "/not-a-real-page");
  for (const [oldPath, canonical] of Object.entries(legacyPagePaths)) {
    const response = await fetch(base + oldPath + "?source=old", { redirect: "manual" });
    assert.equal(response.status, 301, oldPath);
    assert.equal(response.headers.get("location"), canonical + "?source=old", oldPath);
    assert.equal(canonicalPageHref(oldPath), canonical);
  }
  const fileAlias = await fetch(base + "/index.html", { redirect: "manual" });
  assert.equal(fileAlias.status, 301);
  assert.equal(fileAlias.headers.get("location"), pagePaths.home);
  const favicon = await fetch(base + "/favicon.png");
  assert.equal(favicon.status, 200);
  assert.match(favicon.headers.get("content-type") ?? "", /image\/png/);
  const sitemap = await fetch(base + "/sitemap.xml");
  assert.equal(await sitemap.text(), createSitemap());
  const browser = await (await fetch(base + "/home", { headers: { "User-Agent": "Mozilla/5.0" } })).text();
  const bot = await (await fetch(base + "/home", { headers: { "User-Agent": "Googlebot" } })).text();
  assert.equal(browser, bot);
  console.log("PASS: production page metadata, 410 removals, renamed-page redirects, admin/error exclusions, assets and sitemap");
}
