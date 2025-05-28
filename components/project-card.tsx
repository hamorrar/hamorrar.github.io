"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  // link: string
  github: string
  index: number
}
// export default function ProjectCard({ title, description, tags, image, link, github, index }: ProjectCardProps) {

export default function ProjectCard({ title, description, tags, image, github, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden border-none shadow-lg h-full flex flex-col group">
        <div className="relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex space-x-2">
              <Button size="sm" variant="secondary" asChild>
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} code on GitHub`}>
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
              {/* <Button size="sm" asChild>
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo`}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button> */}
            </div>
          </div>
        </div>
        <CardContent className="flex flex-col flex-grow p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
