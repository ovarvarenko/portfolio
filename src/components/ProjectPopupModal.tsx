import { useEffect, useState } from "react";
import type { ProjectPopupContent } from "../data/projectPopups";
import { getLenisInstance } from "../hooks/useLenis";
import "./ProjectPopupModal.css";

interface ProjectPopupModalProps {
  content: ProjectPopupContent;
  onClose: () => void;
}

export function ProjectPopupModal({ content, onClose }: ProjectPopupModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    const lenis = getLenisInstance();
    lenis?.stop();
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      lenis?.start();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div
      className={`project-popup-backdrop${visible ? " is-visible" : ""}`}
      onClick={handleBackdropClick}
    >
      <div className={`project-popup-modal${visible ? " is-visible" : ""}`} data-lenis-prevent>
        <div className="project-popup-row1">
          <div className="project-popup-title-card">
            <h2 className="project-popup-title">{content.title}</h2>
          </div>
          <div className="project-popup-overview-card">
            <h3 className="project-popup-overview-heading">Overview</h3>
            <p className="project-popup-overview-text">{content.overview}</p>
          </div>
          <button
            type="button"
            className="project-popup-close-card"
            aria-label="Close"
            onClick={onClose}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>

        <div className="project-popup-headers-row">
          <div className="project-popup-header-card">
            <h3 className="project-popup-section-title">Key Challenges</h3>
          </div>
          <div className="project-popup-header-card">
            <h3 className="project-popup-section-title">My Role</h3>
          </div>
          <div className="project-popup-header-card">
            <h3 className="project-popup-section-title">Impact</h3>
          </div>
        </div>

        <div className="project-popup-bodies-scroll">
          <div className="project-popup-bodies-row">
            <div className="project-popup-body-card">
              <ul className="project-popup-bullets">
                {content.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-popup-body-card">
              <ul className="project-popup-bullets">
                {content.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-popup-body-card">
              <ul className="project-popup-bullets">
                {content.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
