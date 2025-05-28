"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, MapPin, Clock, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import ProjectCard from "@/components/project-card"
import ExperienceCards from "@/components/experience-cards"
import EducationSection from "@/components/education-section"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState("")
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "education", "skills", "projects"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment processing and inventory management",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team communication",
      tags: ["Next.js", "Socket.io", "PostgreSQL", "AWS"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
      github: "#",
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard showing weather patterns with interactive charts",
      tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
      github: "#",
    },
  ]

  const experiences = [
    {
      company: "TechCorp Inc.",
      position: "Senior Software Engineer",
      period: "2021 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of microservices architecture serving 10M+ users",
        "Reduced application load time by 40% through performance optimization",
        "Mentored 5 junior developers and established code review best practices",
      ],
    },
    {
      company: "StartupXYZ",
      position: "Software Engineer",
      period: "2019 - 2021",
      location: "Remote",
      description: [
        "Built full-stack web applications using React, Node.js, and PostgreSQL",
        "Designed and implemented RESTful APIs handling 1M+ requests daily",
        "Collaborated with product team to deliver features ahead of schedule",
      ],
    },
    {
      company: "DevSolutions LLC",
      position: "Junior Software Developer",
      period: "2018 - 2019",
      location: "New York, NY",
      description: [
        "Developed responsive web applications using modern JavaScript frameworks",
        "Participated in agile development process and daily standups",
        "Wrote unit tests achieving 90%+ code coverage",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stanford University",
      period: "2014 - 2018",
      location: "Stanford, CA",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "General Assembly",
      period: "2018",
      location: "San Francisco, CA",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground hidden sm:inline">San Francisco, CA</span>
            </div>

            <nav className="flex items-center space-x-3 sm:space-x-6 bg-background/80 backdrop-blur-md rounded-full px-3 sm:px-6 py-2 border border-border">
              <Link
                href="#home"
                className={cn(
                  "text-xs sm:text-sm transition-colors hover:text-primary",
                  activeSection === "home" ? "text-primary font-medium" : "text-muted-foreground",
                )}
                aria-label="Go to home section"
              >
                Home
              </Link>
              <Link
                href="#work"
                className={cn(
                  "text-xs sm:text-sm transition-colors hover:text-primary",
                  activeSection === "work" ? "text-primary font-medium" : "text-muted-foreground",
                )}
                aria-label="Go to work section"
              >
                Work
              </Link>
              <Link
                href="#education"
                className={cn(
                  "text-xs sm:text-sm transition-colors hover:text-primary",
                  activeSection === "education" ? "text-primary font-medium" : "text-muted-foreground",
                )}
                aria-label="Go to education section"
              >
                Education
              </Link>
              <Link
                href="#skills"
                className={cn(
                  "text-xs sm:text-sm transition-colors hover:text-primary",
                  activeSection === "skills" ? "text-primary font-medium" : "text-muted-foreground",
                )}
                aria-label="Go to skills section"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className={cn(
                  "text-xs sm:text-sm transition-colors hover:text-primary",
                  activeSection === "projects" ? "text-primary font-medium" : "text-muted-foreground",
                )}
                aria-label="Go to projects section"
              >
                Projects
              </Link>
              <ThemeToggle />
            </nav>

            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground hidden sm:inline">{currentTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center relative">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Alex Chen"
                width={120}
                height={120}
                className="rounded-full border-4 border-border"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">Alex Chen</h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-primary">Software Engineer</h2>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
                Developer based in San Francisco, USA. I specialize in building exceptional digital experiences with a
                focus on performance and user experience. With 6+ years of experience, I'm passionate about creating
                efficient, scalable solutions to complex problems using modern technologies like React, Node.js, and
                cloud platforms.
              </p>

              <div className="flex justify-center mt-8">
                <Button size="lg" className="rounded-full">
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bouncing Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </motion.div>
      </section>

      {/* Work Experience */}
      <section id="work" className="py-16 sm:py-24">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2 mb-12 sm:mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Work Experience</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              My professional journey in software development
            </p>
          </motion.div>

          <ExperienceCards experiences={experiences} />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2 mb-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Education</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              My academic background and certifications
            </p>
          </motion.div>

          <EducationSection education={education} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2 mb-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Technical Skills</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold mb-4 text-lg">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Vue.js</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold mb-4 text-lg">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">GraphQL</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold mb-4 text-lg">Cloud & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                    <Badge variant="secondary">Terraform</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 sm:py-24 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2 mb-12 sm:mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Some of my recent work and side projects
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                link={project.link}
                github={project.github}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Alex Chen. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
