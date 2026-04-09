import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { OptimizedImage } from "@/components/ui/optimized-media";
import {
  ArrowRight,
  Download,
  Leaf,
  MapPin,
  Sprout,
  Trees,
} from "lucide-react";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { createPageTypography } from "@/lib/siteTypography";

const plantationHeroImage =
  "https://res.cloudinary.com/dezfh7wug/image/upload/v1774850962/golden-forests/plantation-image-home-20260330.jpg";
const agarwoodExposePdf = new URL("../../../gallery/ASSETS/DOCUMENTS/GF Agarwood Exposé Profesional final.pdf", import.meta.url).href;
const mangoExposePdf = new URL("../../../gallery/ASSETS/DOCUMENTS/GF Mango Exposeì Private FINAL.pdf", import.meta.url).href;
const combinedTwoPagerPdf = new URL("../../../gallery/ASSETS/DOCUMENTS/GF combined two-pager v1.pdf", import.meta.url).href;
const pillarIcons = [Trees, MapPin, Leaf] as const;
const investmentOpportunityIcons = [Leaf, Trees] as const;

export default function Home() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.home;
  const font = createPageTypography(resolvedSiteCopy, "home");
  const valuePillars = copy.pillarTitles.map((title, index) => ({
    title,
    tagline: copy.pillarTaglines[index] ?? "",
    bullets: (copy.pillarBullets ?? []).slice(index * 3, index * 3 + 3),
  }));

  const investmentOpportunities = copy.investmentOpportunityTitles.map((title, index) => ({
    title,
    description: copy.investmentOpportunityDescriptions[index] ?? "",
    learnMoreLabel: copy.investmentOpportunityLearnMoreLabels[index] ?? "Learn More",
    learnMoreHref: copy.investmentOpportunityLearnMoreHrefs[index] ?? "/contact",
    downloadLabel: copy.investmentOpportunityDownloadLabels[index] ?? "Download",
    downloadHref:
      copy.investmentOpportunityDownloadHrefs[index] ??
      (index === 0 ? agarwoodExposePdf : index === 1 ? mangoExposePdf : "/downloads"),
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
      <section className="overflow-hidden rounded-[2rem] border border-[#C8A070]/24 bg-[radial-gradient(circle_at_top_right,rgba(200,160,112,0.18),transparent_30%),linear-gradient(135deg,#F4E4C1_0%,#F4E4C1_65%,#EBD4A5_100%)] text-[#2D5016] shadow-[0_24px_54px_rgba(23,57,46,0.12)]">
        <OptimizedImage
          src={plantationHeroImage}
          alt="Golden Forests plantation landscape in Zambales province"
          priority
          sizes="100vw"
          className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[460px]"
        />
        <div className="px-6 py-10 sm:px-8 md:px-10 lg:px-12 lg:py-12">
          <div className="max-w-5xl">
            <h1 className={font("heroTitle", "max-w-none whitespace-nowrap font-serif text-[clamp(1.2rem,2.25vw,2.55rem)] font-normal leading-[1.08] tracking-[0.01em] text-[#2D5016]")}>
              {copy.heroTitle}
            </h1>
            <div className={font("heroParagraphs", "mt-6 max-w-4xl space-y-4 text-[0.98rem] leading-8 text-[#2D5016]/86 sm:text-[1rem]")}>
              {copy.heroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-[#2D5016] px-7 text-[#FBFCF7] hover:bg-[#3b6820]"
              >
                <Link href="/investment" className={font("primaryCtaLabel", "inline-flex items-center gap-2")}>
                  {copy.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="investment-pathways"
        className="mt-10 rounded-[1.9rem] border border-[#6B8E23]/18 bg-[#7F9E62] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.1)] sm:p-8"
      >
        <div className="mb-6 max-w-none">
          <h2 className="font-serif text-[1.5rem] leading-tight text-[#F6F0DE] sm:text-[1.75rem] lg:whitespace-nowrap lg:text-[2rem]">
            {copy.investmentSectionTitle}
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {investmentOpportunities.map(({ title, description, learnMoreLabel, learnMoreHref, downloadHref, downloadLabel, icon: Icon }) => (
            <Card key={title} className="border-[#C8A070]/24 bg-[#F4E4C1] shadow-sm">
              <CardContent className="p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-[1.6rem] text-[#2D5016]">{title}</h3>
                <p className="mt-4 text-[0.97rem] leading-8 text-[#2D5016]">
                  {description}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild className="rounded-xl bg-[#2D5016] px-5 text-[#FBFCF7] hover:bg-[#3b6820]">
                    <a href={learnMoreHref} className="inline-flex items-center gap-2">
                      {learnMoreLabel}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-xl border-[#2D5016]/30 bg-transparent px-5 text-[#2D5016] hover:bg-[#FBFCF7]">
                    <a href={downloadHref} download className="inline-flex items-center gap-2">
                      {downloadLabel}
                      <Download className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 xl:grid-cols-3">
        {valuePillars.map(({ title, tagline, bullets }, index) => {
          const Icon = pillarIcons[index] ?? Leaf;
          return (
          <Card key={title} className="h-full border-[#C8A070]/24 bg-[#F4E4C1] shadow-sm">
            <CardContent className="flex h-full p-6 md:p-7">
              <div className="flex flex-col gap-5">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className={font("pillarTitles", "font-serif text-[1.65rem] font-semibold leading-tight text-[#2D5016]")}>{title}</h2>
                  <p className={font("pillarDescriptions", "mt-4 whitespace-pre-line text-[0.98rem] font-medium uppercase tracking-[0.28em] text-[#6B8E23] sm:text-[1rem]")}>
                    {tagline}
                  </p>
                  <ul className="mt-4 space-y-3 text-[0.98rem] leading-7 text-[#2D5016]/84">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6B8E23]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )})}
      </section>

      <section className="mt-10 rounded-[1.8rem] border border-[#C8A070]/24 bg-[#F4E4C1] p-6 shadow-sm sm:p-8">
        <div className="mb-6 max-w-4xl">
          <h2 className="font-serif text-[1.6rem] leading-tight text-[#2D5016] sm:text-[2rem]">
            {copy.credibilityTitle}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {credibilityPartners.map(({ logo, logoAlt, name, leadLine, bodyLine }) => (
            <Card key={name} className="border-[#C8A070]/24 bg-[#F4E4C1] shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#C8A070]/35 bg-[#F4E8D2] p-2">
                    <OptimizedImage
                      src={logo}
                      alt={logoAlt}
                      sizes="56px"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex min-h-14 items-center">
                      <h3 className="text-[1rem] font-semibold leading-snug text-[#2D5016]">{name}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#2D5016]/84">
                      <span className="mb-1 block text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-[#2D5016]">
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

      <section className="mt-10 rounded-[1.8rem] border border-[#C8A070]/26 bg-[linear-gradient(135deg,#F4E4C1_0%,#F4E4C1_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.1)] sm:p-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className={font("missionStatement", "font-serif text-[1.9rem] leading-tight text-[#2D5016] sm:text-[2.4rem] lg:text-[2.9rem]")}>
            {copy.missionStatement}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild className="rounded-xl bg-[#2D5016] px-6 text-[#FBFCF7] hover:bg-[#3b6820]">
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
