import { useLanguage } from "../hooks/useLanguage";
import { Header } from "./Header";
import "./AboutPage.css";

export function AboutPage() {
  const { content } = useLanguage();

  return (
    <div className="about-page">
      <Header />
      <main className="about-page__content">
        <p className="about-page__text">{content.aboutPage.comingSoon}</p>
      </main>
    </div>
  );
}
