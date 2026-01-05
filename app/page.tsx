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
} from "lucide-react"
import "./styles.css"

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
      title: "Software Engineer / Data Analyst - Intern",
      company: "Swiss Aviation Software",
      companyUrl: "https://www.swiss-as.com/",
      period: "Feb 2025 - Aug 2025",
      location: "Basel, Switzerland",
      description: [
        "Identified key behavioural analyses to support data-driven decisions by POs and PMs.",
        "Designed and built custom Flutter trackers to capture real-time user behavior.",
        "Structured tracking data for seamless integration with internal monitoring tools.",
        "Aligned tracking strategy with stakeholder needs via regular syncs and tailored visualizations.",
      ],
    },
    {
      title: "Volunteer Software Engineer",
      company: "Ziyara Project",
      companyUrl: "https://ziyara-project.com",
      period: "Jul 2024 - Present",
      location: "Paris, France",
      description: [
        "Developing and maintaining two Flutter apps: a user-facing app and an internal admin app.",
        "Managing database operations with Supabase (PostgreSQL).",
        "Delivered new features, bug fixes, and improved code structure for maintainability.",
      ],
    },
    {
      title: "Dragon Head",
      company: "EPITA",
      companyUrl: "https://www.epita.fr/",
      period: "Feb 2024 - Jun 2024",
      location: "Paris, France",
      description: [
        "Spearheaded a project team on collaborative projects with external companies.",
        "Coordinated meetings with partners to define project scope and requirements.",
        "Allocated responsibilities based on individual strengths to maximize efficiency.",
      ],
    },
    {
      title: "Virtualisation & PAM Engineer - Intern",
      company: "MBT Consulting",
      companyUrl: "https://mbt-consulting.com",
      period: "Sep 2023 - Jan 2024",
      location: "Mulhouse, France",
      description: [
        "Rebuilt the company website using custom HTML modules for greater flexibility.",
        "Deployed and configured Systancia Gate, Cleanroom, Workplace, and Identity.",
        "Set up and documented FSLogix and ODFC containers to streamline Office 365 integration.",
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
      title: "42sh",
      description:
        "Implemented a POSIX standards compliant shell in C language with basic features including command parsing, execution, and process management.",
      tags: ["C", "POSIX", "Shell"],
      githubUrl: "https://github.com/TRKirua/42sh",
      isPrivate: false,
    },
    {
      title: "Java IDE",
      description:
        "Developed a full-featured Java IDE from the ground up, including code editor, compilation console, file management, autocomplete, and Git integration.",
      tags: ["Java", "IDE", "Git", "Maven", "GUI"],
      githubUrl: "https://github.com/TRKirua/ICBZ-IDE",
      isPrivate: false,
    },
    {
      title: "AI Solutions for Consulting",
      description:
        "Analyzed consulting markets in France, Switzerland and the EU, drove AI-powered RFP/RFI automation assessments and custom LLM feasibility.",
      tags: ["LLM", "Market Analysis", "Consulting", "AI"],
      githubUrl: "",
      isPrivate: true,
    },
    {
      title: "ToDo App",
      description:
        "Built a full-stack, collaborative ToDo list application with real-time updates using Supabase (PostgreSQL + Auth + Realtime). Implemented email & Google OAuth authentication, CRUD on tasks, role-based read/write permissions, and a modern Tailwind CSS interface.",
      tags: ["TypeScript", "JavaScript", "Supabase", "Authentication", "Tailwind CSS"],
      githubUrl: "https://github.com/TRKirua/Collaborative-ToDo-App",
      isPrivate: false,
    },
    {
      title: "Melocas' Ire",
      description:
        "Development of a 2D platformer game with 5 levels using Unity. Responsibilities included level design, assets creation, and player mechanics.",
      tags: ["Unity", "C#", "2D Platformer", "IntelliJ", "Game Development"],
      githubUrl: "https://github.com/TRKirua/Melocas-Ire",
      isPrivate: false,
    },
    {
      title: "Neural Networks",
      description:
        "Developed two TensorFlow-based deep learning models : a Multilayer Perceptron (MLP) and a Convolutional Neural Network (CNN).",
      tags: ["TensorFlow", "Python", "Deep Learning", "MLP", "CNN"],
      githubUrl: "https://github.com/TRKirua/Neural-Networks",
      isPrivate: false,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a responsive personal website using Tailwind CSS. Configured GitHub Actions for automated build and continuous deployment to GitHub Pages.",
      tags: ["TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Git", "GitHub", "CI/CD", "YAML"],
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
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Python", "C", "C++", "C#", "Go", "Java", "JavaScript", "TypeScript", "Dart", "Bash"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Brain size={24} />,
      skills: ["Pandas", "TensorFlow", "Flutter", "React", "Scikit-Learn"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Database size={24} />,
      skills: ["AWS", "Docker", "Terraform", "Ansible", "Kubernetes", "GitHub Actions"],
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Neo4j", "Supabase"],
    },
    {
      title: "Methods",
      icon: <Palette size={24} />,
      skills: ["Project Management", "Team Management", "Consulting", "AGILE/SCRUM"],
    },
    {
      title: "Languages",
      icon: <MessageCircle size={24} />,
      skills: ["French & Turkish (Native)", "English (Fluent)", "German (Beginner)"],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "GitLab", "SVN", "Unity", "Notion", "VSCode", "JetBrains IDEs"],
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
      degree: "Master's Degree in Computer Science",
      school: "EPITA (Paris & Strasbourg)",
      schoolUrl: "https://www.epita.fr/",
      period: "Sep 2020 - Sep 2025",
      location: "Paris & Strasbourg, France",
      gpa: "3.7/4.0",
    },
    {
      degree: "Erasmus Exchange Program (Machine Learning, AI and Mathematical Modeling)",
      school: "Bahçeşehir University (Istanbul)",
      schoolUrl: "https://www.bahcesehir.edu.tr/",
      period: "Jul 2024 - Jan 2025",
      location: "Istanbul, Turkey",
      gpa: "3.92/4.0",
    },
    {
      degree: "Erasmus Exchange Program (Java, C, C++, and Python Programming)",
      school: "Bahçeşehir University (Istanbul)",
      schoolUrl: "https://www.bahcesehir.edu.tr/",
      period: "Feb 2022 - Jul 2022",
      location: "Istanbul, Turkey",
      gpa: "3.67/4.0",
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
