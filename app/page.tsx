import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-black">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
