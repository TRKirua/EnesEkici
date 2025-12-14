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

// Dynamic Background Component
function DynamicBackground({ isActive }: { isActive: boolean }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isActive])

  if (!isActive) return null

  return (
    <div className="dynamic-background">
      {/* Animated Grid Lines */}
      <div className="grid-container">
        {/* Horizontal Lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="horizontal-line"
            style={{
              top: `${12.5 * (i + 1)}%`,
              animationDelay: `${i * 0.2 + 1.5}s`,
              transform: `translateX(${Math.sin(scrollY * 0.005 + i) * 20}px)`,
            }}
          />
        ))}

        {/* Vertical Lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="vertical-line"
            style={{
              left: `${8.33 * (i + 1)}%`,
              animationDelay: `${i * 0.15 + 1.7}s`,
              transform: `translateY(${Math.cos(scrollY * 0.005 + i) * 15}px)`,
            }}
          />
        ))}

        {/* Diagonal Lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`d-${i}`}
            className="diagonal-line"
            style={{
              top: `${16.66 * (i + 1)}%`,
              transform: `rotate(45deg) translateX(${Math.sin(scrollY * 0.002 + i) * 50}px)`,
              animationDelay: `${i * 0.3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Dynamic Geometric Shapes */}
      <div className="shapes-container">
        {/* Expanding Circles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`circle-${i}`}
            className="expanding-circle"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5 + 2.3}s`,
              transform: `scale(${1 + Math.sin(scrollY * 0.005 + i) * 0.2})`,
            }}
          />
        ))}

        {/* Rotating Squares */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`square-${i}`}
            className="rotating-square"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              top: `${30 + i * 20}%`,
              right: `${15 + i * 15}%`,
              animationDelay: `${i * 0.4 + 2.5}s`,
              transform: `rotate(${scrollY * 0.05 + i * 45}deg) scale(${1 + Math.cos(scrollY * 0.004 + i) * 0.3})`,
            }}
          />
        ))}

        {/* Morphing Hexagons */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`hex-${i}`}
            className="morphing-hex"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              top: `${60 + i * 10}%`,
              left: `${30 + i * 25}%`,
              background: `linear-gradient(${45 + i * 60}deg, rgba(34, 197, 94, 0.1), rgba(168, 85, 247, 0.1))`,
              animationDelay: `${i * 0.6 + 2.7}s`,
              transform: `rotate(${scrollY * 0.025 + i * 30}deg) scale(${1 + Math.sin(scrollY * 0.003 + i) * 0.4})`,
            }}
          />
        ))}
      </div>

      {/* Particle System */}
      <div className="particles-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5 + 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glitch Effect Overlay */}
      <div className="glitch-overlay">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`glitch-${i}`}
            className="glitch-layer"
            style={{
              animationDelay: `${i * 0.1 + 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Floating Shapes Component
function FloatingShapes({ isActive }: { isActive: boolean }) {
  if (!isActive) return null

  return (
    <div className="floating-shapes-container">
      <div className="float-shape shape-1" style={{ animationDelay: "2s" }}></div>
      <div className="float-shape shape-2" style={{ animationDelay: "2.2s" }}></div>
      <div className="float-shape shape-3" style={{ animationDelay: "2.4s" }}></div>
      <div className="float-shape shape-4" style={{ animationDelay: "2.6s" }}></div>
      <div className="float-shape shape-5" style={{ animationDelay: "2.8s" }}></div>
      <div className="float-shape shape-6" style={{ animationDelay: "3s" }}></div>
      <div className="float-shape shape-7" style={{ animationDelay: "3.2s" }}></div>
      <div className="float-shape shape-8" style={{ animationDelay: "3.4s" }}></div>
    </div>
  )
}

// Loading Screen
function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-background">
        <div className="static-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`static-h-${i}`} className="static-horizontal-line" style={{ top: `${12.5 * (i + 1)}%` }} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`static-v-${i}`} className="static-vertical-line" style={{ left: `${8.33 * (i + 1)}%` }} />
          ))}
        </div>
      </div>

      <div className="loading-content">
        <div className="loading-title">
          <h1 className="loading-name">
            <span className="name-first">ENES</span>
            <span className="name-last">EKICI</span>
          </h1>
        </div>

        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>

        <div className="loading-text">Loading...</div>
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

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="nav-mobile-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
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

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll to Explore</div>
          <div className="scroll-icon">
            <ArrowDown size={16} />
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
      title: "Software Engineer / Data Analyst — Intern",
      company: "Swiss Aviation Software",
      companyUrl: "https://www.swiss-as.com/",
      period: "Feb 2025 - Aug 2025",
      location: "Basel, Switzerland",
      gradient: "gradient-blue-cyan",
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
      gradient: "gradient-red-orange",
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
      gradient: "gradient-indigo-purple",
      description: [
        "Spearheaded a project team on collaborative projects with external companies.",
        "Coordinated meetings with partners to define project scope and requirements.",
        "Allocated responsibilities based on individual strengths to maximize efficiency.",
      ],
    },
    {
      title: "Virtualisation & PAM Engineer — Intern",
      company: "MBT Consulting",
      companyUrl: "https://mbt-consulting.com",
      period: "Sep 2023 - Jan 2024",
      location: "Mulhouse, France",
      gradient: "gradient-green-emerald",
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
            <Briefcase className="section-icon icon-cyan" size={60} />
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="section-divider"></div>
          <p className="section-description">My professional journey and contributions to various organizations</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content card">
                <div className="exp-header">
                  <div className="exp-main">
                    <div className="exp-title-wrapper">
                      <div className={`exp-dot ${exp.gradient}`}></div>
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
                <div className={`card-overlay ${exp.gradient}`}></div>
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
      gradient: "gradient-blue-cyan",
      githubUrl: "https://github.com/TRKirua/42sh",
      isPrivate: false,
    },
    {
      title: "Java IDE",
      description:
        "Developed a full-featured Java IDE from the ground up, including code editor, compilation console, file management, autocomplete, and Git integration.",
      tags: ["Java", "IDE", "Git", "Maven", "GUI"],
      gradient: "gradient-red-orange",
      githubUrl: "https://github.com/TRKirua/ICBZ-IDE",
      isPrivate: false,
    },
    {
      title: "AI Solutions for Consulting",
      description:
        "Analyzed consulting markets in France, Switzerland and the EU, drove AI-powered RFP/RFI automation assessments and custom LLM feasibility.",
      tags: ["LLM", "Market Analysis", "Consulting", "AI"],
      gradient: "gradient-indigo-purple",
      githubUrl: "",
      isPrivate: true,
    },
    {
      title: "ToDo App",
      description:
        "Built a full-stack, collaborative ToDo list application with real-time updates using Supabase (PostgreSQL + Auth + Realtime). Implemented email & Google OAuth authentication, CRUD on tasks, role-based read/write permissions, and a modern Tailwind CSS interface.",
      tags: ["TypeScript", "JavaScript", "Supabase", "Authentication", "Tailwind CSS"],
      gradient: "gradient-green-emerald",
      githubUrl: "https://github.com/TRKirua/Collaborative-ToDo-App",
      isPrivate: false,
    },
    {
      title: "Melocas' Ire",
      description:
        "Development of a 2D platformer game with 5 levels using Unity. Responsibilities included level design, assets creation, and player mechanics.",
      tags: ["Unity", "C#", "2D Platformer", "IntelliJ", "Game Development"],
      gradient: "gradient-fuchsia-rose",
      githubUrl: "https://github.com/TRKirua/Melocas-Ire",
      isPrivate: false,
    },
    {
      title: "Neural Networks",
      description:
        "Developed two TensorFlow-based deep learning models : a Multilayer Perceptron (MLP) and a Convolutional Neural Network (CNN).",
      tags: ["TensorFlow", "Python", "Deep Learning", "MLP", "CNN"],
      gradient: "gradient-amber-yellow",
      githubUrl: "https://github.com/TRKirua/Neural-Networks",
      isPrivate: false,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a responsive personal website using Tailwind CSS. Configured GitHub Actions for automated build and continuous deployment to GitHub Pages.",
      tags: ["TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Git", "GitHub", "CI/CD", "YAML"],
      gradient: "gradient-slate-gray",
      githubUrl: "https://github.com/TRKirua/EnesEkici",
      isPrivate: false,
    },
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <FolderOpen className="section-icon icon-purple" size={60} />
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="section-divider"></div>
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
                    <button disabled className={`btn btn-disabled ${project.gradient}`}>
                      <Lock size={16} />
                      Private
                    </button>
                  ) : (
                    <button
                      className={`btn ${project.gradient}`}
                      onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                    >
                      <Github size={16} />
                      See on GitHub
                    </button>
                  )}
                </div>
              </div>

              <div className={`card-overlay ${project.gradient}`}></div>
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
      gradient: "gradient-blue-cyan",
    },
    {
      title: "Frameworks & Libraries",
      icon: <Brain size={24} />,
      skills: ["Pandas", "TensorFlow", "Flutter", "React", "Scikit-Learn"],
      gradient: "gradient-red-orange",
    },
    {
      title: "Cloud & DevOps",
      icon: <Database size={24} />,
      skills: ["AWS", "Docker", "Terraform", "Ansible", "Kubernetes", "GitHub Actions"],
      gradient: "gradient-indigo-purple",
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Neo4j", "Supabase"],
      gradient: "gradient-green-emerald",
    },
    {
      title: "Methods",
      icon: <Palette size={24} />,
      skills: ["Project Management", "Team Management", "Consulting", "AGILE/SCRUM"],
      gradient: "gradient-fuchsia-rose",
    },
    {
      title: "Languages",
      icon: <MessageCircle size={24} />,
      skills: ["French & Turkish (Native)", "English (Fluent, TOEIC - C1)", "German (Intermediate, DSD I - B1)"],
      gradient: "gradient-amber-yellow",
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "GitLab", "SVN", "Unity", "Notion", "VSCode", "JetBrains IDEs"],
      gradient: "gradient-rose",
    },
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <Code className="section-icon icon-emerald" size={60} />
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="section-divider"></div>
          <p className="section-description">Technologies, tools, and languages I work with to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card card">
              <div className="skill-header">
                <div className={`skill-icon ${category.gradient}`}>{category.icon}</div>
                <h3 className="skill-title">{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>

              <div className={`card-overlay ${category.gradient}`}></div>
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
      gradient: "gradient-blue-cyan",
      status: "Current",
    },
    {
      degree: "Erasmus Exchange Program (Machine Learning, AI and Mathematical Modeling)",
      school: "Bahçeşehir University (Istanbul)",
      schoolUrl: "https://www.bahcesehir.edu.tr/",
      period: "Jul 2024 - Jan 2025",
      location: "Istanbul, Turkey",
      gpa: "3.92/4.0",
      gradient: "gradient-purple-pink",
      status: "Completed",
    },
    {
      degree: "Erasmus Exchange Program (Java, C, C++, and Python Programming)",
      school: "Bahçeşehir University (Istanbul)",
      schoolUrl: "https://www.bahcesehir.edu.tr/",
      period: "Feb 2022 - Jul 2022",
      location: "Istanbul, Turkey",
      gpa: "3.67/4.0",
      gradient: "gradient-indigo-purple",
      status: "Completed",
    },
  ]

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <GraduationCap className="section-icon icon-blue" size={60} />
            <h2 className="section-title">Education</h2>
          </div>
          <div className="section-divider"></div>
          <p className="section-description">My academic journey and achievements</p>
        </div>

        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card card">
              <div className="education-content">
                <div className="education-main">
                  <div className="education-degree-wrapper">
                    <div className={`education-dot ${edu.gradient}`}></div>
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
              <div className={`card-overlay ${edu.gradient}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Component
function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "enesekici6868@gmail.com",
      link: "mailto:enesekici6868@gmail.com",
      gradient: "gradient-blue-cyan",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+33 7 69 35 93 93",
      link: "tel:+33769359393",
      gradient: "gradient-red-orange",
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/enes-ekici",
      link: "https://www.linkedin.com/in/enes-ekici/",
      gradient: "gradient-indigo-purple",
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "github.com/TRKirua",
      link: "https://github.com/TRKirua",
      gradient: "gradient-green-emerald",
    },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <MessageCircle className="section-icon icon-cyan" size={50} />
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <div className="section-divider"></div>
          <p className="section-description">
            Looking for a Computer Engineer? Let's connect and discuss opportunities
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-intro">
            <h3 className="contact-intro-title">Let's start a conversation</h3>
            <p className="contact-intro-text">
              I am actively seeking a technical position in computer engineering. I am open to various domains within
              the field, and I bring strong analytical skills, adaptability, and a solid foundation in engineering
              practices to contribute effectively to challenging projects.
            </p>
          </div>

          {/* Average Response Time */}
          <div className="response-time">
            <Clock size={24} className="response-time-icon" />
            <span className="response-time-text">Average response time: {"< 24h"}</span>
          </div>

          <div className="resume-download">
            <a
              href="https://raw.githubusercontent.com/TRKirua/EnesEkici/main/public/Enes_Ekici_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              <Download size={24} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Contact Links */}
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="contact-card-link"
              >
                <div className="contact-card card">
                  <div className="contact-card-content">
                    <div className={`contact-icon ${info.gradient}`}>{info.icon}</div>
                    <div className="contact-info">
                      <h4 className="contact-title">{info.title}</h4>
                      <p className="contact-value">{info.value}</p>
                    </div>
                  </div>
                  <div className={`card-overlay ${info.gradient}`}></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">&copy; 2025 Enes Ekici. All rights reserved.</p>
      </footer>
    </section>
  )
}

// Main Portfolio Component
export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [animationsActive, setAnimationsActive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        setAnimationsActive(true)
      }, 400)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="portfolio">
      <DynamicBackground isActive={animationsActive} />
      <FloatingShapes isActive={animationsActive} />
      <Navigation />
      <main className="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
