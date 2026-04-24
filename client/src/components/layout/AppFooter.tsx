import { Link } from "wouter";

export function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-[#C8A070]/24 bg-[linear-gradient(180deg,rgba(244,228,193,0.45)_0%,rgba(251,252,247,0.92)_100%)] backdrop-blur-sm dark:bg-card/95">
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-center lg:px-10">
        <div className="min-w-0">
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#6B8E23]">
            Golden Forests
          </p>
          <p className="mt-1.5 font-serif text-[1rem] leading-tight text-[#17392E] dark:text-foreground">
            Golden Forests Group
          </p>
        </div>

        <div className="flex flex-col gap-2.5 lg:items-end">
          <p className="max-w-2xl text-[0.8rem] leading-6 text-[#1B1B1B]/78 dark:text-muted-foreground lg:max-w-none lg:whitespace-nowrap lg:text-right lg:text-[0.76rem]">
            Investment involves risk. Projected returns are not guaranteed. See our{" "}
            <Link href="/disclaimer" className="font-medium text-[#17392E] underline underline-offset-4 transition-colors hover:text-[#6B8E23] dark:text-foreground dark:hover:text-[#C8A070]">
              Risk Warning and Disclaimer
            </Link>{" "}
            for full details.
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.95rem] text-[#1B1B1B]/68 dark:text-muted-foreground">
            <Link href="/disclaimer" className="transition-colors hover:text-[#17392E] dark:hover:text-foreground">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="transition-colors hover:text-[#17392E] dark:hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="transition-colors hover:text-[#17392E] dark:hover:text-foreground">
              Cookie Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-[#17392E] dark:hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.64rem] uppercase tracking-[0.16em] text-[#1B1B1B]/48 dark:text-muted-foreground/80">
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
