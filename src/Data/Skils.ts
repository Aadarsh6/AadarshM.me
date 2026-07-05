export interface Skill {
category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Building interfaces",
    items: ["React", "Next js", "Javascript", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & data",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "WebRTC", "GraphQL"],
  },
  {
    category: "Tools I reach for",
    items: ["Git", "Figma", "Docker", "Vercel", "Postman"],
  },
];