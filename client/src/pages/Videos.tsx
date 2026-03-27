import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Clapperboard, PlayCircle, Sparkles } from "lucide-react";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import { createPageTypography } from "@/lib/siteTypography";

const cloudName = "dezfh7wug";

type ShowcaseVideo = {
  title: string;
  description: string;
  eyebrow: string;
  duration: string;
  publicId: string;
  posterOffset: number;
  preload: "none" | "metadata";
};

const showcaseVideos: ShowcaseVideo[] = [
  {
    title: "Inside Golden Forests Operations",
    description:
      "Watch a closer look at nursery activity, plantation development, and the operational environment behind the Golden Forests programme.",
    eyebrow: "Featured Film",
    duration: "1 min 28 sec",
    publicId: "golden-forests/videos/goldenforests-ai",
    posterOffset: 4,
    preload: "metadata",
  },
  {
    title: "Experience the Visit Before You Arrive",
    description:
      "A preview of the plantation visit experience, connecting plantation oversight in Zambales with the wider travel programme, premium hospitality, and onward access through Clark to key island destinations.",
    eyebrow: "Cinematic Journey",
    duration: "3 min 55 sec",
    publicId: "golden-forests/videos/dreams-of-philippines-cinematic-journey",
    posterOffset: 8,
    preload: "none",
  },
];

function buildOptimizedVideoUrl(publicId: string) {
  return `https://res.cloudinary.com/${cloudName}/video/upload/q_auto:eco,vc_auto,w_1600,c_limit/${publicId}.mp4`;
}

function buildPosterUrl(publicId: string, offsetSeconds: number) {
  return `https://res.cloudinary.com/${cloudName}/video/upload/so_${offsetSeconds},ar_16:9,c_fill,w_1600,q_auto,f_jpg/${publicId}.jpg`;
}

export default function Videos() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.videos;
  const font = createPageTypography(resolvedSiteCopy, "videos");

  const [featuredVideo, cinematicVideo] = showcaseVideos;
  const resolvedFeaturedVideo = {
    ...featuredVideo,
    eyebrow: copy.featuredVideoEyebrow,
    title: copy.featuredVideoTitle,
    description: copy.featuredVideoDescription,
    duration: copy.featuredVideoRuntime,
  };
  const resolvedCinematicVideo = {
    ...cinematicVideo,
    eyebrow: copy.cinematicVideoEyebrow,
    title: copy.cinematicVideoTitle,
    description: copy.cinematicVideoDescription,
    duration: copy.cinematicVideoRuntime,
  };

  return (
    <AnimatedPage className="pt-6 md:pt-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-[#c8a070]/24 bg-[radial-gradient(circle_at_top_left,rgba(214,179,138,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(73,153,114,0.22),transparent_28%),linear-gradient(135deg,#123429_0%,#17392E_54%,#0F2B23_100%)] px-6 py-8 text-[#fbfcf7] shadow-[0_24px_54px_rgba(9,39,34,0.18)] sm:px-8 md:px-10 md:py-10">
        <div className="max-w-4xl">
          <span className={font("heroBadge", "inline-flex rounded-full border border-[#c8a070]/40 bg-[#fbfcf7]/8 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#d9b382]")}>
            {copy.heroBadge}
          </span>
          <h1 className={font("heroTitle", "mt-5 max-w-none whitespace-nowrap font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.02] tracking-[0.01em] text-[#fbfcf7]")}>
            {copy.heroTitle}
          </h1>
          <p className={font("heroDescription", "mt-5 max-w-3xl text-[1rem] leading-8 text-[#fbfcf7]/82 sm:text-[1.06rem]")}>
            {copy.heroDescription}
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-6">
        <Card className="overflow-hidden rounded-[2rem] border-[#c8a070]/28 bg-[linear-gradient(135deg,#15382d_0%,#1a4336_100%)] text-[#f6ead7] shadow-[0_24px_60px_rgba(13,43,34,0.14)]">
          <CardContent className="p-0">
            <div className="grid gap-0 xl:grid-cols-[1.35fr_0.65fr]">
              <div className="relative">
                <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#17392e]/70 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f5dfc4] backdrop-blur">
                  <PlayCircle className="h-4 w-4" />
                  {resolvedFeaturedVideo.eyebrow}
                </div>
                <video
                  className="aspect-video w-full bg-[#0f241d] object-cover"
                  controls
                  playsInline
                  preload={resolvedFeaturedVideo.preload}
                  poster={buildPosterUrl(resolvedFeaturedVideo.publicId, resolvedFeaturedVideo.posterOffset)}
                >
                  <source src={buildOptimizedVideoUrl(resolvedFeaturedVideo.publicId)} type="video/mp4" />
                </video>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-7 md:p-8">
                <div>
                  <p className={font("featuredVideoEyebrow", "text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d9b382]")}>
                    {resolvedFeaturedVideo.eyebrow}
                  </p>
                  <h2 className={font("featuredVideoTitle", "mt-3 font-serif text-3xl leading-tight text-[#f8ecd7]")}>
                    {resolvedFeaturedVideo.title}
                  </h2>
                  <p className={font("featuredVideoDescription", "mt-4 text-[0.98rem] leading-8 text-[#f5e4cb]/90")}>
                    {resolvedFeaturedVideo.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#f8ecd7]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2">
                    <Clapperboard className="h-4 w-4 text-[#d7b38a]" />
                    <span className={font("featuredVideoRuntime", "")}>{resolvedFeaturedVideo.duration}</span>
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden rounded-[2rem] border-[#c8a070]/28 bg-[linear-gradient(135deg,#15382d_0%,#1a4336_100%)] text-[#f6ead7] shadow-[0_24px_60px_rgba(13,43,34,0.14)]">
          <CardContent className="p-0">
            <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="flex flex-col justify-between p-6 sm:p-7 md:p-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b38a]/28 bg-white/6 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#e8c79f]">
                    <Sparkles className="h-4 w-4" />
                    {resolvedCinematicVideo.eyebrow}
                  </div>
                  <h2 className={font("cinematicVideoTitle", "mt-4 font-serif text-3xl leading-tight text-[#f8ecd7]")}>
                    {resolvedCinematicVideo.title}
                  </h2>
                  <p className={font("cinematicVideoDescription", "mt-4 text-[0.98rem] leading-8 text-[#f5e4cb]/90")}>
                    {resolvedCinematicVideo.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#f8ecd7]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2">
                    <Clapperboard className="h-4 w-4 text-[#d7b38a]" />
                    <span className={font("cinematicVideoRuntime", "")}>{resolvedCinematicVideo.duration}</span>
                  </span>
                </div>
              </div>

              <div className="relative">
                <video
                  className="aspect-video w-full bg-[#0b1f19] object-cover"
                  controls
                  playsInline
                  preload={resolvedCinematicVideo.preload}
                  poster={buildPosterUrl(resolvedCinematicVideo.publicId, resolvedCinematicVideo.posterOffset)}
                >
                  <source src={buildOptimizedVideoUrl(resolvedCinematicVideo.publicId)} type="video/mp4" />
                </video>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </AnimatedPage>
  );
}
