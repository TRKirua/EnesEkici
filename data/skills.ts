import { Brain, Cloud, Code, Languages } from "lucide-react"
import type { SkillCategory } from "./types"

// Same categories and order as the resume
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL", "Dart", "Bash", "RPG III", "ILE RPG IV", "CL/CLLE"],
  },
  {
    title: "Data & AI",
    icon: Brain,
    skills: ["Apache Spark", "Apache Iceberg", "ETL", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Jupyter"],
  },
  {
    title: "Cloud & Databases",
    icon: Cloud,
    skills: ["AWS", "Docker", "PostgreSQL", "MongoDB", "Neo4j", "IBM DB2", "Supabase", "GitHub Actions CI/CD"],
  },
  {
    title: "Methodologies & Languages",
    icon: Languages,
    skills: [
      "Agile / Scrum",
      "Project Management",
      "English (C1)",
      "German (Advanced)",
      "French & Turkish (Native)",
    ],
  },
]
