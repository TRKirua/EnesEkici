import { GraduationCap, School } from "lucide-react"
import { EDUCATION } from "@/data/education"
import SectionHeader from "@/components/ui/SectionHeader"
import TimelineCard from "@/components/ui/TimelineCard"

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader
          id="education"
          icon={GraduationCap}
          title="Education"
          description="My academic journey and achievements"
        />
        <div className="entry-list">
          {EDUCATION.map((entry) => (
            <TimelineCard key={`${entry.title}-${entry.period}`} entry={entry} icon={School} />
          ))}
        </div>
      </div>
    </section>
  )
}
