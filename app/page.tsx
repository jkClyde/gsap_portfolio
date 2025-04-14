import Footer from "@/components/footer";
import Hero from "@/components/hero";

import Navbar from "@/components/navbar";
import ZoomParralax from "@/components/ZoomParralax";
import Skills from "@/components/skills";
import HorinzotalScroller from "@/components/horinzotalScroller";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]]">
      
      <Navbar/>
      <Hero/>
      <ZoomParralax/>
      <Skills/>
      <HorinzotalScroller/>
      <Footer/>
    
      
    </div>
  );
}
