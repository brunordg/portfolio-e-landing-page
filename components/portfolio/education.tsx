"use client"

import { GraduationCap, BookOpen } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { SectionReveal } from "./section-reveal"

const education = [
  {
    institution: "Universidade Presbiteriana Mackenzie",
    degree: "MBA em Governanca Digital",
    period: "Ago 2024 — Jun 2026",
    tag: "MBA",
    status: "Concluido",
  },
  {
    institution: "Universidade Paulista",
    degree: "Bacharel em Ciencia da Computacao",
    period: "2006 — 2009",
    tag: "Bacharelado",
    status: "Concluido",
  },
]

export function Education() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionReveal id="formacao" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
            Formação
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Formação Acadêmica
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.8,
                delay: prefersReducedMotion ? 0 : 0.12 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {edu.tag === "MBA" ? <BookOpen size={22} /> : <GraduationCap size={22} />}
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
                    {edu.tag}
                  </span>
                  {edu.status === "Em andamento" && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {edu.status}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {edu.institution}
              </p>
              <p className="mt-4 font-mono text-sm text-primary">
                {edu.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
