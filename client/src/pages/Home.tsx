import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { OptimizedImage } from "@/components/ui/optimized-media";
import {
  ArrowRight,
  BrainCircuit,
  Download,
  FlaskConical,
  Leaf,
  MapPin,
  ShieldCheck,
  Sprout,
  Trees,
  Users,
} from "lucide-react";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { downloadHomeOverviewPdf } from "@/lib/homeOverviewPdf";
import { createPageTypography } from "@/lib/siteTypography";

const plantationHeroImage =
  "https://res.cloudinary.com/dezfh7wug/image/upload/v1774850962/golden-forests/plantation-image-home-20260330.jpg";
const logoWhite =
  "https://res.cloudinary.com/dezfh7wug/image/upload/v1774850963/golden-forests/logo-white-overview-20260330.png";

const differentiatorIcons = [ShieldCheck, FlaskConical, BrainCircuit, Users] as const;
const pillarIcons = [Trees, MapPin, Leaf] as const;
const closingIcons = [Sprout, Trees, Leaf] as const;
const investmentOpportunityIcons = [Leaf, Trees] as const;

export default function Home() {
  const [isDownloadingOverview, setIsDownloadingOverview] = useState(false);
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.home;
  const font = createPageTypography(resolvedSiteCopy, "home");

  const valuePillars = copy.pillarTitles.map((title, index) => ({
    title,
    description: copy.pillarDescriptions[index] ?? "",
    icon: pillarIcons[index] ?? Leaf,
  }));

  const differentiators = copy.differentiatorTitles.map((title, index) => ({
    title,
    description: copy.differentiatorDescriptions[index] ?? "",
    icon: differentiatorIcons[index] ?? Users,
  }));

  const closingCards = copy.closingTitles.map((title, index) => ({
    title,
    description: copy.closingDescriptions[index] ?? "",
    icon: closingIcons[index] ?? Leaf,
  }));

  const investmentOpportunities = copy.investmentOpportunityTitles.map((title, index) => ({
    title,
    description: copy.investmentOpportunityDescriptions[index] ?? "",
    learnMoreLabel: copy.investmentOpportunityLearnMoreLabels[index] ?? "Learn More",
    learnMoreHref: copy.investmentOpportunityLearnMoreHrefs[index] ?? "/",
    downloadLabel: copy.investmentOpportunityDownloadLabels[index] ?? "Download",
    downloadHref: copy.investmentOpportunityDownloadHrefs[index] ?? "/downloads",
    icon: investmentOpportunityIcons[index] ?? Leaf,
  }));

  const credibilityPartners = copy.credibilityPartnerNames.map((name, index) => ({
    name,
    description: copy.credibilityPartnerDescriptions[index] ?? "",
    logo: copy.credibilityPartnerLogoUrls[index] ?? "",
    logoAlt: copy.credibilityPartnerLogoAlts[index] ?? `${name} logo`,
  }));

  const handleDownloadOverview = async () => {
    try {
      setIsDownloadingOverview(true);
      await downloadHomeOverviewPdf(resolvedSiteCopy, {
        heroImageUrl: plantationHeroImage,
        logoUrl: logoWhite,
      });
    } finally {
      setIsDownloadingOverview(false);
    }
  };

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
            <span className={font("heroBadge", "inline-flex rounded-full border border-[#6B8E23]/28 bg-[#FBFCF7]/45 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#6B8E23]")}>
              {copy.heroBadge}
            </span>
            <h1 className={font("heroTitle", "mt-5 max-w-none whitespace-nowrap font-serif text-[clamp(1.2rem,2.25vw,2.55rem)] font-normal leading-[1.08] tracking-[0.01em] text-[#2D5016]")}>
              {copy.heroTitle}
            </h1>
            <div className={font("heroParagraphs", "mt-6 max-w-4xl space-y-4 text-[0.98rem] leading-8 text-[#2D5016]/86 sm:text-[1rem]")}>
              {copy.heroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="rounded-xl bg-[#2D5016] px-7 text-[#FBFCF7] hover:bg-[#3b6820]">
                <Link href="/contact" className={font("primaryCtaLabel", "inline-flex items-center gap-2")}>
                  {copy.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-[#2D5016]/35 bg-[#FBFCF7]/45 px-7 text-[#2D5016] hover:bg-[#FBFCF7]/75 hover:text-[#2D5016]">
                <Link href="/plantation" className={font("secondaryCtaLabel", "inline-flex items-center gap-2")}>
                  {copy.secondaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <Card className="border-border/70 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <p className={font("narrativeEyebrow", "text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#2D5016]")}>{copy.narrativeEyebrow}</p>
            <div className={font("narrativeParagraphs", "mt-4 space-y-5 text-sm leading-8 text-muted-foreground sm:text-[1rem]")}>
              {copy.narrativeParagraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === copy.narrativeParagraphs.length - 1 ? "text-foreground" : undefined}>{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {valuePillars.map(({ title, description, icon: Icon }) => (
          <Card key={title} className="border-border/70 shadow-sm">
            <CardContent className="p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className={font("pillarTitles", "mt-4 text-xl font-semibold text-foreground")}>{title}</h2>
              <p className={font("pillarDescriptions", "mt-2 text-[0.95rem] leading-7 text-muted-foreground")}>{description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-10">
        <div className="mb-5 max-w-3xl">
          <p className={font("differentiationEyebrow", "text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary")}>{copy.differentiationEyebrow}</p>
          <h2 className={font("differentiationTitle", "mt-2 font-serif text-[1.55rem] font-normal tracking-tight text-[#2D5016] sm:text-[1.95rem]")}>
            {copy.differentiationTitle}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {differentiators.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="h-full border-border/70 shadow-sm">
              <CardContent className="p-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={font("differentiatorTitles", "mt-4 text-[1.02rem] font-semibold leading-snug text-foreground")}>{title}</h3>
                <p className={font("differentiatorDescriptions", "mt-3 text-[0.95rem] leading-7 text-muted-foreground")}>{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[1.9rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#F4E4C1_0%,#F4E4C1_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.1)] sm:p-8">
        <div className="mb-6 max-w-3xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#6B8E23]">
            {copy.investmentSectionEyebrow}
          </p>
          <h2 className="mt-3 font-serif text-[1.65rem] leading-tight text-[#2D5016] sm:text-[2rem]">
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
                <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#6B8E23]">
                  Investment Program
                </p>
                <h3 className="mt-2 font-serif text-[1.6rem] text-[#2D5016]">{title}</h3>
                <p className="mt-4 text-[0.97rem] leading-8 text-[#2D5016]">
                  {description}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild className="rounded-xl bg-[#2D5016] px-5 text-[#FBFCF7] hover:bg-[#3b6820]">
                    <Link href={learnMoreHref} className="inline-flex items-center gap-2">
                      {learnMoreLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-xl border-[#2D5016]/30 bg-transparent px-5 text-[#2D5016] hover:bg-[#FBFCF7]">
                    <Link href={downloadHref} className="inline-flex items-center gap-2">
                      {downloadLabel}
                      <Download className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[1.8rem] border border-[#C8A070]/24 bg-[#F4E4C1] p-6 shadow-sm sm:p-8">
        <div className="mb-6 max-w-4xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#6B8E23]">
            {copy.credibilityEyebrow}
          </p>
          <h2 className="mt-3 font-serif text-[1.6rem] leading-tight text-[#2D5016] sm:text-[2rem]">
            {copy.credibilityTitle}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {credibilityPartners.map(({ logo, logoAlt, name, description }) => (
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
                  <div>
                    <h3 className="text-[1rem] font-semibold leading-snug text-[#2D5016]">{name}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#2D5016]/84">{description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {closingCards.map(({ title, description, icon: Icon }) => (
          <Card key={title} className="border-border/70 shadow-sm md:col-span-1">
            <CardContent className="p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className={font("closingTitles", "mt-4 text-lg font-semibold text-foreground")}>{title}</h3>
              <p className={font("closingDescriptions", "mt-2 text-sm leading-7 text-muted-foreground")}>{description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-10 rounded-[1.8rem] border border-[#C8A070]/26 bg-[linear-gradient(135deg,#F4E4C1_0%,#F4E4C1_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.1)] sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className={font("missionEyebrow", "text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#6B8E23]")}>{copy.missionEyebrow}</p>
            <p className={font("missionStatement", "mt-3 max-w-3xl font-serif text-[1.12rem] leading-relaxed text-[#2D5016] sm:text-[1.3rem]")}>
              {copy.missionStatement}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[#C8A070]/40 bg-[#F4E4C1] p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <p className={font("missionPanelText", "font-serif text-[1.1rem] leading-relaxed text-[#2D5016] sm:text-[1.2rem] lg:text-[1.35rem]")}>{copy.missionPanelText}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild className="rounded-xl bg-[#2D5016] px-6 text-[#FBFCF7] hover:bg-[#3b6820]">
                <Link href="/contact" className={font("missionCtaLabel", "inline-flex items-center gap-2")}>
                  {copy.missionCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={isDownloadingOverview}
                onClick={handleDownloadOverview}
                className="rounded-xl border-[#2D5016]/35 bg-[#FBFCF7]/45 px-6 text-[#2D5016] hover:bg-[#FBFCF7] hover:text-[#2D5016]"
              >
                <span className={font("missionSecondaryCtaLabel", "inline-flex items-center gap-2")}>
                  {isDownloadingOverview ? "Preparing Overview..." : copy.missionSecondaryCtaLabel}
                  <Download className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
