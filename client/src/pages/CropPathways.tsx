import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { OptimizedImage } from "@/components/ui/optimized-media";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
const agarwoodChipsImage = "https://res.cloudinary.com/dezfh7wug/image/upload/v1775461736/golden-forests/agarwood-chips-20260406.jpg";
const mangoImage = "https://res.cloudinary.com/dezfh7wug/image/upload/v1775461737/golden-forests/mango-support-1-20260406.jpg";
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
  return <AnimatedPage>
    <h1 className="mb-6 font-serif text-3xl text-[#F7F3EA]">Crop Specific Operations</h1>
    <nav aria-label="Crop pathways" className="mb-8 flex flex-wrap gap-6 text-[#F7F3EA]">
      <Link href="/crop-specific-operations/agarwood" className="underline underline-offset-4">Agarwood</Link>
      <Link href="/crop-specific-operations/mango" className="underline underline-offset-4">Mango</Link>
      <Link href="/crop-specific-operations/crop-economics" className="underline underline-offset-4">Crop Economics</Link>
    </nav>
      <section className="mb-8 grid scroll-mt-24 gap-5 lg:grid-cols-2">
        <div id="agarwood" className="scroll-mt-24">
          <Link href="/crop-specific-operations/agarwood" className="block h-full"><CropPathwayBanner
            title={copy.agarwoodTitle}
            description={agarwoodPathwayDescription}
            sideImageSrc={agarwoodChipsImage}
            sideImageAlt="Agarwood chips arranged in a small presentation pile"
          /></Link>
        </div>
        <div id="mango" className="scroll-mt-24">
          <Link href="/crop-specific-operations/mango" className="block h-full"><CropPathwayBanner
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
        <h2 className="font-serif text-2xl text-primary sm:text-3xl">Different Harvest Horizons.</h2>
        <p className="mt-4 leading-8 text-[#17392E]">Mango’s modeled recurring harvests commence from year 5 through to year 25, and agarwood’s modeled harvest occurs in years 9 and 10. A combined investment reduces dependence on one crop and diversifies revenue timing, market channels, and execution dependencies.</p>
      </section>

  </AnimatedPage>;
}
