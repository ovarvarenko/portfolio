import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import type { ProjectCard, ConsultCard, MoreProject } from "../../content/types";
import { projectPopups } from "../data/projectPopups";
import { ProjectPopupModal } from "./ProjectPopupModal";
import { CursorFollowLabel } from "./CursorFollowLabel";
import "./ProjectCards.css";

function LargeCard({ card }: { card: ProjectCard }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className="project-card-wrapper">
      <Link
        to={`/cases/${card.slug}`}
        className="project-card project-card--large"
        ref={cardRef}
      >
        <div className="phoneGrid" aria-hidden="true">
          {card.images.map((src, i) =>
            card.slug === "diploai" ? (
              <img key={src} src={src} alt="" className="phoneGrid__phone--fill" />
            ) : (
              <img key={src} src={src} alt="" className={`phoneGrid__phone phoneGrid__phone--${i}`} />
            )
          )}
        </div>
        <div className="phoneGridMobile">
          <img
            src={
              card.slug === "diploai"
                ? "/images/cases/diploai/mobile.png"
                : `/images/cases/${card.slug}-mobile.png`
            }
            alt=""
          />
        </div>
        <div className="project-card__content">
          {card.pills && card.problem && card.approach ? (
            <div className="pdfx-scene" data-project={card.slug}>
              {/* Decorative icons — project-specific */}
              {card.slug === "pdf-expert" && (
                <>
                  <img src="/images/decorative/pdf-expert/icon-fill-sign.png" alt="" className="pdfx-icon pdfx-icon--fillsign" />
                  <img src="/images/decorative/pdf-expert/icon-annotate.png" alt="" className="pdfx-icon pdfx-icon--annotate" />
                  <img src="/images/decorative/pdf-expert/pdf-image.png" alt="" className="pdfx-icon pdfx-icon--pdfimg" />
                  <img src="/images/decorative/pdf-expert/convert-files.png" alt="" className="pdfx-icon pdfx-icon--convert" />
                  <img src="/images/decorative/pdf-expert/AI.png" alt="" className="pdfx-icon pdfx-icon--ai-mid" />
                </>
              )}
              {card.slug === "syncsanity" && (
                <>
                  <img src="/images/decorative/syncsanity/Buying%20grosseries.png" alt="" className="pdfx-icon ss-icon--groceries" />
                  <img src="/images/decorative/syncsanity/Mark%20done.png" alt="" className="pdfx-icon ss-icon--markdone" />
                  <img src="/images/decorative/syncsanity/Laundry.png" alt="" className="pdfx-icon ss-icon--laundry" />
                  <img src="/images/decorative/syncsanity/Streak.png" alt="" className="pdfx-icon ss-icon--streak" />
                  <img src="/images/decorative/syncsanity/Achievment.png" alt="" className="pdfx-icon ss-icon--achievement" />
                  <img src="/images/decorative/syncsanity/Plate.png" alt="" className="pdfx-icon ss-icon--plate" />
                </>
              )}
              {card.slug === "diploai" && (
                <>
                  <img src="/images/decorative/diploai/icon-analyzed.png" alt="" className="pdfx-icon diplo-icon--analyzed" />
                  <img src="/images/decorative/diploai/icon-relevant.png" alt="" className="pdfx-icon diplo-icon--relevant" />
                  <img src="/images/decorative/diploai/icon-irrelevant.png" alt="" className="pdfx-icon diplo-icon--irrelevant" />
                  <img src="/images/decorative/diploai/icon-validation.png" alt="" className="pdfx-icon diplo-icon--validation" />
                  <img src="/images/decorative/diploai/tag-include.png" alt="" className="pdfx-icon diplo-icon--tag-include" />
                  <img src="/images/decorative/diploai/tag-federal.png" alt="" className="pdfx-icon diplo-icon--tag-federal" />
                  <img src="/images/decorative/diploai/tag-exclude.png" alt="" className="pdfx-icon diplo-icon--tag-exclude" />
                </>
              )}

              {/* Title + logo — moves from center to top-left on hover */}
              <div className="pdfx-title">
                <h3 className="pdfx-title__text">{card.title}</h3>
                <img
                  src={
                    card.slug === "syncsanity"
                      ? "/images/decorative/syncsanity/syncsanity-logo.png"
                      : card.slug === "diploai"
                        ? "/images/cases/diploai/logo.svg"
                        : "/images/decorative/pdf-expert/pdfexpert-logo.png"
                  }
                  alt=""
                  className="pdfx-title__logo"
                />
              </div>

              {/* Pills — scattered in default, aligned row on hover */}
              <div className="pdfx-pills">
                {card.pills.map((pill, i) => (
                  <span key={pill} className={`pdfx-pill pdfx-pill--${i}`}>{pill}</span>
                ))}
              </div>

              {/* Problem/Approach blocks — scattered in default, aligned on hover */}
              <div className="pdfx-block pdfx-block--problem">
                <span className="pdfx-block__label">THE PROBLEM</span>
                <p className="pdfx-block__text">{card.problem}</p>
              </div>
              <div className="pdfx-block pdfx-block--approach">
                <span className="pdfx-block__label">THE APPROACH</span>
                <p className="pdfx-block__text">{card.approach}</p>
              </div>
            </div>
          ) : (
            <>
              <div className="project-card__header">
                <span className="project-card__logo">{card.title}</span>
                <h3 className="project-card__title">{card.title}</h3>
              </div>
              <p className="project-card__summary">{card.summary}</p>
              <span className="project-card__tag">{card.tag}</span>
            </>
          )}
        </div>
      </Link>
      <CursorFollowLabel targetRef={cardRef} text="Open details" />
    </div>
  );
}

const RESULT_CARD_LOGOS: Record<string, string> = {
  "talk-studio": "/images/decorative/talkstudio-logo.png",
  "hero-bike": "/images/decorative/herobike-logo.png",
};

function ResultCard({ card }: { card: ConsultCard }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className="project-card-wrapper">
      <Link
        to={`/cases/${card.slug}`}
        className="project-card project-card--result"
        ref={cardRef}
      >
        <div className="result-card__body">
          <div className="result-card__top-row">
            <img src={RESULT_CARD_LOGOS[card.slug]} alt="" className="result-card__logo" />
            <span className="result-card__tag">{card.tag}</span>
          </div>
          <p className="result-card__problem">{card.problem}</p>
          <p className="result-card__headline">{card.result}</p>
        </div>
        <p className="result-card__context">{card.context}</p>
      </Link>
      <CursorFollowLabel targetRef={cardRef} text="Open details" />
    </div>
  );
}

function MoreCard({ project, onOpen }: { project: MoreProject; onOpen?: () => void }) {
  const isClickable = Boolean(onOpen);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="project-card-wrapper">
      <div
        className={`project-card project-card--more${isClickable ? " project-card--clickable" : ""}`}
        onClick={onOpen}
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : undefined}
        ref={cardRef}
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
        <div className="project-card__image-wrap">
          <img src={project.image} alt="" className="project-card__image" />
        </div>
        <div className="project-card__content">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__summary">{project.description}</p>
          <ul className="project-card__results">
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
          <ul className="project-card__tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      {isClickable && <CursorFollowLabel targetRef={cardRef} text="Open details" />}
    </div>
  );
}

export function ProjectCards() {
  const { content } = useLanguage();
  const { largeCards, consultCards, moreProjects } = content.projects;
  const [openPopupSlug, setOpenPopupSlug] = useState<string | null>(null);
  const openPopup = openPopupSlug ? projectPopups[openPopupSlug] : null;

  return (
    <section className="project-cards" aria-label="Selected work">
      <div className="project-cards__stack">
        {largeCards.map((card) => (
          <LargeCard card={card} key={card.slug} />
        ))}
      </div>

      <div className="project-cards__row">
        {consultCards.map((card) => (
          <ResultCard card={card} key={card.slug} />
        ))}
      </div>

      <div className="project-cards__grid">
        {moreProjects.map((project) => (
          <MoreCard
            project={project}
            key={project.slug}
            onOpen={projectPopups[project.slug] ? () => setOpenPopupSlug(project.slug) : undefined}
          />
        ))}
      </div>

      {openPopup && (
        <ProjectPopupModal content={openPopup} onClose={() => setOpenPopupSlug(null)} />
      )}
    </section>
  );
}
