import { Link } from "wouter";
import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { ReturnScenarios } from "@/components/ReturnScenarios";

export default function CropEconomics() {
  return (
    <AnimatedPage>
      <header className="light-surface rounded-2xl border border-[#C8A070]/25 bg-[#F7F3EA] p-6 text-[#17392E] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#806238]">Operating models · Philippines</p>
        <h1 className="mt-4 font-serif text-3xl sm:text-4xl">Crop Economics &amp; Model Assumptions</h1>
        <p className="mt-5 italic leading-8">Explore how cultivation, harvest timing, sale prices and modeled deductions shape crop-linked cash flows. These projections explain management’s models; they do not establish the economics of a shareholding, fund interest, asset purchase or partnership.</p>
      </header>
      <ReturnScenarios detailed />
      <nav aria-label="Investment information" className="flex flex-wrap gap-6 text-[#F7F3EA]">
        <Link href="/disclaimer" className="underline underline-offset-4">Important Information &amp; Risks</Link>
      </nav>
    </AnimatedPage>
  );
}
