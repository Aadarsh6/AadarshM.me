import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../Data/Project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  featured?: boolean;
}

function ProjectCard({ project, onClick, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group cursor-pointer overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.18)] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_2px_20px_-4px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.6)] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "h-80" : "h-56"}`}>
        <motion.img
          layoutId={`image-${project.id}`}
          src={project.coverImage}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 dark:bg-black/70">
          <ArrowUpRight size={18} className="text-accent" />
        </div>
      </div>

      <div className="p-6">
        <h3 className={`font-display font-bold ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="mt-2 leading-relaxed text-black/60 dark:text-white/60 text-sm">
          {project.blurb}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-xs text-black/70 dark:text-white/70"
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