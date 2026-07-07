export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "zustand",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST API",
      "JWT",
      "Prisma",
      "WebSocket",
      "WebRTC",
      "GraphQL",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    category: "AI & Emerging Tech",
    items: [
      "Prompt Engineering",
      "LLM Integration",
      "Machine Learning",
      "Chrome Extension",
      "web3"
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Render",
      "Postman",
      "Figma",
      "VS Code",
    ],
  },
];