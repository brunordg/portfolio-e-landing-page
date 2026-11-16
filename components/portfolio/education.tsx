"use client"

import { GraduationCap, BookOpen } from "lucide-react"

import { SectionReveal } from "./section-reveal"

const education = [
  {
    institution: "Universidade Presbiteriana Mackenzie",
    degree: "MBA em Governança Digital",
    period: "Ago 2024 — Jun 2026",
    tag: "MBA",
    status: "Concluído",
  },
  {
    institution: "Universidade Paulista",
    degree: "Bacharel em Ciência da Computação",
    period: "2006 — 2009",
    tag: "Bacharelado",
    status: "Concluído",
  },
]

export function Education() {
  return (
    <SectionReveal id="formacao" className="relative px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 pb-14">
          <p className="eyebrow">Formação</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Formação acadêmica
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {edu.tag === "MBA" ? <BookOpen size={20} /> : <GraduationCap size={20} />}
                </span>
                <span className="rounded-full bg-card-elevated px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {edu.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="mt-auto pt-2 font-mono text-sm tabular-nums text-primary">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
