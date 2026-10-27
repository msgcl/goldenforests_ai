import {
  CheckCircle2,
  FileChartColumnIncreasing,
  Landmark,
} from "lucide-react";
import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { createPageTypography } from "@/lib/siteTypography";
import { defaultSiteCopy } from "@shared/siteCopy";
import { Link } from "wouter";

const serviceIcons = [Landmark, FileChartColumnIncreasing];

export default function ClientServices() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.clientServices;
  const font = createPageTypography(resolvedSiteCopy, "clientServices");

  return (
    <AnimatedPage className="pt-6 md:pt-8">
      <section className="light-surface overflow-hidden rounded-[2rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#FBFCF7_0%,#F3E9D6_100%)] px-6 py-10 shadow-[0_24px_54px_rgba(23,57,46,0.12)] sm:px-8 md:px-10 lg:px-12 lg:py-14">
        <div className="max-w-4xl">
          <p className={font("header.badge", "text-[0.76rem] font-semibold uppercase tracking-[0.2em] text-[#8A6744]")}>
            {copy.header.badge}
          </p>
          <h1 className={font("header.title", "mt-4 font-serif text-[2rem] leading-tight text-[#17392E] sm:text-[2.65rem] lg:text-[3.2rem]")}>
            {copy.header.title}
          </h1>
          <p className={font("header.description", "mt-5 max-w-3xl text-[1rem] leading-8 text-[#17392E]/[0.84] sm:text-[1.08rem]")}>
            {copy.header.description}
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        {copy.serviceTitles.map((title, index) => {
          const Icon = serviceIcons[index] ?? Landmark;
          const bullets = copy.serviceBullets[index] ?? [];

          return (
            <Card
              key={title}
              className="light-surface border-[#C8A070]/24 bg-[linear-gradient(160deg,#F7F3EA_0%,#EFE4CF_100%)] shadow-[0_18px_40px_rgba(23,57,46,0.1)]"
            >
              <CardContent className="p-6 sm:p-7 lg:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#17392E] text-[#C8A070]">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className={font("serviceTitles", "mt-6 font-serif text-[1.55rem] leading-tight text-[#17392E] sm:text-[1.8rem]")}>
                  {title}
                </h2>
                <p className={font("serviceDescriptions", "mt-4 text-[0.96rem] leading-8 text-[#17392E]/[0.82]")}>
                  {copy.serviceDescriptions[index] ?? ""}
                </p>
                <ul className={font("serviceBullets", "mt-6 space-y-3 text-sm leading-7 text-[#17392E]/[0.84]")}>
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#8A6744]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={index === 0 ? "/agroforestry-opportunities#participation-options" : "/precision-farming#investor-transparency"}
                  className="mt-6 inline-block font-medium text-[#17392E] underline underline-offset-4"
                >
                  {index === 0 ? "Explore participation pathways" : "Explore operational reporting"}
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </section>


    </AnimatedPage>
  );
}
