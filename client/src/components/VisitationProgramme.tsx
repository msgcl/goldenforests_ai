import { UsersRound, MapPinned, Route } from "lucide-react";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { createPageTypography } from "@/lib/siteTypography";
export function VisitationProgramme() {
  const { data } = useSiteCopy();
  const resolvedSiteCopy = data ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.clientServices;
  const font = createPageTypography(resolvedSiteCopy, "clientServices");
  return (      <section className="mt-10 overflow-hidden rounded-[1.8rem] border border-[#2A5646] bg-[#123831] shadow-[0_24px_54px_rgba(0,0,0,0.16)]">
        <div className="flex flex-col">
          <div className="border-b border-[#C8A070]/24 p-6 sm:p-8 lg:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8A070]/12 text-[#C8A070]">
              <UsersRound className="h-7 w-7" />
            </div>
            <h2 className={font("visitationTitle", "mt-6 font-serif text-[1.8rem] leading-tight text-[#C8A070] sm:text-[2.1rem]")}>
              {copy.visitationTitle}
            </h2>
            <p className={font("visitationDescription", "mt-4 text-sm leading-7 text-[#D0DBD2] sm:text-[0.96rem]")}>
              {copy.visitationDescription}
            </p>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:p-10">
            <div>
              <div className="flex items-center gap-3">
                <MapPinned className="h-5 w-5 text-[#C8A070]" />
                <h3 className={font("logisticsTitle", "text-lg font-semibold text-[#F7F3EA]")}>
                  {copy.logisticsTitle}
                </h3>
              </div>
              <p className={font("logisticsDescription", "mt-4 text-sm leading-7 text-[#D0DBD2]")}>
                {copy.logisticsDescription}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <Route className="h-5 w-5 text-[#C8A070]" />
                <h3 className={font("itineraryTitle", "text-lg font-semibold text-[#F7F3EA]")}>
                  {copy.itineraryTitle}
                </h3>
              </div>
              <p className={font("itineraryDescription", "mt-4 text-sm leading-7 text-[#D0DBD2]")}>
                {copy.itineraryDescription}
              </p>
            </div>
          </div>
        </div>
      </section>);
}
