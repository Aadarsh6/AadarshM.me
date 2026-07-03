export interface Skill {
category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Building interfaces",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & data",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools I reach for",
    items: ["Git", "Figma", "Vite", "Vercel"],
  },
];