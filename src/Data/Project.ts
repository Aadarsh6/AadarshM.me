export interface ProjectSection {
  label: string;
  content: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  blurb: string; // short one-liner for the card
  tech: string[];
  coverImage: string; // shown on the grid card
  link?: string;
  github?: string;
  sections: ProjectSection[]; // Overview, Problem, Approach, Result
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
  // repeat for other projects — reuse the same image across sections if you don't have 4 unique shots yet
];