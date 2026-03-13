import About from "@/components/About";
import Advisors from "@/components/Advisors";
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
  Advisors,
  Partners,
  Contact,
];

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden font-sans">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/7 blur-3xl dark:bg-primary/12" />
        <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-secondary/8 blur-3xl dark:bg-secondary/10" />
        <div className="absolute inset-x-0 top-[42vh] h-px bg-linear-to-r from-transparent via-primary/8 to-transparent dark:via-white/10" />
      </div>
      <div className="relative flex min-h-dvh flex-col">
        <Navbar />
        <main className="flex-1">
          {pageSections.map((SectionComponent) => (
            <SectionComponent key={SectionComponent.name} />
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}
