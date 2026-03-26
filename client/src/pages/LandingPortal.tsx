import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-media";

const landingImageUrl =
  "https://res.cloudinary.com/dezfh7wug/image/upload/v1774543273/golden-forests/landing-image-subtle-hero.png";

export default function LandingPortal() {
  const [, setLocation] = useLocation();
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const openSalesPortal = () => {
    setLocation("/home");
  };

  return (
    <main
      className="relative min-h-dvh overflow-hidden bg-[#0C2019] text-white"
      onWheel={(event) => {
        if (event.deltaY > 16) {
          openSalesPortal();
        }
      }}
      onTouchStart={(event) => {
        setTouchStartY(event.touches[0]?.clientY ?? null);
      }}
      onTouchEnd={(event) => {
        if (touchStartY === null) return;
        const endY = event.changedTouches[0]?.clientY ?? touchStartY;
        if (touchStartY - endY > 40) {
          openSalesPortal();
        }
        setTouchStartY(null);
      }}
    >
      <OptimizedImage
        src={landingImageUrl}
        alt=""
        aria-hidden="true"
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,13,0.2)_0%,rgba(5,16,13,0.34)_38%,rgba(5,16,13,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]" />

      <div className="relative z-10 flex min-h-dvh flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-12">
        <div className="mx-auto grid min-h-[calc(100dvh-3rem)] w-full max-w-7xl flex-1 grid-rows-[1fr_auto] items-center pb-1 pt-4 text-center sm:min-h-[calc(100dvh-4rem)] sm:pb-2 sm:pt-6">
          <div className="row-start-1 flex max-w-4xl self-center justify-self-center flex-col items-center justify-center">
            <OptimizedImage
              src="https://res.cloudinary.com/dezfh7wug/image/upload/v1774561092/golden-forests/logo-white-landing.png"
              alt="Golden Forests logo"
              priority
              sizes="140px"
              className="mb-2 h-auto w-40 object-contain sm:mb-3 sm:w-44"
            />
            <h1 className="font-serif text-[clamp(2.1rem,4.5vw,4.6rem)] font-normal uppercase tracking-[0.055em] text-white [text-shadow:0_10px_28px_rgba(0,0,0,0.3)]">
              GOLDEN FORESTS
            </h1>
            <p className="mt-1 font-serif text-[1.15rem] font-normal tracking-[0.02em] text-white sm:text-[1.3rem]">
              Agroforestry Intelligence
            </p>
          </div>

          <div className="row-start-2 flex flex-col items-center self-end pt-6 lg:pt-8">
            <div className="grid w-full gap-3 sm:mx-auto sm:w-fit sm:grid-cols-2">
              <Button
                asChild
                size="default"
                className="h-auto justify-start rounded-xl bg-[#D5AE75] px-4 py-3.5 text-left text-[#17392E] shadow-[0_16px_34px_rgba(0,0,0,0.18)] hover:bg-[#e0bc8c] sm:px-6"
              >
                <a href="https://goldenforests.ph" className="flex min-w-0 flex-col items-start">
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6B4A20]">
                    ENTER
                  </span>
                  <span className="mt-1 block text-balance text-[0.92rem] font-semibold leading-snug sm:text-[1rem] lg:text-[1.02rem]">
                    PLANTATION MANAGEMENT
                  </span>
                </a>
              </Button>

              <Button
                asChild
                size="default"
                variant="outline"
                className="h-auto justify-start rounded-xl border-white/28 bg-[rgba(11,30,24,0.42)] px-4 py-3.5 text-left text-white backdrop-blur-md hover:bg-[rgba(15,37,30,0.56)] sm:px-6"
              >
                <button type="button" onClick={openSalesPortal} className="flex min-w-0 flex-col items-start">
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/80">
                    ENTER
                  </span>
                  <span className="mt-1 block text-balance text-[0.92rem] font-semibold leading-snug sm:text-[1rem] lg:text-[1.02rem]">
                    TREE INVESTMENT SITE
                  </span>
                </button>
              </Button>
            </div>

            <button
              type="button"
              onClick={openSalesPortal}
              className="landing-scroll-cue mt-6 inline-flex flex-col items-center gap-1.5 text-white/90 transition hover:text-white"
            >
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em]">
                Scroll to Enter Website
              </span>
              <span className="text-xl leading-none">˅</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}



