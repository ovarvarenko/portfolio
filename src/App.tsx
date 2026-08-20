import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectCards } from "./components/ProjectCards";
import { ContactCta } from "./components/ContactCta";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { AboutPage } from "./components/AboutPage";
import { CasePdfExpert } from "./components/CasePdfExpert";
import { CaseSyncsanity } from "./components/CaseSyncsanity";
import { CaseDiploai } from "./components/CaseDiploai";
import { CaseHeroBike } from "./components/CaseHeroBike";
import { CaseTalkStudio } from "./components/CaseTalkStudio";
import { ScrollToTop } from "./components/ScrollToTop";
import { useLenis } from "./hooks/useLenis";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <main className="page">
        <ProjectCards />
        <ContactCta />
      </main>
    </>
  );
}

function App() {
  useLenis();

  return (
    <>
      <ScrollToTop />
      <LoadingOverlay />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cases/pdf-expert" element={<CasePdfExpert />} />
        <Route path="/cases/syncsanity" element={<CaseSyncsanity />} />
        <Route path="/cases/diploai" element={<CaseDiploai />} />
        <Route path="/cases/hero-bike" element={<CaseHeroBike />} />
        <Route path="/cases/talk-studio" element={<CaseTalkStudio />} />
      </Routes>
    </>
  );
}

export default App;
