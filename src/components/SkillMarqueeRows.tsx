import { useMemo } from "react";
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

interface SkillMarqueeRowsProps {
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

// Splits a flat list into `count` roughly-equal chunks, preserving order,
// and drops any empty chunk (e.g. if you only have 2 skills total).
function chunk<T>(arr: T[], count: number): T[][] {
  const size = Math.ceil(arr.length / count);
  return Array.from({ length: count }, (_, i) =>
    arr.slice(i * size, i * size + size)
  ).filter((c) => c.length > 0);
}

// Alternating direction + slightly different speeds per row so the three
// lines feel independent rather than a single pattern repeated 3 times.
const ROW_CONFIG = [
  { direction: "left" as const, duration: 38 },
  { direction: "right" as const, duration: 46 },
  { direction: "left" as const, duration: 42 },
];

function SkillMarqueeRows({ groups }: SkillMarqueeRowsProps) {
  const flat = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  const rows = useMemo(() => chunk(flat, 3), [flat]);

  return (
    <div className="space-y-3">
      {/* Keyframes scoped to this component since they're only used here */}
      <style>{`
        @keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>

      {rows.map((row, i) => {
        const config = ROW_CONFIG[i % ROW_CONFIG.length];
        const duplicated = [...row, ...row]; // x2 is enough since we loop at exactly -50%

        return (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl border border-black/10 bg-black/[0.015] py-4 dark:border-white/10 dark:bg-white/[0.02]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div
              className="flex w-max gap-3 hover:[animation-play-state:paused]"
              style={{
                animationName: config.direction === "left" ? "marquee-left" : "marquee-right",
                animationDuration: `${config.duration}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
              }}
            >
              {duplicated.map((item, j) => {
                const Icon = getIcon(item);
                return (
                  <span
                    key={`${item}-${j}`}
                    className="flex shrink-0 items-center gap-2 rounded-full border border-secondary/20 bg-bg-light px-4 py-2 text-sm font-medium text-text-light/80 shadow-[0_8px_24px_-18px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary dark:bg-white/5 dark:text-text-dark/85"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillMarqueeRows;