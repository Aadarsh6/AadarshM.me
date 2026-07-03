// import { useTheme } from "./Context/ThemeContext";

// function Portfolio() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <button
//         onClick={toggleTheme}
//         className="px-4 py-2 rounded-lg border border-accent text-accent"
//       >
//         Current: {theme} — Toggle
//       </button>
//     </div>  
//   );
// }

// export default Portfolio;

import NavBar from "./components/NavBar";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

function Portfolio() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About/>
        <Skills />
        <Projects/>
      </main>
    </>
  );
}

export default Portfolio;