"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin, type LucideIcon, Download } from "lucide-react"

// Define the type for social configuration
interface SocialConfigItem {
  href: string
  label: string
  icon: LucideIcon
  text: string
  external?: boolean
}

// Centralized social media configuration
export const socialConfig: Record<string, SocialConfigItem> = {
  email: {
    href: "mailto:hilalmorrar@gmail.com",
    label: "Send email",
    icon: Mail,
    text: "Email",
  },
  github: {
    href: "https://github.com/hamorrar",
    label: "GitHub profile",
    icon: Github,
    text: "GitHub",
    external: true,
  },
  linkedin: {
    href: "https://linkedin.com/in/hilal-morrar",
    label: "LinkedIn profile",
    icon: Linkedin,
    text: "LinkedIn",
    external: true,
  },
  resume: {
  href: "/Hilal-Morrar-Resume.pdf",
  label: "Download resume",
  icon: Download,
  text: "Resume",
  external: true
}
}

interface SocialLinksProps {
  variant?: "icons-only" | "with-text"
  size?: "sm" | "default" | "lg"
  className?: string
}

export function SocialLinks({ variant = "with-text", size = "sm", className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {Object.entries(socialConfig).map(([key, social]) => {
        const Icon = social.icon
        const isExternal = social.external

        return (
          <Button
            key={key}
            variant="ghost"
            size={variant === "icons-only" ? "icon" : size}
            className={variant === "icons-only" ? "w-8 h-8" : ""}
            asChild
          >
            <a
              href={social.href}
              aria-label={social.label}
              {...(isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <Icon className="h-4 w-4 mr-2" />
              {variant === "with-text" && social.text}
            </a>
          </Button>
        )
      })}
    </div>
  )
}

// Specific component for navigation bar (icons only)
export function NavSocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-1 ml-2 pl-2 border-l border-border ${className}`}>
      {Object.entries(socialConfig).map(([key, social]) => {
        const Icon = social.icon
        const isExternal = social.external

        return (
          <Button key={key} variant="ghost" size="icon" className="w-8 h-8" asChild>
            <a
              href={social.href}
              aria-label={social.label}
              {...(isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <Icon className="h-4 w-4" />
            </a>
          </Button>
        )
      })}
    </div>
  )
}

// Specific component for footer (with text)
export function FooterSocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {Object.entries(socialConfig).map(([key, social]) => {
        const Icon = social.icon
        const isExternal = social.external

        return (
          <Button key={key} variant="ghost" size="sm" asChild>
            <a
              href={social.href}
              aria-label={social.label}
              {...(isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <Icon className="h-4 w-4 mr-2" />
              {social.text}
            </a>
          </Button>
        )
      })}
    </div>
  )
}
