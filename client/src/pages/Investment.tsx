import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { ParticipationOptions } from "@/components/ParticipationOptions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-media";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { createPageTypography } from "@/lib/siteTypography";

const investmentHeroImage = "https://res.cloudinary.com/dezfh7wug/image/upload/v1775768101/golden-forests/investment-hero-20260410-v2.png";
const faqDocumentUrl = "/disclaimer";

export default function Investment() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.investment;
  const font = createPageTypography(resolvedSiteCopy, "investment");
  const faqItems = copy.faqQuestions.slice(0, 5).map((question, index) => ({
    question,
    answer: copy.faqAnswers[index] ?? "",
  }));

  return (
    <AnimatedPage>
      <section className="mb-8 overflow-hidden rounded-[2rem] border border-[#C8A070]/24 shadow-[0_24px_54px_rgba(23,57,46,0.12)]">
        <OptimizedImage
          src={investmentHeroImage}
          alt="Golden Forests plantation landscape in Zambales"
          priority
          sizes="100vw"
          className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[460px]"
        />
        <div className="bg-[radial-gradient(circle_at_top_right,rgba(200,160,112,0.18),transparent_30%),linear-gradient(135deg,#F7F3EA_0%,#F7F3EA_65%,#EFE4CF_100%)] px-6 py-10 text-[#17392E] sm:px-8 md:px-10 lg:px-12 lg:py-12">
          <div className="max-w-5xl">
            <h1 className={font("header.title", "font-serif text-[clamp(2rem,3.4vw,3.05rem)] font-normal leading-[1.08] tracking-[0.01em] text-[#17392E]")}>
              {copy.header.title}
            </h1>
            <p className={font("header.description", "mt-5 max-w-4xl text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[#C8A070] sm:text-[0.9rem]")}>
              {copy.header.description}
            </p>
          </div>
        </div>
      </section>

      <ParticipationOptions />


      <section className="light-surface mb-8 rounded-2xl border border-[#C8A070]/25 bg-[#F7F3EA] p-6 text-[#17392E] sm:p-8">
        <h2 className="font-serif text-2xl">{copy.readinessTitle}</h2>
        <p className="mt-4 leading-8">{copy.readinessIntro}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {copy.readinessTitles.map((title, index) => (
            <article key={title} className="rounded-xl border border-[#17392E]/15 bg-white/50 p-5">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7">{copy.readinessDescriptions[index]}</p>
            </article>
          ))}
        </div>
        <a href="https://goldenforests.ph/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-semibold underline underline-offset-4">{copy.readinessCtaLabel}</a>
      </section>



      <section className="light-surface mb-8 rounded-2xl border border-[#C8A070]/25 bg-[#F7F3EA] p-6 text-[#17392E] sm:p-8">
        <h2 className="font-serif text-2xl">{copy.regionalTitle}</h2>
        <p className="mt-4 leading-8">{copy.regionalDescription}</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-[#17392E]/20">
          <table className="w-full min-w-[320px] border-collapse text-left text-sm sm:text-base">
            <thead className="bg-[#17392E] text-[#F7F3EA]">
              <tr>
                <th scope="col" className="w-2/3 px-4 py-4 font-semibold sm:px-5">Three Investment Entry Stages</th>
                <th scope="col" className="px-4 py-4 font-semibold sm:px-5">Investment Exit Horizon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#17392E]/15">
              {[
                { stage: "Mature / inoculated", description: "Mature trees with inoculation completed.", horizon: "3–4 years" },
                { stage: "Mature / pre-inoculated", description: "Mature trees awaiting inoculation.", horizon: "5–6 years" },
                { stage: "Classic", description: "Seedling-to-harvest cultivation.", horizon: "9–10 years" },
              ].map(({ stage, description, horizon }) => (
                <tr key={stage} className="bg-white/40">
                  <th scope="row" className="px-4 py-4 font-normal sm:px-5">
                    <span className="block font-semibold">{stage}</span>
                    <span className="mt-1 block text-sm leading-6">{description}</span>
                  </th>
                  <td className="px-4 py-4 font-semibold sm:px-5">{horizon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>



      <section className="mb-4">
        <Card className="light-surface border-[#C8A070]/30 bg-[#F7F3EA] text-[#17392E] shadow-sm">
          <CardHeader>
            <CardTitle className={font("faqTitle", "font-serif text-[1.8rem] font-normal text-primary")}>{copy.faqTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`investment-faq-${index}`} className="border-border/60">
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-6">
              <Button asChild variant="outline" className="rounded-xl border-[#17392E]/40 bg-[#F7F3EA] px-5 text-[#17392E] hover:bg-[#EFE4CF] hover:text-[#17392E]">
                <a href={faqDocumentUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  Read Important Information & Risks
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="light-surface mb-8 rounded-[1.8rem] border border-[#C8A070]/26 bg-[linear-gradient(135deg,#F7F3EA_0%,#F7F3EA_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.1)] sm:p-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-[1.3rem] leading-tight text-[#17392E] sm:text-[1.65rem] lg:text-[1.95rem]">
            Professional plantation operations. Structured investor reporting.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild className="rounded-xl bg-[#17392E] px-6 text-[#FBFCF7] hover:bg-[#214C40]">
              <a href="https://goldenforests.ph/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                Explore our plantation operations
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
