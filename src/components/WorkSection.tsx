import { useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { LeadCase } from "./CaseCard";
import { MoreWorkGrid } from "./MoreWorkGrid";
import "./WorkSection.css";

export function WorkSection() {
  const { content } = useLanguage();
  const headerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef, { y: 24, stagger: 0.06 });

  return (
    <section className="work" id="work">
      <div className="work__header" ref={headerRef}>
        <p className="eyebrow">{content.work.eyebrow}</p>
        <h2 className="work__heading">{content.work.heading}</h2>
        <p className="work__intro">{content.work.intro}</p>
      </div>

      <div className="work__cases">
        {content.work.cases.map((c) => (
          <LeadCase key={c.slug} caseStudy={c} />
        ))}
      </div>

      <MoreWorkGrid eyebrow={content.work.more.eyebrow} items={content.work.more.items} />

      <a
        className="work__figma-banner"
        href={content.work.figmaUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="work__figma-banner-label">{content.work.figmaCta}</span>
        <span className="work__figma-banner-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </section>
  );
}
