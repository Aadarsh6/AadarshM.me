import { motion } from "framer-motion";
import type { Project } from "../Data/Project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03]"
    >
      <div className="h-56 overflow-hidden">
        <motion.img
          layoutId={`image-${project.id}`}
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-black/60 dark:text-white/60 text-sm">
          {project.blurb}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs border border-black/10 dark:border-white/15"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;