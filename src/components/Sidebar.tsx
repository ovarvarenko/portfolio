import { useLanguage } from "../hooks/useLanguage";
import "./Sidebar.css";

export function Sidebar() {
  const { content, lang, toggleLang } = useLanguage();

  return (
    <aside className="sidebar" aria-label="Site identity">
      <div className="sidebar__name">
        <span>{content.sidebar.name}</span>
        <img className="sidebar__star" src="/assets/star.svg" alt="" aria-hidden="true" />
        <span>{content.sidebar.tagline}</span>
      </div>
      <button
        type="button"
        className="sidebar__lang"
        onClick={toggleLang}
        aria-label={`Switch language to ${lang === "en" ? "Ukrainian" : "English"}`}
      >
        {content.nav.langToggle}
      </button>
    </aside>
  );
}
