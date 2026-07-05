export interface ProjectSection {
  label: string;
  content: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  blurb: string;
  tech: string[];
  coverImage: string;
  link?: string;
  github?: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project One Title",
    blurb: "One punchy line describing what this project is.",
    tech: ["React", "Node.js", "PostgreSQL"],
    coverImage: "/src/assets/project1-cover.png",
    link: "https://your-live-link.com",
    github: "https://github.com/you/project1",
    sections: [
      { label: "Overview", content: "What this project is, in 2 sentences.", image: "/src/assets/project1-1.png" },
      { label: "Problem", content: "The problem you were solving.", image: "/src/assets/project1-2.png" },
      { label: "Approach", content: "What you built and how.", image: "/src/assets/project1-3.png" },
      { label: "Result", content: "Outcome, metric, or what you learned.", image: "/src/assets/project1-4.png" },
    ],
  },
  {
    id: "project-2",
    title: "Project Two Title",
    blurb: "One punchy line describing what this project is.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    coverImage: "/src/assets/project2-cover.png",
    sections: [
      { label: "Overview", content: "What this project is, in 2 sentences.", image: "/src/assets/project2-1.png" },
      { label: "Problem", content: "The problem you were solving.", image: "/src/assets/project2-2.png" },
      { label: "Approach", content: "What you built and how.", image: "/src/assets/project2-3.png" },
      { label: "Result", content: "Outcome, metric, or what you learned.", image: "/src/assets/project2-4.png" },
    ],
  },
  {
    id: "project-3",
    title: "Project Three Title",
    blurb: "One punchy line describing what this project is.",
    tech: ["TypeScript", "Express", "Redis"],
    coverImage: "/src/assets/project3-cover.png",
    sections: [
      { label: "Overview", content: "What this project is, in 2 sentences.", image: "/src/assets/project3-1.png" },
      { label: "Problem", content: "The problem you were solving.", image: "/src/assets/project3-2.png" },
      { label: "Approach", content: "What you built and how.", image: "/src/assets/project3-3.png" },
      { label: "Result", content: "Outcome, metric, or what you learned.", image: "/src/assets/project3-4.png" },
    ],
  },
];