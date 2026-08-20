import { useLanguage } from "../hooks/useLanguage";
import { Header } from "./Header";
import "./CaseTalkStudio.css";

const HERO_META_ICONS = ["role", "team", "metric"];

export function CaseTalkStudio() {
  const { content } = useLanguage();
  const c = content.caseTalkStudio;

  return (
    <div className="case-ts">
      <Header />

      {/* Section 1 — Hero */}
      <section className="case-ts__hero">
        <div className="case-ts__hero-card case-ts__gradient-card">
          <img src="/images/decorative/talkstudio-logo.png" alt="" className="case-ts__hero-logo" />
          <h1 className="case-ts__title">{c.hero.title}</h1>
          <p className="case-ts__hero-support">{c.hero.support}</p>
        </div>

        <div className="case-ts__hero-meta">
          {c.hero.meta.map((item, i) => (
            <div className="case-ts__hero-meta-card case-ts__gradient-card" key={item.label}>
              <img
                src={`/images/decorative/pdf-expert/${HERO_META_ICONS[i]}.svg`}
                alt=""
                className="case-ts__hero-meta-icon"
              />
              <span className="case-ts__hero-meta-label">{item.label}</span>
              <span className="case-ts__hero-meta-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 — The Challenge */}
      <section className="case-ts__challenge">
        <div className="case-ts__challenge-cards">
          {c.challenge.cards.map((card) => (
            <div className="case-ts__challenge-card" key={card.number}>
              <span className="case-ts__challenge-number">{card.number}</span>
              <p className="case-ts__challenge-text">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — Stats grid */}
      <section className="case-ts__stats-section">
        <div className="case-ts__stats-card case-ts__gradient-card">
          <div className="case-ts__stats">
            {c.stats.cards.map((stat) => (
              <div className="case-ts__stat" key={stat.value}>
                <span className="case-ts__stat-value">{stat.value}</span>
                <p className="case-ts__stat-caption">{stat.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Research */}
      <section className="case-ts__research">
        <div className="case-ts__research-card case-ts__gradient-card">
          <h2 className="case-ts__section-heading">{c.research.heading}</h2>
          <p className="case-ts__research-intro">{c.research.intro}</p>
          <div className="case-ts__research-blocks">
            {c.research.blocks.map((block) => (
              <div className="case-ts__research-block" key={block.title}>
                <h3 className="case-ts__research-block-title">{block.title}</h3>
                <p className="case-ts__research-block-text">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Problems to solutions */}
      <section className="case-ts__solutions">
        <div className="case-ts__solutions-table case-ts__gradient-card">
          <h2 className="case-ts__solutions-heading">{c.problemsToSolutions.heading}</h2>
          {c.problemsToSolutions.rows.map((row, i) => (
            <div className="case-ts__solutions-row" key={i}>
              <p className="case-ts__solutions-problem">{row.problem}</p>
              <span className="case-ts__solutions-arrow" aria-hidden="true" />
              <p className="case-ts__solutions-solution">{row.idea}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 — Key learnings */}
      <section className="case-ts__key-learnings">
        <div className="case-ts__key-learnings-card case-ts__gradient-card">
          <div className="case-ts__key-learnings-header">
            <div className="case-ts__key-learnings-icon-wrap">
              <img src="/images/decorative/pdf-expert/metric.svg" alt="" className="case-ts__key-learnings-icon" />
            </div>
            <h3 className="case-ts__key-learnings-heading">{c.keyLearnings.heading}</h3>
          </div>
          <div className="case-ts__key-learnings-columns">
            {c.keyLearnings.items.map((item, i) => (
              <div className="case-ts__key-learnings-column" key={i}>
                <span className="case-ts__key-learnings-divider" aria-hidden="true" />
                <h4 className="case-ts__key-learnings-column-title">{item.title}</h4>
                <p className="case-ts__key-learnings-column-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
