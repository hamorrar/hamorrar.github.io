"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface Experience {
  company: string
  position: string
  period: string
  description: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block"></div>

      <div className="space-y-6 sm:space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden sm:block"></div>

            {/* Content */}
            <div className="sm:ml-20">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">{experience.position}</h3>
                      <p className="text-base sm:text-lg text-primary font-medium">{experience.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                      {experience.period}
                    </Badge>
                  </div>

                  <ul className="space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                        <span className="mr-2 sm:mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
