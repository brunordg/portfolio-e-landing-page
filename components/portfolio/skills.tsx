"use client"

import { Server, Cloud, Smartphone, Database, Users, Zap } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { SectionReveal } from "./section-reveal"

const skillCategories = [
  {
    title: "Backend & Frameworks",
    icon: Server,
    skills: ["Java", "Spring Boot", "Spring Batch", "Hibernate", "JPA", "Apache Camel", "Python"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git", "BitBucket", "Sonar", "CI/CD"],
  },
  {
    title: "Mobile & Frontend",
    icon: Smartphone,
    skills: ["Android", "Kotlin", "Angular", ".NET"],
  },
  {
    title: "Bancos de Dados",
    icon: Database,
    skills: ["Oracle", "SQL Server", "MySQL"],
  },
  {
    title: "Metodologias & Lideranca",
    icon: Users,
    skills: ["Scrum", "Management 3.0", "Lean", "Technical Leadership"],
  },
  {
    title: "Integracao & Servicos",
    icon: Zap,
    skills: ["REST", "SOAP", "JBoss Fuse / ESB", "Websphere", "Firebase", "Mensageria"],
  },
]

export function Skills() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionReveal id="habilidades" className="relative px-6 py-24">
      {/* Grid pattern */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-30" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
            Habilidades
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Tecnologias & Competencias
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                className="group rounded-xl border border-border bg-card/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: prefersReducedMotion ? 0 : 0.08,
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}
