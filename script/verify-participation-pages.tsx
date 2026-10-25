import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "wouter";
import Home from "../client/src/pages/Home";
import CropEconomics from "../client/src/pages/CropEconomics";
import WhyGoldenForests from "../client/src/pages/WhyGoldenForests";
import About from "../client/src/pages/About";
import CropPathways from "../client/src/pages/CropPathways";
import ClientServices from "../client/src/pages/ClientServices";
import PlantationVisit from "../client/src/pages/PlantationVisit";
import Investment from "../client/src/pages/Investment";
import { AgarwoodInvestment, MangoInvestment } from "../client/src/pages/InvestmentCropPages";
import { defaultSiteCopy } from "../shared/siteCopy";
import { api } from "../shared/routes";

Object.assign(globalThis, { React });

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
queryClient.setQueryData([api.siteCopy.get.path], defaultSiteCopy);
assert.match(defaultSiteCopy.investment.faqAnswers[4], /financial loss as a result of force majeure/);
try {
  for (const [path, Page] of [
    ["/", Home],
    ["/crop-economics", CropEconomics],
    ["/why-golden-forests", WhyGoldenForests],
    ["/golden-forests-group", About],
    ["/investment", Investment],
    ["/crop-specific-pathways", CropPathways],
    ["/services", ClientServices],
    ["/visitation-programme", PlantationVisit],
    ["/investment/agarwood", AgarwoodInvestment],
    ["/investment/mango", MangoInvestment],
  ] as const) {
    const html = renderToStaticMarkup(
      <QueryClientProvider client={queryClient}><Router ssrPath={path}><Page /></Router></QueryClientProvider>,
    );
    assert.doesNotMatch(html, /21\.29%|19\.98%|20\.86%|[Oo]ver 50%|531,649|548,555|537,508|631,649|648,555|637,508|21\.3%|24\.3%|22\.4%|413,114|639,779|489,789/);
    assert.doesNotMatch(html, /tree[ -]equivalent|26\.32%|27\.87%|23\.1%|USD 600 per tree|USD 450 per tree/i);
    if (path === "/investment") {
      assert.match(html, /Joint Ventures &amp; Strategic Partnerships/);
      assert.match(html, /Direct Plantation Ownership/);
    }
    if (path !== "/crop-economics") {
      assert.doesNotMatch(html, /Over 20%|Approximately 20%|USD 500,000|USD 600,000|USD 550,000/);
    }
    if (["/", "/investment/agarwood", "/investment/mango"].includes(path)) {
      assert.match(html, /href="\/crop-economics(?:#[^"]*)?"/);
    }
    if (path === "/investment") {
      assert.match(html, /Independent Regulated Fund Participation/);
      assert.doesNotMatch(html, /Dedicated Funds/);
    }
    if (path === "/crop-economics") {
      assert.match(html, /Illustrative Philippine Crop Economics/);
      assert.match(html, /Over 20%/);
      assert.doesNotMatch(html, /Approximately 20%/);
      assert.doesNotMatch(html, /Source:/);
      assert.match(html, /No participation pathway automatically grants/);
      assert.match(html, /Modeled crop-linked net proceeds/);
      assert.match(html, /not guaranteed/);
      const mangoCard = html.split('id="mango-scenario"')[1].split('</article>')[0];
      assert.match(mangoCard, /Approx\. 20%/);
      assert.doesNotMatch(mangoCard, /Approximately 20%/);
      assert.ok(html.indexOf("No participation pathway automatically grants") < html.indexOf("Over 20%"));
      for (const amount of ["400,000+", "500,000+", "450,000+", "600,000+", "550,000+"]) assert.ok(html.includes(amount));
      assert.match(html, /before participant-specific taxes/);
      assert.match(html, /id="return-assumptions"/);
      assert.match(html, /19%/);
      assert.match(html, /total receipts alone cannot verify/);
    }
    if (path === "/why-golden-forests") {
      assert.match(html, /Why Agroforestry/);
      assert.match(html, /Agroforestry Intelligence/);
      assert.match(html, /not verified achievements/);
      assert.match(html, /href="\/investment#participation-options"/);
      assert.match(html, /href="\/disclaimer"/);
      assert.doesNotMatch(html, /Over 20%|USD 500,000|Illustrative net proceeds/);
    }
    if (path === "/investment") {
      assert.match(html, /Request a separate manager introduction/);
      assert.match(html, /Classic seedling-to-harvest/);
      assert.match(html, /The platform is intended for professional and institutional investors, high net worth individuals, and strategic partners/);
      assert.doesNotMatch(html, /From Initial Discussion to Participation/);
      assert.match(html, /Philippine Operating Readiness/);
    }
    if (path === "/investment/agarwood") {
      assert.match(html, /Golden Forests cultivates Aquilaria crassna in Negros Occidental, Philippines/);
      assert.match(html, /View crop-economics/);
      assert.doesNotMatch(html, /Direct company investment/);
    }
    if (path === "/investment/mango") {
      assert.match(html, /cultivated in Zambales Province, Philippines/);
      assert.match(html, /The illustrative model assumes annual harvests from Years 5-15; actual production is from years 5-25/);
      assert.match(html, /View crop-economics/);
      assert.doesNotMatch(html, /Direct company investment/);
    }
    if (path === "/") assert.doesNotMatch(html, /Direct Equity Participation|Independent Regulated Fund Participation|Direct Plantation Ownership|Joint Ventures &amp; Strategic Partnerships/);
    if (path === "/investment") {
      assert.doesNotMatch(html, /Crop-specific pathways|Complementary Crops|Important Notice|Regional Scale-Up|Request data-room access/);
      assert.match(html, /href="https:\/\/goldenforests.ph\/"[^>]*>Visit Philippine Operations Platform/);
      assert.match(html, /Invest through independent licensed fund managers\./);
      assert.match(html, /Invest in biological assets in the Philippines/);
      assert.match(html, /Review fund offering memorandum and subscription agreement/);
    }
    if (path === "/crop-specific-pathways") {
      assert.match(html, /Complementary Crops/);
      for (const target of ["/investment/agarwood", "/investment/mango", "/crop-economics"]) assert.ok(html.includes(`href="${target}"`));
    }
    if (path === "/services") assert.doesNotMatch(html, /Client Visitation Programme/);
    if (path === "/visitation-programme") {
      assert.match(html, /Client Visitation Programme/);
      assert.match(html, /Zambales and Negros Operations/);
      assert.ok(html.indexOf("Zambales and Negros Operations") < html.indexOf("Client Visitation Programme"));
      assert.doesNotMatch(html, /Register Your Interest/);
      assert.doesNotMatch(html, /See the examples|SEE THE EXAMPLES/);
    }
    console.log(`PASS: rendered content ${path}`);
  }
} finally {
  queryClient.clear();
}
