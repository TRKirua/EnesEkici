"use client"

import { useState, useEffect } from "react"
import {
  ArrowDown,
  Linkedin,
  Mail,
  Phone,
  GraduationCap,
  Menu,
  X,
  Building,
  School,
  Github,
  Code,
  Database,
  Wrench,
  Palette,
  Brain,
  MessageCircle,
  Briefcase,
  FolderOpen,
  Clock,
  ExternalLink,
  Download,
  Lock,
  Moon,
  Sun,
} from "lucide-react"
import "./styles.css"

// Theme Hook
function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  return { theme, toggleTheme }
}

// Loading Screen Component
function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-title">
          <h1 className="loading-name">
            <span className="name-first">ENES</span>
            <span className="name-last">EKICI</span>
          </h1>
          <div className="loading-bar-container">
            <div className="loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-first">Enes</span>
            <span className="logo-last">Ekici</span>
          </div>

          <div className="nav-desktop">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button className="nav-mobile-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="nav-mobile-menu">
            <div className="nav-mobile-content">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-mobile-link" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              ))}
              <button className="theme-toggle-mobile" onClick={toggleTheme}>
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Component
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <div className="badge-dot"></div>
          <span className="badge-text">Available for Work</span>
          <div className="badge-line"></div>
        </div>

        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            <span className="hero-name-first">ENES</span>
            <span className="hero-name-last">EKICI</span>
          </h1>
        </div>

        <div className="hero-social">
          <a href="mailto:enesekici6868@gmail.com" className="social-link social-mail">
            <Mail size={24} />
          </a>
          <a href="tel:+33769359393" className="social-link social-phone">
            <Phone size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/enes-ekici/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link social-linkedin"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/TRKirua"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link social-github"
          >
            <Github size={24} />
          </a>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-icon">
            <ArrowDown size={20} />
          </div>
        </div>
      </div>
    </section>
  )
}

// Experience Component
function Experience() {
  const experiences = [
    {
      title: "Data Analyst / Software Engineer - Intern",
      company: "Swiss Aviation Software",
      companyUrl: "https://www.swiss-as.com/",
      period: "Feb 2025 - Aug 2025",
      location: "Basel, Switzerland",
      description: [
        "Defined behavioral KPIs to support product decision-making for Product Owners and Product Managers.",
        "Designed and implemented a real-time user event tracking system in the Flutter application.",
        "Structured and transformed raw data into datasets for product analytics and UX optimization.",
        "Collaborated with business teams to align technical metrics with product and business objectives.",
      ],
    },
    {
      title: "Volunteer Software Engineer",
      company: "Ziyara Project",
      companyUrl: "https://ziyara-project.com",
      period: "Jul 2025 - Present",
      location: "Paris, France",
      description: [
        "Developed and maintained two Flutter applications (user-facing and internal admin app).",
        "Designed and optimized a PostgreSQL database schema using Supabase.",
        "Implemented secure CRUD operations with Row Level Security (RLS) and managed frontend-database data flows.",
        "Delivered new features, bug fixes, and improved the codebase architecture for maintainability and performance.",
      ],
    },
    {
      title: "Virtualization & PAM Engineer - Intern",
      company: "MBT Consulting",
      companyUrl: "https://mbt-consulting.com",
      period: "Sep 2023 - Jan 2024",
      location: "Mulhouse, France",
      description: [
        "Deployed and configured Systancia solutions (Gate, Cleanroom, Workplace, Identity).",
        "Implemented and documented FSLogix and ODFC containers to streamline Office 365 integration.",
        "Deployed secure virtualized environments and contributed to infrastructure architecture.",
        "Rebuilt the company website using custom HTML modules to improve flexibility.",
      ],
    },
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <Briefcase className="section-icon" size={60} />
            <h2 className="section-title">Experience</h2>
          </div>
          <p className="section-description">My professional journey and contributions to various organizations</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content card">
                <div className="exp-header">
                  <div className="exp-main">
                    <div className="exp-title-wrapper">
                      <div className="exp-dot"></div>
                      <h3 className="exp-title">{exp.title}</h3>
                    </div>
                    <div className="exp-company-wrapper">
                      <Building size={18} className="exp-icon" />
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-company-link">
                        <h4 className="exp-company">{exp.company}</h4>
                        <ExternalLink size={16} className="exp-external-icon" />
                      </a>
                      <span className="exp-separator">-</span>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                  </div>
                  <div className="exp-period">{exp.period}</div>
                </div>
                <ul className="exp-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Component
function Projects() {
  const projects = [
    {
      title: "Mini Lakehouse Data Pipeline",
      description:
        "Designed a lakehouse data pipeline with CSV ingestion to AWS S3. Implemented a Bronze/Silver/Gold architecture using Apache Spark and Iceberg tables. Integrated versioned data catalog with Nessie to manage table history and snapshots. Structured the project with Python scripts, analytical notebooks, and GitHub Actions CI.",
      tags: ["Spark", "Iceberg", "Nessie", "AWS", "Python", "ETL"],
      githubUrl: "",
      isPrivate: true,
    },
    {
      title: "Customer Review Analysis with PySpark (NLP)",
      description:
        "Built a data processing pipeline with Apache Spark to analyze a 2M-row Amazon reviews dataset. Implemented NLP preprocessing (cleaning, tokenization, stopword removal), word frequency and bigram analysis, and sentiment segmentation to identify product trends.",
      tags: ["PySpark", "NLP", "Apache Spark", "Python", "Data Analysis"],
      githubUrl: "",
      isPrivate: true,
    },
    {
      title: "AI Solutions for Consulting & RFP/RFI Automation",
      description:
        "Conducted a market analysis of consulting firms in France, Switzerland, and the EU. Explored the automation of RFP/RFI responses using AI and evaluated custom LLM solutions to optimize proposal generation workflows.",
      tags: ["LLM", "Market Analysis", "Consulting", "AI"],
      githubUrl: "",
      isPrivate: true,
    },
    {
      title: "42sh",
      description:
        "Implemented a Unix shell inspired by Bash in C, including command parsing, execution with fork/exec, pipe and redirection management, builtin commands, and environment variable handling.",
      tags: ["C", "Shell", "Unix", "POSIX"],
      githubUrl: "https://github.com/TRKirua/42sh",
      isPrivate: false,
    },
    {
      title: "Java IDE",
      description:
        "Developed a full-featured Java IDE with a code editor, compilation console, project management system, contextual autocomplete, Git/Maven integration, and customizable themes.",
      tags: ["Java", "IDE", "Git", "Maven", "GUI"],
      githubUrl: "https://github.com/TRKirua/ICBZ-IDE",
      isPrivate: false,
    },
    {
      title: "Collaborative ToDo Application",
      description:
        "Full-stack application built with React, TypeScript, and Supabase featuring OAuth authentication, secure data management with Row Level Security (RLS), and CRUD APIs for collaborative task management.",
      tags: ["TypeScript", "React", "Supabase", "Authentication", "PostgreSQL"],
      githubUrl: "https://github.com/TRKirua/Collaborative-ToDo-App",
      isPrivate: false,
    },
    {
      title: "Melocas' Ire",
      description:
        "Development of a 2D platformer game with 5 levels using Unity. Responsibilities included level design, assets creation, and player mechanics.",
      tags: ["Unity", "C#", "2D Platformer", "Game Development"],
      githubUrl: "https://github.com/TRKirua/Melocas-Ire",
      isPrivate: false,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a responsive personal website using Tailwind CSS. Configured GitHub Actions for automated build and continuous deployment to GitHub Pages.",
      tags: ["TypeScript", "React", "Tailwind CSS", "GitHub Actions", "CI/CD"],
      githubUrl: "https://github.com/TRKirua/EnesEkici",
      isPrivate: false,
    },
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <FolderOpen className="section-icon" size={60} />
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="section-description">A showcase of my technical projects and achievements</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-content">
                <div className="project-main">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-action">
                  {project.isPrivate ? (
                    <button disabled className="btn btn-disabled">
                      <Lock size={16} />
                      Private
                    </button>
                  ) : (
                    <button
                      className="btn"
                      onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                    >
                      <Github size={16} />
                      See on GitHub
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Skills Component
function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL", "RPG III", "ILE RPG IV", "CL/CLLE", "Dart", "Bash"],
    },
    {
      title: "Data Engineering",
      icon: <Database size={24} />,
      skills: ["Apache Spark", "Apache Iceberg", "ETL Pipelines", "Project Nessie"],
    },
    {
      title: "Data Science & ML",
      icon: <Brain size={24} />,
      skills: ["Pandas", "NumPy", "EDA", "Jupyter", "Scikit-Learn", "TensorFlow"],
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Neo4j", "IBM DB2", "Supabase"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Wrench size={24} />,
      skills: ["AWS", "Docker", "GitHub Actions (CI/CD)"],
    },
    {
      title: "Methodologies",
      icon: <Palette size={24} />,
      skills: ["Agile / Scrum", "Project Management", "Team Leadership"],
    },
    {
      title: "Languages",
      icon: <MessageCircle size={24} />,
      skills: ["English (C1, TOEIC)", "German (B1, DSD I)", "French & Turkish (Native)"],
    },
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <Code className="section-icon" size={60} />
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <p className="section-description">Technologies, tools, and languages I work with to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card card">
              <div className="skill-content">
                <div className="skill-header">
                  <div className="skill-icon-wrapper">{category.icon}</div>
                  <h3 className="skill-name">{category.title}</h3>
                </div>

                <div className="skill-list">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Component
function Education() {
  const education = [
    {
      degree: "RPG Developer Analyst (AS400)",
      school: "Notos",
      schoolUrl: "https://www.notos.fr/",
      period: "Feb 2026 - Apr 2026",
      location: "Strasbourg, France",
      gpa: null,
    },
    {
      degree: "Master's Degree in Computer Engineering",
      school: "EPITA",
      schoolUrl: "https://www.epita.fr/",
      period: "Sep 2020 - Sep 2025",
      location: "Paris, France",
      gpa: null,
    },
    {
      degree: "Academic Exchange (Machine Learning, AI, and Modeling)",
      school: "Bahçeşehir University",
      schoolUrl: "https://www.bahcesehir.edu.tr/",
      period: "Jul 2024 - Jan 2025",
      location: "Istanbul, Turkey",
      gpa: null,
    },
    {
      degree: "Academic Exchange (Java, C, C++, and Python Programming)",
      school: "Bahçeşehir University",
      schoolUrl: "https://www.bahcesehir.edu.tr/",
      period: "Feb 2022 - Jul 2022",
      location: "Istanbul, Turkey",
      gpa: null,
    },
  ]

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <GraduationCap className="section-icon" size={60} />
            <h2 className="section-title">Education</h2>
          </div>
          <p className="section-description">My academic journey and achievements</p>
        </div>

        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card card">
              <div className="education-content">
                <div className="education-main">
                  <div className="education-degree-wrapper">
                    <div className="education-dot"></div>
                    <h3 className="education-degree">{edu.degree}</h3>
                  </div>
                  <div className="education-school-wrapper">
                    <School size={18} className="education-icon" />
                    <a href={edu.schoolUrl} target="_blank" rel="noopener noreferrer" className="education-school-link">
                      <h4 className="education-school">{edu.school}</h4>
                      <ExternalLink size={16} className="education-external-icon" />
                    </a>
                    <span className="education-separator">-</span>
                    <span className="education-location">{edu.location}</span>
                  </div>
                  {edu.gpa && <div className="education-gpa">GPA: {edu.gpa}</div>}
                </div>
                <div className="education-period">{edu.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Component
function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <MessageCircle className="section-icon" size={50} />
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <p className="section-description">
            Looking for a Computer Engineer? Let's connect and discuss opportunities
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-intro-card card">
            <div className="contact-intro-content">
              <h3 className="contact-intro-title">Let's start a conversation</h3>
              <p className="contact-intro-text">
                I am actively seeking a technical position in computer engineering. I am open to various domains within
                the field, and I bring strong analytical skills, adaptability, and a solid foundation in engineering
                practices to contribute effectively to challenging projects.
              </p>
              <div className="contact-meta">
                <div className="response-time-inline">
                  <Clock size={20} />
                  <span>Response: {"< 24h"}</span>
                </div>
                <a
                  href="https://raw.githubusercontent.com/TRKirua/EnesEkici/main/public/Enes_Ekici_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-link-inline"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-grid">
            <a href="mailto:enesekici6868@gmail.com" className="contact-card-link">
              <div className="contact-card card">
                <Mail size={32} />
                <div className="contact-card-info">
                  <h4>Email</h4>
                  <p>enesekici6868@gmail.com</p>
                </div>
              </div>
            </a>

            <a href="tel:+33769359393" className="contact-card-link">
              <div className="contact-card card">
                <Phone size={32} />
                <div className="contact-card-info">
                  <h4>Phone</h4>
                  <p>+33 7 69 35 93 93</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/enes-ekici/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
            >
              <div className="contact-card card">
                <Linkedin size={32} />
                <div className="contact-card-info">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/enes-ekici</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/TRKirua"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
            >
              <div className="contact-card card">
                <Github size={32} />
                <div className="contact-card-info">
                  <h4>GitHub</h4>
                  <p>github.com/TRKirua</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Portfolio Component
export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="portfolio">
      <Navigation />
      <main className="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-divider"></div>
          <div className="footer-content">
            <div className="footer-credits">
              <p>© 2026 Enes Ekici</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
