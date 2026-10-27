import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { canonicalPageHref, canonicalizePageLinks, legacyPagePaths, pagePaths } from "../shared/pagePaths";
import { defaultSiteCopy, normalizeSiteCopy } from "../shared/siteCopy";

for (const [oldPath, canonical] of Object.entries(legacyPagePaths)) {
  assert.equal(canonicalPageHref(oldPath), canonical);
  assert.equal(canonicalPageHref(`${oldPath}?source=old#participation-options`), `${canonical}?source=old#participation-options`);
  assert.equal(canonicalPageHref(canonical), canonical);
  assert.ok(Object.values(pagePaths).includes(canonical as any));
}
for (const untouched of ["/api/site-copy", "/uploads/portrait.jpg", "https://goldenforests.ph/", "//external.example/investment", "/unknown", "#agarwood"]) {
  assert.equal(canonicalPageHref(untouched), untouched);
}
assert.equal(canonicalPageHref("/INVESTMENT/?source=legacy#direct-equity"), "/agroforestry-opportunities?source=legacy#direct-equity");
const saved = structuredClone(defaultSiteCopy);
saved.home.investmentOpportunityLearnMoreHrefs[0] = "/investment/agarwood#cultivation";
const updated = normalizeSiteCopy(saved);
assert.equal(updated.home.investmentOpportunityLearnMoreHrefs[0], pagePaths.agarwood + "#cultivation");
assert.deepEqual(canonicalizePageLinks(updated), updated);
assert.deepEqual(normalizeSiteCopy(updated), updated);
const sitemap = readFileSync("client/public/sitemap.xml", "utf8");
for (const path of Object.values(pagePaths)) assert.ok(sitemap.includes(`https://goldenforests.ai${path}</loc>`), path);
console.log("PASS: canonical addresses, old links, anchors, queries, saved CMS links and sitemap");

const base = process.argv[2];
if (base) {
  for (const [oldPath, canonical] of Object.entries(legacyPagePaths)) {
    const response = await fetch(base + oldPath + "?source=legacy", { redirect: "manual" });
    assert.equal(response.status, 301, oldPath);
    assert.equal(response.headers.get("location"), canonical + "?source=legacy", oldPath);
  }
  for (const path of Object.values(pagePaths)) {
    const response = await fetch(base + path, { redirect: "manual" });
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), /<div id="root"><\/div>/, path);
  }
  const missing = await fetch(base + "/missing-page", { redirect: "manual" });
  assert.equal(missing.status, 404);
  console.log("PASS: production HTTP redirects, every public page and unknown-page 404");
}
