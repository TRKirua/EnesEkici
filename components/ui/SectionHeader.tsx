import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  /** Section id; the title gets the id `${id}-title` for aria-labelledby */
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export default function SectionHeader({ id, icon: Icon, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-title-wrapper">
        <Icon className="section-icon" size={60} aria-hidden="true" />
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
      </div>
      <p className="section-description">{description}</p>
    </div>
  )
}
