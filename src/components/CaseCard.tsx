import { useRef } from "react";
import type { CaseStudy } from "../../content/types";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useParallax } from "../hooks/useParallax";
import { CompareSlider } from "./CompareSlider";
import "./CaseCard.css";

export function LeadCase({ caseStudy }: { caseStudy: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { y: 36, duration: 0.9, stagger: 0.08 });
  useParallax(imgRef, 50);

  return (
    <article className="lead-case" ref={ref}>
      <div
        className={`lead-case__visual ${caseStudy.compareImages ? "lead-case__visual--compare" : "lead-case__visual--wide"}`}
        ref={imgRef}
      >
        {caseStudy.compareImages ? (
          <CompareSlider
            before={caseStudy.compareImages.before}
            after={caseStudy.compareImages.after}
            beforeLabel={caseStudy.compareImages.beforeLabel}
            afterLabel={caseStudy.compareImages.afterLabel}
            alt={`${caseStudy.client} product screen`}
          />
        ) : caseStudy.cover ? (
          <img src={caseStudy.cover} alt={`${caseStudy.client} product screen`} loading="lazy" />
        ) : (
          <div className="lead-case__visual-fallback" aria-hidden="true" />
        )}
      </div>

      <div className="lead-case__body">
        <p className="eyebrow">{caseStudy.eyebrow}</p>
        <h3 className="lead-case__title">{caseStudy.client}</h3>
        <p className="lead-case__role">{caseStudy.role}</p>

        <ul className="lead-case__tags">
          {caseStudy.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {caseStudy.metricsLabel && (
          <p className="lead-case__metrics-label eyebrow">{caseStudy.metricsLabel}</p>
        )}
        <div className="lead-case__metrics">
          {caseStudy.metrics.map((m) => (
            <div className="metric" key={m.label}>
              <span className="metric__value">{m.value}</span>
              <span className="metric__label">{m.label}</span>
            </div>
          ))}
        </div>

        <section className="lead-case__block">
          <h4>Problem</h4>
          <p>{caseStudy.problem}</p>
        </section>

        <section className="lead-case__block">
          <h4>{caseStudy.processLabel ?? "Process"}</h4>
          <ol className="lead-case__process">
            {caseStudy.process.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong> {step.body}
              </li>
            ))}
          </ol>
        </section>

        <section className="lead-case__block">
          <h4>Result</h4>
          <ul className="lead-case__result">
            {caseStudy.result.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>

        {caseStudy.links && caseStudy.links.length > 0 && (
          <div className="lead-case__links">
            {caseStudy.links.map((link) => (
              <a
                key={link.url}
                className="lead-case__link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
