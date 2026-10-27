import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "wouter";
import Home from "../client/src/pages/Home";
import Investment from "../client/src/pages/Investment";
import WhyGoldenForests from "../client/src/pages/WhyGoldenForests";
import CropEconomics from "../client/src/pages/CropEconomics";
import PlantationVisit from "../client/src/pages/PlantationVisit";
import Contact from "../client/src/pages/Contact";
import { chairmanQuote } from "../shared/chairmanQuote";
import { defaultSiteCopy, normalizeSiteCopy } from "../shared/siteCopy";
import { pagePaths } from "../shared/pagePaths";
import { api } from "../shared/routes";

Object.assign(globalThis, { React });
const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
client.setQueryData([api.siteCopy.get.path], defaultSiteCopy);
function render(Page: React.ComponentType, path: string) {
  return renderToStaticMarkup(<QueryClientProvider client={client}><Router ssrPath={path}><Page /></Router></QueryClientProvider>);
}
try {
  const home = render(Home, pagePaths.home);
  assert.match(home, /Agroforestry Intelligence/);
  assert.match(home, /large-scale reforestation and carbon offset projects, and agroforestry opportunities across Southeast Asia/);
  const investment = render(Investment, pagePaths.agroforestry);
  const partnerships = investment.match(/<article[^>]*>[^]*?Joint Ventures[^]*?<\/article>/)?.[0];
  assert.ok(partnerships);
  assert.match(partnerships, /plantation businesses, impact funds and related industry partners/);
  assert.match(partnerships, /Partnering on large-scale reforestation and carbon offset projects/);
  assert.match(investment, /Request a fund manager introduction/);
  assert.doesNotMatch(investment, /Request a separate/);
  const table = investment.match(/<table[^>]*>[^]*?<\/table>/)?.[0];
  assert.ok(table);
  const rows = [...table.matchAll(/<tr[^>]*>([^]*?)<\/tr>/g)].map(match => match[1]);
  assert.equal(rows.length, 4);
  for (const [index, stage, horizon] of [[1, "Mature / inoculated", "3–4 years"], [2, "Mature / pre-inoculated", "5–6 years"], [3, "Classic", "9–10 years"]] as const) {
    assert.ok(rows[index].includes(stage));
    assert.ok(rows[index].includes(horizon), JSON.stringify({row: rows[index], horizon}));
  }
  assert.match(table, /Investment Exit Horizon/);
  const why = render(WhyGoldenForests, pagePaths.whyGoldenForests);
  assert.match(why, /Forestry and agroforestry combine long-term biological growth with exposure to real operating assets\./);
  assert.match(why, /They may contribute to portfolio diversification and potential inflation resilience, alongside environmental and social objectives\./);
  assert.doesNotMatch(why, /Different crops bring different harvesting cycles/);
  assert.match(why, /<blockquote/);
  for (const paragraph of chairmanQuote.paragraphs) assert.ok(why.includes(paragraph));
  assert.match(why, /The chairman’s perspective/);
  assert.match(why, /Chairman &amp; Angel Investor, Golden Forests/);
  assert.match(why, /Former Chief Investment Officer at a leading global investment firm/);
  assert.doesNotMatch(why, /quoted:/);
  const economics = render(CropEconomics, pagePaths.cropEconomics);
  assert.doesNotMatch(economics, /illustrative/i);
  assert.match(economics, /Projected Philippine Crop Economics/);
  assert.match(economics, /Projected crop-model IRR/);
  assert.match(economics, /Returns and repayment of capital are not guaranteed/);
  assert.match(economics, /Approx\. 20%/);
  const visit = render(PlantationVisit, pagePaths.visitation);
  assert.match(visit, /Plantation Site Visit/);
  assert.match(visit, /Visit the plantation with our team to see field operations first hand/);
  assert.doesNotMatch(visit, /Plantation Drone|monitoring footprint/);
  assert.match(visit, /Zambales and Negros Operations/);
  assert.match(visit, /Client Visitation Programme/);
  const contact = render(Contact, pagePaths.contact);
  assert.match(contact, /Cord Kabus-Duprée/);
  assert.match(contact, /tel:\+971509745232/);

  const saved = structuredClone(defaultSiteCopy);
  saved.home.narrativeEyebrow = "Rooted in Intelligence";
  saved.home.pillarDescriptions[3] = "Golden Forests welcomes established plantation businesses and related industry partners.";
  saved.ecotourism.featuredDestinationNames[2] = "Plantation Drone & Surveillance View";
  const customPhoto = "https://res.cloudinary.com/example/image/upload/custom-site-visit.jpg";
  saved.ecotourism.featuredDestinationImages[2] = customPhoto;
  saved.investment.scenarioTitle = "Illustrative Philippine Crop Economics";
  const updated = normalizeSiteCopy(saved);
  assert.equal(updated.ecotourism.featuredDestinationImages[2], customPhoto);
  assert.equal(updated.ecotourism.featuredDestinationNames[2], "Plantation Site Visit");
  assert.equal(updated.home.narrativeEyebrow, "Agroforestry Intelligence");
  assert.match(updated.home.pillarDescriptions[3], /impact funds/);
  assert.equal(updated.investment.scenarioTitle, "Projected Philippine Crop Economics");
  assert.deepEqual(normalizeSiteCopy(updated), updated);
  const olderSaved = structuredClone(defaultSiteCopy) as any;
  delete olderSaved.investment.partnershipDescription;
  delete olderSaved.investment.partnershipPoints;
  delete olderSaved.investment.scenarioCashNote;
  const upgraded = normalizeSiteCopy(olderSaved);
  assert.ok(upgraded.investment.partnershipDescription);
  assert.ok(upgraded.investment.partnershipPoints.length);
  console.log("PASS: all six requested pages, chairman quote, Thai exit-horizon rows and saved-content migration");
} finally {
  client.clear();
}
