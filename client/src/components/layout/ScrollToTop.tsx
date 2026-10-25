import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    let frame = 0;
    const scrollToSection = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        if (!window.location.hash) return;
        const target = document.getElementById(window.location.hash.slice(1));
        if (!target) return;

        const scrollContainer = document.getElementById("app-scroll-container");
        if (scrollContainer) {
          const containerRect = scrollContainer.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          const top =
            targetRect.top - containerRect.top + scrollContainer.scrollTop - 24;

          scrollContainer.scrollTo({
            top: Math.max(top, 0),
            behavior: "smooth",
          });
          return;
        }

        target.scrollIntoView({ block: "start", behavior: "smooth" });
      });
    };
    scrollToSection();
    const events = ["hashchange", "popstate", "pushState", "replaceState"];
    events.forEach((event) => window.addEventListener(event, scrollToSection));
    return () => {
      window.cancelAnimationFrame(frame);
      events.forEach((event) => window.removeEventListener(event, scrollToSection));
    };
  }, [location]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Let hash-based in-page navigation control the final scroll position.
    if (window.location.hash) {
      return;
    }

    // Ensure route transitions always start from top.
    const scrollTarget = document.getElementById("app-scroll-container");
    if (scrollTarget) {
      scrollTarget.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}
