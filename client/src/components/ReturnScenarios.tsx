import { Link } from "wouter";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";

export function ReturnScenarios({ detailed = false, crop }: { detailed?: boolean; crop?: "agarwood" | "mango" }) {
  const { data } = useSiteCopy();
  const copy = (data ?? defaultSiteCopy).investment;
  const scenarioIndexes = crop ? [crop === "agarwood" ? 0 : 1] : [0, 1, 2];
  return (
    <section id="projected-returns" className="light-surface my-8 scroll-mt-24 rounded-[1.8rem] border border-[#C8A070]/30 bg-[#F7F3EA] p-6 text-[#17392E] sm:p-8">
      <h2 className="font-serif text-2xl sm:text-3xl">{copy.scenarioTitle}</h2>
      <p className="mt-4 max-w-5xl text-sm italic leading-7">{copy.scenarioIntro}</p>
      <p className="mt-5 rounded-xl border border-[#17392E]/20 bg-white/50 p-4 text-sm italic font-semibold leading-7">{copy.scenarioQualification}</p>
      <div className={`mt-6 grid gap-4 ${crop ? "" : "lg:grid-cols-3"}`}>
        {scenarioIndexes.map(index => (
          <article id={["agarwood-scenario", "mango-scenario", "combined-scenario"][index]} key={index} className="scroll-mt-24 rounded-2xl border border-[#17392E]/15 bg-white/60 p-6">
            <h3 className="text-lg font-semibold">{copy.scenarioNames[index]}</h3>
            <p className="mt-3 font-serif text-4xl">{copy.scenarioIrrs[index]}</p>
            <p className="mt-2 text-sm font-semibold">Illustrative crop-model IRR · {copy.scenarioHorizons[index]}</p>
            <p className="mt-4 text-sm leading-7">{copy.scenarioDescriptions[index]}</p>
            <dl className="mt-4 space-y-3 border-t border-[#17392E]/15 pt-4 text-sm">
              <div><dt>Modeled crop-linked net proceeds (including capital)</dt><dd className="mt-1 text-xl font-semibold">{copy.scenarioNetReceipts[index]}</dd></div>
              <div><dt>Modeled net gain after initial allocation</dt><dd className="mt-1 font-semibold">{copy.scenarioNetGains[index]}</dd></div>
              <div><dt>Net receipts / initial capital</dt><dd className="mt-1 font-semibold">{copy.scenarioMultiples[index]}</dd></div>
            </dl>
          </article>
        ))}
      </div>
      <p className="mt-5 leading-7 text-[0.9375rem] italic">{copy.scenarioCashNote}</p>
      <p className="mt-5 font-semibold leading-7 text-[0.9375rem] italic">Illustrative only. Actual outcomes may differ materially. Returns and repayment of capital are not guaranteed.</p>
      {detailed ? (
        <div id="return-assumptions" className="mt-6 scroll-mt-24 border-t border-[#17392E]/20 pt-6">
          <h3 className="text-xl font-semibold">{copy.scenarioAssumptionsTitle}</h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7">
            {copy.scenarioAssumptions.map(text => <li key={text}>{text}</li>)}
          </ul>
        </div>
      ) : (
        <Link href="/crop-economics#return-assumptions" className="mt-5 inline-block font-semibold underline underline-offset-4">Review scenario assumptions and due diligence</Link>
      )}
    </section>
  );
}
