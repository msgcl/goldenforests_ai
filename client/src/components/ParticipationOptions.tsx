import { Link } from "wouter";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";

export function ParticipationOptions() {
  const { data } = useSiteCopy();
  const copy = (data ?? defaultSiteCopy).home;
  return (
    <section id="participation-options" className="mb-8 scroll-mt-24">
      <h2 className="mb-5 font-serif text-3xl text-[#F7F3EA]">Participation Options</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {copy.pillarTitles.map((title, index) => (
          <article key={title} className="light-surface flex h-full flex-col rounded-2xl border border-[#C8A070]/25 bg-[#F7F3EA] p-6 text-[#17392E]">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-4 text-sm leading-7">{copy.pillarDescriptions[index]}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
              {copy.pillarBullets.slice(index * 3, index * 3 + 3).map(text => <li key={text}>{text}</li>)}
            </ul>
            <Link href="/contact" className="mt-auto inline-block self-start pt-5 font-semibold underline underline-offset-4">{index === 1 ? "Request a separate fund manager introduction" : "Enquire about this option"}</Link>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-[#F7F3EA] italic">For professional and institutional investors and strategic partners, subject to eligibility, suitability and jurisdictional requirements. Final company, fund, transaction, ownership, joint-venture or partnership documents govern each opportunity. Returns and repayment of capital are not guaranteed.</p>
    </section>
  );
}
