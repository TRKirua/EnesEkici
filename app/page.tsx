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
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Grid Lines */}
      <div className="absolute inset-0">
        {/* Horizontal Lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-grid-horizontal opacity-0"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: "0%",
              right: "0%",
              animationDelay: `${i * 0.2 + 1.5}s`,
              animationFillMode: "forwards",
              transform: `translateX(${Math.sin(scrollY * 0.005 + i) * 20}px)`,
            }}
          />
        ))}

        {/* Vertical Lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-grid-vertical opacity-0"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: "0%",
              bottom: "0%",
              animationDelay: `${i * 0.15 + 1.7}s`,
              animationFillMode: "forwards",
              transform: `translateY(${Math.cos(scrollY * 0.005 + i) * 15}px)`,
            }}
          />
        ))}

        {/* Diagonal Lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`d-${i}`}
            className="absolute bg-gradient-to-br from-transparent via-emerald-500/15 to-transparent animate-diagonal-slide opacity-0"
            style={{
              width: "200%",
              height: "2px",
              top: `${16.66 * (i + 1)}%`,
              left: "-50%",
              transform: `rotate(45deg) translateX(${Math.sin(scrollY * 0.002 + i) * 50}px)`,
              animationDelay: `${i * 0.3 + 2}s`,
              animationFillMode: "forwards",
            }}
          />
        ))}
      </div>

      {/* Dynamic Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Expanding Circles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full border border-cyan-400/20 animate-expand-contract opacity-0"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5 + 2.3}s`,
              animationFillMode: "forwards",
              transform: `scale(${1 + Math.sin(scrollY * 0.005 + i) * 0.2})`,
            }}
          />
        ))}

        {/* Rotating Squares */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`square-${i}`}
            className="absolute border border-purple-400/20 animate-rotate-scale opacity-0"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              top: `${30 + i * 20}%`,
              right: `${15 + i * 15}%`,
              animationDelay: `${i * 0.4 + 2.5}s`,
              animationFillMode: "forwards",
              transform: `rotate(${scrollY * 0.05 + i * 45}deg) scale(${1 + Math.cos(scrollY * 0.004 + i) * 0.3})`,
            }}
          />
        ))}

        {/* Morphing Hexagons */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`hex-${i}`}
            className="absolute animate-morph-shape opacity-0"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              top: `${60 + i * 10}%`,
              left: `${30 + i * 25}%`,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              background: `linear-gradient(${45 + i * 60}deg, rgba(34, 197, 94, 0.1), rgba(168, 85, 247, 0.1))`,
              animationDelay: `${i * 0.6 + 2.7}s`,
              animationFillMode: "forwards",
              transform: `rotate(${scrollY * 0.025 + i * 30}deg) scale(${1 + Math.sin(scrollY * 0.003 + i) * 0.4})`,
            }}
          />
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5 + 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationFillMode: "forwards",
            }}
          />
        ))}
      </div>

      {/* Glitch Effect Overlay */}
      <div className="absolute inset-0 opacity-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`glitch-${i}`}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-glitch-effect opacity-0"
            style={{
              animationDelay: `${i * 0.1 + 4}s`,
              animationFillMode: "forwards",
              mixBlendMode: "screen",
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Floating Shapes Component (Enhanced)
function FloatingShapes({ isActive }: { isActive: boolean }) {
  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Enhanced floating geometric shapes avec apparition progressive */}
      <div
        className="absolute top-20 right-20 w-8 h-8 border-2 border-cyan-400/40 rotate-45 animate-float-complex opacity-0"
        style={{
          animationDelay: "2s",
          animationFillMode: "forwards",
        }}
      ></div>
      <div
        className="absolute top-40 left-10 w-6 h-6 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full animate-float-orbit opacity-0"
        style={{
          animationDelay: "2.2s",
          animationFillMode: "forwards",
        }}
      ></div>
      <div
        className="absolute top-60 right-1/4 w-4 h-4 border border-emerald-400/35 rotate-12 animate-float-spiral opacity-0"
        style={{
          animationDelay: "2.4s",
          animationFillMode: "forwards",
        }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-10 h-10 border-2 border-blue-400/40 rounded-lg rotate-12 animate-float-pendulum opacity-0"
        style={{
          animationDelay: "2.6s",
          animationFillMode: "forwards",
        }}
      ></div>
      <div
        className="absolute bottom-60 right-16 w-5 h-5 bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 rotate-45 animate-float-wave opacity-0"
        style={{
          animationDelay: "2.8s",
          animationFillMode: "forwards",
        }}
      ></div>
      <div
        className="absolute top-1/3 left-1/3 w-7 h-7 border border-purple-400/35 rounded-full animate-float-bounce opacity-0"
        style={{
          animationDelay: "3s",
          animationFillMode: "forwards",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-gradient-to-bl from-emerald-500/30 to-teal-500/30 animate-float-zigzag opacity-0"
        style={{
          animationDelay: "3.2s",
          animationFillMode: "forwards",
        }}
      ></div>
      <div
        className="absolute top-3/4 left-1/4 w-9 h-9 border-2 border-pink-400/40 rounded-lg rotate-30 animate-float-figure8 opacity-0"
        style={{
          animationDelay: "3.4s",
          animationFillMode: "forwards",
        }}
      ></div>
    </div>
  )
}

// Simplified Loading Screen with static background
function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      {/* Static background for loading - no animations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Static grid pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* Static horizontal lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`static-h-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"
              style={{
                top: `${12.5 * (i + 1)}%`,
                left: "0%",
                right: "0%",
              }}
            />
          ))}
          {/* Static vertical lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`static-v-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-gray-500/30 to-transparent"
              style={{
                left: `${8.33 * (i + 1)}%`,
                top: "0%",
                bottom: "0%",
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center space-y-12 relative z-10">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
            <span className="block text-white">ENES</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              EKICI
            </span>
          </h1>
        </div>

        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-loading-bar"></div>
        </div>

        {/* Loading Text */}
        <div className="text-gray-400 text-lg font-light">Loading...</div>
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-mono h-px border-none ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 h-auto">
        <div className="flex w-full items-center justify-between rounded-md my-1.5 py-1.5 px-5 gap-x-0 flex-row font-normal leading-7 tracking-normal">
          <div className="text-2xl font-bold">
            <span className="text-white">Enes</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Ekici
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-gray-800">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
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

// Simple Hero Component
function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 font-mono">
      <div className="text-center space-y-8 relative z-20">
        <div className="flex items-center justify-center space-x-3 animate-fade-in-up">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse-slow"></div>
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider font-mono">
            Available for Work
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-400 to-transparent"></div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight animate-fade-in-up animation-delay-50">
            <span className="text-white drop-shadow-2xl mr-4">ENES</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              EKICI
            </span>
          </h1>
        </div>

        <div className="relative will-change-transform flex justify-center space-x-6 animate-fade-in-up animation-delay-50">
          <a
            href="mailto:enesekici6868@gmail.com"
            className="group p-4 rounded-xl border border-gray-700 bg-gray-900/30 backdrop-blur-sm transition-all duration-200 transform hover:scale-110 hover:shadow-xl hover:border-purple-400 hover:bg-purple-500/10"
          >
            <Mail size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-200" />
          </a>
          <a
            href="tel:+33769359393"
            className="group p-4 rounded-xl border border-gray-700 bg-gray-900/30 backdrop-blur-sm transition-all duration-200 transform hover:scale-110 hover:shadow-xl hover:border-emerald-400 hover:bg-emerald-500/10"
          >
            <Phone size={24} className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/enes-ekici/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl border border-gray-700 bg-gray-900/30 backdrop-blur-sm transition-all duration-200 transform hover:scale-110 hover:shadow-xl hover:border-blue-400 hover:bg-blue-500/10"
          >
            <Linkedin size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
          </a>
          <a
            href="https://github.com/TRKirua"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl border border-gray-700 bg-gray-900/30 backdrop-blur-sm transition-all duration-200 transform hover:scale-110 hover:shadow-xl hover:border-red-400 hover:bg-red-500/10"
          >
            <Github size={24} className="text-gray-400 group-hover:text-red-400 transition-colors duration-200" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center animate-fade-in-up relative top-20 pt-8">
          <div className="animate-bounce">
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-4 font-medium">Scroll to Explore</div>
            <div className="animate-bounce">
              <div className="w-8 h-8 border-2 border-gray-700 rounded-full flex items-center justify-center mx-auto">
                <ArrowDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Experience Component with company links
function Experience() {
  const experiences = [
    {
      title: "Software Engineer / Data Analyst — Intern",
      company: "Swiss Aviation Software",
      companyUrl: "https://www.swiss-as.com/",
      period: "Feb 2025 - Aug 2025",
      location: "Basel, Switzerland",
      gradient: "from-blue-950 to-cyan-300",
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
      gradient: "from-red-950 to-orange-300",
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
      gradient: "from-indigo-950 to-purple-300",
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
      gradient: "from-green-950 to-emerald-300",
      description: [
        "Rebuilt the company website using custom HTML modules for greater flexibility.",
        "Deployed and configured Systancia Gate, Cleanroom, Workplace, and Identity.",
        "Set up and documented FSLogix and ODFC containers to streamline Office 365 integration.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 relative z-20">
      <div className="max-w-7xl px-4 mx-auto font-sans">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Briefcase className="text-cyan-400 relative" size={60} />
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Professional Experience</h2>
          </div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            My journey through various roles and responsibilities
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group relative will-change-transform bg-clip-text overflow-hidden p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-900/90 hover:to-gray-800/90 h-full flex flex-col"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.gradient}`}></div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building size={18} className="text-gray-400" />
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 hover:text-white transition-colors z-30"
                    >
                      <h4 className="text-xl text-gray-300 hover:text-white font-medium">{exp.company}</h4>
                      <ExternalLink
                        size={16}
                        className="shrink-0 self-center text-gray-400 hover:text-white transition-colors"
                      />
                    </a>
                    <span className="text-gray-400">-</span>
                    <span className="text-lg text-gray-400 italic">{exp.location}</span>
                  </div>
                </div>
                <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
                  <span className="text-sm font-medium text-gray-400">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start font-light leading-relaxed">
                    <span
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} mr-4 mt-2 flex-shrink-0`}
                    ></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Component with GitHub links
function Projects() {
  const projects = [
    {
      title: "42sh",
      description:
        "Implemented a POSIX standards compliant shell in C language with basic features including command parsing, execution, and process management.",
      tags: ["C", "POSIX", "Shell"],
      gradient: "from-blue-950 to-cyan-300",
      githubUrl: "https://github.com/TRKirua/42sh",
      isPrivate: false,
    },
    {
      title: "Java IDE",
      description:
        "Developed a full-featured Java IDE from the ground up, including code editor, compilation console, file management, autocomplete, and Git integration.",
      tags: ["Java", "IDE", "Git", "Maven", "GUI"],
      gradient: "from-red-950 to-orange-300",
      githubUrl: "https://github.com/TRKirua/ICBZ-IDE",
      isPrivate: false,
    },
    {
      title: "AI Solutions for Consulting",
      description:
        "Analyzed consulting markets in France, Switzerland and the EU, drove AI-powered RFP/RFI automation assessments and custom LLM feasibility.",
      tags: ["LLM", "Market Analysis", "Consulting", "AI"],
      gradient: "from-indigo-950 to-purple-300",
      githubUrl: "",
      isPrivate: true,
    },
    {
      title: "ToDo App",
      description:
        "Built a full-stack, collaborative ToDo list application with real-time updates using Supabase (PostgreSQL + Auth + Realtime). Implemented email & Google OAuth authentication, CRUD on tasks, role-based read/write permissions, and a modern Tailwind CSS interface.",
      tags: ["TypeScript", "JavaScript", "Supabase", "Authentication", "Tailwind CSS"],
      gradient: "from-green-950 to-emerald-300",
      githubUrl: "https://github.com/TRKirua/Collaborative-ToDo-App",
      isPrivate: false,
    },
    {
      title: "Melocas' Ire",
      description:
        "Development of a 2D platformer game with 5 levels using Unity. Responsibilities included level design, assets creation, and player mechanics.",
      tags: ["Unity", "C#", "2D Platformer", "IntelliJ", "Game Development"],
      gradient: "from-fuchsia-950 to-rose-300",
      githubUrl: "https://github.com/TRKirua/Melocas-Ire",
      isPrivate: false,
    },
    {
      title: "Neural Networks",
      description:
        "Developed two TensorFlow-based deep learning models : a Multilayer Perceptron (MLP) and a Convolutional Neural Network (CNN).",
      tags: ["TensorFlow", "Python", "Deep Learning", "MLP", "CNN"],
      gradient: "from-amber-950 to-yellow-300",
      githubUrl: "https://github.com/TRKirua/Neural-Networks",
      isPrivate: false,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a responsive personal website using Tailwind CSS. Configured GitHub Actions for automated build and continuous deployment to GitHub Pages.",
      tags: ["TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Git", "GitHub", "CI/CD", "YAML"],
      gradient: "from-slate-950 to-gray-300",
      githubUrl: "https://github.com/TRKirua/EnesEkici",
      isPrivate: false,
    },
  ]

  return (
    <section id="projects" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 font-normal font-sans">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <FolderOpen className="text-purple-400 relative" size={60} />
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Projects</h2>
          </div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            A showcase of my technical projects and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="will-change-transform group relative bg-clip-text bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-900/90 hover:to-gray-800/90 h-full flex flex-col"
            >
              <CardContent className="p-8 relative z-10 flex flex-col h-full text-transparent">
                <div className="mb-6 flex-grow font-normal">
                  <h3 className="will-change-transform font-bold text-white mb-3 transition-all text-2xl">
                    {project.title}
                  </h3>
                  <p className="will-change-transform text-gray-300 mb-6 leading-relaxed font-light text-justify text-sm">
                    {project.description}
                  </p>

                  <div className="will-change-transform flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="will-change-transform px-3 py-1 bg-gray-800/50 border border-gray-700/50 text-gray-300 text-xs rounded-full hover:border-white/20 hover:bg-gray-700/50 hover:text-white transition-all font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex will-change-transform justify-center mt-auto">
                  {project.isPrivate ? (
                    <Button
                      size="sm"
                      disabled
                      className={`bg-gradient-to-r ${project.gradient} opacity-50 cursor-not-allowed text-white w-full gap-2 font-medium`}
                    >
                      <Lock size={16} className="will-change-transform shrink-0 self-center" />
                      Private
                    </Button>
                  ) : (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white w-full gap-2 font-medium hover:scale-105 transition-transform duration-200`}
                      >
                        <Github size={16} className="will-change-transform shrink-0 self-center" />
                        See on GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Skills Component with icon
function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Python", "C", "C++", "C#", "Go", "Java", "JavaScript", "TypeScript", "Dart", "Bash"],
      gradient: "from-blue-950 to-cyan-300",
    },
    {
      title: "Frameworks & Libraries",
      icon: <Brain size={24} />,
      skills: ["Pandas", "TensorFlow", "Flutter", "React", "Scikit-Learn"],
      gradient: "from-red-950 to-orange-500",
    },
    {
      title: "Cloud & DevOps",
      icon: <Database size={24} />,
      skills: ["AWS", "Docker", "Terraform", "Ansible", "Kubernetes", "GitHub Actions"],
      gradient: "from-indigo-950 to-purple-300",
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Neo4j", "Supabase"],
      gradient: "from-green-950 to-emerald-300",
    },
    {
      title: "Methods",
      icon: <Palette size={24} />,
      skills: ["Project Management", "Team Management", "Consulting", "AGILE/SCRUM"],
      gradient: "from-fuchsia-950 to-rose-300",
    },
    {
      title: "Languages",
      icon: <MessageCircle size={24} />,
      skills: ["French & Turkish (Native)", "English (Fluent, TOEIC - C1)", "German (Intermediate, DSD I - B1)"],
      gradient: "from-amber-950 to-yellow-300",
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "GitLab", "SVN", "Unity", "Notion", "VSCode", "JetBrains IDEs"],
      gradient: "from-rose-950 to-rose-300",
    },
  ]

  return (
    <section id="skills" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 font-sans">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Code className="text-emerald-400 relative" size={60} />
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Technical Skills</h2>
          </div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Technologies, tools, and languages I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group relative will-change-transform bg-clip-text overflow-hidden p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-900/90 hover:to-gray-800/90 h-full flex flex-col"
            >
              <div className="flex will-change-transform items-center space-x-4 mb-6">
                <div
                  className={`w-14 h-12 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl text-white bg-clip-text">{category.title}</h3>
              </div>

              <div className="flex flex-wrap will-change-transform gap-3 w-full justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 text-gray-300 text-sm rounded-xl font-medium text-center hover:border-white/20 hover:bg-gray-700/50 hover:text-white transition-all duration-300"
                    style={{ minWidth: "max-content", flexGrow: 1 }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Component with school links
function Education() {
  const education = [
    {
      degree: "Master's Degree in Computer Science",
      school: "EPITA (Paris & Strasbourg)",
      schoolUrl: "https://www.epita.fr/",
      period: "Sep 2020 - Sep 2025",
      location: "Paris & Strasbourg, France",
      gpa: "3.7/4.0",
      gradient: "from-blue-500 to-cyan-500",
      status: "Current",
    },
    {
      degree: "Erasmus Exchange Program (Machine Learning, AI and Mathematical Modeling)",
      school: "Bahçeşehir University (Istanbul)",
      schoolUrl: "https://www.bahcesehir.edu.tr/",
      period: "Jul 2024 - Jan 2025",
      location: "Istanbul, Turkey",
      gpa: "3.92/4.0",
      gradient: "from-red-950 to-orange-300from-purple-500 to-pink-500",
      status: "Completed",
    },
    {
      degree: "Erasmus Exchange Program (Java, C, C++, and Python Programming)",
      school: "Bahçeşehir University (Istanbul)",
      schoolUrl: "https://www.bahcesehir.edu.tr/",
      period: "Feb 2022 - Jul 2022",
      location: "Istanbul, Turkey",
      gpa: "3.67/4.0",
      gradient: "from-indigo-950 to-purple-300",
      status: "Completed",
    },
  ]

  return (
    <section id="education" className="py-24 relative z-15">
      <div className="max-w-7xl mx-auto px-4 font-sans">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <GraduationCap className="text-blue-400 relative" size={60} />
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Education</h2>
          </div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">My academic journey and achievements</p>
        </div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="group relative will-change-transform bg-clip-text overflow-hidden pt-8 pb-4 px-8 
                        bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl 
                        border border-gray-700/50 hover:border-gray-600/50 
                        transition-all duration-300 transform hover:-translate-y-1 
                        hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-900/90 hover:to-gray-800/90 
                        h-full flex flex-col"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${edu.gradient}`}></div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    <School size={18} className="text-gray-400" />
                    <a
                      href={edu.schoolUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 hover:text-white transition-colors z-30"
                    >
                      <h4 className="text-xl text-gray-300 hover:text-white font-medium">{edu.school}</h4>
                      <ExternalLink
                        size={16}
                        className="shrink-0 self-center text-gray-400 hover:text-white transition-colors"
                      />
                    </a>
                    <span className="text-gray-400">-</span>
                    <span className="text-lg text-gray-400 italic">{edu.location}</span>
                  </div>
                  {edu.gpa && <div className="text-emerald-400 text-sm font-medium mt-2 mb-2">GPA: {edu.gpa}</div>}
                </div>
                <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
                  <span className="text-sm font-medium text-gray-400">{edu.period}</span>
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Component with average response time and social links
function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "enesekici6868@gmail.com",
      link: "mailto:enesekici6868@gmail.com",
      gradient: "from-blue-950 to-cyan-300",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+33 7 69 35 93 93",
      link: "tel:+33769359393",
      gradient: "from-red-950 to-orange-300",
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/enes-ekici",
      link: "https://www.linkedin.com/in/enes-ekici/",
      gradient: "from-indigo-950 to-purple-300",
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "github.com/TRKirua",
      link: "https://github.com/TRKirua",
      gradient: "from-green-950 to-emerald-300",
    },
  ]

  return (
    <section id="contact" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 font-sans">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <MessageCircle className="text-cyan-400 relative top-1" size={50} />
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Get In Touch</h2>
          </div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Looking for a Computer Engineer? Let's connect and discuss opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6 text-center">
              <h3 className="text-3xl font-bold text-white">Let's start a conversation</h3>
              <p className="text-gray-300 leading-relaxed font-light text-lg max-w-3xl mx-auto">
                I am actively seeking a technical position in computer engineering. I am open to various domains within
                the field, and I bring strong analytical skills, adaptability, and a solid foundation in engineering
                practices to contribute effectively to challenging projects.
              </p>
            </div>

            {/* Average Response Time */}
            <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-8 mb-8 text-center">
              <Clock size={24} className="text-emerald-400" />
              <span className="text-emerald-400 font-medium text-lg">Average response time: {"< 24h"}</span>
            </div>

            <div className="text-center mb-8">
              <a
                href="https://raw.githubusercontent.com/TRKirua/EnesEkici/main/public/Enes_Ekici_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-400/30 via-blue-500/15 to-purple-600/30 border border-white-500/20 rounded-xl p-8 mb-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <Download size={24} />
                <span className="text-white font-medium text-lg">Download Resume</span>
              </a>
            </div>

            {/* Contact Links */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group relative will-change-transform bg-clip-text overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br hover:from-gray-900/90 hover:to-gray-800/90 cursor-pointer transform hover:-translate-y-1 hover:-translate-x-1">
                    <CardContent className="px-6 py-5 md:px-8 md:py-6">
                      <div className="flex items-center space-x-6">
                        <div className={`p-8 bg-gradient-to-r ${info.gradient} rounded-2xl text-white`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-xl mb-2">{info.title}</h4>
                          <p className="text-gray-400 group-hover:text-white transition-colors text-lg">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r text-center ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    ></div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simple footer */}
      <footer className="mt-24 pt-12 border-t border-gray-800/50">
        <div className="text-center text-gray-400">
          <p className="font-light font-sans">&copy; 2025 Enes Ekici. All rights reserved.</p>
        </div>
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <DynamicBackground isActive={animationsActive} />
      <FloatingShapes isActive={animationsActive} />
      <Navigation />
      <main className="relative z-20">
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
