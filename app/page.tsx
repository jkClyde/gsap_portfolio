
import ZoomParralax from "@/components/ZoomParralax";
import Skills from "@/components/skills";
import HorinzotalScroller from "@/components/horinzotalScroller";
import About from "@/components/about";
import ExperienceSection from "@/components/Experience";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      
   <Hero/>
      <ZoomParralax/>
      <About />
      <Skills/>
      <HorinzotalScroller/>
      <ExperienceSection />
    
      
    </div>
  );
}
