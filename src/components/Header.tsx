import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import "./Header.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/oleksandra-varvarenko/";

export function Header() {
  const { content, lang, toggleLang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleEmailClick = async () => {
    await navigator.clipboard.writeText(content.contact.email);
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 1500);
  };

  return (
    <header className="header">
      <nav className="header__side header__side--left" aria-label="Site navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `header__link header__link--home${isActive ? " header__link--active" : ""}`
          }
        >
          {content.nav.home}
        </NavLink>
      </nav>

      <div className="header__side header__side--right">
        <span className="header__discuss">{content.header.discuss}</span>
        <button type="button" className="header__link header__email" onClick={handleEmailClick}>
          {copied ? content.header.emailCopied : content.header.email}
        </button>
        <a
          className="header__link header__linkedin"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.header.linkedin}
        </a>
        <button
          type="button"
          className="header__lang"
          onClick={toggleLang}
          aria-label={`Switch language to ${lang === "en" ? "Ukrainian" : "English"}`}
        >
          {content.nav.langToggle}
        </button>
      </div>
    </header>
  );
}
