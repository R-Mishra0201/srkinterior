import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="bg-black text-black">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials /> 
      <Contact />
    </main>
  );
}
