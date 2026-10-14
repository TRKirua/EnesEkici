"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container" aria-label="Main navigation">
        <div className="nav-content">
          <a href="#home" className="nav-logo" aria-label="Enes Ekici - Home">
            <span className="logo-first">Enes</span>
            <span className="logo-last">Ekici</span>
          </a>

          <div className="nav-desktop">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="nav-mobile-menu">
            <div className="nav-mobile-content">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="nav-mobile-link" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              ))}
              <ThemeToggle withLabel />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
