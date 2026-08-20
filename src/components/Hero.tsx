import { lazy, Suspense, useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useIsMobile } from "../hooks/useIsMobile";
import { HeroStaticBackground } from "./HeroStaticBackground";
import styles from "./Hero.module.css";

const HeroShaderBackground = lazy(() =>
  import("./HeroShaderBackground").then((m) => ({ default: m.HeroShaderBackground })),
);

const TAG_DOT_COLORS = ["#73bfc4", "#d98c3f", "#8da0ce"];

export function Hero() {
  const { content } = useLanguage();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const isMobile = useIsMobile();
  useScrollReveal(headlineRef, { y: 28, duration: 0.9, start: "top 95%" });

  return (
    <section className={styles.heroOuter} id="top">
      <div className={styles.sideCol}>
        <span className={styles.sideText}>{content.sidebar.name}</span>
      </div>

      <div className={styles.heroCard}>
        {isMobile ? (
          <HeroStaticBackground />
        ) : (
          <Suspense fallback={null}>
            <HeroShaderBackground />
          </Suspense>
        )}
        <div className={styles.overlay} aria-hidden="true" />

        <div className={styles.content}>
          <ul className={styles.tags} aria-label="Focus areas">
            {content.hero.tags.map((tag, i) => (
              <li className={styles.tag} key={tag}>
                <span
                  className={styles.tagDot}
                  style={{ background: TAG_DOT_COLORS[i % TAG_DOT_COLORS.length] }}
                  aria-hidden="true"
                />
                {tag}
              </li>
            ))}
          </ul>

          <h1 className={styles.title} ref={headlineRef}>
            {content.hero.title}
          </h1>

          <div className={styles.segments}>
            {content.hero.segments.map((segment) => (
              <p className={styles.segment} key={segment.label}>
                <span className={styles.segmentLabel}>{segment.label}</span>{" "}
                {segment.description}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sideCol}>
        <span className={styles.sideText}>{content.sidebar.tagline}</span>
      </div>
    </section>
  );
}
