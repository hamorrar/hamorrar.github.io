"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

interface Experience {
  company: string
  position: string
  period: string
  location: string
  description: string[]
}

interface ExperienceCardsProps {
  experiences: Experience[]
}

export default function ExperienceCards({ experiences }: ExperienceCardsProps) {
  return (
    <div className="grid gap-6 md:gap-8">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{experience.position}</h3>
                  <p className="text-lg text-primary font-semibold">{experience.company}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit">
                  {experience.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2">
                {experience.description.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-muted-foreground">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
