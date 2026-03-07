import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Submission from "@/components/Submission";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <About />
      <Submission />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
