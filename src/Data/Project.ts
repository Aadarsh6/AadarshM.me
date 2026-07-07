export interface ProjectSection {
  label: string;
  content: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  blurb: string;
  description?: string; // longer write-up shown inside the dropdown
  tech: string[];
  coverImage: string;
  link?: string;
  github?: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "X-craft",
    blurb: "Generate viral X/Twitter post",
    description:
      "A tool that helps you draft high-engagement X/Twitter posts using prompt-engineered generation, tuned around what actually performs well on the platform.",
    tech: ["React", "Node.js", "PostgreSQL", "Prompt Engineering", "API", "..."],
    coverImage: "/projects/project1-1.png",
    link: "https://xcraft.aadarshm.me/",
    github: "https://github.com/Aadarsh6/X-PostGenerator",
    sections: [
      { label: "Overview", content: "What this project is, in 2 sentences.", image: "/projects/project1-1.png" },
      { label: "Problem", content: "The problem you were solving.", image: "/projects/project1-2.png" },
      { label: "Approach", content: "What you built and how.", image: "/projects/project1-3.png" },
      { label: "Result", content: "Outcome, metric, or what you learned.", image: "/projects/project1-4.png" },
    ],
  },
  // ...rest of your projects, same shape

  {
    id: "project-2",
    title: "FocusZen",
    blurb: "Block web distraction, Clam you time.",
     description:
      "A tool that helps you draft high-engagement X/Twitter posts using prompt-engineered generation, tuned around what actually performs well on the platform.",
    tech: ["React", "Tailwind", "Chrome extension", "persistent connection", "..."],
    coverImage: "/projects/project2-2.png",
        link: "https://xcraft.aadarshm.me/",
    sections: [
      { label: "Overview", content: "What this project is, in 2 sentences.", image: "/src/assets/project2-1.png" },
      { label: "Problem", content: "The problem you were solving.", image: "/src/assets/project2-2.png" },
      { label: "Approach", content: "What you built and how.", image: "/src/assets/project2-3.png" },
      { label: "Result", content: "Outcome, metric, or what you learned.", image: "/src/assets/project2-4.png" },
    ],
  },
//   {
//     id: "project-3",
//     title: "Project Three Title",
//     blurb: "One punchy line describing what this project is.",
//     description:
//       "A tool that helps you draft high-engagement X/Twitter posts using prompt-engineered generation, tuned around what actually performs  well on the platform.",
//     tech: ["TypeScript", "Express", "Redis"],
//     coverImage: "/src/assets/project3-cover.png",
//     sections: [
//       { label: "Overview", content: "What this project is, in 2 sentences.", image: "/src/assets/project3-1.png" },
//       { label: "Problem", content: "The problem you were solving.", image: "/src/assets/project3-2.png" },
//       { label: "Approach", content: "What you built and how.", image: "/src/assets/project3-3.png" },
//       { label: "Result", content: "Outcome, metric, or what you learned.", image: "/src/assets/project3-4.png" },
//     ],
//   },
];