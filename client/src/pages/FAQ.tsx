import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";

const faqPdf = new URL("../../../gallery/ASSETS/DOCUMENTS/FAQ-Final v5.pdf", import.meta.url).href;

export default function FAQ() {
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;
  const copy = resolvedSiteCopy.faq;

  const faqSections = [
    {
      title: copy.sectionTitles[0] ?? "",
      questions: copy.marketQuestions,
      answers: copy.marketAnswers,
    },
    {
      title: copy.sectionTitles[1] ?? "",
      questions: copy.missionQuestions,
      answers: copy.missionAnswers,
    },
    {
      title: copy.sectionTitles[2] ?? "",
      questions: copy.ownershipQuestions,
      answers: copy.ownershipAnswers,
    },
    {
      title: copy.sectionTitles[3] ?? "",
      questions: copy.technologyQuestions,
      answers: copy.technologyAnswers,
    },
    {
      title: copy.sectionTitles[4] ?? "",
      questions: copy.harvestQuestions,
      answers: copy.harvestAnswers,
    },
  ];

  return (
    <AnimatedPage>
      <PageHeader
        badge={copy.header.badge}
        title={copy.header.title}
        description={copy.header.description}
        pageKey="faq"
        siteCopy={resolvedSiteCopy}
      />

      <Card className="mb-6 border-[#C8A070]/30 bg-[linear-gradient(135deg,#F4E4C1_0%,#F4E4C1_100%)] shadow-sm">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-primary">Download The Full FAQ Document</h2>
              <p className="mt-3 text-sm leading-7 text-foreground/80">
                Browse the answers on this page, or download the full investor FAQ document for offline review and sharing.
              </p>
            </div>
            <div>
              <Button asChild className="rounded-xl bg-primary px-5 text-primary-foreground hover:bg-[#3b6820]">
                <a href={faqPdf} download className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download FAQ PDF
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {faqSections.map((section, sectionIndex) => (
          <Card key={section.title} className="border-border/60 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="mb-5 inline-flex rounded-full border border-primary/18 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {section.title}
              </div>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((question, index) => (
                  <AccordionItem key={question} value={`section-${sectionIndex}-${index}`} className="border-border/60">
                    <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-7 text-muted-foreground">
                      {section.answers[index] ?? ""}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedPage>
  );
}
