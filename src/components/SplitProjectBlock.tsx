import { useRef } from "react";
import type { SplitProject } from "../../content/types";
import { CursorFollowLabel } from "./CursorFollowLabel";
import "./SplitProjectBlock.css";

export function SplitProjectBlock({
  project,
  onOpen,
}: {
  project: SplitProject;
  onOpen?: () => void;
}) {
  const isClickable = Boolean(onOpen);
  const blockRef = useRef<HTMLElement>(null);

  return (
    <>
      <article
        ref={blockRef}
        className={`split-project${project.reverse ? " split-project--reverse" : ""}${
          isClickable ? " split-project--clickable" : ""
        }`}
        onClick={onOpen}
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : undefined}
        aria-label={isClickable ? `${project.title}: open details` : project.title}
        onKeyDown={
          isClickable
            ? (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpen?.();
                }
              }
            : undefined
        }
      >
        <div className="project-card-wrapper split-project__text-wrap">
          {/* Same typographic pattern as the homepage consulting cards
              (ResultCard): tags row, muted overline, one large headline. */}
          <div className="project-card split-project__text">
            <div className="result-card__body">
              <div className="result-card__top-row split-project__top-row">
                <ul className="split-project__tags">
                  {project.tags.map((tag) => (
                    <li className="result-card__tag split-project__tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="result-card__problem">{project.description}</p>
              {project.result && <p className="result-card__headline">{project.result}</p>}

              {project.sections?.map((section) => (
                <div className="split-project__section" key={section.label}>
                  <span className="split-project__label">{section.label}</span>
                  {section.text && <p className="split-project__body">{section.text}</p>}
                  {section.items && (
                    <ul className="split-project__list">
                      {section.items.map((item) => (
                        <li className="split-project__body" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="project-card-wrapper split-project__image-wrap">
          <div className="project-card split-project__image-box">
            <img loading="lazy" decoding="async" src={project.image} alt="" className="split-project__image" />
          </div>
        </div>
      </article>
      {isClickable && <CursorFollowLabel targetRef={blockRef} text="Open details" />}
    </>
  );
}
