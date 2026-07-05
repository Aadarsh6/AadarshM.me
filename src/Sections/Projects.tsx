import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../Data/Project";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetails";
import type { Project } from "../Data/Project";

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="mb-3 text-sm uppercase tracking-wide text-accent">Portfolio</p>
        <h2 className="font-display text-3xl font-bold md:text-5xl">Selected work</h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <ProjectCard
              project={project}
              onClick={() => setSelected(project)}
              featured={i === 0}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

export default Projects;