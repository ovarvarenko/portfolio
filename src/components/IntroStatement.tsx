import { useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./IntroStatement.css";

export function IntroStatement() {
  const { content } = useLanguage();
  const textRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useScrollReveal(textRef, { y: 24, duration: 0.9, stagger: 0.15, start: "top 88%" });
  useScrollReveal(photoRef, { y: 16, scale: 0.94, duration: 1, start: "top 88%" });

  return (
    <section className="intro" id="intro">
      <div className="intro__text" ref={textRef}>
        <p className="intro__lead">{content.introStatement.lead}</p>
        {content.introStatement.body.map((paragraph, i) => (
          <p className="intro__body" key={i}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="intro__photo" ref={photoRef}>
        <div className="intro__photo-frame">
          <img src="/assets/photo.jpg" alt={content.sidebar.name} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
