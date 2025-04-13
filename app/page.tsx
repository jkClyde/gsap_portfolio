import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import { ParticleCanvas } from "@/hooks/particle";
import ZoomParralax from "@/components/ZoomParralax";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]]">
      
      <Navbar/>
      <Hero/>
      
      <ZoomParralax/>
      <Main/>
      <Footer/>
      
    </div>
  );
}
