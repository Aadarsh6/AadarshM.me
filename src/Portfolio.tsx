import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contsct";
import CustomCursor from "./components/Ui/CustomCursor";

function Portfolio() {
  return (
    <>
      <NavBar />
      <main>
        <CustomCursor/>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;