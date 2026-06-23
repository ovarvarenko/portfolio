import { createContext } from "react";
import type { SiteContent } from "../../content/types";

export type LangCode = "en" | "ua";

export interface LanguageContextValue {
  content: SiteContent;
  lang: LangCode;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
