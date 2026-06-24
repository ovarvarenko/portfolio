import { useRef, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { MagneticButton } from "./MagneticButton";
import { Sparkle } from "./Accents";
import "./Contact.css";

export function Contact() {
  const { content } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { y: 28, stagger: 0.08 });
  const [copied, setCopied] = useState(false);

  function handleCopyEmail(e: React.MouseEvent | React.KeyboardEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(content.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__sparkles" aria-hidden="true">
        <Sparkle />
      </div>

      <div ref={ref}>
        <p className="eyebrow">{content.contact.eyebrow}</p>
        <h2 className="contact__heading">{content.contact.heading}</h2>
        <p className="contact__subhead">{content.contact.subhead}</p>

        <div className="contact__actions">
          <div className="contact__email-wrap">
            <MagneticButton
              variant="solid"
              role="button"
              tabIndex={0}
              onClick={handleCopyEmail}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleCopyEmail(e);
              }}
            >
              {content.contact.email}
            </MagneticButton>
            <span className={`contact__toast ${copied ? "contact__toast--visible" : ""}`}>
              Copied
            </span>
          </div>
          <MagneticButton href={content.contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
            {content.contact.linkedinLabel}
          </MagneticButton>
          <MagneticButton
            href={content.contact.cvUrl}
            download="CV_Varvarenko_Product & Growth.pdf"
          >
            {content.contact.cvLabel}
          </MagneticButton>
        </div>
      </div>

      <footer className="contact__footer">
        <p>{content.footer.note}</p>
      </footer>
    </section>
  );
}
