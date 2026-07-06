import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// UX Helper: Close menu when clicking outside of it
function useClickOutside(ref: React.RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  useClickOutside(navRef, () => setMenuOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      // Add a slight delay to the blur effect for a smoother transition
      setScrolled(currentScrollY > 20);

      if (currentScrollY < 50) {
        setVisible(true);
      } else if (diff > 10) {
        setVisible(false);
        setMenuOpen(false); // Auto-close mobile menu on scroll down
      } else if (diff < -10) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Prevent layout shift by adding padding-right to body when overflow is hidden
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-500 sm:pt-6",
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
    >
      <nav
        ref={navRef}
        className={cn(
          "w-full max-w-3xl rounded-full transition-all duration-500",
          scrolled
            ? "bg-white/70 border border-white/40 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:bg-bg-dark/70 dark:border-white/10 dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="relative flex items-center justify-between px-4 py-3 sm:px-6">
          
          {/* Logo Group */}
          <a 
            href="#hero" 
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-full"
            aria-label="Home"
          >
            <motion.span 
              whileHover={{ scale: 1.05, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/15 font-display text-sm font-bold text-secondary shadow-inner dark:bg-secondary/20"
            >
              A
            </motion.span>
            <span className="hidden font-display text-lg font-semibold tracking-tight text-text-light transition-colors group-hover:text-secondary dark:text-text-dark sm:inline">
              Aadarsh
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                    isActive
                      ? "text-secondary"
                      : "text-text-light/70 hover:text-text-light hover:bg-black/5 dark:text-text-dark/70 dark:hover:text-text-dark dark:hover:bg-white/5"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-secondary/15 shadow-sm dark:bg-secondary/20"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-black/10 text-text-light transition-all hover:bg-black/5 hover:border-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:border-white/10 dark:text-text-dark dark:hover:bg-white/10 dark:hover:border-white/20"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {theme === "dark" ? <Sun size={18} strokeWidth={2.2} /> : <Moon size={18} strokeWidth={2.2} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-text-light transition-all hover:bg-black/5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:border-white/10 dark:text-text-dark dark:hover:bg-white/10 md:hidden"
            >
              <motion.div
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {menuOpen ? <X size={18} strokeWidth={2.2} /> : <Menu size={18} strokeWidth={2.2} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
              exit={{ opacity: 0, height: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.1 }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-1 px-4 pb-4 pt-2">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeHref === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: i * 0.06, 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 24 
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center rounded-2xl px-4 py-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                        isActive
                          ? "bg-secondary/15 text-secondary dark:bg-secondary/20"
                          : "text-text-light/80 hover:bg-black/5 hover:text-text-light dark:text-text-dark/80 dark:hover:bg-white/5 dark:hover:text-text-dark"
                      )}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default NavBar;