import { useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./HowIWork.css";

export function HowIWork() {
  const { content } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { y: 28, stagger: 0.1 });

  return (
    <section className="how" id="how-i-work">
      <p className="eyebrow">{content.howIWork.eyebrow}</p>
      <h2 className="how__heading">{content.howIWork.heading}</h2>

      <div className="how__steps" ref={ref}>
        {content.howIWork.steps.map((step) => (
          <div className="how__step" key={step.number}>
            <span className="how__number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
