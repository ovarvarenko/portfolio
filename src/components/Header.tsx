import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { useActiveSection } from "../hooks/useActiveSection";
import { homeNavLinks } from "../data/homeSections";
import "./Header.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/oleksandra-varvarenko/";
const SECTION_IDS = homeNavLinks.map((link) => link.id);

export function Header() {
  const { content, lang, toggleLang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  const activeSection = useActiveSection(SECTION_IDS, pathname === "/");

  // Expose the header height so anchored sections can clear the sticky header.
  // Layout effect: it must be set before ScrollToTop jumps to a /#hash.
  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const root = document.documentElement;
    const setHeight = () => root.style.setProperty("--header-height", `${header.offsetHeight}px`);
    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

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
    <header className="header" ref={headerRef}>
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

      <nav className="header__sections" aria-label="Homepage sections">
        {homeNavLinks.map((link) => (
          <Link
            key={link.id}
            to={{ pathname: "/", hash: `#${link.id}` }}
            className={`header__section-link${
              activeSection === link.id ? " header__section-link--active" : ""
            }`}
            aria-current={activeSection === link.id ? "location" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="header__side header__side--right">
        <Link to={{ pathname: "/", hash: "#contact" }} className="header__discuss">
          {content.header.discuss}
        </Link>
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
