import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../Data/Project";
import ProjectDetail from "../components/ProjectDetails";
import type { Project } from "../Data/Project";
import Container from "../components/Ui/Container";
import SectionHeading from "../components/Ui/SectionHeader";

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 26, stiffness: 300, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 26, stiffness: 300, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const hoveredProject = hovered !== null ? projects[hovered] : null;

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <Container>
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Portfolio" title="Selected work" />
          <p className="text-sm tracking-wide text-text-light/40 dark:text-text-dark/40">
            {String(projects.length).padStart(2, "0")} projects
          </p>
        </div>

        <div
          ref={listRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHovered(null)}
          className="relative border-t border-black/10 dark:border-white/10"
        >
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              type="button"
              onMouseEnter={() => setHovered(i)}
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative flex w-full items-center justify-between gap-4 border-b border-black/10 py-8 text-left last:border-0 dark:border-white/10 md:py-10"
            >
              <div className="flex items-center gap-5 md:gap-8">
                <span className="font-mono text-sm text-text-light/30 dark:text-text-dark/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 md:text-4xl ${
                      hovered === i
                        ? "text-secondary"
                        : "text-text-light dark:text-text-dark"
                    }`}
                  >
                    {project.title}
                  </h3>
                  {/* Tech shown inline on mobile — no room for a separate
                      column at narrow widths */}
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-text-light/35 dark:text-text-dark/35 md:hidden">
                    {project.tech.slice(0, 3).join(" · ")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="hidden items-center gap-4 md:flex">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs uppercase tracking-wide text-text-light/40 dark:text-text-dark/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Static thumbnail for touch devices — there's no cursor
                    to drive the floating preview there */}
                <img
                  src={project.coverImage}
                  alt=""
                  className="h-12 w-16 shrink-0 rounded-md object-cover md:hidden"
                />

                <ArrowUpRight
                  size={22}
                  className={`hidden shrink-0 transition-all duration-300 md:block ${
                    hovered === i
                      ? "-translate-y-1 translate-x-1 text-secondary"
                      : "text-text-light/30 dark:text-text-dark/30"
                  }`}
                />
              </div>
            </motion.button>
          ))}

          {/* Cursor-following image preview — desktop only, skipped
              entirely under reduced motion since it's pure embellishment */}
          {!prefersReducedMotion && (
            <AnimatePresence>
              {hoveredProject && (
                <motion.div
                  style={{ x: springX, y: springY }}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute left-0 top-0 z-20 hidden h-64 w-80 -ml-40 -mt-72 overflow-hidden rounded-2xl border border-black/10 shadow-2xl md:block dark:border-white/10"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={hoveredProject.id}
                      src={hoveredProject.coverImage}
                      alt={hoveredProject.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-full w-full object-cover"
                    />
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </Container>

      <AnimatePresence>
        {selected && (
          <ProjectDetail project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;