import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { Header } from "./Header";
import { CompareSlider } from "./CompareSlider";
import type { CaseDecisionBlock, CaseMetricsBlock } from "../../content/types";
import "./CaseSyncsanity.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/oleksandra-varvarenko/";

const HERO_META_ICONS = ["role", "team", "metric"];

function DecisionCard({ item, decisionLabel }: { item: CaseDecisionBlock; decisionLabel: string }) {
  return (
    <div
      className={`case-sync__decision case-sync__gradient-card${item.background ? " case-sync__decision--light" : ""}`}
      style={item.background ? { background: item.background } : undefined}
    >
      <div className="case-sync__decision-columns">
        <div className="case-sync__decision-left">
          <span className="case-sync__decision-kicker">{item.kicker}</span>
          <h3 className="case-sync__decision-question">{item.question}</h3>
          <p className="case-sync__decision-research-text">{item.research}</p>
          {item.pullQuote && (
            <blockquote className="case-sync__decision-pull-quote">{item.pullQuote}</blockquote>
          )}
          <div className="case-sync__decision-decision">
            <span className="case-sync__decision-decision-label">{decisionLabel}</span>
            {item.decision && (
              <p className="case-sync__decision-decision-text">{item.decision}</p>
            )}
            {item.decisionSubItems && (
              <div className="case-sync__decision-sub-items">
                {item.decisionSubItems.map((sub) => (
                  <div className="case-sync__decision-sub-item" key={sub.lead}>
                    <p className="case-sync__decision-sub-item-lead">{sub.lead}</p>
                    <p className="case-sync__decision-sub-item-text">{sub.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          className={`case-sync__decision-right${item.right.type === "image" ? " case-sync__decision-right--image" : ""}`}
        >
          {item.right.type === "placeholder" && (
            <div className="case-sync__placeholder">
              <p className="case-sync__placeholder-text">{item.right.text}</p>
            </div>
          )}
          {item.right.type === "features" && (
            <div className="case-sync__decision-features">
              {item.right.items.map((feature, i) => (
                <div className="case-sync__decision-feature" key={feature}>
                  <img
                    src={`/images/decorative/syncsanity/competitive-${i + 1}.png`}
                    alt=""
                    className="case-sync__decision-feature-icon"
                  />
                  <span>{feature}</span>
                </div>
              ))}
              <p className="case-sync__decision-features-note">{item.right.note}</p>
            </div>
          )}
          {item.right.type === "image" && (
            <img
              src={item.right.src}
              alt=""
              className="case-sync__decision-image"
              style={item.right.fit ? { objectFit: item.right.fit } : undefined}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function MetricsBlock({ metrics }: { metrics: CaseMetricsBlock }) {
  return (
    <section className="case-sync__metrics">
      <div className="case-sync__metrics-grid">
        <div className="case-sync__metrics-col-left">
          <div className="case-sync__metrics-card case-sync__metrics-card--primary">
            <span className="case-sync__metrics-card-label">{metrics.primaryLabel}</span>
            <p className="case-sync__metrics-card-value">{metrics.primaryValue}</p>
          </div>

          <div className="case-sync__metrics-card case-sync__metrics-card--light">
            <span className="case-sync__metrics-card-label">{metrics.secondaryCards[0].label}</span>
            <p className="case-sync__metrics-card-value">{metrics.secondaryCards[0].value}</p>
          </div>
        </div>

        <div className="case-sync__metrics-col-right">
          <div className="case-sync__metrics-card case-sync__metrics-card--light">
            <span className="case-sync__metrics-card-label">{metrics.secondaryCards[1].label}</span>
            <p className="case-sync__metrics-card-value">{metrics.secondaryCards[1].value}</p>
          </div>

          <div className="case-sync__metrics-card case-sync__metrics-card--light case-sync__metrics-card--diagnostic">
            <span className="case-sync__metrics-card-label">{metrics.diagnosticLabel}</span>
            {metrics.diagnosticItems.map((text) => (
              <div className="case-sync__metrics-diagnostic-item" key={text}>
                <p className="case-sync__metrics-diagnostic-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseSyncsanity() {
  const { content } = useLanguage();
  const c = content.caseSyncsanity;
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

  const visibleDecisions = c.decisions.items.filter((item) => !item.hidden);

  return (
    <div className="case-sync">
      <Header />

      {/* Section 1 — Hero */}
      <section className="case-sync__hero">
        <div className="case-sync__hero-card case-sync__gradient-card">
          <div className="case-sync__hero-text">
            <div className="case-sync__hero-logo-wrap">
              <img
                src="/images/decorative/syncsanity/syncsanity-logo.png"
                alt=""
                className="case-sync__hero-logo"
              />
            </div>
            <h1 className="case-sync__title">{c.hero.title}</h1>
            <p className="case-sync__hero-description">{c.hero.description}</p>
          </div>
        </div>

        <div className="case-sync__hero-slider">
          <CompareSlider
            beforeSrc="/images/cases/syncsanity-home-dark.png"
            afterSrc="/images/cases/syncsanity-home-light.png"
          />
        </div>

        <div className="case-sync__hero-meta">
          {c.hero.meta.map((item, i) => (
            <div className="case-sync__hero-meta-card case-sync__gradient-card" key={item.label}>
              <img
                src={`/images/decorative/pdf-expert/${HERO_META_ICONS[i]}.svg`}
                alt=""
                className="case-sync__hero-meta-icon"
              />
              <span className="case-sync__hero-meta-label">{item.label}</span>
              <span className="case-sync__hero-meta-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1 — Constraints */}
      <section className="case-sync__problem-cards">
        {c.problemCards.map((card) => (
          <div className="case-sync__problem-card case-sync__gradient-card" key={card.number}>
            <span className="case-sync__problem-number">{card.number}</span>
            <p className="case-sync__problem-text">{card.text}</p>
          </div>
        ))}
      </section>

      {/* Section 2 — The decisions */}
      <section className="case-sync__decisions">
        <div className="case-sync__decisions-list">
          {visibleDecisions.map((item) => (
            <DecisionCard item={item} decisionLabel={c.decisions.decisionLabel} key={item.question} />
          ))}
        </div>
      </section>

      <MetricsBlock metrics={c.metrics} />

      {/* Outcome */}
      <section className="case-sync__outcome">
        <div className="case-sync__outcome-outer case-sync__gradient-card">
          <h3 className="case-sync__outcome-heading">{c.outcome.heading}</h3>
          <div className="case-sync__outcome-cards">
            {c.outcome.items.map((item, i) => (
              <div className="case-sync__outcome-card" key={item}>
                <img
                  src={`/images/decorative/syncsanity/competitive-${i + 1}.png`}
                  alt=""
                  className="case-sync__outcome-icon"
                />
                <p className="case-sync__outcome-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Key learnings */}
      <section className="case-sync__key-learnings">
        <div className="case-sync__key-learnings-card case-sync__gradient-card">
          <div className="case-sync__key-learnings-header">
            <div className="case-sync__key-learnings-icon-wrap">
              <img src="/images/decorative/pdf-expert/metric.svg" alt="" className="case-sync__key-learnings-icon" />
            </div>
            <h3 className="case-sync__key-learnings-heading">{c.keyLearnings.heading}</h3>
          </div>
          <div className="case-sync__key-learnings-columns">
            {c.keyLearnings.items.map((item) => (
              <div className="case-sync__key-learnings-column" key={item.title}>
                <span className="case-sync__key-learnings-divider" aria-hidden="true" />
                <h4 className="case-sync__key-learnings-column-title">{item.title}</h4>
                <p className="case-sync__key-learnings-column-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="case-sync__main">
        {/* Section 8 — Footer CTA */}
        <section className="case-sync__section case-sync__footer">
          <Link to={`/cases/${c.footer.nextCaseSlug}`} className="case-sync__next-case">
            {c.footer.nextCaseLabel}
          </Link>
          <div className="case-sync__contact-actions">
            <button type="button" className="case-sync__contact-action" onClick={handleEmailClick}>
              {copied ? content.contactCta.emailCopiedLabel : content.contactCta.emailLabel}
            </button>
            <a
              className="case-sync__contact-action"
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
