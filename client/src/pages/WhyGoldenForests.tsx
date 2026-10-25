import { Link } from "wouter";
import { ArrowRight, BrainCircuit, Leaf, ShieldCheck, UsersRound } from "lucide-react";
import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Button } from "@/components/ui/button";

const strengths = [
  { icon: UsersRound, title: "Experience connected to execution", text: "Leadership combines institutional investment experience with plantation operations, forestry and applied crop science. Philippine nursery and field capabilities connect regional strategy with day-to-day cultivation." },
  { icon: ShieldCheck, title: "Disciplined opportunity selection", text: "Each opportunity calls for its own legal, agronomic, operational, commercial and governance review. Participation rights, responsibilities and reporting are defined in the relevant final documents." },
  { icon: Leaf, title: "Science-informed cultivation", text: "Research and technical relationships support propagation, crop management and post-harvest quality. Crop-specific practices guide Aquilaria crassna agarwood and Dwarf Sweet Elena mango development." },
  { icon: BrainCircuit, title: "Agroforestry Intelligence", text: "Agronomic science, drone monitoring, GIS and structured field records support cultivation decisions and operational visibility. Reliable data and field controls remain essential to useful reporting." },
];

export default function WhyGoldenForests() {
  return (
    <AnimatedPage>
      <section className="light-surface rounded-[2rem] border border-[#C8A070]/25 bg-[linear-gradient(135deg,#FBFCF7_0%,#F3E9D6_100%)] px-6 py-10 text-[#17392E] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#806238]">Why Golden Forests</p>
        <h1 className="mt-4 max-w-4xl font-serif text-3xl leading-tight sm:text-5xl">Long-term cultivation. Responsible stewardship.</h1>
        <p className="mt-6 max-w-3xl leading-8">Golden Forests connects professional capital with sustainable plantation and agroforestry opportunities across Asia. Our approach brings together local operating experience, scientific cultivation and disciplined oversight, with objectives for investors, the land and local communities.</p>
        <Button asChild className="mt-7"><Link href="/investment#participation-options">Explore participation pathways <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
      </section>

      <section id="why-agroforestry" className="light-surface mt-8 rounded-2xl border border-[#C8A070]/25 bg-[#F7F3EA] p-6 text-[#17392E] sm:p-8">
        <h2 className="font-serif text-3xl">Why Agroforestry?</h2>
        <p className="mt-4 leading-8">Forestry and agroforestry combine long-term biological growth with exposure to real operating assets. They may contribute to portfolio diversification and potential inflation resilience, alongside environmental and social objectives.</p>
        <p className="mt-4 leading-8">Different crops bring different harvesting cycles. Mango can introduce recurring harvest activity once productive, while agarwood follows a longer cultivation and resin-development cycle. Commercial value depends on crop health, product quality, harvest timing and successful sales.</p>
        <p className="mt-4 text-sm italic leading-7">These potential benefits are not assured. Investments are long-term and illiquid, with exposure to agricultural, operational and market risks. Both crops can be affected by shared weather, location and execution risks, and capital may be lost.</p>
      </section>

      <section id="our-approach" className="mt-10">
        <h2 className="mb-5 font-serif text-3xl text-[#F7F3EA]">Why Golden Forests?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {strengths.map(({ icon: Icon, title, text }) => (
            <article key={title} className="light-surface rounded-2xl border border-[#C8A070]/25 bg-[#F7F3EA] p-6 text-[#17392E]">
              <Icon aria-hidden="true" className="mb-4 h-7 w-7 text-[#806238]" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-5 text-[#F7F3EA]">
          <Link href="/golden-forests-group" className="underline underline-offset-4">Meet the company and leadership</Link>
          <Link href="/precision-farming" className="underline underline-offset-4">Explore plantation science and monitoring</Link>
        </div>
      </section>

      <section id="stewardship" className="light-surface mt-10 rounded-2xl border border-[#C8A070]/25 bg-[#F3E9D6] p-6 text-[#17392E] sm:p-8">
        <h2 className="font-serif text-3xl">For the Land and Local Communities</h2>
        <p className="mt-4 leading-8">Our objectives include responsible soil and water management, productive land rehabilitation, native-tree planting and biodiversity. Local employment, training and respectful community engagement form part of the intended long-term value of plantation development.</p>
        <p className="mt-4 leading-8">The planned native-tree programme complements commercial cultivation. Community opportunities include potential participation by women, rural families and members of the Indigenous Aeta community, subject to consultation and appropriate safeguards.</p>
        <p className="mt-4 leading-7 text-[0.9375rem] italic">These are objectives and planned outcomes, not verified achievements. Environmental and social claims require baseline evidence, implementation records, monitoring and appropriate independent verification. No certification or assured carbon income is implied.</p>
        <Link href="/plantation" className="mt-5 inline-block font-semibold underline underline-offset-4">See our operating approach</Link>
      </section>

      <section id="partnerships" className="light-surface mt-8 rounded-2xl border border-[#C8A070]/25 bg-[#F7F3EA] p-6 text-[#17392E] sm:p-8">
        <h2 className="font-serif text-3xl">Find Your Participation Pathway</h2>
        <p className="mt-4 leading-8">Professional and institutional investors can explore independent regulated fund participation, direct company equity, direct plantation ownership, joint ventures, and strategic partnerships. Any fund offering memorandum and approved materials will come directly from the independent regulated fund manager.</p>
        <p className="mt-4 leading-8">For plantation operators and related businesses, collaboration may bring together complementary assets, capital, operating expertise and market access. The right structure depends on objectives, eligibility, due diligence and agreed responsibilities.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button asChild><Link href="/investment#participation-options">Compare the four pathways <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          <Button asChild variant="outline"><Link href="/contact">Discuss a partnership</Link></Button>
        </div>
        <p className="mt-6 leading-7 text-[0.9375rem] italic">Availability and participation depend on the selected opportunity and definitive documents. Returns and repayment are not guaranteed. <Link href="/disclaimer" className="underline underline-offset-4">Read Important Information &amp; Risks.</Link></p>
      </section>
    </AnimatedPage>
  );
}
