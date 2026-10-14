import type { LucideIcon } from "lucide-react"

export interface TimelineEntry {
  title: string
  organization: string
  /** Omitted when the organization has no public website */
  url?: string
  period: string
  location: string
  bullets?: string[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  /** Projects without a repository URL are private */
  githubUrl?: string
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
}

export interface Social {
  label: string
  href: string
  /** Text displayed in the contact section */
  value: string
  icon: LucideIcon
  external: boolean
}
