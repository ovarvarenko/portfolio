import { useLanguage } from "../hooks/useLanguage";
import { Header } from "./Header";
import "./CasePlaceholder.css";

export function CasePlaceholder() {
  const { content } = useLanguage();

  return (
    <div className="case-placeholder">
      <Header />
      <main className="case-placeholder__content">
        <p className="case-placeholder__text">{content.aboutPage.comingSoon}</p>
      </main>
    </div>
  );
}
