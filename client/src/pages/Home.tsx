import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { OptimizedImage } from "@/components/ui/optimized-media";
import {
  ArrowRight,
  BrainCircuit,
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
import { createPageTypography } from "@/lib/siteTypography";

const differentiatorIcons = [ShieldCheck, FlaskConical, BrainCircuit, Users] as const;
const pillarIcons = [Trees, MapPin, Leaf] as const;
const closingIcons = [Sprout, Trees, Leaf] as const;

export default function Home() {
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

  return (
    <AnimatedPage className="pt-6 md:pt-8">
      <section className="overflow-hidden rounded-[2rem] border border-[#C8A070]/24 bg-[radial-gradient(circle_at_top_right,rgba(200,160,112,0.14),transparent_30%),linear-gradient(135deg,#17392E_0%,#17392E_62%,#499972_100%)] text-[#FBFCF7] shadow-[0_24px_54px_rgba(9,39,34,0.18)]">
        <div className="px-6 py-10 sm:px-8 md:px-10 lg:px-12 lg:py-12">
          <div className="max-w-5xl">
            <span className={font("heroBadge", "inline-flex rounded-full border border-[#C8A070]/38 bg-[#FBFCF7]/6 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#C8A070]")}>
              {copy.heroBadge}
            </span>
            <h1 className={font("heroTitle", "mt-5 max-w-4xl font-serif text-[clamp(1.75rem,2.85vw,3.1rem)] font-normal leading-[1.08] tracking-[0.01em] text-[#FBFCF7]")}>
              {copy.heroTitle}
            </h1>
            <div className={font("heroParagraphs", "mt-6 max-w-4xl space-y-4 text-[0.98rem] leading-8 text-[#FBFCF7]/86 sm:text-[1rem]")}>
              {copy.heroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="rounded-xl bg-[#C8A070] px-7 text-[#17392E] hover:bg-[#d4af82]">
                <Link href="/about" className={font("primaryCtaLabel", "inline-flex items-center gap-2")}>
                  {copy.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-[#C8A070]/45 bg-[#FBFCF7]/6 px-7 text-[#FBFCF7] hover:bg-[#FBFCF7]/12 hover:text-[#FBFCF7]">
                <Link href="/plantation" className={font("secondaryCtaLabel", "inline-flex items-center gap-2")}>
                  {copy.secondaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 overflow-hidden rounded-[2rem] border border-[#C8A070]/22 bg-[#17392E] shadow-[0_24px_54px_rgba(9,39,34,0.18)]">
        <OptimizedImage
          src="https://res.cloudinary.com/dezfh7wug/image/upload/v1774561091/golden-forests/plantation-image-home.jpg"
          alt="Golden Forests plantation landscape in Southern Zambales"
          priority
          sizes="100vw"
          className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[560px]"
        />
      </section>

      <section className="mt-10 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-border/70 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <p className={font("narrativeEyebrow", "text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#499972]")}>{copy.narrativeEyebrow}</p>
            <div className={font("narrativeParagraphs", "mt-4 space-y-5 text-sm leading-8 text-muted-foreground sm:text-[1rem]")}>
              {copy.narrativeParagraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === copy.narrativeParagraphs.length - 1 ? "text-foreground" : undefined}>{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
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
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-5 max-w-3xl">
          <p className={font("differentiationEyebrow", "text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary")}>{copy.differentiationEyebrow}</p>
          <h2 className={font("differentiationTitle", "mt-2 font-serif text-[1.55rem] font-normal tracking-tight text-[#FBFCF7] sm:text-[1.95rem]")}>
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

      <section className="mt-10 rounded-[1.8rem] border border-[#C8A070]/26 bg-[linear-gradient(135deg,#FBFCF7_0%,#F4E8D2_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.1)] sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className={font("missionEyebrow", "text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#8A6744]")}>{copy.missionEyebrow}</p>
            <p className={font("missionStatement", "mt-3 max-w-3xl font-serif text-[1.12rem] leading-relaxed text-[#17392E] sm:text-[1.3rem]")}>
              {copy.missionStatement}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[#C8A070]/40 bg-[#17392E] p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <p className={font("missionPanelText", "whitespace-nowrap font-serif text-[1.2rem] text-[#FBFCF7] sm:text-[1.35rem] lg:text-[1.5rem]")}>{copy.missionPanelText}</p>
            <Button asChild className="mt-5 rounded-xl bg-[#C8A070] px-6 text-[#17392E] hover:bg-[#d4af82]">
              <Link href="/contact" className={font("missionCtaLabel", "inline-flex items-center gap-2")}>
                {copy.missionCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
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
    </AnimatedPage>
  );
}
