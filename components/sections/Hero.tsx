import { ArrowDown } from "lucide-react"
import { SOCIALS } from "@/data/socials"

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="home-title">
      <div className="hero-content">
        <div className="hero-badge">
          <div className="badge-dot" aria-hidden="true"></div>
          <span className="badge-text">Open to opportunities</span>
          <div className="badge-line" aria-hidden="true"></div>
        </div>

        <div className="hero-title-wrapper">
          <h1 id="home-title" className="hero-title">
            <span className="hero-name-first">ENES</span> <span className="hero-name-last">EKICI</span>
          </h1>
        </div>

        <p className="hero-tagline">Computer Engineer · IBM i Developer · Data &amp; Software Engineering</p>

        <div className="hero-social">
          {SOCIALS.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              className="social-link"
              aria-label={label}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <Icon size={24} aria-hidden="true" />
            </a>
          ))}
        </div>

        <a href="#experience" className="scroll-indicator" aria-label="Scroll to experience">
          <span className="scroll-icon">
            <ArrowDown size={20} aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  )
}
