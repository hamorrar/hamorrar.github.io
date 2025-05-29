"use client"
"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import ProjectCard from "@/components/project-card"
import ExperienceCards from "@/components/experience-cards"
import EducationSection from "@/components/education-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavSocialLinks, FooterSocialLinks } from "@/components/social-links"

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
      title: "Connect4 Artificial Intelligence Agent",
      description: "An AI agent that plays Connect4 against a real user, a random move player, or another AI.",
      tags: ["Python"],
      image: "/connect4.png?height=400&width=600",
      github: "https://github.com/hamorrar/connect4",
    },
  ]

  const experiences = [
    {
      company: "Cisco Systems - Duo Security",
      position: "Software Engineer Intern",
      period: "May 2024 - August 2024",
      location: "San Francisco, CA",
      description: [
      "Improved an internal performance testing tool by adding a feature using Python, AWS EC2, and MySQL to dynamically create simulated customers and production HTTP requests.",
      "Executed load testing suites with GitHub CI/CD pipelines to monitor and validate software release performance metrics for 50k users using Datadog, Grafana, and Kibana dashboards for observability and incident response.",
      "Diagnosed and fixed deployment issues in Kubernetes clusters with Python and Docker, contributing to improved system reliability and reducing the risk of service degradation or on-call incidents."
      ],
    },
    {
      company: "Stealth Startup",
      position: "Software Engineer Intern",
      period: "May 2023 - August 2023",
      location: "Remote",
      description: [
        "Designed and implemented a REST API for a distributed, fault tolerant, consistent, and sharded key-value store using Go and Docker.",
        "Utilized Goroutines for concurrency when handling client and internal HTTP requests for system communication.",
        "Developed resharding algorithm and internal API routes to support dynamic replica coordination and data rebalancing, and Bash scripts to automate setup/teardown processes to improve development efficiency by 30%."
      ],
    },
    {
      company: "Applied Machine Learning Lab",
      position: "Machine Learning Engineer",
      period: "September 2020 - August 2021",
      location: "Santa Cruz, CA",
      description: [
        "Led the design and training efforts of various neural network model architectures to make predictions based on time-series data with PyTorch.",
        "Achieved 95% accuracy as measured by model validation metrics by tuning machine learning models with hyperparameter optimization, regularization, and pruning.",
        "Reduced model training time by 50% by improving data processing pipeline and distributing training in a Kubernetes GPU cloud cluster."
      ],
    },
    {
      company: "Resilient Renewable Efficient Energy Systems",
      position: "Frontend Software Engineer",
      period: "July 2020 - September 2020",
      location: "Santa Cruz, CA",
      description: [
        "Built a user interface to register IoT devices using React, JavaScript, and AWS S3 for data storage in collaboration with hardware and product teams.",
        "Coordinated end to end integration with backend services on AWS EC2, ensuring smooth device onboarding and monitoring workflows.",
        "Raised user experience and accessibility scores by 17% based on Lighthouse audits by optimizing data handling, adding client-side input validation, and implementing UI fixes."
      ],
    }
  ]

  const education = [
    {
      degree: "Masters of Science in Computer Science",
      institution: "University of Texas at Austin",
      period: "August 2023 - December 2024",
      location: "Austin, TX",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Santa Cruz",
      period: "September 2018 - June 2022",
      location: "Santa Cruz, CA",
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground hidden sm:inline">United States</span>
            </div>

            <nav className="flex items-center space-x-2 sm:space-x-4 bg-background/80 backdrop-blur-md rounded-full px-3 sm:px-6 py-2 border border-border">
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

              {/* Social Icons */}
              <NavSocialLinks />

              <div className="h-8 w-px bg-border ml-2"></div>

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
                src="/me.png?height=120&width=120"
                alt="Hilal Morrar"
                width={220}
                height={220}
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
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">Hilal Morrar</h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-primary">Software Engineer</h2>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
                I'm a software engineer focused on building reliable systems, developer tooling, and scalable infrastructure.
              </p>

              <div className="flex justify-center mt-8">
                <Link href="mailto:hilalmorrar@gmail.com" rel="noopener noreferrer" target="_blank">
                <Button size="lg" className="rounded-full">
                  Get in Touch
                </Button>
                </Link>
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
                  <h3 className="font-semibold mb-4 text-lg">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Assembly</Badge>
                    <Badge variant="secondary">C</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">Go</Badge>
                    <Badge variant="secondary">HTML/CSS</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Javascript</Badge>
                    <Badge variant="secondary">Python</Badge>
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
                  <h3 className="font-semibold mb-4 text-lg">Frameworks/Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Agile</Badge>
                    <Badge variant="secondary">Gin</Badge>
                    <Badge variant="secondary">Keras</Badge>
                    <Badge variant="secondary">NumPy</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">pandas</Badge>
                    <Badge variant="secondary">scikit-learn</Badge>
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
                  <h3 className="font-semibold mb-4 text-lg">Developer Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Atlassian</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Jira</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">Linux/Unix</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Slack</Badge>
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
                // link={project.link}
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hilal Morrar. All rights reserved.
            </p>
            <FooterSocialLinks />
            </div>
          </div>
      </footer>
    </div>
  )
}
