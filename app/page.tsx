import HeroSection from "./components/HeroSection";
import ExperiencesSection from "./components/ExperiencesSection";
import PublicationsSection from "./components/PublicationsSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full">
        <HeroSection />
        <ExperiencesSection />
        <PublicationsSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
}
