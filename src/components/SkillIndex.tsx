import { useState, useMemo, createElement } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiRedux,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiVite,
  SiHtml5,
  SiCss,
  SiSass,
  SiExpress,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface SkillGroup {
  category: string;
  items: string[];
}

interface SkillIndexProps {
  groups: SkillGroup[];
}

const ICON_MAP: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwindcss: SiTailwindcss,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  redux: SiRedux,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  docker: SiDocker,
  vite: SiVite,
  html5: SiHtml5,
  css3: SiCss,
  sass: SiSass,
  express: SiExpress,
  firebase: SiFirebase,
  vercel: SiVercel,
};

function normalize(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getIcon(label: string): IconType | null {
  return ICON_MAP[normalize(label)] ?? null;
}

function SkillIndex({ groups }: SkillIndexProps) {
  const flat = useMemo(
    () =>
      groups.flatMap((g) =>
        g.items.map((item) => ({ name: item, category: g.category }))
      ),
    [groups]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const active = flat[Math.min(activeIndex, flat.length - 1)] ?? flat[0];
  const ActiveIcon = active ? getIcon(active.name) : null;

  return (
    <div>
      <div
        className="flex flex-col"
        onMouseLeave={() => {
          /* keep last hovered item active on mouse leave */
        }}
      >
        {flat.map((skill, i) => {
          const isActive = skill.name === active?.name;
          const Icon = getIcon(skill.name);

          return (
            <button
              key={`${skill.category}-${skill.name}`}
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
              className="group relative flex w-full items-center justify-between border-b border-black/10 py-4 text-left last:border-0 dark:border-white/10"
            >
              {isActive && (
                <motion.div
                  layoutId="skill-row-highlight"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  className="absolute inset-0 -mx-4 rounded-xl bg-secondary/[0.06]"
                />
              )}

              <span className="relative flex items-center gap-4">
                <span className="w-6 shrink-0 font-mono text-xs text-text-light/30 dark:text-text-dark/30">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {Icon ? (
                  createElement(Icon, {
                    className: `h-4 w-4 shrink-0 transition-colors duration-200 ${
                      isActive
                        ? "text-secondary"
                        : "text-text-light/30 dark:text-text-dark/30"
                    }`,
                  })
                ) : (
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold transition-colors duration-200 ${
                      isActive
                        ? "bg-secondary/15 text-secondary"
                        : "bg-black/5 text-text-light/40 dark:bg-white/5 dark:text-text-dark/40"
                    }`}
                  >
                    {skill.name.charAt(0)}
                  </span>
                )}

                <span
                  className={`font-display text-lg transition-colors duration-200 md:text-xl ${
                    isActive
                      ? "text-secondary"
                      : "text-text-light/70 dark:text-text-dark/70"
                  }`}
                >
                  {skill.name}
                </span>
              </span>

              <span className="relative hidden font-mono text-xs uppercase tracking-wide text-text-light/30 dark:text-text-dark/30 md:block">
                {skill.category}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SkillIndex;