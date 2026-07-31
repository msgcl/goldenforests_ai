import {
  COOKIE_CONSENT_UPDATED_EVENT,
  readCookieConsent,
  type CookieConsent,
} from "./lib/cookieConsent";

let analyticsInitialized = false;

function appendScript(options: {
  id: string;
  src?: string;
  inlineText?: string;
  async?: boolean;
}) {
  if (document.getElementById(options.id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = options.id;

  if (options.src) {
    script.src = options.src;
  }

  if (options.async) {
    script.async = true;
  }

  if (options.inlineText) {
    script.text = options.inlineText;
  }

  document.head.appendChild(script);
}

function initGoogleAnalytics(measurementId: string) {
  appendScript({
    id: "ga4-gtag-src",
    src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`,
    async: true,
  });

  appendScript({
    id: "ga4-gtag-init",
    inlineText: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = window.gtag || gtag;
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `,
  });
}

function initMicrosoftClarity(projectId: string) {
  appendScript({
    id: "microsoft-clarity-init",
    inlineText: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);
        t.async=1;
        t.src="https://www.clarity.ms/tag/" + i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${projectId}");
    `,
  });
}

function initHotjar(siteId: string, snippetVersion: string) {
  appendScript({
    id: "hotjar-init",
    inlineText: `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${JSON.stringify(siteId)},hjsv:${JSON.stringify(snippetVersion)}};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');
        r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `,
  });
}

function loadConfiguredAnalytics() {
  if (analyticsInitialized) return;
  analyticsInitialized = true;

  const ga4MeasurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim();
  const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID?.trim();
  const hotjarSiteId = import.meta.env.VITE_HOTJAR_SITE_ID?.trim();
  const hotjarSnippetVersion =
    import.meta.env.VITE_HOTJAR_SNIPPET_VERSION?.trim() || "6";

  if (ga4MeasurementId) {
    initGoogleAnalytics(ga4MeasurementId);
  }

  if (clarityProjectId) {
    initMicrosoftClarity(clarityProjectId);
  }

  if (hotjarSiteId) {
    initHotjar(hotjarSiteId, hotjarSnippetVersion);
  }
}

export function initAnalytics() {
  if (readCookieConsent()?.analytics) {
    loadConfiguredAnalytics();
  }

  window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, (event) => {
    const consent = (event as CustomEvent<CookieConsent>).detail;
    if (consent.analytics) {
      loadConfiguredAnalytics();
    }
  });
}
