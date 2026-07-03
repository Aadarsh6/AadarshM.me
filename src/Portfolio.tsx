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

function Portfolio() {
  return (
    <>
      <NavBar />
      <main>
        {/* sections go here next */}
      </main>
    </>
  );
}

export default Portfolio;