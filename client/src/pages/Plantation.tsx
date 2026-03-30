import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LeafyGreen, MapPinned, ShieldCheck, Sprout, Trees } from "lucide-react";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { createPageTypography } from "@/lib/siteTypography";

const overviewCardIcons = [MapPinned, Trees, ShieldCheck] as const;
const coverageHighlightIcons = [LeafyGreen, Sprout] as const;

export default function Plantation() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.plantation;
  const font = createPageTypography(resolvedSiteCopy, "plantation");
  const overviewCards = copy.overviewCardTitles.map((title, index) => ({
    title,
    description: copy.overviewCardDescriptions[index] ?? "",
    icon: overviewCardIcons[index] ?? ShieldCheck,
  }));
  const highlightItems = copy.coverageHighlightTitles.map((title, index) => ({
    title,
    description: copy.coverageHighlightDescriptions[index] ?? "",
    icon: coverageHighlightIcons[index] ?? Sprout,
  }));

  return (
    <AnimatedPage>
      <PageHeader
        badge={copy.header.badge}
        title={copy.header.title}
        description={copy.header.description}
        pageKey="plantation"
        siteCopy={resolvedSiteCopy}
      />

      <section className="section-surface mb-8 p-6 sm:p-8">
        <div className="max-w-4xl">
          <p className={font("galleryTitle", "text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary")}>
            {copy.overviewEyebrow}
          </p>
          <h2 className="mt-3 font-serif text-[1.8rem] leading-tight text-[#17392E] sm:text-[2.25rem]">
            {copy.overviewTitle}
          </h2>
          <p className="mt-4 text-[1rem] leading-8 text-[#17392E]">
            {copy.overviewDescription}
          </p>
          <div className="mt-6">
            <Button asChild className="rounded-xl bg-[#17392E] px-6 text-[#FBFCF7] hover:bg-[#21483a]">
              <a href={copy.overviewPortalCtaHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                {copy.overviewPortalCtaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-8 grid gap-4 md:grid-cols-3">
        {overviewCards.map(({ title, description, icon: Icon }) => (
          <Card key={title} className="border-border/70 shadow-sm">
            <CardContent className="p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-7 text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-[1.8rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#FBFCF7_0%,#F4E8D2_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.1)] sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className={font("milestoneTitle", "text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#8A6744]")}>
              {copy.coverageEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-[1.55rem] leading-tight text-[#17392E] sm:text-[1.95rem]">
              {copy.coverageTitle}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-8 text-[#17392E]">
              {copy.coverageDescription}
            </p>
          </div>

          <div className="grid gap-4">
            {highlightItems.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[1.3rem] border border-[#C8A070]/24 bg-white/70 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#17392E]/8 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-[#17392E]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#17392E]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
