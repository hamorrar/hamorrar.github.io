"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface ExperienceItemProps {
  company: string
  position: string
  period: string
  description: string[]
  index: number
}

export default function ExperienceItem({ company, position, period, description, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden border-none shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">{position}</h3>
              <p className="text-muted-foreground">{company}</p>
            </div>
            <Badge variant="outline">{period}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
