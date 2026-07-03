import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../Data/Project";
import ProjectCard from "../components/ProjectCard";
// import ProjectDetail from "../components/ProjectDetail";
import type { Project } from "../Data/Project";
import ProjectDetail from "../components/ProjectDetails";

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl md:text-4xl font-bold mb-12"
      >
        Selected work
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectDetail project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;