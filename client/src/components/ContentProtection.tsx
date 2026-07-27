import { useEffect, type ReactNode } from "react";

type ContentProtectionProps = {
  children: ReactNode;
};

const isEditableTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;

  return (
    target.isContentEditable ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
};

export function ContentProtection({ children }: ContentProtectionProps) {
  useEffect(() => {
    const preventContentAction = (event: Event) => {
      if (!isEditableTarget(event.target)) {
        event.preventDefault();
      }
    };

    const preventProtectedShortcut = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) return;

      const key = event.key.toLowerCase();
      const protectedShortcut =
        (event.ctrlKey || event.metaKey) &&
        ["c", "s", "p", "u", "a"].includes(key);

      if (protectedShortcut || event.key === "PrintScreen") {
        event.preventDefault();

        if (event.key === "PrintScreen" && navigator.clipboard) {
          void navigator.clipboard.writeText(
            "Screenshots of this protected content are not permitted.",
          ).catch(() => {
            // Clipboard access may be denied by the browser or operating system.
          });
        }
      }
    };

    document.addEventListener("copy", preventContentAction);
    document.addEventListener("cut", preventContentAction);
    document.addEventListener("contextmenu", preventContentAction);
    document.addEventListener("dragstart", preventContentAction);
    document.addEventListener("selectstart", preventContentAction);
    document.addEventListener("keydown", preventProtectedShortcut);

    return () => {
      document.removeEventListener("copy", preventContentAction);
      document.removeEventListener("cut", preventContentAction);
      document.removeEventListener("contextmenu", preventContentAction);
      document.removeEventListener("dragstart", preventContentAction);
      document.removeEventListener("selectstart", preventContentAction);
      document.removeEventListener("keydown", preventProtectedShortcut);
    };
  }, []);

  return <div className="protected-content min-h-dvh">{children}</div>;
}
