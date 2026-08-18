import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
    </main>
  );
}
