import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Leaf, PieChart, Sprout, Trees } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-media";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
const agarwoodChipsImage = "https://res.cloudinary.com/dezfh7wug/image/upload/v1775461736/golden-forests/agarwood-chips-20260406.jpg";
const mangoImage = "https://res.cloudinary.com/dezfh7wug/image/upload/v1775461737/golden-forests/mango-support-1-20260406.jpg";
function splitTitleIntoLines(value: string) {
  return value
    .split(/\r?\n|(?<=\.)\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function combineOpeningSentences(paragraphs: string[]) {
  const sentences = paragraphs
    .join(" ")
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .slice(0, 2)
    .map((sentence) => sentence.trim());

  if (sentences.length < 2) return sentences[0] ?? "";

  const first = sentences[0].replace(/[.!?]$/, "");
  const second = sentences[1].replace(/^[A-Z]/, (letter) => letter.toLowerCase()).replace(/[.!?]$/, "");
  return `${first}; ${second}.`;
}

function CropPathwayBanner({
  title,
  description,
  sideImageSrc,
  sideImageAlt,
}: {
  title: string;
  description: string;
  sideImageSrc: string;
  sideImageAlt: string;
}) {
  return (
    <Card className="light-surface h-full overflow-hidden border-[#C8A070]/30 bg-[#F7F3EA] text-[#17392E] shadow-sm">
      <div className="grid h-full md:grid-cols-[0.9fr_1.1fr]">
        <div className="min-h-52 overflow-hidden md:min-h-full">
          <OptimizedImage
            src={sideImageSrc}
            alt={sideImageAlt}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="h-full min-h-52 w-full object-cover md:min-h-[240px]"
          />
        </div>
        <CardContent className="flex flex-col justify-center p-6 md:p-7">
          <h3 className="font-serif text-[1.55rem] leading-tight text-primary sm:text-[1.8rem]">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-foreground/80 sm:text-[0.98rem]">{description}</p>
        </CardContent>
      </div>
    </Card>
  );
}

export default function CropPathways() {
  const { data } = useSiteCopy();
  const copy = (data ?? defaultSiteCopy).investment;
  const agarwoodPathwayDescription = combineOpeningSentences(copy.agarwoodIntroParagraphs);
  const mangoPathwayDescription = combineOpeningSentences(copy.mangoIntroParagraphs);
  const portfolioTitleLines = splitTitleIntoLines(copy.portfolioTitle);
  const portfolioBenefits = copy.portfolioBenefits;
  const enquiryButtonLabel = "Enquiry and Information Requests";
  return <AnimatedPage>
    <h1 className="mb-6 font-serif text-3xl text-[#F7F3EA]">Crop-specific Pathways</h1>
    <nav aria-label="Crop pathways" className="mb-8 flex flex-wrap gap-6 text-[#F7F3EA]">
      <Link href="/investment/agarwood" className="underline underline-offset-4">Agarwood</Link>
      <Link href="/investment/mango" className="underline underline-offset-4">Mango</Link>
      <Link href="/crop-economics" className="underline underline-offset-4">Crop Economics</Link>
    </nav>
      <section className="mb-8 grid scroll-mt-24 gap-5 lg:grid-cols-2">
        <div id="agarwood" className="scroll-mt-24">
          <Link href="/investment/agarwood" className="block h-full"><CropPathwayBanner
            title={copy.agarwoodTitle}
            description={agarwoodPathwayDescription}
            sideImageSrc={agarwoodChipsImage}
            sideImageAlt="Agarwood chips arranged in a small presentation pile"
          /></Link>
        </div>
        <div id="mango" className="scroll-mt-24">
          <Link href="/investment/mango" className="block h-full"><CropPathwayBanner
            title={copy.mangoTitle}
            description={mangoPathwayDescription}
            sideImageSrc={mangoImage}
            sideImageAlt="Ripe mangoes displayed in a small supporting image"
          /></Link>
        </div>
      </section>

      <section
        id="diversification"
        className="light-surface mb-8 scroll-mt-24 rounded-[1.9rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#F7F3EA_0%,#F7F3EA_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.08)] sm:p-8"
      >
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-serif text-[1.8rem] leading-tight text-primary sm:text-[2.1rem]">
              {portfolioTitleLines.map((line, index) => (
                <span key={`${line}-${index}`} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-4 text-[0.98rem] italic leading-8 text-foreground/80">
              {copy.portfolioDescription}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="rounded-xl bg-primary px-5 text-primary-foreground hover:bg-[#214C40]">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  {enquiryButtonLabel}
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

  </AnimatedPage>;
}
