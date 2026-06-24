import { useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./WhoIWorkBestWith.css";

export function WhoIWorkBestWith() {
  const { content } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { y: 28, stagger: 0.1 });

  return (
    <section className="who-fit" id="who-i-work-best-with">
      <h2 className="who-fit__heading">{content.whoIWorkBestWith.heading}</h2>

      <div className="who-fit__segments" ref={ref}>
        {content.whoIWorkBestWith.segments.map((segment) => (
          <div className="who-fit__segment" key={segment.title}>
            <h3 className="who-fit__segment-title">{segment.title}</h3>
            <p className="who-fit__segment-body">{segment.body}</p>
          </div>
        ))}
      </div>

      <div className="who-fit__not-for">
        <p className="who-fit__not-for-heading">{content.whoIWorkBestWith.notForHeading}</p>
        <p className="who-fit__not-for-body">{content.whoIWorkBestWith.notForBody}</p>
      </div>
    </section>
  );
}
