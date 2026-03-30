import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowRight, Download, Leaf, PieChart, ShieldCheck, Sprout, Trees } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-media";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { createPageTypography } from "@/lib/siteTypography";

const investmentHeroImage =
  "https://res.cloudinary.com/dezfh7wug/image/upload/v1774850964/golden-forests/investment-overview-hero-plt-20260330.png";

function InvestmentProgrammeCard({
  eyebrow,
  title,
  intro,
  market,
  returns,
  strengths,
  learnMoreHref,
  downloadHref,
  contactLabel,
  marketTitle,
  returnsTitle,
  strengthsTitle,
}: {
  eyebrow: string;
  title: string;
  intro: string[];
  market: string;
  returns: string;
  strengths: string[];
  learnMoreHref: string;
  downloadHref: string;
  contactLabel: string;
  marketTitle: string;
  returnsTitle: string;
  strengthsTitle: string;
}) {
  return (
    <Card className="border-border/70 shadow-sm">
      <CardContent className="p-6 md:p-7">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-[1.75rem] leading-tight text-primary sm:text-[2rem]">{title}</h2>

        <div className="mt-5 space-y-4 text-sm leading-7 text-foreground/80 sm:text-[0.98rem]">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          <div className="rounded-[1.35rem] border border-[#C8A070]/30 bg-[#FBFCF7]/72 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{marketTitle}</p>
            <p className="mt-3 text-sm leading-7 text-foreground/80">{market}</p>
          </div>
          <div className="rounded-[1.35rem] border border-[#C8A070]/30 bg-[#FBFCF7]/72 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{returnsTitle}</p>
            <p className="mt-3 text-sm leading-7 text-foreground/80">{returns}</p>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[#C8A070]/30 bg-[#F4E4C1] p-5">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-primary">{strengthsTitle}</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground/80">
            {strengths.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C8A070]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild className="rounded-xl bg-primary px-5 text-primary-foreground hover:bg-[#3b6820]">
            <Link href={learnMoreHref} className="inline-flex items-center gap-2">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl border-primary/30 bg-transparent px-5 text-primary hover:bg-background">
            <Link href={downloadHref} className="inline-flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resource
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl border-[#C8A070]/45 bg-[#FBFCF7]/55 px-5 text-primary hover:bg-background">
            <Link href="/contact" className="inline-flex items-center gap-2">
              {contactLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Investment() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.investment;
  const font = createPageTypography(resolvedSiteCopy, "investment");
  const portfolioBenefits = copy.portfolioBenefits;
  const faqItems = copy.faqQuestions.map((question, index) => ({
    question,
    answer: copy.faqAnswers[index] ?? "",
  }));

  return (
    <AnimatedPage>
      <PageHeader
        badge={copy.header.badge}
        title={copy.header.title}
        description={copy.header.description}
        pageKey="investment"
        siteCopy={resolvedSiteCopy}
      />

      <section className="mb-8 overflow-hidden rounded-[2rem] border border-[#C8A070]/24 shadow-[0_24px_54px_rgba(23,57,46,0.12)]">
        <OptimizedImage
          src={investmentHeroImage}
          alt="Golden Forests plantation landscape in Zambales"
          priority
          sizes="100vw"
          className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[520px]"
        />
      </section>

      <section className="mb-8">
        <InvestmentProgrammeCard
          eyebrow={copy.agarwoodEyebrow}
          title={copy.agarwoodTitle}
          intro={copy.agarwoodIntroParagraphs}
          market={copy.agarwoodMarketDescription}
          returns={copy.agarwoodReturnsDescription}
          strengths={copy.agarwoodStrengths}
          learnMoreHref={copy.agarwoodLearnMoreHref}
          downloadHref={copy.agarwoodDownloadHref}
          contactLabel={copy.agarwoodContactLabel}
          marketTitle={copy.agarwoodMarketTitle}
          returnsTitle={copy.agarwoodReturnsTitle}
          strengthsTitle={copy.agarwoodStrengthsTitle}
        />
      </section>

      <section className="mb-8">
        <InvestmentProgrammeCard
          eyebrow={copy.mangoEyebrow}
          title={copy.mangoTitle}
          intro={copy.mangoIntroParagraphs}
          market={copy.mangoMarketDescription}
          returns={copy.mangoReturnsDescription}
          strengths={copy.mangoStrengths}
          learnMoreHref={copy.mangoLearnMoreHref}
          downloadHref={copy.mangoDownloadHref}
          contactLabel={copy.mangoContactLabel}
          marketTitle={copy.mangoMarketTitle}
          returnsTitle={copy.mangoReturnsTitle}
          strengthsTitle={copy.mangoStrengthsTitle}
        />
      </section>

      <section className="mb-8 rounded-[1.9rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#F4E4C1_0%,#F4E4C1_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.08)] sm:p-8">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-secondary">
              {copy.portfolioEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-[1.8rem] leading-tight text-primary sm:text-[2.1rem]">
              {copy.portfolioTitle}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-8 text-foreground/80">
              {copy.portfolioDescription}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="rounded-xl bg-primary px-5 text-primary-foreground hover:bg-[#3b6820]">
                <Link href={copy.portfolioDownloadHref} className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {copy.portfolioDownloadLabel}
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-primary/30 bg-[#FBFCF7]/55 px-5 text-primary hover:bg-background">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  {copy.portfolioContactLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {portfolioBenefits.map((benefit, index) => {
              const Icon = [PieChart, Trees, Sprout, Leaf][index] ?? Leaf;
              return (
                <div key={benefit} className="rounded-[1.35rem] border border-[#C8A070]/30 bg-[#FBFCF7]/70 p-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-foreground/80">{benefit}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mb-4">
        <Card className="border-border/70 shadow-sm">
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

            <div className="mt-6 rounded-[1.3rem] border border-[#C8A070]/28 bg-[#F4E4C1] p-5">
              <p className={font("faqDescription", "text-sm leading-7 text-foreground/80")}>
                {copy.faqDescription}
              </p>
              <div className="mt-4">
                <Button asChild variant="outline" className="rounded-xl border-primary/30 bg-[#FBFCF7]/55 px-5 text-primary hover:bg-background">
                  <Link href={copy.faqDocumentHref} className="inline-flex items-center gap-2">
                    {copy.faqDocumentLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </AnimatedPage>
  );
}
