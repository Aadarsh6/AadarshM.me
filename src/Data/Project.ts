export interface ProjectSection {
  label: string;
  content: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  // blurb: string;
  description?: string; // longer write-up shown inside the dropdown
  tech: string[];
  coverImage: string;
  link?: string;
  github?: string;
  // sections?: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "X-craft",
    description:
      "An AI-powered content creation platform that generates high-quality X (Twitter) posts and threads from simple prompts. Built with prompt engineering and modern web technologies, it helps creators, founders, and developers turn ideas into engaging content in seconds while maintaining clarity, authenticity, and platform-specific writing styles.",
    tech: ["React", "Node.js", "PostgreSQL", "Prompt Engineering", "API", "..."],
    coverImage: "/projects/project1-1.png",
    link: "https://xcraft.aadarshm.me/",
    github: "https://github.com/Aadarsh6/X-PostGenerator",
  },
  // ...rest of your projects, same shape

  {
    id: "project-2",
    title: "FocusZen",
     description:
      "FocusZen is a productivity platform designed to help users build deep focus sessions by eliminating digital distractions. It combines a modern web application with a Chrome extension to block distracting websites, manage focus sessions, and create an environment where meaningful work becomes easier.",
    tech: ["React", "Tailwind", "Chrome extension", "persistent connection", "..."],
    coverImage: "/projects/project2-2.png",
    link: "https://focuszen.aadarshm.me/",
    github: "https://github.com/Aadarsh6/FocusZen-WEB",
    
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