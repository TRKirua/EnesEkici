import type { Project } from "./types"

export const PROJECTS: Project[] = [
  {
    title: "Mini Lakehouse Data Pipeline",
    description:
      "Designed a lakehouse data pipeline with CSV ingestion to AWS S3. Implemented a Bronze/Silver/Gold architecture using Apache Spark and Iceberg tables. Integrated versioned data catalog with Nessie to manage table history and snapshots. Structured the project with Python scripts, analytical notebooks, and GitHub Actions CI.",
    tags: ["Spark", "Iceberg", "Nessie", "AWS", "Python", "ETL"],
  },
  {
    title: "Customer Review Analysis with PySpark (NLP)",
    description:
      "Built a data processing pipeline with Apache Spark to analyze a 2M-row Amazon reviews dataset. Implemented NLP preprocessing (cleaning, tokenization, stopword removal), word frequency and bigram analysis, and sentiment segmentation to identify product trends.",
    tags: ["PySpark", "NLP", "Apache Spark", "Python", "Data Analysis"],
  },
  {
    title: "AI Solutions for Consulting & RFP/RFI Automation",
    description:
      "Conducted a market analysis of consulting firms in France, Switzerland, and the EU. Explored the automation of RFP/RFI responses using AI and evaluated custom LLM solutions to optimize proposal generation workflows.",
    tags: ["LLM", "Market Analysis", "Consulting", "AI"],
  },
  {
    title: "42sh",
    description:
      "Implemented a Unix shell inspired by Bash in C, including command parsing, execution with fork/exec, pipe and redirection management, builtin commands, and environment variable handling.",
    tags: ["C", "Shell", "Unix", "POSIX"],
    githubUrl: "https://github.com/TRKirua/42sh",
  },
  {
    title: "Java IDE",
    description:
      "Developed a full-featured Java IDE with a code editor, compilation console, project management system, contextual autocomplete, Git/Maven integration, and customizable themes.",
    tags: ["Java", "IDE", "Git", "Maven", "GUI"],
    githubUrl: "https://github.com/TRKirua/ICBZ-IDE",
  },
  {
    title: "Collaborative ToDo Application",
    description:
      "Full-stack application built with React, TypeScript, and Supabase featuring OAuth authentication, secure data management with Row Level Security (RLS), and CRUD APIs for collaborative task management.",
    tags: ["TypeScript", "React", "Supabase", "Authentication", "PostgreSQL"],
    githubUrl: "https://github.com/TRKirua/Collaborative-ToDo-App",
  },
  {
    title: "Melocas' Ire",
    description:
      "Development of a 2D platformer game with 5 levels using Unity. Responsibilities included level design, assets creation, and player mechanics.",
    tags: ["Unity", "C#", "2D Platformer", "Game Development"],
    githubUrl: "https://github.com/TRKirua/Melocas-Ire",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive, SEO-optimized personal website with Next.js, React and TypeScript. Configured GitHub Actions for automated build and continuous deployment to GitHub Pages.",
    tags: ["TypeScript", "React", "Next.js", "GitHub Actions", "CI/CD"],
    githubUrl: "https://github.com/TRKirua/EnesEkici",
  },
]
