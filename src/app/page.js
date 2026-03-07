import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import ParticlesBackground from "@/components/ParticlesBackground";
import Research from "@/components/Research";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <ParticlesBackground />
      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Research />
        <Team />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
