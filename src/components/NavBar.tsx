import { useState, useEffect, useRef } from "react";
import { useTheme } from "../Context/ThemeContext";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const diff = currentScrollY - lastScrollY.current;

    if (currentScrollY < 50) {
      setVisible(true);
    } else if (diff > 5) {
      // scrolling down
      setVisible(false);
    } else if (diff < -5) {
      // scrolling up
      setVisible(true);
    }

    lastScrollY.current = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300",
        "bg-white/70 dark:bg-black/50 backdrop-blur-md border-b border-black/5 dark:border-white/10",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display font-bold text-lg">
          YourName
        </a>

        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/20 text-sm"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;