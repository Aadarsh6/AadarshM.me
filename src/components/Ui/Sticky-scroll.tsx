import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "../../lib/utils";
import type { Project } from "../../Data/Project";

interface StickyScrollProps {
  projects: Project[];
}

export default function StickyScroll({ projects }: StickyScrollProps) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = projects.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = projects.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      ref={ref}
      className="no-scrollbar relative flex h-[32rem] justify-between space-x-10 overflow-y-auto rounded-2xl"
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {projects.map((project, index) => (
            <div key={project.id} className="my-24 first:mt-0 last:mb-24">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-sm font-medium text-accent mb-2"
              >
                Project {index + 1} of {cardLength}
              </motion.p>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="font-display text-2xl md:text-3xl font-bold"
              >
                {project.title}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-6 space-y-4 text-black/70 dark:text-white/70"
              >
                <div>
                  <p className="text-xs uppercase tracking-wide text-black/40 dark:text-white/40 mb-1">
                    Problem
                  </p>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-black/40 dark:text-white/40 mb-1">
                    Approach
                  </p>
                  <p>{project.approach}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-black/40 dark:text-white/40 mb-1">
                    Result
                  </p>
                  <p>{project.result}</p>
                </div>
              </motion.div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs border border-black/10 dark:border-white/15"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    View live →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "sticky top-10 hidden h-72 w-96 overflow-hidden rounded-xl lg:block",
          "bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10"
        )}
      >
        <motion.img
          key={activeCard}
          src={projects[activeCard].image}
          alt={projects[activeCard].title}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}