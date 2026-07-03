import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../Data/Project";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = project.sections.map((_, i) => i / project.sections.length);
    const closest = breakpoints.reduce((acc, bp, i) => {
      return Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc;
    }, 0);
    setActive(closest);
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-white dark:bg-[#0a0a0a] overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 rounded-full border border-black/10 dark:border-white/15 hover:border-accent hover:text-accent transition-colors"
        >
          <X size={20} />
        </button>

        <div
          ref={ref}
          className="no-scrollbar h-full overflow-y-auto flex flex-col lg:flex-row gap-10 px-6 lg:px-16 py-20 max-w-6xl mx-auto"
        >
          <div className="lg:w-1/2">
            <motion.h2
              layoutId={`title-${project.id}`}
              className="font-display text-3xl md:text-5xl font-bold mb-2"
            >
              {project.title}
            </motion.h2>

            <div className="flex flex-wrap gap-2 mt-4 mb-16">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs border border-black/10 dark:border-white/15">
                  {t}
                </span>
              ))}
            </div>

            {project.sections.map((section, i) => (
              <div key={section.label} className="mb-24 last:mb-10">
                <motion.p
                  animate={{ opacity: active === i ? 1 : 0.3 }}
                  className="text-sm font-medium text-accent mb-2"
                >
                  {section.label}
                </motion.p>
                <motion.p
                  animate={{ opacity: active === i ? 1 : 0.3 }}
                  className="text-lg text-black/70 dark:text-white/70 leading-relaxed"
                >
                  {section.content}
                </motion.p>
              </div>
            ))}

            <div className="flex gap-4 mt-10">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:underline">
                  View live →
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">
                  GitHub →
                </a>
              )}
            </div>
          </div>

          <div className="lg:w-1/2 lg:sticky lg:top-20 h-72 lg:h-[28rem] rounded-2xl overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
            <motion.img
              key={active}
              src={project.sections[active].image}
              alt={project.sections[active].label}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectDetail;