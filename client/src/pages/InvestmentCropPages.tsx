import { Link } from "wouter";
import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { OptimizedImage } from "@/components/ui/optimized-media";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";

function CropOperations({ crop }: { crop: "agarwood" | "mango" }) {
  const { data } = useSiteCopy();
  const copy = (data ?? defaultSiteCopy).investment;
  const isAgarwood = crop === "agarwood";
  const title = isAgarwood ? copy.agarwoodTitle : copy.mangoTitle;
  const paragraphs = isAgarwood ? copy.agarwoodIntroParagraphs : copy.mangoIntroParagraphs;
  const focus = isAgarwood ? copy.agarwoodStrengths : copy.mangoStrengths;
  const market = isAgarwood ? copy.agarwoodMarketDescription : copy.mangoMarketDescription;
  const [marketOpening, ...marketDetails] = market.split(/(?<=[.!?])\s+/);
  const marketParagraphs = [marketOpening, marketDetails.join(" ")].filter(Boolean);
  const cultivation = isAgarwood ? copy.agarwoodReturnsDescription : copy.mangoReturnsDescription;
  const image = isAgarwood
    ? "https://res.cloudinary.com/dezfh7wug/image/upload/v1775461736/golden-forests/agarwood-chips-20260406.jpg"
    : "https://res.cloudinary.com/dezfh7wug/image/upload/v1775461737/golden-forests/mango-support-1-20260406.jpg";
  return (
    <AnimatedPage className="pt-6 md:pt-8">
      <section className="light-surface overflow-hidden rounded-[2rem] border border-[#C8A070]/25 bg-[#F7F3EA] p-6 text-[#17392E] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#806238]">Crop-specific operations</p>
        <div className="mt-5 grid items-start gap-8 md:grid-cols-[1fr_240px]">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl">{title}</h1>
            {paragraphs.map(text => <p key={text} className="mt-5 leading-8">{text}</p>)}
          </div>
          <OptimizedImage src={image} alt={isAgarwood ? "Harvested agarwood chips" : "Mango fruit"} className="w-full rounded-2xl object-cover" sizes="240px" />
        </div>
      </section>
      <p className="mt-6 text-sm leading-7 text-[#F7F3EA]"><Link href="/crop-economics" className="underline underline-offset-4">View crop-economics</Link></p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="light-surface rounded-2xl border border-[#C8A070]/25 bg-[#F7F3EA] p-6 text-[#17392E]">
          <h2 className="font-serif text-2xl">Cultivation and harvest planning</h2>
          <p className="mt-4 leading-8">{cultivation}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">{focus.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="light-surface rounded-2xl border border-[#C8A070]/25 bg-[#F7F3EA] p-6 text-[#17392E]">
          <h2 className="font-serif text-2xl">Commercial considerations</h2>
          {marketParagraphs.map(text => <p key={text} className="mt-4 leading-8">{text}</p>)}
        </section>
      </div>
    </AnimatedPage>
  );
}

export function AgarwoodInvestment() { return <CropOperations crop="agarwood" />; }
export function MangoInvestment() { return <CropOperations crop="mango" />; }
