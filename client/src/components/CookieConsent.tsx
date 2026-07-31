import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  COOKIE_PREFERENCES_OPEN_EVENT,
  clearAnalyticsCookies,
  readCookieConsent,
  saveCookieConsent,
  type CookieConsent,
} from "@/lib/cookieConsent";

type PreferenceDraft = Pick<CookieConsent, "analytics" | "functional">;

const rejectedPreferences: PreferenceDraft = {
  analytics: false,
  functional: false,
};

const acceptedPreferences: PreferenceDraft = {
  analytics: true,
  functional: true,
};

export function CookieConsentManager() {
  const [consent, setConsent] = useState<CookieConsent | null>(() => readCookieConsent());
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [draft, setDraft] = useState<PreferenceDraft>(() => {
    const saved = readCookieConsent();
    return saved
      ? { analytics: saved.analytics, functional: saved.functional }
      : rejectedPreferences;
  });

  useEffect(() => {
    const openPreferences = () => {
      const saved = readCookieConsent();
      setDraft(
        saved
          ? { analytics: saved.analytics, functional: saved.functional }
          : rejectedPreferences,
      );
      setPreferencesOpen(true);
    };
    const updateConsent = (event: Event) => {
      setConsent((event as CustomEvent<CookieConsent>).detail);
    };

    window.addEventListener(COOKIE_PREFERENCES_OPEN_EVENT, openPreferences);
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, updateConsent);
    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_OPEN_EVENT, openPreferences);
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, updateConsent);
    };
  }, []);

  const persist = (preferences: PreferenceDraft) => {
    const previousConsent = readCookieConsent();
    const nextConsent = saveCookieConsent(preferences);
    setConsent(nextConsent);
    setDraft(preferences);
    setPreferencesOpen(false);

    if (previousConsent?.analytics && !preferences.analytics) {
      clearAnalyticsCookies();
      window.location.reload();
    }
  };

  return (
    <>
      {!consent ? (
        <aside
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-4xl rounded-2xl border border-[#C8A070]/45 bg-[#092722] p-5 text-[#F7F3EA] shadow-[0_24px_70px_rgba(0,0,0,0.48)] sm:inset-x-6 sm:p-6"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-serif text-xl">Your privacy choices</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#D0DBD2]">
                We use an essential cookie to remember your choice. With your permission,
                we may also use analytics cookies and load the third-party enquiry form.
                Rejecting optional cookies will not prevent you from browsing the site.
              </p>
              <Link
                href="/cookie-policy"
                className="mt-2 inline-flex text-sm font-medium text-[#E1B87E] underline underline-offset-4 hover:text-white"
              >
                Read our Cookie Policy
              </Link>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
              <Button
                type="button"
                variant="outline"
                className="border-[#C8A070]/55 bg-transparent text-[#F7F3EA] hover:bg-white/10 hover:text-white"
                onClick={() => persist(rejectedPreferences)}
              >
                Reject optional
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-[#C8A070]/55 bg-transparent text-[#F7F3EA] hover:bg-white/10 hover:text-white"
                onClick={() => setPreferencesOpen(true)}
              >
                Manage choices
              </Button>
              <Button
                type="button"
                className="bg-[#C8A070] text-[#092722] hover:bg-[#D9B98F]"
                onClick={() => persist(acceptedPreferences)}
              >
                Accept all
              </Button>
            </div>
          </div>
        </aside>
      ) : null}

      <Dialog open={preferencesOpen} onOpenChange={setPreferencesOpen}>
        <DialogContent className="border-[#C8A070]/30 bg-[#F7F3EA] text-[#17392E]">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-[#17392E]">
              Cookie preferences
            </DialogTitle>
            <DialogDescription className="leading-6 text-[#17392E]/70">
              Choose which optional technologies may be used. Essential cookies are
              always active because they support security and remember this selection.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <div className="flex items-start justify-between gap-5 rounded-xl border border-[#17392E]/15 bg-white/65 p-4">
              <div>
                <p className="font-semibold">Essential</p>
                <p className="mt-1 text-sm leading-5 text-[#17392E]/70">
                  Consent preferences and authenticated administrator sessions.
                </p>
              </div>
              <span className="rounded-full bg-[#17392E]/10 px-3 py-1 text-xs font-semibold">
                Always on
              </span>
            </div>

            <label className="flex cursor-pointer items-start justify-between gap-5 rounded-xl border border-[#17392E]/15 bg-white/65 p-4">
              <span>
                <span className="block font-semibold">Analytics</span>
                <span className="mt-1 block text-sm leading-5 text-[#17392E]/70">
                  Allows configured measurement tools to help us understand site usage.
                </span>
              </span>
              <Switch
                checked={draft.analytics}
                onCheckedChange={(analytics) =>
                  setDraft((current) => ({ ...current, analytics }))
                }
                aria-label="Allow analytics cookies"
              />
            </label>

            <label className="flex cursor-pointer items-start justify-between gap-5 rounded-xl border border-[#17392E]/15 bg-white/65 p-4">
              <span>
                <span className="block font-semibold">Third-party functionality</span>
                <span className="mt-1 block text-sm leading-5 text-[#17392E]/70">
                  Allows the embedded Pipedrive enquiry form to load.
                </span>
              </span>
              <Switch
                checked={draft.functional}
                onCheckedChange={(functional) =>
                  setDraft((current) => ({ ...current, functional }))
                }
                aria-label="Allow third-party functional cookies"
              />
            </label>
          </div>

          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
            <Button type="button" variant="outline" onClick={() => persist(rejectedPreferences)}>
              Reject optional
            </Button>
            <Button
              type="button"
              className="bg-[#17392E] text-white hover:bg-[#245344]"
              onClick={() => persist(draft)}
            >
              Save preferences
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
