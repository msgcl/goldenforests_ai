import { LegalMarkdown, LegalPage } from "@/components/legal/LegalPage";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";

export default function Disclaimer() {
  const { data: siteCopy } = useSiteCopy();
  const copy = (siteCopy ?? defaultSiteCopy).disclaimer;

  return (
    <LegalPage title={copy.title} subtitle={copy.subtitle}>
      <div className="italic"><LegalMarkdown body={copy.body} /></div>
    </LegalPage>
  );
}
