import { Clock, Download, MessageCircle } from "lucide-react"
import { RESUME_URL } from "@/data/site"
import { SOCIALS } from "@/data/socials"
import SectionHeader from "@/components/ui/SectionHeader"

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          id="contact"
          icon={MessageCircle}
          title="Get In Touch"
          description="Looking for a Computer Engineer? Let's connect and discuss opportunities"
        />

        <div className="contact-wrapper">
          <div className="contact-intro-card card">
            <h3 className="contact-intro-title">Let&apos;s start a conversation</h3>
            <p className="contact-intro-text">
              I am open to new opportunities in computer engineering, across various domains within the field. I bring
              strong analytical skills, adaptability, and a solid foundation in engineering practices to contribute
              effectively to challenging projects.
            </p>
            <div className="contact-meta">
              <div className="response-time-inline">
                <Clock size={20} aria-hidden="true" />
                <span>Response: {"< 24h"}</span>
              </div>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="resume-link-inline">
                <Download size={20} aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="contact-grid">
            {SOCIALS.map(({ label, href, value, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                className="contact-card card"
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <Icon size={32} aria-hidden="true" />
                <span className="contact-card-info">
                  <span className="contact-card-label">{label}</span>
                  <span className="contact-card-value">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
