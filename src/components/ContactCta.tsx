import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import "./ContactCta.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/oleksandra-varvarenko/";

export function ContactCta() {
  const { content } = useLanguage();
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleEmailClick = async () => {
    await navigator.clipboard.writeText(content.contact.email);
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="contact-cta" id="contact">
      <h2 className="contact-cta__heading">{content.contactCta.heading}</h2>
      <p className="contact-cta__subtext">{content.contactCta.subtext}</p>
      <div className="contact-cta__actions">
        <button type="button" className="contact-cta__action" onClick={handleEmailClick}>
          {copied ? content.contactCta.emailCopiedLabel : content.contactCta.emailLabel}
        </button>
        <a
          className="contact-cta__action"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.contactCta.linkedinLabel}
        </a>
      </div>
    </section>
  );
}
