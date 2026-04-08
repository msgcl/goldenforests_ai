import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Download, Leaf, PieChart, ShieldCheck, Sprout, Trees } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-media";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { createPageTypography } from "@/lib/siteTypography";

const investmentHeroImage = "https://res.cloudinary.com/dezfh7wug/image/upload/v1775461735/golden-forests/investment-hero-20260406.jpg";
const agarwoodChipsImage = "https://res.cloudinary.com/dezfh7wug/image/upload/v1775461736/golden-forests/agarwood-chips-20260406.jpg";
const mangoImage = "https://res.cloudinary.com/dezfh7wug/image/upload/v1775461737/golden-forests/mango-support-1-20260406.jpg";
const agarwoodExposePdf = new URL("../../../gallery/ASSETS/DOCUMENTS/GF Agarwood Exposé Profesional final.pdf", import.meta.url).href;
const mangoExposePdf = new URL("../../../gallery/ASSETS/DOCUMENTS/GF Mango Exposeì Private FINAL.pdf", import.meta.url).href;
const combinedTwoPagerPdf = new URL("../../../gallery/ASSETS/DOCUMENTS/GF combined two-pager v1.pdf", import.meta.url).href;

function InvestmentProgrammeCard({
  title,
  intro,
  market,
  returns,
  strengths,
  learnMoreHref,
  contactLabel,
  marketTitle,
  returnsTitle,
  strengthsTitle,
  downloadLabel,
  downloadHref,
  sideImageSrc,
  sideImageAlt,
}: {
  title: string;
  intro: string[];
  market: string;
  returns: string;
  strengths: string[];
  learnMoreHref: string;
  contactLabel: string;
  marketTitle: string;
  returnsTitle: string;
  strengthsTitle: string;
  downloadLabel: string;
  downloadHref: string;
  sideImageSrc: string;
  sideImageAlt: string;
}) {
  return (
    <Card className="border-border/70 shadow-sm">
      <CardContent className="p-6 md:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="min-w-0 flex-1">
            <h2 className="font-serif text-[1.75rem] leading-tight text-primary sm:text-[2rem]">{title}</h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-foreground/80 sm:text-[0.98rem]">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[220px] shrink-0 self-start overflow-hidden rounded-[1.2rem] border border-[#C8A070]/28 bg-[#FBFCF7]/60 shadow-sm">
            <OptimizedImage
              src={sideImageSrc}
              alt={sideImageAlt}
              sizes="220px"
              className="h-[150px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          <div className="rounded-[1.35rem] border border-[#C8A070]/30 bg-[#FBFCF7]/70 p-5 shadow-[0_10px_24px_rgba(23,57,46,0.05)]">
            <p className="text-base font-semibold leading-snug text-primary">{marketTitle}</p>
            <p className="mt-3 text-sm leading-7 text-foreground/80">{market}</p>
          </div>
          <div className="rounded-[1.35rem] border border-[#C8A070]/30 bg-[#FBFCF7]/70 p-5 shadow-[0_10px_24px_rgba(23,57,46,0.05)]">
            <p className="text-base font-semibold leading-snug text-primary">{returnsTitle}</p>
            <p className="mt-3 text-sm leading-7 text-foreground/80">{returns}</p>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[#C8A070]/30 bg-[#FBFCF7]/70 p-5 shadow-[0_10px_24px_rgba(23,57,46,0.05)]">
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
              {contactLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl border-primary/30 bg-transparent px-5 text-primary hover:bg-background">
            <a href={downloadHref} download className="inline-flex items-center gap-2">
              <Download className="h-4 w-4" />
              {downloadLabel}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Investment() {
  const [location] = useLocation();
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.investment;
  const font = createPageTypography(resolvedSiteCopy, "investment");
  const portfolioBenefits = copy.portfolioBenefits;
  const faqItems = copy.faqQuestions.slice(0, 5).map((question, index) => ({
    question,
    answer: copy.faqAnswers[index] ?? "",
  }));

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const targetId = hash.slice(1);

    const scrollToHashTarget = () => {
      const target = document.getElementById(targetId);
      const scrollContainer = document.getElementById("app-scroll-container");

      if (!target) return false;

      if (scrollContainer) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const top =
          targetRect.top - containerRect.top + scrollContainer.scrollTop - 24;

        scrollContainer.scrollTo({
          top: Math.max(top, 0),
          behavior: "smooth",
        });
        return true;
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    const frameId = window.requestAnimationFrame(() => {
      if (scrollToHashTarget()) return;

      window.setTimeout(scrollToHashTarget, 150);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [location, siteCopy]);

  return (
    <AnimatedPage>
      <section className="mb-8 overflow-hidden rounded-[2rem] border border-[#C8A070]/24 shadow-[0_24px_54px_rgba(23,57,46,0.12)]">
        <OptimizedImage
          src={investmentHeroImage}
          alt="Golden Forests plantation landscape in Zambales"
          priority
          sizes="100vw"
          className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[520px]"
        />
        <div className="bg-[radial-gradient(circle_at_top_right,rgba(200,160,112,0.18),transparent_30%),linear-gradient(135deg,#F4E4C1_0%,#F4E4C1_65%,#EBD4A5_100%)] px-6 py-10 text-[#2D5016] sm:px-8 md:px-10 lg:px-12 lg:py-12">
          <div className="max-w-5xl">
            <h1 className={font("header.title", "font-serif text-[clamp(2rem,4.2vw,3.7rem)] font-normal leading-[1.08] tracking-[0.01em] text-[#2D5016]")}>
              {copy.header.title}
            </h1>
            <p className={font("header.description", "mt-5 max-w-3xl text-[1rem] leading-8 text-[#2D5016]/84 sm:text-[1.08rem]")}>
              {copy.header.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="rounded-xl bg-[#2D5016] px-6 text-[#FBFCF7] hover:bg-[#3b6820]">
                <a href="#agarwood" className="inline-flex items-center gap-2">
                  Agarwood
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-[#2D5016]/35 bg-[#FBFCF7]/45 px-6 text-[#2D5016] hover:bg-[#FBFCF7] hover:text-[#2D5016]">
                <a href="#mango" className="inline-flex items-center gap-2">
                  Mango
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="agarwood" className="mb-8 scroll-mt-24">
        <InvestmentProgrammeCard
          title={copy.agarwoodTitle}
          intro={copy.agarwoodIntroParagraphs}
          market={copy.agarwoodMarketDescription}
          returns={copy.agarwoodReturnsDescription}
          strengths={copy.agarwoodStrengths}
          learnMoreHref={copy.agarwoodLearnMoreHref}
          contactLabel={copy.agarwoodContactLabel}
          marketTitle={copy.agarwoodMarketTitle}
          returnsTitle={copy.agarwoodReturnsTitle}
          strengthsTitle={copy.agarwoodStrengthsTitle}
          downloadLabel={copy.agarwoodDownloadLabel}
          downloadHref={agarwoodExposePdf}
          sideImageSrc={agarwoodChipsImage}
          sideImageAlt="Agarwood chips arranged in a small presentation pile"
        />
      </section>

      <section id="mango" className="mb-8 scroll-mt-24">
        <InvestmentProgrammeCard
          title={copy.mangoTitle}
          intro={copy.mangoIntroParagraphs}
          market={copy.mangoMarketDescription}
          returns={copy.mangoReturnsDescription}
          strengths={copy.mangoStrengths}
          learnMoreHref={copy.mangoLearnMoreHref}
          contactLabel={copy.mangoContactLabel}
          marketTitle={copy.mangoMarketTitle}
          returnsTitle={copy.mangoReturnsTitle}
          strengthsTitle={copy.mangoStrengthsTitle}
          downloadLabel={copy.mangoDownloadLabel}
          downloadHref={mangoExposePdf}
          sideImageSrc={mangoImage}
          sideImageAlt="Ripe mangoes displayed in a small supporting image"
        />
      </section>

      <section className="mb-8 rounded-[1.9rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#F4E4C1_0%,#F4E4C1_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.08)] sm:p-8">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-serif text-[1.8rem] leading-tight text-primary sm:text-[2.1rem]">
              {copy.portfolioTitle}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-8 text-foreground/80">
              {copy.portfolioDescription}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="rounded-xl bg-primary px-5 text-primary-foreground hover:bg-[#3b6820]">
                <a href={combinedTwoPagerPdf} download className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {copy.portfolioDownloadLabel}
                </a>
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
                  <Link href="/contact" className="inline-flex items-center gap-2">
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
