import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BrainCircuit, Leaf, MapPinned, Microscope, ShieldCheck, Sprout, Trees } from "lucide-react";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { createPageTypography } from "@/lib/siteTypography";
import { OptimizedImage } from "@/components/ui/optimized-media";

const stackIcons = [Trees, MapPinned, Microscope, BrainCircuit, Leaf] as const;
const benefitIcons = [ShieldCheck, Trees, MapPinned, Microscope, BrainCircuit, Sprout] as const;

export default function Technology() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.technology;
  const font = createPageTypography(resolvedSiteCopy, "technology");

  const stackItems = copy.stackTitles.map((title, index) => ({
    title,
    description: copy.stackDescriptions[index] ?? "",
    icon: stackIcons[index] ?? BrainCircuit,
  }));

  const benefits = copy.benefits.map((benefit, index) => ({
    benefit,
    icon: benefitIcons[index] ?? ShieldCheck,
  }));

  return (
    <AnimatedPage>
      <PageHeader
        badge={copy.header.badge}
        title={copy.header.title}
        description={copy.header.description}
        pageKey="technology"
        siteCopy={resolvedSiteCopy}
      />

      <section className="mb-8 grid gap-5 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
        <Card className="self-start overflow-hidden border-[#C8A070]/20 bg-[linear-gradient(135deg,#17392E_0%,#1D4A3D_100%)] text-[#FBFCF7] shadow-[0_24px_54px_rgba(9,39,34,0.16)]">
          <CardContent className="p-6 md:p-8">
            <p className={font("stackTitle", "text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#C8A070]")}>{copy.stackTitle}</p>
            <div className="mt-5 space-y-5">
              {stackItems.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-4 rounded-[1.3rem] border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FBFCF7]/10 text-[#C8A070]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className={font("stackTitles", "text-lg font-semibold text-[#FBFCF7]")}>{title}</h3>
                    <p className={font("stackDescriptions", "mt-2 text-sm leading-7 text-[#FBFCF7]/78")}>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-5 self-start">
          <div className="overflow-hidden rounded-[1.7rem] shadow-sm">
            <OptimizedImage
              src="https://res.cloudinary.com/dezfh7wug/image/upload/v1774561096/golden-forests/agroforestry-intelligence-1.jpg"
              alt="Golden Forests agroforestry intelligence field analysis"
              sizes="(min-width: 1280px) 40vw, 100vw"
              className="block h-[18.9rem] w-full object-cover xl:h-[19.4rem]"
            />
          </div>
          <div className="overflow-hidden rounded-[1.7rem] shadow-sm">
            <OptimizedImage
              src="https://res.cloudinary.com/dezfh7wug/image/upload/v1774561097/golden-forests/agroforestry-intelligence-2.jpg"
              alt="Golden Forests precision farming and intelligence systems"
              sizes="(min-width: 1280px) 40vw, 100vw"
              className="block h-[18.9rem] w-full object-cover xl:h-[19.4rem]"
            />
          </div>
          <div className="overflow-hidden rounded-[1.7rem] shadow-sm">
            <OptimizedImage
              src="https://res.cloudinary.com/dezfh7wug/image/upload/v1774604554/golden-forests/agroforestry-intelligence-ai.png"
              alt="Golden Forests AI dashboard and agroforestry intelligence illustration"
              sizes="(min-width: 1280px) 40vw, 100vw"
              className="block h-[18.9rem] w-full object-cover xl:h-[19.4rem]"
            />
          </div>
        </div>
      </section>

      <section className="rounded-[1.8rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#FBFCF7_0%,#F4E8D2_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.1)] sm:p-8">
        <div className="mb-5 max-w-3xl">
          <p className={font("benefitsTitle", "text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#8A6744]")}>{copy.benefitsTitle}</p>
          <h2 className="mt-2 font-serif text-[1.7rem] font-normal leading-tight text-[#17392E] sm:text-[2.05rem]">
            Golden Forests applies Agroforestry Intelligence as an operating discipline, not just a technology layer.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map(({ benefit, icon: Icon }) => (
            <div key={benefit} className="rounded-[1.35rem] border border-[#17392E]/10 bg-white/65 p-5 shadow-[0_10px_24px_rgba(23,57,46,0.06)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#17392E]/8 text-[#499972]">
                <Icon className="h-5 w-5" />
              </div>
              <p className={font("benefits", "mt-4 text-sm leading-7 text-[#17392E]")}>{benefit}</p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
}
