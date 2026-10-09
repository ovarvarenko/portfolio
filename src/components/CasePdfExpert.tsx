import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { Header } from "./Header";
import type { CaseMetricTagged } from "../../content/types";
import "./CasePdfExpert.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/oleksandra-varvarenko/";

const HERO_META_ICONS = ["role", "team", "metric"];

function ScreenGallery({ screens }: { screens: { label: string; image: string }[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="case-pdfx__screen-gallery">
      <div className="case-pdfx__screen-gallery-main">
        <img loading="lazy" decoding="async" src={screens[active].image} alt={screens[active].label} className="case-pdfx__screen-gallery-main-image" />
      </div>
      <div className="case-pdfx__screen-gallery-covers">
        {screens.map((screen, i) => (
          <button
            type="button"
            key={screen.label}
            className={`case-pdfx__screen-gallery-cover${i === active ? " case-pdfx__screen-gallery-cover--active" : ""}`}
            onClick={() => setActive(i)}
          >
            <img loading="lazy" decoding="async" src={screen.image} alt="" className="case-pdfx__screen-gallery-cover-image" />
            <span className="case-pdfx__screen-gallery-cover-label">{screen.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function MetricTags({ tags, variant }: { tags: string[]; variant?: "primary" }) {
  return (
    <div className="case-pdfx__metrics-tags">
      {tags.map((tag) => (
        <span
          className={`case-pdfx__metrics-tag${variant === "primary" ? " case-pdfx__metrics-tag--primary" : ""}`}
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function MetricDiagnosticItem({ item }: { item: CaseMetricTagged }) {
  return (
    <div className="case-pdfx__metrics-diagnostic-item">
      <span className="case-pdfx__metrics-tag">{item.tag}</span>
      <p className="case-pdfx__metrics-diagnostic-text">{item.text}</p>
    </div>
  );
}

export function CasePdfExpert() {
  const { content } = useLanguage();
  const c = content.casePdfExpert;
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
    <div className="case-pdfx">
      <Header />

      {/* Section 1 — Hero */}
      <section className="case-pdfx__hero">
        <div className="case-pdfx__hero-card">
          <div className="case-pdfx__hero-card-inner">
            <div className="case-pdfx__hero-left">
              <img
                src="/images/decorative/pdf-expert/pdfexpert-logo.png"
                alt=""
                className="case-pdfx__hero-logo"
              />
              <h1 className="case-pdfx__title">{c.hero.title}</h1>
              <p className="case-pdfx__hero-description">{c.hero.oneLiner}</p>
            </div>
            <div className="case-pdfx__hero-right">
              <div className="case-pdfx__hero-phone">
                <img
                  src="/images/cases/pdfexpert-home-hero.webp"
                  alt=""
                  className="case-pdfx__hero-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="case-pdfx__hero-meta">
          {c.hero.meta.map((item, i) => (
            <div className="case-pdfx__hero-meta-card" key={item.label}>
              <img
                src={`/images/decorative/pdf-expert/${HERO_META_ICONS[i]}.svg`}
                alt=""
                className="case-pdfx__hero-meta-icon"
              />
              <span className="case-pdfx__hero-meta-label">{item.label}</span>
              <span className="case-pdfx__hero-meta-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Three problem cards — replaces the old gap/shift sections */}
      <section className="case-pdfx__problem-cards">
        {c.problemCards.map((card) => (
          <div className="case-pdfx__problem-card" key={card.number}>
            <span className="case-pdfx__problem-number">{card.number}</span>
            <p className="case-pdfx__problem-text">{card.text}</p>
          </div>
        ))}
      </section>

      {/* Research findings */}
      <section className="case-pdfx__research">
        <div className="case-pdfx__research-card">
          <div className="case-pdfx__research-card-inner">
            <div className="case-pdfx__research-left">
              <span className="case-pdfx__research-label">{c.research.label}</span>
              <div className="case-pdfx__research-insights">
                {c.research.insights.map((insight) => (
                  <div className="case-pdfx__research-insight" key={insight.title}>
                    <h3 className="case-pdfx__research-insight-title">{insight.title}</h3>
                    <p className="case-pdfx__research-insight-text">{insight.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="case-pdfx__research-right">
              <img loading="lazy" decoding="async"
                src="/images/cases/pdfexpert-research.webp"
                alt=""
                className="case-pdfx__research-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experiment structure + hypotheses */}
      <section className="case-pdfx__experiment">
        <div className="case-pdfx__experiment-card">
          <span className="case-pdfx__experiment-label">{c.experiment.label}</span>

          <div className="case-pdfx__experiment-variants">
            {c.experiment.variants.map((variant) => (
              <div className="case-pdfx__experiment-variant" key={variant.label}>
                <span className="case-pdfx__experiment-variant-label">{variant.label}</span>
                <p className="case-pdfx__experiment-variant-text">{variant.text}</p>
              </div>
            ))}
          </div>

          <div className="case-pdfx__experiment-hypotheses">
            {c.experiment.hypotheses.map((hyp) => (
              <div className="case-pdfx__experiment-hypothesis" key={hyp.title}>
                <h3 className="case-pdfx__experiment-hypothesis-title">{hyp.title}</h3>
                <p className="case-pdfx__experiment-hypothesis-text">{hyp.text}</p>
              </div>
            ))}
          </div>

          <img loading="lazy" decoding="async" src={c.experiment.image} alt="" className="case-pdfx__experiment-image" />

          <ScreenGallery screens={c.experiment.screens} />
        </div>
      </section>

      {/* Section 6 — Metrics framework */}
      <section className="case-pdfx__metrics">
        <div className="case-pdfx__metrics-grid">
          <div className="case-pdfx__metrics-col-left">
            <div className="case-pdfx__metrics-card case-pdfx__metrics-card--primary">
              <span className="case-pdfx__metrics-card-label case-pdfx__metrics-card-label--accent">
                {c.metricsFramework.primary.label}
              </span>
              <p className="case-pdfx__metrics-card-value">{c.metricsFramework.primary.value}</p>
              <MetricTags tags={c.metricsFramework.primary.tags} variant="primary" />
            </div>

            <div className="case-pdfx__metrics-card case-pdfx__metrics-card--light">
              <span className="case-pdfx__metrics-card-label">{c.metricsFramework.guardrail.label}</span>
              <div className="case-pdfx__metrics-card-row">
                <MetricTags tags={c.metricsFramework.guardrail.valueTags} />
                <p className="case-pdfx__metrics-card-value">
                  {c.metricsFramework.guardrail.value}{" "}
                  <span className="case-pdfx__metrics-card-value-suffix">
                    {c.metricsFramework.guardrail.valueSuffix}
                  </span>
                </p>
              </div>
              <div className="case-pdfx__metrics-card-row">
                <MetricTags tags={c.metricsFramework.guardrail.noteTags} />
                <p className="case-pdfx__metrics-card-note case-pdfx__metrics-card-note--bold">
                  {c.metricsFramework.guardrail.note}{" "}
                  <span className="case-pdfx__metrics-card-note-suffix">
                    {c.metricsFramework.guardrail.noteSuffix}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="case-pdfx__metrics-card case-pdfx__metrics-card--light case-pdfx__metrics-card--diagnostic">
            <span className="case-pdfx__metrics-card-label">{c.metricsFramework.diagnostic.label}</span>
            {c.metricsFramework.diagnostic.items.map((item) => (
              <MetricDiagnosticItem item={item} key={item.text} />
            ))}
          </div>
        </div>
      </section>

      {/* Second experiment — control vs document-scan personalization */}
      <section className="case-pdfx__experiment">
        <div className="case-pdfx__experiment-card">
          <span className="case-pdfx__experiment-label">{c.secondExperiment.label}</span>

          <div className="case-pdfx__experiment-variants">
            {c.secondExperiment.variants.map((variant) => (
              <div className="case-pdfx__experiment-variant" key={variant.label}>
                <span className="case-pdfx__experiment-variant-label">{variant.label}</span>
                <p className="case-pdfx__experiment-variant-text">{variant.text}</p>
              </div>
            ))}
          </div>

          <div className="case-pdfx__experiment-hypotheses">
            <div className="case-pdfx__experiment-hypothesis">
              <h3 className="case-pdfx__experiment-hypothesis-title">{c.secondExperiment.hypothesis.title}</h3>
              <p className="case-pdfx__experiment-hypothesis-text">{c.secondExperiment.hypothesis.text}</p>
            </div>
          </div>

          <img loading="lazy" decoding="async" src={c.secondExperiment.image} alt="" className="case-pdfx__experiment-image" />

          <ScreenGallery screens={c.secondExperiment.screens} />
        </div>
      </section>

      {/* Second experiment — metrics framework */}
      <section className="case-pdfx__metrics">
        <div className="case-pdfx__metrics-grid">
          <div className="case-pdfx__metrics-col-left">
            <div className="case-pdfx__metrics-card case-pdfx__metrics-card--primary">
              <span className="case-pdfx__metrics-card-label case-pdfx__metrics-card-label--accent">
                {c.secondExperiment.metrics.primaryLabel}
              </span>
              <p className="case-pdfx__metrics-card-value">{c.secondExperiment.metrics.primaryValue}</p>
            </div>

            <div className="case-pdfx__metrics-card case-pdfx__metrics-card--light">
              <span className="case-pdfx__metrics-card-label">{c.secondExperiment.metrics.guardrailLabel}</span>
              <p className="case-pdfx__metrics-card-value">{c.secondExperiment.metrics.guardrailValue}</p>
            </div>
          </div>

          <div className="case-pdfx__metrics-card case-pdfx__metrics-card--light case-pdfx__metrics-card--diagnostic">
            <span className="case-pdfx__metrics-card-label">{c.secondExperiment.metrics.diagnosticLabel}</span>
            {c.secondExperiment.metrics.diagnosticItems.map((text) => (
              <div className="case-pdfx__metrics-diagnostic-item" key={text}>
                <p className="case-pdfx__metrics-diagnostic-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My part & status */}
      {c.myPart && (
        <section className="case-pdfx__research">
          <div className="case-pdfx__research-card">
            <div className="case-pdfx__my-part">
              <span className="case-pdfx__my-part-label">{c.myPart.label}</span>
              <p className="case-pdfx__my-part-text">{c.myPart.text}</p>
            </div>
          </div>
        </section>
      )}

      {/* Key learnings */}
      {c.keyLearnings && (
        <section className="case-pdfx__key-learnings">
          <div className="case-pdfx__key-learnings-card">
            <div className="case-pdfx__key-learnings-header">
              <div className="case-pdfx__key-learnings-icon-wrap">
                <img loading="lazy" decoding="async" src="/images/decorative/pdf-expert/metric.svg" alt="" className="case-pdfx__key-learnings-icon" />
              </div>
              <h3 className="case-pdfx__key-learnings-heading">{c.keyLearnings.heading}</h3>
            </div>
            <div className="case-pdfx__key-learnings-columns">
              {c.keyLearnings.items.map((item) => (
                <div className="case-pdfx__key-learnings-column" key={item.title}>
                  <span className="case-pdfx__key-learnings-divider" aria-hidden="true" />
                  <h4 className="case-pdfx__key-learnings-column-title">{item.title}</h4>
                  <p className="case-pdfx__key-learnings-column-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <main className="case-pdfx__main">
        {/* Section 8 — Footer CTA */}
        <section className="case-pdfx__section case-pdfx__footer">
          <Link to={`/cases/${c.footer.nextCaseSlug}`} className="case-pdfx__next-case">
            {c.footer.nextCaseLabel}
          </Link>
          <div className="case-pdfx__contact-actions">
            <button type="button" className="case-pdfx__contact-action" onClick={handleEmailClick}>
              {copied ? content.contactCta.emailCopiedLabel : content.contactCta.emailLabel}
            </button>
            <a
              className="case-pdfx__contact-action"
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
