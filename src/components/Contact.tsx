import { useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { MagneticButton } from "./MagneticButton";
import { Sparkle } from "./Accents";
import "./Contact.css";

export function Contact() {
  const { content } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { y: 28, stagger: 0.08 });

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
          <MagneticButton href={`mailto:${content.contact.email}`} variant="solid">
            {content.contact.emailLabel}
          </MagneticButton>
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
