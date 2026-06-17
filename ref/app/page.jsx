import MenuHint from "@/components/MenuHint";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import TabletSection from "@/sections/TabletSection";
import Testimonial from "@/sections/Testimonial";
import Marquee from "@/sections/Marquee";
import ProjectCards from "@/sections/ProjectCards";
import Capabilities from "@/sections/Capabilities";
import BlackBlock from "@/sections/BlackBlock";
import Research from "@/sections/Research";
import ChatCTA from "@/sections/ChatCTA";
import Footer from "@/sections/Footer";

export default function Page() {
  return (
    <>
      <MenuHint />
      <Navbar />
      <Hero />
      <TabletSection />
      <Testimonial />
      <Marquee />
      <ProjectCards />
      <Capabilities />
      <BlackBlock />
      <Research />
      <ChatCTA />
      <Footer />
    </>
  );
}
