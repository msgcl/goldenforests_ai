import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight,
  BrainCircuit,
  GraduationCap,
  Leaf,
  MapPinned,
  ShieldCheck,
  Trees,
  Waypoints,
} from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-media";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";

const operationsHeroImage = "https://res.cloudinary.com/dezfh7wug/image/upload/v1775461734/golden-forests/operations-hero-ai-3-20260406.jpg";
const intelligenceIcons = [Waypoints, BrainCircuit, Leaf] as const;

export default function Plantation() {
  const { data: siteCopy } = useSiteCopy();
  const copy = (siteCopy ?? defaultSiteCopy).plantation;
  const overviewParagraphs = copy.overviewParagraphs.filter((paragraph) => {
    const normalizedParagraph = paragraph.trim();

    if (!normalizedParagraph) return false;
    if (normalizedParagraph === copy.overviewDescription.trim()) return false;

    return true;
  });

  const universityPartners = copy.universityPartnerNames.map((name, index) => ({
    name,
    description: copy.universityPartnerDescriptions[index] ?? "",
  }));

  const riskManagementItems = copy.riskTitles.map((title, index) => ({
    title,
    tagline: copy.riskTaglines[index] ?? "",
    description: copy.riskDescriptions[index] ?? "",
  }));

  return (
    <AnimatedPage className="pt-6 md:pt-8">
      <section className="overflow-hidden rounded-[2rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#FBFCF7_0%,#F4E8D2_100%)] shadow-[0_24px_54px_rgba(23,57,46,0.12)]">
        <OptimizedImage
          src={operationsHeroImage}
          alt="Golden Forests drone and agroforestry intelligence operations"
          priority
          sizes="100vw"
          className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[520px]"
        />
        <div className="px-6 py-10 sm:px-8 md:px-10 lg:px-12 lg:py-12">
          <div className="max-w-4xl">
            <h1 className="font-serif text-[1.85rem] leading-tight text-[#17392E] sm:text-[2.45rem] lg:text-[3rem]">
              {copy.heroTitle}
            </h1>
            <p className="mt-4 text-[1rem] leading-8 text-[#17392E]/84 sm:text-[1.08rem]">
              {copy.heroDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[1.8rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#F4E4C1_0%,#F4E8D2_100%)] p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <MapPinned className="h-5 w-5" />
          </div>
          <h2 className="mt-4 font-serif text-[1.7rem] leading-tight text-[#17392E] sm:text-[2rem]">
            {copy.overviewTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-[0.92rem] font-semibold uppercase tracking-[0.16em] text-[#6B8E23] sm:text-[1rem]">
            {copy.overviewDescription}
          </p>
          {overviewParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[0.98rem] leading-8 text-[#17392E]/84">
              {paragraph}
            </p>
          ))}
          <div className="mt-6">
            <Button asChild className="rounded-xl bg-[#17392E] px-6 text-[#FBFCF7] hover:bg-[#21483a]">
              <a href={copy.overviewPortalCtaHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                {copy.overviewPortalCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-4xl">
          <h2 className="font-serif text-[1.7rem] leading-tight text-[#17392E] sm:text-[2rem]">
            {copy.intelligenceSectionTitle}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-8 text-[#17392E]/84">
            {copy.intelligenceSectionDescription}
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {copy.intelligenceTitles.map((title, index) => {
            const Icon = intelligenceIcons[index] ?? Leaf;

            return (
              <Card key={title} className="border-border/70 shadow-sm">
                <CardContent className="p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#17392E]">{title}</h3>
                  <p className="mt-2 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-[#8A6744]">
                    {copy.intelligenceTaglines[index] ?? ""}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#17392E]/84">{copy.intelligenceDescriptions[index] ?? ""}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mt-10 rounded-[1.8rem] border border-[#C8A070]/24 bg-[#F4E8D2] p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h2 className="mt-4 font-serif text-[1.7rem] leading-tight text-[#17392E] sm:text-[2rem]">
            {copy.universitySectionTitle}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-8 text-[#17392E]/84">{copy.universitySectionIntro}</p>
          <p className="mt-4 text-[0.98rem] leading-8 text-[#17392E]/84">{copy.universitySectionDescription}</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {universityPartners.map(({ name, description }) => (
            <Card key={name} className="border-[#C8A070]/24 bg-white/70 shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-[1rem] font-semibold leading-snug text-[#17392E]">{name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#17392E]/84">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-4xl">
          <h2 className="font-serif text-[1.7rem] leading-tight text-[#17392E] sm:text-[2rem]">
            {copy.riskSectionTitle}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-8 text-[#17392E]/84">{copy.riskSectionDescription}</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {riskManagementItems.map(({ title, tagline, description }) => (
            <Card key={title} className="border-border/70 shadow-sm">
              <CardContent className="p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#17392E]">{title}</h3>
                <p className="mt-2 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-[#8A6744]">
                  {tagline}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#17392E]/84">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[1.8rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#FBFCF7_0%,#F4E8D2_100%)] p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl">
          <h2 className="font-serif text-[1.7rem] leading-tight text-[#17392E] sm:text-[2rem]">
            {copy.environmentalSectionTitle}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-8 text-[#17392E]/84">{copy.environmentalSectionSubtitle}</p>
          <p className="mt-4 text-[0.98rem] leading-8 text-[#17392E]/84">{copy.environmentalSectionDescription}</p>
          <p className="mt-6 text-[0.92rem] font-semibold uppercase tracking-[0.16em] text-[#8A6744]">
            {copy.environmentalSectionTagline}
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[#17392E]/84">
            {copy.environmentalItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C8A070]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-[1.8rem] border border-[#C8A070]/24 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Trees className="h-5 w-5" />
          </div>
          <h2 className="mt-4 font-serif text-[1.7rem] leading-tight text-[#17392E] sm:text-[2rem]">
            {copy.transparencySectionTitle}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-8 text-[#17392E]/84">{copy.transparencySectionDescription}</p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[#17392E]/84">
            {copy.transparencyItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C8A070]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-xl bg-[#17392E] px-6 text-[#FBFCF7] hover:bg-[#21483a]">
              <a href={copy.transparencyPrimaryCtaHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                {copy.transparencyPrimaryCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-xl border-[#17392E]/25 bg-[#FBFCF7] px-6 text-[#17392E] hover:bg-[#F4E8D2]">
              <Link href={copy.transparencySecondaryCtaHref} className="inline-flex items-center gap-2">
                {copy.transparencySecondaryCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
