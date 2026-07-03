import { motion } from "framer-motion";
import { projects } from "../Data/Project";
import StickyScroll from "../components/Ui/Sticky-scroll";

function Projects() {
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

      <StickyScroll projects={projects} />
    </section>
  );
}

export default Projects;