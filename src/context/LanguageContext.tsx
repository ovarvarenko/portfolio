import { useMemo, useState, type ReactNode } from "react";
import { en } from "../../content/en";
import { ua } from "../../content/ua";
import { LanguageContext, type LangCode, type LanguageContextValue } from "./languageContextValue";

const STORAGE_KEY = "ov-portfolio-lang";

function getInitialLang(): LangCode {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "ua" ? "ua" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangCode>(getInitialLang);

  const value = useMemo<LanguageContextValue>(() => {
    const toggleLang = () => {
      const next: LangCode = lang === "en" ? "ua" : "en";

      const applyChange = () => {
        setLang(next);
        window.localStorage.setItem(STORAGE_KEY, next);
      };

      const docWithTransitions = document as Document & {
        startViewTransition?: (cb: () => void) => unknown;
      };
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!prefersReducedMotion && typeof docWithTransitions.startViewTransition === "function") {
        docWithTransitions.startViewTransition(applyChange);
      } else {
        applyChange();
      }
    };

    return { content: lang === "en" ? en : ua, lang, toggleLang };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
