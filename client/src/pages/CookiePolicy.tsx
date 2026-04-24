import { LegalMarkdown, LegalPage } from "@/components/legal/LegalPage";
import { useSiteCopy } from "@/hooks/use-site-copy";
import { defaultSiteCopy } from "@shared/siteCopy";

export default function CookiePolicy() {
  const { data: siteCopy } = useSiteCopy();
  const copy = (siteCopy ?? defaultSiteCopy).cookiePolicy;

  return (
    <LegalPage title={copy.title} subtitle={copy.subtitle}>
      <LegalMarkdown body={copy.body} />
    </LegalPage>
  );
}
