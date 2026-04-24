import type { ReactNode } from "react";
import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";

export function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <AnimatedPage>
      <section className="mb-8 overflow-hidden rounded-[2rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#FBFCF7_0%,#F4E8D2_100%)] shadow-[0_24px_54px_rgba(23,57,46,0.12)]">
        <div className="px-6 py-10 sm:px-8 md:px-10 lg:px-12 lg:py-12">
          <div className="max-w-4xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#6B8E23]">
              Golden Forests Group
            </p>
            <h1 className="mt-3 font-serif text-[1.85rem] leading-tight text-[#17392E] sm:text-[2.45rem] lg:text-[3rem]">
              {title}
            </h1>
            <p className="mt-4 text-[0.95rem] leading-8 text-[#17392E]/78 sm:text-[1rem]">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <Card className="border-border/60 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-sm max-w-none text-[#17392E] prose-headings:font-serif prose-headings:text-[#17392E] prose-p:leading-7 prose-li:leading-7 prose-strong:text-[#17392E] sm:prose-base">
              {children}
            </div>
          </CardContent>
        </Card>
      </section>
    </AnimatedPage>
  );
}

export function LegalMarkdown({ body }: { body: string }) {
  const lines = body.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) return;
    nodes.push(
      <ul key={`list-${nodes.length}`} className="my-4 list-disc space-y-2 pl-5 text-[#17392E] marker:text-[#6B8E23]">
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      return;
    }

    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();

    if (line.startsWith("## ")) {
      nodes.push(
        <h2 key={`heading-${index}`} className="mt-8 font-serif text-[1.35rem] leading-tight text-[#17392E] first:mt-0 sm:text-[1.55rem]">
          {line.slice(3)}
        </h2>,
      );
      return;
    }

    nodes.push(
      <p key={`paragraph-${index}`} className="mt-4 text-sm leading-7 text-[#17392E]/82 first:mt-0 sm:text-base">
        {line}
      </p>,
    );
  });

  flushList();

  return <div>{nodes}</div>;
}
