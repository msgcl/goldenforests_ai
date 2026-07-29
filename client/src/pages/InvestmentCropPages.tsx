import {
  ArrowDown,
  CalendarRange,
  ChartNoAxesCombined,
  Landmark,
  ShieldAlert,
  Sprout,
} from "lucide-react";
import { AnimatedPage } from "@/components/layout/AnimatedPage";

const agarwoodProgramSnapshot: Array<{
  label: string;
  value: string;
  note?: string;
}> = [
  { label: "Lifecycle Duration", value: "10 years" },
  { label: "Controlled Inoculation", value: "Years 7–8" },
  { label: "Harvest Schedule", value: "50% in Year 9 / 50% in Year 10" },
  { label: "Yield Assumption", value: "1.5 kg in Year 9 / 2.0 kg in Year 10" },
  {
    label: "Subscription Price per Share",
    value: "USD 301.71 per tree-equivalent share",
    note: "The current base case comprises USD 128.61 of initial investment share pricing plus a USD 173.10 segregated reserve intended for approved Years 7–10 inoculation, harvesting, extraction, packaging and logistics costs. A 10% Agarwood Management Revenue Share is deducted from gross realized sales proceeds.",
  },
  {
    label: "Illustrative USD 100,000 Subscription",
    value: "Approximately 331 agarwood shares",
  },
  {
    label: "Initial Investment Share Pricing",
    value: "USD 128.61 per share",
  },
  {
    label: "Segregated Later-Stage Reserve",
    value: "USD 173.10 per share",
  },
  {
    label: "Agarwood Management Revenue Share",
    value: "10% of gross realized sales proceeds",
  },
  {
    label: "Illustrative 10-Year Net Income / true IRR",
    value: "USD 413,114 / 21.3%",
  },
];

const agarwoodLifecycle = [
  {
    years: "Years 1–6",
    title: "Establishment and growth",
    description:
      "Nursery propagation, field establishment, irrigation, protection, maintenance and monitoring of tree development.",
  },
  {
    years: "Years 7–8",
    title: "Controlled inoculation",
    description:
      "The base case begins controlled reserve drawdowns for inoculation formula, labour and readiness activities.",
  },
  {
    years: "Year 9",
    title: "First harvest tranche",
    description:
      "Fifty percent of the modeled inventory is harvested using an illustrative yield of 1.5 kg of oud wood chips per tree.",
  },
  {
    years: "Year 10",
    title: "Final harvest tranche",
    description:
      "The remaining fifty percent is harvested using an illustrative yield of 2.0 kg per tree. Actual timing, grade and yield may differ.",
  },
];

const agarwoodCapitalWaterfall = [
  "Subscription funds USD 128.61 of initial allocation plus the USD 173.10 reserve",
  "Reserve is held in segregated form for approved Years 7–10 costs",
  "Actual oud wood chip sales generate gross realized proceeds",
  "Less 10% Agarwood Management Revenue Share before any fund-level distribution",
];

const mangoProgramSnapshot: Array<{
  label: string;
  value: string;
  note?: string;
}> = [
  { label: "Lifecycle Duration", value: "25 years" },
  { label: "Commercial Fruiting", value: "From year 5" },
  { label: "Yield Assumption", value: "~30 kg per tree (year 5)" },
  { label: "Mature Yield Assumption", value: "~100 kg per tree (year 10+)" },
  {
    label: "Subscription Price per Share",
    value: "USD 437.08 per tree-equivalent share",
    note: "Future deductions from harvested income under the current base case: USD 2.69 per tree each year and USD 0.39 per kg from Years 5–25 for audit, reporting, logistics, cold storage, packaging and certification, plus USD 28.65 per tree each year from Years 10–25 for maintenance and harvesting.",
  },
  {
    label: "Illustrative USD 100,000 Subscription",
    value: "Approximately 229 mango shares",
  },
  {
    label: "Years 5-15 Net Income / true IRR",
    value: "USD 639,779 / 24.3%",
  },
  {
    label: "Years 16-25 Net Income",
    value: "USD 1,073,506",
  },
  {
    label: "25-Year Net Income / true IRR",
    value: "USD 1,713,285 / 26.5%",
  },
  {
    label: "Replacement Buffer",
    value: "1,600 trees (20% of the 8,000-tree launch inventory)",
  },
];

const mangoLifecycle = [
  {
    years: "Years 1–4",
    title: "Establishment",
    description:
      "Nursery propagation, grafting, field planting, irrigation, pruning, crop-health management and pre-harvest reporting.",
  },
  {
    years: "Years 5–9",
    title: "Production ramp",
    description:
      "Illustrative yield increases from 30 kg per tree in Year 5 to 80 kg in Year 9. Outcomes depend on actual tree health, fruit quality and realized harvests.",
  },
  {
    years: "Years 10–25",
    title: "Mature production",
    description:
      "The base case assumes 100 kg per tree annually, with harvest-period deductions applied before any fund-level distribution.",
  },
];

const mangoCashWaterfall = [
  "Gross proceeds from actual mango sales",
  "Less 20% Mango Harvesting Commission",
  "Less permitted audit, logistics, certification, maintenance and harvesting deductions",
  "Remaining net proceeds may be available for fund-level distribution",
];

function AgarwoodProgramPage() {
  return (
    <AnimatedPage>
      <section className="rounded-[1.75rem] border border-[#2A5646] bg-[#123831] p-5 shadow-[0_24px_54px_rgba(0,0,0,0.18)] sm:p-7 lg:p-8">
        <h1 className="font-serif text-[1.55rem] font-semibold leading-tight text-[#C8A070] sm:text-[1.8rem]">
          Program Snapshot
        </h1>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {agarwoodProgramSnapshot.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[#2A5646] bg-[#0F312B]/55 px-4 py-4"
            >
              <p className="text-[0.75rem] leading-5 text-[#D0DBD2]">{item.label}</p>
              <p className="text-[0.78rem] font-semibold leading-5 text-[#F7F3EA]">
                {item.value}
              </p>
              {item.note ? (
                <p className="mt-2 text-[0.68rem] leading-4 text-[#D0DBD2]">
                  {item.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-4 text-[0.68rem] leading-4 text-[#D0DBD2]">
          Illustrative only. Projected income and IRR are not guaranteed and depend on resin formation, realized yields and grades, sale prices, costs, timing and successful sales. Figures are net of the 10% Agarwood Management Revenue Share; the 10-year figure is also net of the one-time USD 100,000 subscription. Distributions depend on operating performance, realized proceeds, working-capital and reserve requirements, applicable law and definitive documents.
        </p>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#2A5646] bg-[#123831] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A070]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A070]">
                Investment structure
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[#F7F3EA]">
                Sub-Fund A: Aquilaria crassna
              </h2>
            </div>
          </div>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#D0DBD2]">
            <p>
              The proposed structure is a pooled, ring-fenced sleeve within a Singapore Variable Capital Company. Investors are expected to hold shares or interests in the agarwood sub-fund—not legal ownership of individual trees, planting blocks, land or plantation assets.
            </p>
            <p>
              Tree-equivalent references support economic allocation, accounting and sub-fund-level biological-asset traceability. The current reference price is USD 301.71 per share, including a USD 173.10 segregated later-stage reserve.
            </p>
          </div>
          <div className="mt-5 rounded-xl border border-[#C8A070]/25 bg-[#0F312B]/55 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C8A070]">
              Investor eligibility
            </p>
            <p className="mt-2 text-sm leading-6 text-[#F7F3EA]">
              Intended for eligible professional or corporate investors, subject to final offering terms, suitability, KYC/AML, source-of-funds checks and jurisdictional placement rules.
            </p>
          </div>
        </article>

        <article className="rounded-[1.5rem] border border-[#2A5646] bg-[#123831] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <ChartNoAxesCombined className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A070]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A070]">
                Capital and proceeds mechanics
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[#F7F3EA]">
                How the ten-year cycle is funded
              </h2>
            </div>
          </div>
          <div className="mt-5 space-y-2.5">
            {agarwoodCapitalWaterfall.map((step, index) => (
              <div key={step}>
                <div className="flex items-center gap-3 rounded-xl border border-[#2A5646] bg-[#0F312B]/55 px-4 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C8A070] text-xs font-bold text-[#092722]">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium leading-6 text-[#F7F3EA]">{step}</p>
                </div>
                {index < agarwoodCapitalWaterfall.length - 1 ? (
                  <ArrowDown className="mx-auto my-1 h-4 w-4 text-[#C8A070]" />
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-[#D0DBD2]">
            No additional investor capital calls are contemplated under the current base case. Any extraordinary funding, reserve adjustment or distribution remains subject to the final governance process and definitive documents.
          </p>
        </article>
      </section>

      <section className="mt-6 rounded-[1.5rem] border border-[#2A5646] bg-[#123831] p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <CalendarRange className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A070]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A070]">
              Operating lifecycle
            </p>
            <h2 className="mt-2 font-serif text-2xl text-[#F7F3EA]">
              From establishment to phased realization
            </h2>
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {agarwoodLifecycle.map((phase) => (
            <article key={phase.years} className="rounded-xl border border-[#2A5646] bg-[#0F312B]/55 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C8A070]">
                {phase.years}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#F7F3EA]">{phase.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#D0DBD2]">{phase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-[1.5rem] border border-[#2A5646] bg-[#123831] p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A070]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A070]">
              Reserve governance
            </p>
            <h2 className="mt-2 font-serif text-2xl text-[#F7F3EA]">
              Controlled drawdowns, not unrestricted working capital
            </h2>
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Years 7–8", "USD 42.35 for inoculation, released across two controlled annual drawdowns."],
            ["Years 9–10", "USD 130.75 for harvesting, extraction, packaging and logistics."],
            ["Approval evidence", "Expected to require approved budgets, invoices, work orders and operating records."],
            ["Unused balances", "Treatment depends on the final reserve policy and applicable governance approvals."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[#2A5646] bg-[#0F312B]/55 p-4">
              <p className="text-sm font-semibold text-[#C8A070]">{title}</p>
              <p className="mt-2 text-sm leading-6 text-[#D0DBD2]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#2A5646] bg-[#123831] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Sprout className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A070]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A070]">
                Monitoring and controls
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[#F7F3EA]">
                Intended investor visibility
              </h2>
            </div>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-[#D0DBD2]">
            <li>GPS-referenced planting blocks and sub-fund biological-asset records.</li>
            <li>Periodic reporting on inventory, mortality, growth, readiness and material exceptions.</li>
            <li>Annual audit, certification, field verification and financial reporting support.</li>
            <li>Twenty-percent replacement stock intended to mitigate covered mortality or loss.</li>
            <li>Harvest reporting on realized quantity, grade, pricing and relevant sales information.</li>
          </ul>
        </article>

        <article className="rounded-[1.5rem] border border-[#7E6240] bg-[#17362F] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A070]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A070]">
                Key risk considerations
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[#F7F3EA]">
                Long-duration and execution-dependent
              </h2>
            </div>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-[#D0DBD2]">
            <li>Biological risk: mortality, weak resin formation, disease, weather and yield variability.</li>
            <li>Market risk: realized oud grade, buyer depth, pricing and export or trade controls.</li>
            <li>Execution risk: inoculation quality, harvest readiness, extraction, logistics and counterparties.</li>
            <li>Reserve risk: later-stage costs may exceed assumptions or controls may not operate as intended.</li>
            <li>Liquidity risk: no public market, guaranteed redemption or assured secondary liquidity.</li>
            <li>Structural risk: the VCC, service providers, tax treatment and definitive documents remain subject to completion.</li>
          </ul>
        </article>
      </section>

    </AnimatedPage>
  );
}

function MangoProgramSnapshot() {
  return (
    <AnimatedPage>
      <section className="rounded-[1.75rem] border border-[#2A5646] bg-[#123831] p-5 shadow-[0_24px_54px_rgba(0,0,0,0.18)] sm:p-7 lg:p-8">
        <h1 className="font-serif text-[1.55rem] font-semibold leading-tight text-[#C8A070] sm:text-[1.8rem]">
          Program Snapshot
        </h1>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {mangoProgramSnapshot.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[#2A5646] bg-[#0F312B]/55 px-4 py-4"
            >
              <p className="text-[0.75rem] leading-5 text-[#D0DBD2]">
                {item.label}
              </p>
              <p className="text-[0.78rem] font-semibold leading-5 text-[#F7F3EA]">
                {item.value}
              </p>
              {item.note ? (
                <p className="mt-2 text-[0.68rem] leading-4 text-[#D0DBD2]">
                  {item.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-4 text-[0.68rem] leading-4 text-[#D0DBD2]">
          Illustrative only. Projected income and IRR are not guaranteed and depend on realized yields, sale prices, costs, timing and successful sales. Figures are net of the 20% Mango Harvesting Commission and permitted deductions; the cumulative Years 5–15 figure is also net of the one-time USD 100,000 subscription. Distributions depend on operating performance, realized proceeds, working-capital and reserve requirements, applicable law and definitive documents.
        </p>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#2A5646] bg-[#123831] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A070]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A070]">
                Investment structure
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[#F7F3EA]">
                Sub-Fund B: Sweet Elena mango
              </h2>
            </div>
          </div>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#D0DBD2]">
            <p>
              The proposed structure is a pooled, ring-fenced sleeve within a Singapore Variable Capital Company. Investors are expected to hold shares or interests in the mango sub-fund—not legal ownership of individual trees, planting blocks, land or plantation assets.
            </p>
            <p>
              A tree-equivalent reference supports economic allocation and biological-asset traceability. The current reference price is USD 437.08 per mango share, with USD 100,000 used as the indicative professional-investor subscription.
            </p>
          </div>
          <div className="mt-5 rounded-xl border border-[#C8A070]/25 bg-[#0F312B]/55 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C8A070]">
              Investor eligibility
            </p>
            <p className="mt-2 text-sm leading-6 text-[#F7F3EA]">
              Intended for eligible professional or corporate investors, subject to final offering terms, suitability, KYC/AML, source-of-funds checks and jurisdictional placement rules.
            </p>
          </div>
        </article>

        <article className="rounded-[1.5rem] border border-[#2A5646] bg-[#123831] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <ChartNoAxesCombined className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A070]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A070]">
                Economic mechanics
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[#F7F3EA]">
                How harvest proceeds flow
              </h2>
            </div>
          </div>
          <div className="mt-5 space-y-2.5">
            {mangoCashWaterfall.map((step, index) => (
              <div key={step}>
                <div className="flex items-center gap-3 rounded-xl border border-[#2A5646] bg-[#0F312B]/55 px-4 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C8A070] text-xs font-bold text-[#092722]">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium leading-6 text-[#F7F3EA]">{step}</p>
                </div>
                {index < mangoCashWaterfall.length - 1 ? (
                  <ArrowDown className="mx-auto my-1 h-4 w-4 text-[#C8A070]" />
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-[#D0DBD2]">
            Distributions are not automatic or guaranteed. Timing and amount depend on realized sales, fund liquidity, operating requirements, applicable law and the definitive governing documents.
          </p>
        </article>
      </section>

      <section className="mt-6 rounded-[1.5rem] border border-[#2A5646] bg-[#123831] p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <CalendarRange className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A070]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A070]">
              Operating lifecycle
            </p>
            <h2 className="mt-2 font-serif text-2xl text-[#F7F3EA]">
              From establishment to mature harvests
            </h2>
          </div>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {mangoLifecycle.map((phase) => (
            <article key={phase.years} className="rounded-xl border border-[#2A5646] bg-[#0F312B]/55 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C8A070]">
                {phase.years}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#F7F3EA]">{phase.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#D0DBD2]">{phase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#2A5646] bg-[#123831] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Sprout className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A070]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A070]">
                Monitoring and controls
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[#F7F3EA]">
                Intended investor visibility
              </h2>
            </div>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-[#D0DBD2]">
            <li>GPS-referenced mango inventory and sub-fund biological-asset records.</li>
            <li>Periodic reporting on inventory, mortality, tree health, yields, sales and material exceptions.</li>
            <li>Annual audit, field inventory, yield assessment and export-compliance support.</li>
            <li>Twenty-percent surplus planting buffer, with the financial model assuming only 80% fruiting.</li>
            <li>Drone, sensor and field-monitoring tools intended to support crop-health and irrigation decisions.</li>
          </ul>
        </article>

        <article className="rounded-[1.5rem] border border-[#7E6240] bg-[#17362F] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A070]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A070]">
                Key risk considerations
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[#F7F3EA]">
                Long-term and illiquid
              </h2>
            </div>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-[#D0DBD2]">
            <li>Biological risk: mortality, disease, pests, weather and yield variability.</li>
            <li>Market risk: fruit grade, buyer demand, realized pricing and export conditions.</li>
            <li>Execution risk: plantation management, harvest timing, logistics and counterparty performance.</li>
            <li>Liquidity risk: no public market, guaranteed redemption or assured secondary liquidity.</li>
            <li>Structural risk: the VCC, service providers, tax treatment and definitive documents remain subject to completion.</li>
          </ul>
        </article>
      </section>

    </AnimatedPage>
  );
}

export function AgarwoodInvestment() {
  return <AgarwoodProgramPage />;
}

export function MangoInvestment() {
  return <MangoProgramSnapshot />;
}
