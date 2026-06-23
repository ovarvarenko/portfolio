import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { IntroStatement } from "./components/IntroStatement";
import { WorkSection } from "./components/WorkSection";
import { HowIWork } from "./components/HowIWork";
import { Contact } from "./components/Contact";
import { useLenis } from "./hooks/useLenis";

// Verifies the GitHub -> Vercel auto-deploy pipeline.
function App() {
  useLenis();

  return (
    <>
      <Sidebar />
      <main className="page">
        <Hero />
        <IntroStatement />
        <WorkSection />
        <HowIWork />
        <Contact />
      </main>
    </>
  );
}

export default App;
