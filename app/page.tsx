import Contact from "@/components/sections/Contact"
import Education from "@/components/sections/Education"
import Experience from "@/components/sections/Experience"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Navigation from "@/components/layout/Navigation"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"

export default function Portfolio() {
  return (
    <div className="portfolio">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
