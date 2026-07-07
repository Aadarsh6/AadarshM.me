import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../Data/Project";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActive(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [project]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] overflow-hidden bg-bg-light dark:bg-bg-dark"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 rounded-full border border-black/10 p-3 transition-colors hover:border-secondary hover:text-secondary dark:border-white/15"
        >
          <X size={20} />
        </button>

        <div
          ref={scrollRef}
          className="no-scrollbar mx-auto flex h-full max-w-6xl flex-col gap-10 overflow-y-auto px-6 py-20 lg:flex-row lg:px-16"
        >
          <div className="lg:w-1/2">
            {/* Eyebrow tying the modal into the same "spec sheet" language
                as the rest of the site instead of jumping straight to title */}
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-secondary">
              Case study
            </p>

            <h2 className="mb-2 font-display text-3xl font-bold text-text-light md:text-5xl dark:text-text-dark">
              {project.title}
            </h2>

            <div className="mb-16 mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 px-3 py-1 text-xs text-text-light/70 dark:border-white/15 dark:text-text-dark/70"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.sections.map((section, i) => (
              <div
                key={section.label}
                ref={(el) => {
                  sectionRefs.current[i] = el;
                }}
                className="mb-24 min-h-[40vh] last:mb-10"
              >
                <motion.p
                  animate={{ opacity: active === i ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary"
                >
                  <span className="font-mono text-xs text-secondary/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.label}
                </motion.p>
                <motion.p
                  animate={{ opacity: active === i ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg leading-relaxed text-text-light/70 dark:text-text-dark/70"
                >
                  {section.content}
                </motion.p>
              </div>
            ))}

            <div className="mt-10 flex gap-6">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                >
                  View live →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-text-light/70 transition-colors hover:text-secondary dark:text-text-dark/70"
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>

          <div className="h-72 overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] lg:sticky lg:top-20 lg:h-[28rem] lg:w-1/2 dark:border-white/10 dark:bg-white/[0.03]">
            <motion.img
              key={active}
              src={project.sections[active].image}
              alt={project.sections[active].label}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>                                              
    </AnimatePresence>
  );
}

export default ProjectDetail;