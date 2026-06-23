import { useRef } from "react";
import type { ProjectPreview } from "../../content/types";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./MoreWorkGrid.css";

export function MoreWorkGrid({
  eyebrow,
  items,
}: {
  eyebrow: string;
  items: ProjectPreview[];
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(gridRef, { y: 24, duration: 0.7, stagger: 0.08 });

  return (
    <div className="more-work">
      <p className="eyebrow more-work__eyebrow">{eyebrow}</p>
      <div className="more-work__grid" ref={gridRef}>
        {items.map((item) => (
          <article className="more-work__card" key={item.slug}>
            <div className="more-work__visual">
              <img src={item.image} alt={`${item.title} preview`} loading="lazy" />
            </div>
            <h4 className="more-work__title">{item.title}</h4>
            <p className="more-work__description">{item.description}</p>
            <p className="more-work__role">{item.role}</p>
            <ul className="more-work__tags">
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
