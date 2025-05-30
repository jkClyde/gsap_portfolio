
import ZoomParralax from "@/components/ZoomParralax";
import Skills from "@/components/skills";
import HorinzotalScroller from "@/components/horinzotalScroller";
import About from "@/components/about";
import ExperienceSection from "@/components/Experience";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      

      <ZoomParralax/>
      <About />
      <Skills/>
      <HorinzotalScroller/>
      <ExperienceSection />
    
      
    </div>
  );
}
