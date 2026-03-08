import About from "@/components/About";
import Contact from "@/components/Contact";
import EditorialBoard from "@/components/EditorialBoard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Partners from "@/components/Partners";
import Research from "@/components/Research";
import Team from "@/components/Team";

const pageSections = [
  Hero,
  About,
  Research,
  Team,
  EditorialBoard,
  Partners,
  Contact,
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <ParticlesBackground />
      <div className="relative">
        <Navbar />
        <main>
          {pageSections.map((SectionComponent) => (
            <SectionComponent key={SectionComponent.name} />
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}
