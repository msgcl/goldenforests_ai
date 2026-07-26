import { Link } from "wouter";

export function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-[#C8A070]/25 bg-[#123831]">
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-center lg:px-10">
        <div className="min-w-0">
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#C8A070]">
            Golden Forests
          </p>
          <p className="mt-1.5 font-serif text-[1rem] leading-tight text-[#F7F3EA]">
            Golden Forests Group
          </p>
        </div>

        <div className="flex flex-col gap-2.5 lg:items-end">
          <p className="max-w-2xl text-[0.8rem] leading-6 text-[#D0DBD2] lg:max-w-none lg:whitespace-nowrap lg:text-right lg:text-[0.76rem]">
            Investment involves risk. Illustrative economics and distributions are not guaranteed. See our{" "}
            <Link href="/disclaimer" className="font-medium text-[#F7F3EA] underline underline-offset-4 transition-colors hover:text-[#C8A070]">
              Risk Warning and Disclaimer
            </Link>{" "}
            for full details.
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.95rem] text-[#F7F3EA]">
            <Link href="/disclaimer" className="text-[#F7F3EA] transition-colors hover:text-white">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="text-[#F7F3EA] transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-[#F7F3EA] transition-colors hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/contact" className="text-[#F7F3EA] transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.64rem] uppercase tracking-[0.16em] text-[#D0DBD2]/70">
            <span>Private Markets</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#C8A070]/70 sm:inline-flex" />
            <span>Agroforestry Intelligence</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#C8A070]/70 sm:inline-flex" />
            <span>© {year} Golden Forests Group</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
