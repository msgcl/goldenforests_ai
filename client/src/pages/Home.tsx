import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { OptimizedImage } from "@/components/ui/optimized-media";
import {
  ArrowRight,
  Leaf,
  Sprout,
  Trees,
} from "lucide-react";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { createPageTypography } from "@/lib/siteTypography";

const plantationHeroImage =
  "https://res.cloudinary.com/dezfh7wug/image/upload/v1774850962/golden-forests/plantation-image-home-20260330.jpg";
const investmentOpportunityIcons = [Leaf, Trees] as const;

export default function Home() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.home;
  const font = createPageTypography(resolvedSiteCopy, "home");
  const investmentOpportunities = copy.investmentOpportunityTitles.map((title, index) => ({
    title,
    description: copy.investmentOpportunityDescriptions[index] ?? "",
    enquiryHref: copy.investmentOpportunityLearnMoreHrefs[index] ?? "/investment",
    icon: investmentOpportunityIcons[index] ?? Leaf,
  }));

  const credibilityPartners = copy.credibilityPartnerNames.map((name, index) => ({
    name,
    leadLine: copy.credibilityPartnerLeadLines[index] ?? "",
    bodyLine: copy.credibilityPartnerBodyLines[index] ?? "",
    logo: copy.credibilityPartnerLogoUrls[index] ?? "",
    logoAlt: copy.credibilityPartnerLogoAlts[index] ?? `${name} logo`,
  }));

  return (
    <AnimatedPage className="pt-6 md:pt-8">
      <section className="overflow-hidden rounded-[2rem] border border-[#C8A070]/24 bg-[radial-gradient(circle_at_top_right,rgba(200,160,112,0.18),transparent_30%),linear-gradient(135deg,#F7F3EA_0%,#F7F3EA_65%,#EFE4CF_100%)] text-[#17392E] shadow-[0_24px_54px_rgba(23,57,46,0.12)]">
        <OptimizedImage
          src={plantationHeroImage}
          alt="Golden Forests plantation landscape in Zambales province"
          priority
          sizes="100vw"
          className="h-[240px] w-full object-cover sm:h-[360px] lg:h-[460px]"
        />
        <div className="px-5 py-8 sm:px-8 md:px-10 lg:px-12 lg:py-12">
          <div className="max-w-5xl">
            <h1 className={font("heroTitle", "max-w-[14ch] break-words font-serif text-[clamp(1.85rem,6.4vw,2.55rem)] font-normal leading-[1.08] tracking-[0.01em] text-[#17392E] sm:max-w-none")}>
              {copy.heroTitle}
            </h1>
            <div className={font("heroParagraphs", "mt-5 max-w-4xl space-y-4 text-[0.95rem] leading-8 text-[#17392E]/[0.86] sm:mt-6 sm:text-[1rem]")}>
              {copy.heroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="w-full rounded-xl bg-[#17392E] px-6 text-[#FBFCF7] hover:bg-[#214C40] sm:w-auto sm:px-7"
              >
                <Link href="/investment" className={font("primaryCtaLabel", "inline-flex items-center gap-2")}>
                  {copy.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full rounded-xl border-[#17392E]/30 text-[#17392E] sm:w-auto">
                <Link href="/why-golden-forests">Why Golden Forests <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <p className="mt-6 text-sm italic leading-7 text-[#D0DBD2]">
        Investments are illiquid and may result in loss of capital. Returns and dividends are not guaranteed.{" "}
        <Link href="/disclaimer" className="underline underline-offset-4">Read Important Information &amp; Risks.</Link>
      </p>



      <p className="mt-6 text-sm italic leading-7 text-[#F7F3EA]">Explore the separate <Link href="/crop-economics" className="underline underline-offset-4">Philippine crop economics and model assumptions</Link>. Crop models do not establish investor distribution rights.</p>

      <section className="light-surface mt-10 rounded-[1.8rem] border border-[#C8A070]/24 bg-[#F7F3EA] p-6 text-[#17392E] sm:p-8">
        <h2 className="font-serif text-2xl sm:text-3xl">{copy.narrativeEyebrow}</h2>
        {copy.narrativeParagraphs.map((paragraph) => (
          <p key={paragraph} className="mt-4 max-w-5xl leading-8">{paragraph}</p>
        ))}
      </section>

      <section
        id="investment-pathways"
        className="light-surface mt-10 rounded-[1.9rem] border border-[#C8A070]/18 bg-[#F3E9D6] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.1)] sm:p-8"
      >
        <div className="mb-6 max-w-none">
          <h2 className="font-serif text-[1.5rem] leading-tight text-[#17392E] sm:text-[1.75rem] lg:whitespace-nowrap lg:text-[2rem]">
            {copy.investmentSectionTitle}
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {investmentOpportunities.map(({ title, description, enquiryHref, icon: Icon }) => (
            <Card key={title} className="border-[#C8A070]/24 bg-[#F7F3EA] shadow-sm">
              <CardContent className="p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-[1.6rem] text-[#17392E]">{title}</h3>
                <p className="mt-4 text-[0.97rem] leading-8 text-[#17392E]">
                  {description}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild className="rounded-xl bg-[#17392E] px-5 text-[#FBFCF7] hover:bg-[#214C40]">
                    <Link href={enquiryHref} className="inline-flex items-center gap-2">
                      {"Explore crop operations"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="light-surface mt-10 rounded-[1.8rem] border border-[#C8A070]/24 bg-[#F7F3EA] p-6 shadow-sm sm:p-8">
        <div className="mb-6 max-w-4xl">
          <h2 className="font-serif text-[1.6rem] leading-tight text-[#17392E] sm:text-[2rem]">
            {copy.credibilityTitle}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-8 text-[#17392E]/[0.84] sm:text-[1rem]">
            {copy.credibilityEyebrow}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {credibilityPartners.map(({ logo, logoAlt, name, leadLine, bodyLine }) => (
            <Card key={name} className="border-[#C8A070]/24 bg-[#F7F3EA] shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#C8A070]/35 bg-[#F3E9D6] p-2">
                    <OptimizedImage
                      src={logo}
                      alt={logoAlt}
                      sizes="56px"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex min-h-14 items-center">
                      <h3 className="text-[1rem] font-semibold leading-snug text-[#17392E]">{name}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#17392E]/[0.84]">
                      <span className="mb-3 block text-[0.98rem] font-semibold uppercase tracking-[0.1em] text-[#17392E]">
                        {leadLine}
                      </span>
                      {bodyLine}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="light-surface mt-10 rounded-[1.8rem] border border-[#C8A070]/26 bg-[linear-gradient(135deg,#F7F3EA_0%,#F7F3EA_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.1)] sm:p-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className={font("missionStatement", "font-serif text-[1.3rem] leading-tight text-[#17392E] sm:text-[1.65rem] lg:text-[1.95rem]")}>
            {copy.missionStatement}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild className="rounded-xl bg-[#17392E] px-6 text-[#FBFCF7] hover:bg-[#214C40]">
              <Link href="/contact" className={font("missionCtaLabel", "inline-flex items-center gap-2")}>
                {copy.missionCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
