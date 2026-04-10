import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-media";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";

const plantationVisitHeroImage =
  "https://res.cloudinary.com/dezfh7wug/image/upload/v1775806412/golden-forests/plantation-visit-hero-20260410-v4.png";

export default function PlantationVisit() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.ecotourism;
  const galleryItems = copy.featuredDestinationNames.slice(0, 4).map((title, index) => ({
    title,
    description: copy.featuredDestinationDetails[index] ?? "",
    image: copy.featuredDestinationImages[index] ?? "",
  }));

  return (
    <AnimatedPage className="pt-6 md:pt-8">
      <section className="overflow-hidden rounded-[2rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#FBFCF7_0%,#F4E8D2_100%)] shadow-[0_24px_54px_rgba(23,57,46,0.12)]">
        <OptimizedImage
          src={plantationVisitHeroImage}
          alt="Workers on the plantation in a warm, human setting"
          priority
          sizes="100vw"
          className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[520px]"
        />
        <div className="px-6 py-10 sm:px-8 md:px-10 lg:px-12 lg:py-12">
          <div className="max-w-4xl">
            <h1 className="font-serif text-[1.85rem] leading-tight text-[#17392E] sm:text-[2.45rem] lg:text-[3rem]">
              {copy.header.title}
            </h1>
            <p className="mt-4 text-[1rem] leading-8 text-[#17392E]/84 sm:text-[1.08rem]">
              {copy.header.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <Card className="border-border/60 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-4 text-sm leading-8 text-muted-foreground md:text-base">
              {copy.introParagraphs.slice(0, 3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild className="rounded-xl bg-[#17392E] px-6 text-[#FBFCF7] hover:bg-[#21483a]">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  {copy.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <Card key={item.title} className="overflow-hidden border-border/60 shadow-sm">
              <OptimizedImage
                src={item.image}
                alt={item.title}
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-[1rem] font-semibold leading-snug text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
}
