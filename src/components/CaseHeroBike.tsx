import { useEffect, useRef, useState, type ReactElement } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { Header } from "./Header";
import "./CaseHeroBike.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/oleksandra-varvarenko/";

const HERO_META_ICONS = ["role", "team", "metric"];

export function CaseHeroBike() {
  const { content } = useLanguage();
  const c = content.caseHeroBike;
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
    <div className="case-hb">
      <Header />

      {/* Section 1 — Hero */}
      <section className="case-hb__hero">
        <div className="case-hb__hero-card case-hb__gradient-card">
          <img src="/images/decorative/herobike-logo-black.svg" alt="" className="case-hb__hero-logo" />
          <h1 className="case-hb__title">{c.hero.title}</h1>
          <p className="case-hb__hero-intro">{c.hero.intro}</p>
        </div>

        <div className="case-hb__hero-meta">
          {c.hero.meta.map((item, i) => (
            <div className="case-hb__hero-meta-card case-hb__gradient-card" key={item.label}>
              <img
                src={`/images/decorative/pdf-expert/${HERO_META_ICONS[i]}.svg`}
                alt=""
                className="case-hb__hero-meta-icon"
              />
              <span className="case-hb__hero-meta-label">{item.label}</span>
              <span className="case-hb__hero-meta-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 — The Challenge */}
      <section className="case-hb__challenge">
        <div className="case-hb__challenge-cards">
          {c.challenge.cards.map((card) => (
            <div className="case-hb__challenge-card" key={card.number}>
              <span className="case-hb__challenge-number">{card.number}</span>
              <p className="case-hb__challenge-text">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — Research findings as numbers */}
      <section className="case-hb__research">
        <div className="case-hb__research-card case-hb__gradient-card">
          <h2 className="case-hb__section-heading">{c.research.heading}</h2>
          <div className="case-hb__stats">
            {c.research.stats.map((stat, i) => (
              <div className="case-hb__stat" key={i}>
                <span className="case-hb__stat-value">{stat.value}</span>
                <p className="case-hb__stat-caption">{stat.caption}</p>
              </div>
            ))}
          </div>

          <div className="case-hb__chart">
            <span className="case-hb__chart-label">{c.research.chart.label}</span>
            <h3 className="case-hb__chart-title">{c.research.chart.title}</h3>
            <div className="case-hb__chart-bars">
              {c.research.chart.bars.map((bar) => (
                <div className="case-hb__chart-bar-row" key={bar.label}>
                  <span className="case-hb__chart-bar-label">{bar.label}</span>
                  <div className="case-hb__chart-bar-track">
                    <div
                      className="case-hb__chart-bar-fill"
                      style={{ width: `${(bar.value / c.research.chart.maxScale) * 100}%` }}
                    />
                  </div>
                  <span className="case-hb__chart-bar-value">
                    {bar.value} of {c.research.chart.maxScale}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="case-hb__quotes">
            <span className="case-hb__quotes-label">{c.research.quotes.label}</span>
            <div className="case-hb__quotes-row">
              {c.research.quotes.items.map((quote, i) => (
                <div className={`case-hb__quote-card case-hb__quote-card--${i}`} key={i}>
                  <span className="case-hb__quote-mark" aria-hidden="true">
                    “
                  </span>
                  <p className="case-hb__quote-text">{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — The job to be done */}
      <section className="case-hb__jtbd">
        <div className="case-hb__jtbd-card case-hb__gradient-card">
          <h2 className="case-hb__section-heading">{c.jtbd.heading}</h2>
          <p className="case-hb__jtbd-statement">
            I, as a <span className="case-hb__jtbd-highlight">{c.jtbd.role}</span>, want to{" "}
            <span className="case-hb__jtbd-highlight">{c.jtbd.task}</span> when{" "}
            <span className="case-hb__jtbd-highlight">{c.jtbd.context}</span> — to{" "}
            <span className="case-hb__jtbd-highlight">{c.jtbd.goal}</span>.
          </p>
        </div>
      </section>

      {/* Behavior loop — the three-phase research conclusion */}
      <section className="case-hb__behavior">
        <div className="case-hb__behavior-card case-hb__gradient-card">
          <span className="case-hb__behavior-kicker">{c.behaviorLoop.heading}</span>
          <div className="case-hb__behavior-phases">
            {c.behaviorLoop.phases
              .map((phase) => (
                <div className="case-hb__behavior-phase" key={phase.name}>
                  <span className="case-hb__behavior-phase-name">{phase.name}</span>
                  <p className="case-hb__behavior-phase-caption">{phase.caption}</p>
                </div>
              ))
              .reduce<ReactElement[]>((acc, el, i) => {
                if (i > 0) {
                  acc.push(
                    <span className="case-hb__behavior-arrow" aria-hidden="true" key={`arrow-${i}`}>
                      →
                    </span>
                  );
                }
                acc.push(el);
                return acc;
              }, [])}
          </div>
        </div>
      </section>

      {/* Section 5 — Problems to ideas */}
      <section className="case-hb__problems">
        <div className="case-hb__problems-table case-hb__gradient-card">
          <h2 className="case-hb__problems-heading">{c.problemsToIdeas.heading}</h2>
          {c.problemsToIdeas.rows.map((row, i) => (
            <div className="case-hb__problems-row" key={i}>
              <p className="case-hb__problems-problem">{row.problem}</p>
              <span className="case-hb__problems-arrow" aria-hidden="true" />
              <p className="case-hb__problems-idea">{row.idea}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 — What I scoped */}
      <section className="case-hb__scope">
        <div className="case-hb__scope-card case-hb__gradient-card">
          <h2 className="case-hb__section-heading">{c.scope.heading}</h2>
          <p className="case-hb__scope-body">{c.scope.body}</p>
          <div className="case-hb__scope-diagram-wrap">
            <img loading="lazy" decoding="async" src={c.scope.diagramSrc} alt="" className="case-hb__scope-diagram" />
          </div>
        </div>
      </section>

      {/* Section 7 — What was delivered */}
      <section className="case-hb__delivered">
        <div className="case-hb__delivered-outer case-hb__gradient-card">
          <h2 className="case-hb__section-heading">{c.delivered.heading}</h2>
          <div className="case-hb__delivered-grid">
            {c.delivered.items.map((item, i) => (
              <div className="case-hb__delivered-card" key={i}>
                <span className="case-hb__delivered-marker" aria-hidden="true" />
                <p className="case-hb__delivered-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Key learnings */}
      <section className="case-hb__key-learnings">
        <div className="case-hb__key-learnings-card case-hb__gradient-card">
          <div className="case-hb__key-learnings-header">
            <div className="case-hb__key-learnings-icon-wrap">
              <img loading="lazy" decoding="async" src="/images/decorative/pdf-expert/metric.svg" alt="" className="case-hb__key-learnings-icon" />
            </div>
            <h3 className="case-hb__key-learnings-heading">{c.keyLearnings.heading}</h3>
          </div>
          <div className="case-hb__key-learnings-columns">
            {c.keyLearnings.items.map((item, i) => (
              <div className="case-hb__key-learnings-column" key={i}>
                <span className="case-hb__key-learnings-divider" aria-hidden="true" />
                <h4 className="case-hb__key-learnings-column-title">{item.title}</h4>
                <p className="case-hb__key-learnings-column-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="case-hb__main">
        {/* Footer CTA */}
        <section className="case-hb__section case-hb__footer">
          <Link to={`/cases/${c.footer.nextCaseSlug}`} className="case-hb__next-case">
            {c.footer.nextCaseLabel}
          </Link>
          <div className="case-hb__contact-actions">
            <button type="button" className="case-hb__contact-action" onClick={handleEmailClick}>
              {copied ? content.contactCta.emailCopiedLabel : content.contactCta.emailLabel}
            </button>
            <a
              className="case-hb__contact-action"
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
