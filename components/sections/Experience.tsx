import { Briefcase, Building } from "lucide-react"
import { EXPERIENCES } from "@/data/experience"
import SectionHeader from "@/components/ui/SectionHeader"
import TimelineCard from "@/components/ui/TimelineCard"

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          id="experience"
          icon={Briefcase}
          title="Experience"
          description="My professional journey and contributions to various organizations"
        />
        <div className="entry-list">
          {EXPERIENCES.map((entry) => (
            <TimelineCard key={`${entry.organization}-${entry.period}`} entry={entry} icon={Building} />
          ))}
        </div>
      </div>
    </section>
  )
}
