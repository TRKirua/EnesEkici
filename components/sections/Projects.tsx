import { FolderOpen, Github, Lock } from "lucide-react"
import { PROJECTS } from "@/data/projects"
import SectionHeader from "@/components/ui/SectionHeader"

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          id="projects"
          icon={FolderOpen}
          title="Projects"
          description="A showcase of my technical projects and achievements"
        />

        <div className="projects-grid">
          {PROJECTS.map(({ title, description, tags, githubUrl }) => (
            <article key={title} className="project-card card">
              <div className="project-content">
                <div className="project-main">
                  <h3 className="project-title">{title}</h3>
                  <p className="project-description">{description}</p>
                  <ul className="project-tags" aria-label="Technologies">
                    {tags.map((tag) => (
                      <li key={tag} className="project-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {githubUrl ? (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    aria-label={`See ${title} on GitHub`}
                  >
                    <Github size={16} aria-hidden="true" />
                    See on GitHub
                  </a>
                ) : (
                  <button type="button" disabled className="btn btn-disabled">
                    <Lock size={16} aria-hidden="true" />
                    Private
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
