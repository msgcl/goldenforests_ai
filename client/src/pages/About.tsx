import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import {
  BrainCircuit,
  Globe2,
  Leaf,
  LineChart,
  ShieldCheck,
  Sprout,
  Trees,
} from "lucide-react";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { createPageTypography } from "@/lib/siteTypography";

const differentiatorIcons = [
  LineChart,
  BrainCircuit,
  ShieldCheck,
  Globe2,
  Trees,
  Leaf,
] as const;

export default function About() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.about;
  const font = createPageTypography(resolvedSiteCopy, "about");

  const highlightCards = copy.highlightTitles.map((title, index) => ({
    title,
    description: copy.highlightDescriptions[index] ?? "",
  }));

  const differentiators = copy.differentiatorTitles.map((title, index) => ({
    title,
    description: copy.differentiatorDescriptions[index] ?? "",
    icon: differentiatorIcons[index] ?? Trees,
  }));

  const investmentProducts = copy.productTitles.map((title, index) => ({
    title,
    returnProfile: copy.productReturnProfiles[index] ?? "",
    description: copy.productDescriptions[index] ?? "",
    value: copy.productValues[index] ?? "",
  }));

  return (
    <AnimatedPage>
      <PageHeader
        badge={copy.header.badge}
        title={copy.header.title}
        description={copy.header.description}
        pageKey="about"
        siteCopy={resolvedSiteCopy}
      />

      <section className="mb-8 grid gap-4 lg:grid-cols-[1.5fr_0.9fr]">
        <Card className="border-border/60 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className={font("overviewEyebrow", "mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary")}>
              {copy.overviewEyebrow}
            </div>
            <div className={font("overviewParagraphs", "space-y-4 text-sm leading-7 text-muted-foreground md:text-base")}>
              {copy.overviewParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <Card className="border-border/60 bg-[linear-gradient(180deg,rgba(13,62,49,0.08),rgba(13,62,49,0))] shadow-sm">
            <CardContent className="p-6">
              <p className={font("visionTitle", "mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary")}>{copy.visionTitle}</p>
              <p className={font("visionDescription", "text-sm leading-7 text-muted-foreground")}>{copy.visionDescription}</p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-[linear-gradient(180deg,rgba(200,160,112,0.12),rgba(200,160,112,0))] shadow-sm">
            <CardContent className="p-6">
              <p className={font("missionTitle", "mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6744]")}>{copy.missionTitle}</p>
              <p className={font("missionDescription", "text-sm leading-7 text-muted-foreground")}>{copy.missionDescription}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-8 grid gap-4 md:grid-cols-3">
        {highlightCards.map((item) => (
          <Card key={item.title} className="border-border/60 shadow-sm md:col-span-1">
            <CardContent className="p-6">
              <p className={font("highlightTitles", "text-xs font-semibold uppercase tracking-[0.18em] text-primary")}>{item.title}</p>
              <p className={font("highlightDescriptions", "mt-3 text-sm leading-7 text-muted-foreground")}>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mb-8">
        <div className="mb-5 max-w-3xl">
          <p className={font("differentiatorsEyebrow", "text-xs font-semibold uppercase tracking-[0.18em] text-primary")}>{copy.differentiatorsEyebrow}</p>
          <h2 className={font("differentiatorsTitle", "mt-2 text-3xl font-semibold tracking-tight text-foreground")}>{copy.differentiatorsTitle}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {differentiators.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="border-border/60 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={font("differentiatorTitles", "text-lg font-semibold text-foreground")}>{title}</h3>
                <p className={font("differentiatorDescriptions", "mt-3 text-sm leading-7 text-muted-foreground")}>{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border/60 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sprout className="h-5 w-5" />
              </div>
              <div>
                <p className={font("investmentEyebrow", "text-xs font-semibold uppercase tracking-[0.18em] text-primary")}>{copy.investmentEyebrow}</p>
                <h2 className={font("investmentTitle", "text-2xl font-semibold tracking-tight text-foreground")}>{copy.investmentTitle}</h2>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {investmentProducts.map((product) => (
                <div key={product.title} className="rounded-3xl border border-border/70 bg-background/80 p-5">
                  <h3 className={font("productTitles", "text-xl font-semibold text-foreground")}>{product.title}</h3>
                  <p className={font("productReturnProfiles", "mt-2 text-sm font-medium text-primary")}>{product.returnProfile}</p>
                  <p className={font("productDescriptions", "mt-3 text-sm leading-7 text-muted-foreground")}>{product.description}</p>
                  <p className={font("productValues", "mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#8A6744]")}>{product.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-[linear-gradient(180deg,rgba(11,53,42,0.98),rgba(11,53,42,0.9))] text-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <p className={font("frameworkEyebrow", "text-xs font-semibold uppercase tracking-[0.18em] text-[#D5AE75]")}>{copy.frameworkEyebrow}</p>
            <h2 className={font("frameworkTitle", "mt-2 text-2xl font-semibold tracking-tight")}>{copy.frameworkTitle}</h2>
            <div className={font("frameworkItems", "mt-5 space-y-4 text-sm leading-7 text-white/80")}>
              {copy.frameworkItems.map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D5AE75]" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </AnimatedPage>
  );
}
