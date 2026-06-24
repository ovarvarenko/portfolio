import { useEffect } from "react";
import type { ProjectPreview } from "../../content/types";
import "./ProjectModal.css";

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectPreview;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const { modal } = project;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="project-modal__content">
          <h3 className="project-modal__title">{project.title}</h3>
          <p className="project-modal__role">{modal.role}</p>

          <p className="project-modal__body">{modal.body}</p>

          <p className="project-modal__label">My role</p>
          <p className="project-modal__body">{modal.myRole}</p>

          <p className="project-modal__label">The challenge</p>
          <p className="project-modal__body">{modal.challenge}</p>

          <p className="project-modal__label">Delivered</p>
          <p className="project-modal__body">{modal.delivered}</p>

          <a
            className="project-modal__figma"
            href={modal.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View in Figma ↗
          </a>
        </div>
      </div>
    </div>
  );
}
