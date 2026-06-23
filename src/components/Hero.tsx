import { lazy, Suspense, useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useIsMobile } from "../hooks/useIsMobile";
import { Sparkle } from "./Accents";
import { HeroStaticBackground } from "./HeroStaticBackground";
import "./Hero.css";

const HeroShaderBackground = lazy(() =>
  import("./HeroShaderBackground").then((m) => ({ default: m.HeroShaderBackground })),
);

export function Hero() {
  const { content } = useLanguage();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const isMobile = useIsMobile();
  useScrollReveal(headlineRef, { y: 28, duration: 0.9, start: "top 95%" });

  return (
    <section className="hero" id="top">
      {isMobile ? (
        <HeroStaticBackground />
      ) : (
        <Suspense fallback={null}>
          <HeroShaderBackground />
        </Suspense>
      )}
      <div className="hero__left-fade" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__sparkles" aria-hidden="true">
          <Sparkle />
          <Sparkle />
          <Sparkle />
        </div>
        <h1 className="hero__headline" ref={headlineRef}>
          <span className="hero__line hero__line--solid hero__line--indent-a">
            {content.hero.titleSolid[0]}
          </span>
          <span className="hero__line hero__line--solid hero__line--indent-b">
            {content.hero.titleSolid[1]}
          </span>
          <span className="hero__line hero__line--outline hero__line--indent-a">
            {content.hero.titleOutline[0]}
          </span>
          <span className="hero__line hero__line--outline hero__line--indent-c">
            {content.hero.titleOutline[1]}
          </span>
        </h1>
      </div>

      <div className="hero__scroll-cue">
        <span className="hero__scroll-dot" aria-hidden="true" />
        <span className="hero__scroll-text">{content.hero.scrollCue}</span>
      </div>
    </section>
  );
}
