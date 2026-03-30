import { AnimatedPage } from "@/components/layout/AnimatedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { Download, FileText, Leaf, MessageSquareMore, ScrollText, Trees } from "lucide-react";
import { downloadHomeOverviewPdf } from "@/lib/homeOverviewPdf";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";

const plantationHeroImage =
  "https://res.cloudinary.com/dezfh7wug/image/upload/v1774850962/golden-forests/plantation-image-home-20260330.jpg";
const logoWhite =
  "https://res.cloudinary.com/dezfh7wug/image/upload/v1774850963/golden-forests/logo-white-overview-20260330.png";
const companyOverviewDoc = new URL("../../../gallery/ASSETS/DOCUMENTS/Golden_Forests_Company_Overview_v1.3.docx", import.meta.url).href;
const mangoExposePdf = new URL("../../../gallery/ASSETS/DOCUMENTS/GF Mango Exposeì Private FINAL.pdf", import.meta.url).href;
const faqPdf = new URL("../../../gallery/ASSETS/DOCUMENTS/FAQ-Final v5.pdf", import.meta.url).href;
const combinedTwoPagerPdf = new URL("../../../gallery/ASSETS/DOCUMENTS/GF combined two-pager v1.pdf", import.meta.url).href;

const resources = [
  {
    title: "Investment Overview",
    description:
      "A high-level company overview covering the Golden Forests model, ownership structure, and investment proposition.",
    href: companyOverviewDoc,
    label: "Download Overview",
    icon: ScrollText,
  },
  {
    title: "Mango Exposé",
    description:
      "Investor-facing Sweet Elena Carabao mango programme resource for export positioning, cultivation, and return profile.",
    href: mangoExposePdf,
    label: "Download Mango Exposé",
    icon: Leaf,
  },
  {
    title: "Full FAQ Document",
    description:
      "Extended investor FAQ document covering ownership, harvests, fees, operational structure, and protections in more detail.",
    href: faqPdf,
    label: "Download FAQ",
    icon: FileText,
  },
  {
    title: "Combined Two-pager",
    description:
      "A concise two-page summary of the combined agarwood and mango opportunity for quick investor review.",
    href: combinedTwoPagerPdf,
    label: "Download Two-pager",
    icon: Trees,
  },
];

export default function Downloads() {
  const [isGeneratingOverview, setIsGeneratingOverview] = useState(false);
  const { data: siteCopy } = useSiteCopy();
  const resolvedSiteCopy = siteCopy ?? defaultSiteCopy;

  const handleDownloadOverview = async () => {
    try {
      setIsGeneratingOverview(true);
      await downloadHomeOverviewPdf(resolvedSiteCopy, {
        heroImageUrl: plantationHeroImage,
        logoUrl: logoWhite,
      });
    } finally {
      setIsGeneratingOverview(false);
    }
  };

  return (
    <AnimatedPage>
      <div className="mb-10 max-w-4xl">
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Investor Resources
        </span>
        <h1 className="mt-4 font-serif text-[2rem] leading-tight text-primary sm:text-[2.6rem]">
          Downloads & Documents
        </h1>
        <p className="mt-4 text-base leading-8 text-foreground/80 sm:text-lg">
          A curated resource library for investors reviewing Golden Forests, including overview material, programme documents, and supporting FAQ content.
        </p>
      </div>

      <section className="mb-8 grid gap-4 md:grid-cols-2">
        {resources.map(({ title, description, href, label, icon: Icon }) => (
          <Card key={title} className="border-border/70 shadow-sm">
            <CardContent className="p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-foreground">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
              <div className="mt-6">
                <Button asChild className="rounded-xl bg-primary px-5 text-primary-foreground hover:bg-[#3b6820]">
                  <a href={href} download className="inline-flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    {label}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-[1.8rem] border border-[#C8A070]/24 bg-[linear-gradient(135deg,#F4E4C1_0%,#F4E4C1_100%)] p-6 shadow-[0_18px_40px_rgba(23,57,46,0.08)] sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-secondary">Additional Resource</p>
            <h2 className="mt-3 font-serif text-[1.7rem] leading-tight text-primary sm:text-[2rem]">
              Home Page Overview PDF
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/80 sm:text-[0.98rem]">
              Download the branded Golden Forests homepage overview PDF generated from the current website content.
            </p>
            <div className="mt-5">
              <Button
                type="button"
                variant="outline"
                disabled={isGeneratingOverview}
                onClick={handleDownloadOverview}
                className="rounded-xl border-primary/30 bg-[#FBFCF7]/65 px-5 text-primary hover:bg-background"
              >
                <span className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {isGeneratingOverview ? "Preparing Overview..." : "Download Home Overview PDF"}
                </span>
              </Button>
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-[#C8A070]/28 bg-[#FBFCF7]/65 p-5">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MessageSquareMore className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-primary">Agarwood Exposé</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/80">
              A final agarwood exposé file is not yet present in the project documents folder. Until the approved file is supplied, the best professional fallback is to provide it on request through the contact team.
            </p>
            <div className="mt-5">
              <Button asChild className="rounded-xl bg-primary px-5 text-primary-foreground hover:bg-[#3b6820]">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Request Agarwood Exposé
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
