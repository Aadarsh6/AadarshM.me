export interface Project {
  id: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project One Title",
    problem: "One or two sentences on the problem you were solving.",
    approach: "Two to three sentences on what you built and how.",
    result: "The outcome, metric, or what you learned.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/src/assets/project1.png",
    link: "https://your-live-link.com",
    github: "https://github.com/you/project1",
  },
  {
    id: "project-2",
    title: "Project Two Title",
    problem: "...",
    approach: "...",
    result: "...",
    tech: ["Next.js", "Tailwind"],
    image: "/src/assets/project2.png",
    link: "https://your-live-link.com",
    github: "https://github.com/you/project1",

  },
  // add 2-4 total, per our earlier plan — don't overload it
];