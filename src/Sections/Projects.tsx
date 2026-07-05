import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../Data/Project";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetails";
import type { Project } from "../Data/Project";
import Container from "../components/Ui/Container";
import SectionHeading from "../components/Ui/SectionHeader";

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
      <SectionHeading eyebrow="Portfolio" title="Selected work" className="mb-14" />

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
      </Container>
    </section>
  );
}

export default Projects;