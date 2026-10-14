import { Code } from "lucide-react"
import { SKILL_CATEGORIES } from "@/data/skills"
import SectionHeader from "@/components/ui/SectionHeader"

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          id="skills"
          icon={Code}
          title="Technical Skills"
          description="Technologies, tools, and languages I work with to bring ideas to life"
        />

        <div className="skills-grid">
          {SKILL_CATEGORIES.map(({ title, icon: Icon, skills }) => (
            <article key={title} className="skill-card card">
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="skill-name">{title}</h3>
              </div>
              <ul className="skill-list">
                {skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
