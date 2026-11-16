"use client"

import { Server, Cloud, Users, Zap, ArrowUpRight } from "lucide-react"

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
    title: "Metodologias & Liderança",
    icon: Users,
    skills: ["Scrum", "Management 3.0", "Lean", "Technical Leadership"],
  },
  {
    title: "Integração & Serviços",
    icon: Zap,
    skills: ["REST", "SOAP", "JBoss Fuse / ESB", "Websphere", "Firebase", "Mensageria"],
  },
]

export function Skills() {
  return (
    <SectionReveal id="habilidades" className="relative px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
        {/* Card grid — second column drops half a step, as on the reference sheet */}
        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className={`group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-card-elevated px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* The argument */}
        <div className="flex flex-col gap-6">
          <p className="eyebrow">Minhas competências</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Por que me chamar para o próximo projeto?
          </h2>
          <p className="max-w-prose leading-relaxed text-muted-foreground">
            Quinze anos em sistemas que não podem cair: automação bancária, seguros e
            autoatendimento. O repertório vem daí — escolher a arquitetura simples em vez da nova, e
            saber onde cada decisão costuma cobrar a conta.
          </p>
          <p className="max-w-prose leading-relaxed text-muted-foreground">
            Migração de monolito para arquitetura modular, integração contínua onde deploy era evento
            agendado, produtos mobile que reduziram custo de call center.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#experiencia"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none"
            >
              Ver trajetória completa
            </a>
            <a
              href="https://www.linkedin.com/in/brunorodrigues-rodrigues/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
            >
              Perfil no LinkedIn
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
