import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { createPageTypography } from "@/lib/siteTypography";
import { OptimizedImage } from "@/components/ui/optimized-media";
import { BadgeDollarSign, Globe2, Leaf, MapPinned, ShieldCheck, Trees } from "lucide-react";

const benefitIcons = [Trees, MapPinned, Globe2, BadgeDollarSign, ShieldCheck, Leaf] as const;

export default function MangoProgram() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.mangoProgram;
  const font = createPageTypography(resolvedSiteCopy, "mangoProgram");

  const competitiveAdvantages = copy.benefitsPoints.map((point, index) => ({
    point,
    icon: benefitIcons[index] ?? Trees,
  }));

  return (
    <AnimatedPage>
      <PageHeader
        badge={copy.header.badge}
        title={copy.header.title}
        description={copy.header.description}
        pageKey="mangoProgram"
        siteCopy={resolvedSiteCopy}
      />

      <section className="mb-8 overflow-hidden rounded-[2rem] border border-[#C8A070]/24 shadow-[0_24px_54px_rgba(9,39,34,0.14)]">
        <OptimizedImage
          src="https://res.cloudinary.com/dezfh7wug/image/upload/v1774561095/golden-forests/mango-program-2.jpg"
          alt="Golden Forests Sweet Elena Carabao mango plantation landscape"
          priority
          sizes="100vw"
          className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
        />
      </section>

      <section className="mb-8 overflow-hidden rounded-[2rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#17392E_0%,#1E4A3E_100%)] text-[#FBFCF7] shadow-[0_24px_54px_rgba(9,39,34,0.14)]">
        <div className="p-6 sm:p-8 md:p-10">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#C8A070]">{copy.overviewTitle}</p>
          <div className="mt-5 max-w-5xl space-y-4 text-sm leading-8 text-[#FBFCF7]/84 sm:text-[1rem]">
            {copy.overviewPoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-8 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="overflow-hidden rounded-[1.8rem] shadow-sm">
          <OptimizedImage
            src="https://res.cloudinary.com/dezfh7wug/image/upload/v1774561093/golden-forests/mango-program-1.jpg"
            alt="Golden Forests mango fruit close-up"
            sizes="(min-width: 1280px) 36vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>

        <Card className="border-border/70 shadow-sm">
          <CardHeader>
            <CardTitle className={font("insuranceTitle", "text-2xl font-outfit text-accent")}>{copy.insuranceTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={font("insuranceDescription", "text-sm md:text-base text-muted-foreground leading-relaxed mb-5")}>
              {copy.insuranceDescription}
            </p>
            <div className="grid gap-3">
              {copy.insurancePoints.map((risk) => (
                <div key={risk} className="flex gap-3 rounded-[1.2rem] border border-border/60 bg-card/55 p-4">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className={font("insurancePoints", "text-sm leading-7 text-muted-foreground")}>{risk}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8 rounded-[1.8rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#FBFCF7_0%,#F4E8D2_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.1)] sm:p-8">
        <div className="mb-6 max-w-3xl">
          <h2 className={font("benefitsTitle", "font-serif text-[1.8rem] font-normal leading-tight text-[#17392E] sm:text-[2.2rem]")}>{copy.benefitsTitle}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {competitiveAdvantages.map(({ point, icon: Icon }) => (
            <div key={point} className="rounded-[1.35rem] border border-[#17392E]/10 bg-white/70 p-5 shadow-[0_10px_24px_rgba(23,57,46,0.06)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#17392E]/8 text-[#499972]">
                <Icon className="h-5 w-5" />
              </div>
              <p className={font("benefitsPoints", "mt-4 text-sm leading-7 text-[#17392E]")}>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <Card className="border-border/70 shadow-sm">
        <CardHeader>
          <CardTitle className={font("snapshotTitle", "text-2xl font-outfit text-accent")}>{copy.snapshotTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-sm">
            {copy.snapshotLabels.map((label, index) => (
              <div key={`${label}-${index}`} className="rounded-[1.2rem] border border-border/60 p-4 bg-card/60">
                <p className={font("snapshotLabels", "text-muted-foreground")}>{label}</p>
                <p className={font("snapshotValues", "mt-2 text-foreground font-semibold leading-relaxed")}>{copy.snapshotValues[index] ?? ""}</p>
              </div>
            ))}
          </div>
          <p className={font("snapshotFootnote", "text-xs text-muted-foreground leading-relaxed")}>
            {copy.snapshotFootnote}
          </p>
        </CardContent>
      </Card>

    </AnimatedPage>
  );
}
