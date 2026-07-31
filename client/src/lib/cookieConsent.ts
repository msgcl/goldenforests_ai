export const COOKIE_CONSENT_NAME = "gf_cookie_consent";
export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
export const COOKIE_CONSENT_UPDATED_EVENT = "golden-forests:cookie-consent-updated";
export const COOKIE_PREFERENCES_OPEN_EVENT = "golden-forests:open-cookie-preferences";

export type CookieConsent = {
  version: number;
  analytics: boolean;
  functional: boolean;
  updatedAt: string;
};

export function readCookieConsent(): CookieConsent | null {
  if (typeof document === "undefined") return null;

  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${COOKIE_CONSENT_NAME}=`));
  if (!cookie) return null;

  try {
    const rawValue = cookie.slice(COOKIE_CONSENT_NAME.length + 1);
    const parsed = JSON.parse(decodeURIComponent(rawValue)) as Partial<CookieConsent>;

    if (
      parsed.version !== COOKIE_CONSENT_VERSION ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.functional !== "boolean"
    ) {
      return null;
    }

    return {
      version: COOKIE_CONSENT_VERSION,
      analytics: parsed.analytics,
      functional: parsed.functional,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

export function saveCookieConsent(
  preferences: Pick<CookieConsent, "analytics" | "functional">,
) {
  const consent: CookieConsent = {
    version: COOKIE_CONSENT_VERSION,
    analytics: preferences.analytics,
    functional: preferences.functional,
    updatedAt: new Date().toISOString(),
  };
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${COOKIE_CONSENT_NAME}=${encodeURIComponent(
    JSON.stringify(consent),
  )}; Path=/; Max-Age=${COOKIE_CONSENT_MAX_AGE}; SameSite=Lax${secure}`;
  window.dispatchEvent(
    new CustomEvent<CookieConsent>(COOKIE_CONSENT_UPDATED_EVENT, {
      detail: consent,
    }),
  );

  return consent;
}

function expireCookie(name: string) {
  const domains = [undefined, window.location.hostname, `.${window.location.hostname}`];

  domains.forEach((domain) => {
    const domainAttribute = domain ? `; Domain=${domain}` : "";
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax${domainAttribute}`;
  });
}

export function clearAnalyticsCookies() {
  document.cookie.split("; ").forEach((entry) => {
    const name = entry.split("=")[0];
    if (
      name === "_ga" ||
      name.startsWith("_ga_") ||
      name === "_gid" ||
      name === "_gat" ||
      name === "_clck" ||
      name === "_clsk" ||
      name.startsWith("_hj")
    ) {
      expireCookie(name);
    }
  });
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(COOKIE_PREFERENCES_OPEN_EVENT));
}
