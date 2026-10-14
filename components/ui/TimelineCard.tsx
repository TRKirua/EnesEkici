import { ExternalLink, type LucideIcon } from "lucide-react"
import type { TimelineEntry } from "@/data/types"

interface TimelineCardProps {
  entry: TimelineEntry
  icon: LucideIcon
}

export default function TimelineCard({ entry, icon: Icon }: TimelineCardProps) {
  const { title, organization, url, period, location, bullets } = entry

  return (
    <article className="entry-card card">
      <div className={`entry-header ${bullets ? "entry-header-divided" : ""}`}>
        <div className="entry-main">
          <div className="entry-title-wrapper">
            <div className="entry-dot" aria-hidden="true"></div>
            <h3 className="entry-title">{title}</h3>
          </div>
          <div className="entry-org-wrapper">
            <Icon size={18} className="entry-icon" aria-hidden="true" />
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="entry-org-link">
                <span className="entry-org">{organization}</span>
                <ExternalLink size={16} className="entry-external-icon" aria-hidden="true" />
              </a>
            ) : (
              <span className="entry-org">{organization}</span>
            )}
            <span className="entry-separator" aria-hidden="true">
              -
            </span>
            <span className="entry-location">{location}</span>
          </div>
        </div>
        <div className="entry-period">{period}</div>
      </div>
      {bullets && (
        <ul className="entry-bullets">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
