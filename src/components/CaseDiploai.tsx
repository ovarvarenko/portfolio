import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { Header } from "./Header";
import "./CaseDiploai.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/oleksandra-varvarenko/";

const HERO_META_ICONS = ["role", "team", "metric"];

export function CaseDiploai() {
  const { content } = useLanguage();
  const c = content.caseDiploai;
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
    <div className="case-diplo">
      <Header />

      {/* Section 1 — Hero */}
      <section className="case-diplo__hero">
        <div className="case-diplo__hero-card case-diplo__gradient-card">
          <img src="/images/cases/diploai/logo.svg" alt="" className="case-diplo__hero-logo" />
          <h1 className="case-diplo__title">{c.hero.title}</h1>
          <p className="case-diplo__hero-description">{c.hero.description}</p>
        </div>

        <div className="case-diplo__hero-image-wrap">
          <img src="/images/cases/diploai/hero.webp" alt="" className="case-diplo__hero-image" />
        </div>

        <div className="case-diplo__hero-meta">
          {c.hero.meta.map((item, i) => (
            <div className="case-diplo__hero-meta-card case-diplo__gradient-card" key={item.label}>
              <img
                src={`/images/decorative/pdf-expert/${HERO_META_ICONS[i]}.svg`}
                alt=""
                className="case-diplo__hero-meta-icon"
              />
              <span className="case-diplo__hero-meta-label">{item.label}</span>
              <span className="case-diplo__hero-meta-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 — Challenge cards */}
      <section className="case-diplo__problem-cards">
        {c.problemCards.map((card) => (
          <div className="case-diplo__problem-card" key={card.number}>
            <span className="case-diplo__problem-number">{card.number}</span>
            <p className="case-diplo__problem-text">{card.text}</p>
          </div>
        ))}
      </section>

      {/* Section 3 — The decisions */}
      <section className="case-diplo__decisions">
        <div className="case-diplo__decisions-list">
          {c.decisions.items.map((item) => (
            <div className="case-diplo__decision case-diplo__gradient-card" key={item.question}>
              <div className="case-diplo__decision-columns">
                <div className="case-diplo__decision-left">
                  <span className="case-diplo__decision-kicker">{item.kicker}</span>
                  <h3 className="case-diplo__decision-question">{item.question}</h3>
                  <div className="case-diplo__decision-decision">
                    <span className="case-diplo__decision-decision-label">{c.decisions.decisionLabel}</span>
                    <p className="case-diplo__decision-decision-text">{item.decision}</p>
                  </div>
                </div>
                <div className="case-diplo__decision-right">
                  {item.right.type === "placeholder" && (
                    <div className="case-diplo__placeholder">
                      <p className="case-diplo__placeholder-text">{item.right.text}</p>
                    </div>
                  )}
                  {item.right.type === "image" && (
                    <img loading="lazy" decoding="async"
                      src={item.right.src}
                      alt=""
                      className="case-diplo__decision-image"
                      style={item.right.fit ? { objectFit: item.right.fit } : undefined}
                    />
                  )}
                  {item.right.type === "stack" && (
                    <div className="case-diplo__decision-stack">
                      {item.right.images.map((src) => (
                        <img loading="lazy" decoding="async" key={src} src={src} alt="" className="case-diplo__decision-stack-image" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — Results */}
      <section className="case-diplo__results">
        <div className="case-diplo__results-outer case-diplo__gradient-card">
          <h3 className="case-diplo__results-heading">{c.results.heading}</h3>
          <div className="case-diplo__results-cards">
            {c.results.items.map((item, i) => (
              <div className="case-diplo__results-card" key={item}>
                <img loading="lazy" decoding="async"
                  src={`/images/decorative/syncsanity/competitive-${i + 1}.png`}
                  alt=""
                  className="case-diplo__results-icon"
                />
                <p className="case-diplo__results-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Key learnings */}
      <section className="case-diplo__key-learnings">
        <div className="case-diplo__key-learnings-card case-diplo__gradient-card">
          <div className="case-diplo__key-learnings-header">
            <div className="case-diplo__key-learnings-icon-wrap">
              <img loading="lazy" decoding="async" src="/images/decorative/pdf-expert/metric.svg" alt="" className="case-diplo__key-learnings-icon" />
            </div>
            <h3 className="case-diplo__key-learnings-heading">{c.keyLearnings.heading}</h3>
          </div>
          <div className="case-diplo__key-learnings-columns">
            {c.keyLearnings.items.map((item) => (
              <div className="case-diplo__key-learnings-column" key={item.title}>
                <span className="case-diplo__key-learnings-divider" aria-hidden="true" />
                <h4 className="case-diplo__key-learnings-column-title">{item.title}</h4>
                <p className="case-diplo__key-learnings-column-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="case-diplo__main">
        {/* Section 6 — Footer CTA */}
        <section className="case-diplo__section case-diplo__footer">
          <Link to={`/cases/${c.footer.nextCaseSlug}`} className="case-diplo__next-case">
            {c.footer.nextCaseLabel}
          </Link>
          <div className="case-diplo__contact-actions">
            <button type="button" className="case-diplo__contact-action" onClick={handleEmailClick}>
              {copied ? content.contactCta.emailCopiedLabel : content.contactCta.emailLabel}
            </button>
            <a
              className="case-diplo__contact-action"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.contactCta.linkedinLabel}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
