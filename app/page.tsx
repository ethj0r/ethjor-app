import HeroSection from "./components/HeroSection";
import ExperiencesSection from "./components/ExperiencesSection";
import PublicationsSection from "./components/PublicationsSection";
import ResearchGraphSection from "./components/ResearchGraphSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full">
        <HeroSection />
        <ExperiencesSection />
        <PublicationsSection />
        <ResearchGraphSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
}
