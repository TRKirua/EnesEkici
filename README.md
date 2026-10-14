# Personal Portfolio – Enes Ekici

Welcome to the source code of my personal portfolio, built to showcase my projects, skills, and experience.

🌐 **Link**: [trkirua.github.io/EnesEkici](https://trkirua.github.io/EnesEkici/)

---

## Technologies Used

- **Next.js** (static export) · **React** · **TypeScript**
- **lucide-react** (icons)
- **GitHub Actions** → **GitHub Pages**

---

## Features

* Responsive design
* Clean UI
* Fast loading (fully pre-rendered, no client-side loader)
* SEO: metadata, Open Graph / Twitter cards, JSON-LD (Person), sitemap, robots
* Accessible: semantic landmarks, skip link, reduced-motion support
* Project showcase

---

## Project structure

```
app/                  layout, page, metadata routes (sitemap, robots), icons, Open Graph image
components/
  layout/             Navigation, ThemeToggle, Footer
  sections/           Hero, Experience, Projects, Skills, Education, Contact
  ui/                 SectionHeader, TimelineCard (shared building blocks)
data/                 all the content (experience, education, projects, skills, socials) + types
lib/                  JSON-LD structured data
styles/               CSS split by concern, assembled in styles/index.css
public/               static files (resume PDF)
```

To update the content, edit the files in `data/`.

---

## Getting started

```bash
npm install
npm run dev
```

Checks: `npm run lint` · `npm run typecheck`

## Build

```bash
npm run build
```

---

## Contact

For inquiries or collaborations, feel free to connect via email.
