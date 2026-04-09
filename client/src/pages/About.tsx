import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-media";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";
import {
  BrainCircuit,
  Globe2,
  Leaf,
  LineChart,
  ShieldCheck,
  Trees,
} from "lucide-react";

const aboutHeroImage = "https://res.cloudinary.com/dezfh7wug/image/upload/v1775461733/golden-forests/about-hero-20260406.png";
const uspIcons = [LineChart, BrainCircuit, ShieldCheck, Globe2, Trees, Leaf] as const;
const standoutOverviewLine = "We invite you to be part of it.";

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function renderOverviewParagraph(paragraph: string) {
  if (!paragraph.includes(standoutOverviewLine)) {
    return paragraph;
  }

  const [before] = paragraph.split(standoutOverviewLine, 2);
  const trimmedBefore = before.trimEnd();

  return (
    <>
      {trimmedBefore ? `${trimmedBefore} ` : null}
      <span className="mt-2 block text-[#17392E]">{standoutOverviewLine}</span>
    </>
  );
}

export default function About() {
  const { data: siteCopy } = useSiteCopy();
  const copy = (siteCopy ?? defaultSiteCopy).about;

  const commitmentColumns = copy.commitmentColumnTitles.map((title, index) => ({
    title,
    items: (copy.commitmentItemTitles[index] ?? []).map((itemTitle, itemIndex) => ({
      title: itemTitle,
      description: copy.commitmentItemDescriptions[index]?.[itemIndex] ?? "",
    })),
  }));

  const leadershipTeam = copy.leadershipNames.map((name, index) => ({
    name,
    imageUrl: copy.leadershipImageUrls[index] ?? "",
    title: copy.leadershipTitles[index] ?? "",
    description: copy.leadershipDescriptions[index] ?? "",
  }));

  const boardDirectors = copy.boardNames.map((name, index) => ({
    name,
    imageUrl: copy.boardImageUrls[index] ?? "",
    title: copy.boardTitles[index] ?? "",
    description: copy.boardDescriptions[index] ?? "",
  }));

  return (
    <AnimatedPage>
      <section className="mb-8 overflow-hidden rounded-[2rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#FBFCF7_0%,#F4E8D2_100%)] shadow-[0_24px_54px_rgba(23,57,46,0.12)]">
        <OptimizedImage
          src={aboutHeroImage}
          alt="Plantation landscape with local workers and community context"
          priority
          sizes="100vw"
          className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[520px]"
        />
        <div className="px-6 py-10 sm:px-8 md:px-10 lg:px-12 lg:py-12">
          <div className="max-w-4xl">
            <h1 className="font-serif text-[1.85rem] leading-tight text-[#17392E] sm:text-[2.45rem] lg:text-[3rem]">
              {copy.heroTitle}
            </h1>
            <p className="mt-4 text-[1rem] leading-8 text-[#17392E]/84 sm:text-[1.08rem]">
              {copy.heroDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <Card className="border-border/60 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <h2 className="font-serif text-[1.7rem] leading-tight text-[#17392E] sm:text-[2rem]">
              {copy.overviewTitle}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-8 text-muted-foreground md:text-base">
              {copy.overviewParagraphs.map((paragraph) => (
                <p key={paragraph}>{renderOverviewParagraph(paragraph)}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <div className="mb-5 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            {copy.uspSectionTitle}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {copy.uspCardTitles.map((title, index) => {
            const Icon = uspIcons[index] ?? Leaf;

            return (
              <Card key={title} className="border-border/60 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {copy.uspCardDescriptions[index] ?? ""}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-5 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">{copy.commitmentSectionTitle}</h2>
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          {commitmentColumns.map((column) => (
            <Card key={column.title} className="border-[#6B8E23]/18 bg-[#7F9E62] shadow-[0_18px_40px_rgba(23,57,46,0.1)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#F6F0DE]">{column.title}</h3>
                <div className="mt-5 space-y-5">
                  {column.items.map((item) => (
                    <div key={item.title}>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F6F0DE]">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-[#F6F0DE]/90">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-5 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">{copy.leadershipSectionTitle}</h2>
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          {leadershipTeam.map((person) => (
            <Card key={person.name} className="overflow-hidden border-border/60 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-5 overflow-hidden rounded-[1.4rem] border border-[#17392E]/10 bg-[linear-gradient(135deg,#F6EFE0_0%,#EFE4CF_100%)]">
                  <div className="aspect-[4/4.4] w-full">
                    {person.imageUrl ? (
                      <OptimizedImage
                        src={person.imageUrl}
                        alt={`${person.name} profile portrait`}
                        className="h-full w-full object-cover"
                        sizes="(min-width: 1280px) 320px, (min-width: 768px) 45vw, 90vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,#FCF8F0_0%,#EFE1C6_58%,#E4D2B1_100%)] px-6 text-center">
                        <div>
                          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#17392E]/12 bg-white/55 font-serif text-2xl text-[#17392E] shadow-sm">
                            {getInitials(person.name)}
                          </div>
                          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B8E23]">
                            Profile Photo
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{person.title}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{person.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-5 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">{copy.boardSectionTitle}</h2>
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          {boardDirectors.map((person) => (
            <Card key={person.name} className="overflow-hidden border-border/60 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-5 overflow-hidden rounded-[1.4rem] border border-[#17392E]/10 bg-[linear-gradient(135deg,#F6EFE0_0%,#EFE4CF_100%)]">
                  <div className="aspect-[4/4.4] w-full">
                    {person.imageUrl ? (
                      <OptimizedImage
                        src={person.imageUrl}
                        alt={`${person.name} profile portrait`}
                        className="h-full w-full object-cover"
                        sizes="(min-width: 1280px) 320px, (min-width: 768px) 45vw, 90vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,#FCF8F0_0%,#EFE1C6_58%,#E4D2B1_100%)] px-6 text-center">
                        <div>
                          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#17392E]/12 bg-white/55 font-serif text-2xl text-[#17392E] shadow-sm">
                            {getInitials(person.name)}
                          </div>
                          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B8E23]">
                            Profile Photo
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{person.title}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{person.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
}
