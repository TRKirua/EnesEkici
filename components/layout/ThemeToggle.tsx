"use client"

import { Moon, Sun } from "lucide-react"

// Both icons are rendered and the right one is picked in CSS from [data-theme],
// which the inline script in app/layout.tsx sets before first paint.
export default function ThemeToggle({ withLabel = false }: { withLabel?: boolean }) {
  const toggle = () => {
    const root = document.documentElement
    const next = root.dataset.theme === "light" ? "dark" : "light"
    root.dataset.theme = next
    localStorage.setItem("theme", next)
  }

  return (
    <button
      type="button"
      className={withLabel ? "theme-toggle-mobile" : "theme-toggle"}
      onClick={toggle}
      aria-label="Toggle theme"
    >
      <Sun size={20} className="icon-sun" aria-hidden="true" />
      <Moon size={20} className="icon-moon" aria-hidden="true" />
      {withLabel && (
        <>
          <span className="icon-sun">Light Mode</span>
          <span className="icon-moon">Dark Mode</span>
        </>
      )}
    </button>
  )
}
