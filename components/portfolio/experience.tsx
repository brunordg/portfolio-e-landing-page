"use client"

import { Globe, MapPin } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { SectionReveal } from "./section-reveal"

interface ExperienceItem {
  company: string
  role: string
  period: string
  years: string
  location: string
  highlights: string[]
  technologies?: string[]
  international?: boolean
}

const experiences: ExperienceItem[] = [
  {
    company: "Banco Itaú",
    role: "Technical Lead",
    period: "Mar 2025 — Presente",
    years: "2025",
    location: "São Paulo, Brasil",
    highlights: [
      "Atuação no projeto iCarros, integrando a equipe Match Perfeito, responsável por encontrar o melhor veículo para cada comprador.",
      "Desenvolvimento e liderança técnica em soluções de recomendação e integração de sistemas.",
      "Apoio na definição da arquitetura e boas práticas de engenharia de software.",
    ],
    technologies: ["Java", "Spring Boot", "Python", "AWS"],
  },
  {
    company: "BNP Paribas Cardif",
    role: "Coordenador de Desenvolvimento",
    period: "Jan 2019 — Mar 2025",
    years: "2019",
    location: "São Paulo, Brasil",
    highlights: [
      "Gestão e planejamento das atividades da Squad com desenvolvedores em três países da América Latina (Chile, Colômbia e Brasil).",
      "Migração do sistema monolítico para nova arquitetura de módulos, facilitando desenvolvimento e entregas mais rápidas.",
      "Implantação do processo de integração contínua utilizando Jenkins, BitBucket (Git) e Sonar.",
    ],
    technologies: ["Java", "Jenkins", "BitBucket", "Sonar"],
    international: true,
  },
  {
    company: "Porto Seguro",
    role: "Analista de Sistemas Sênior",
    period: "Abr 2013 — Nov 2018",
    years: "2013",
    location: "São Paulo, Brasil",
    highlights: [
      "Redução de custos de Call Center através da implantação de sistema mobile de self care.",
      "Responsável pelo Aplicativo Conecta Center, contribuindo para decisões de negócio, arquitetura e desenvolvimento.",
      "Aumento dos níveis de satisfação do cliente (NPS, SSI, CSJ) através de funcionalidades de interação.",
    ],
    technologies: ["Java", "Kotlin", "Android", "Angular", "Firebase"],
  },
  {
    company: "Itautec",
    role: "Analista de Sistemas",
    period: "Jan 2010 — Abr 2013",
    years: "2010",
    location: "São Paulo, Brasil",
    highlights: [
      "Criação do projeto Security Way, que combina software e hardware para fortalecer o controle de acesso nas instituições financeiras.",
      "Desenvolvimento do projeto Conceito Mesa do Gerente, apresentado na CIAB 2012.",
      "Treinamento e desenvolvimento de projetos para automação bancária — Santander Espanha.",
    ],
    technologies: ["Java", ".NET", "Android", "REST"],
    international: true,
  },
  {
    company: "Dynasty Technology",
    role: "Analista de Sistemas",
    period: "2010",
    years: "2010",
    location: "São Paulo, Brasil",
    highlights: [
      "Desenvolvimento de sistemas para automação bancária e gerenciamento de Autoatendimento do Bradesco.",
    ],
    technologies: ["Java", "Websphere", "Mensageria"],
  },
  {
    company: "Disoft Solutions",
    role: "Analista de Sistemas",
    period: "2006 — 2010",
    years: "2006",
    location: "São Paulo, Brasil",
    highlights: [
      "Desenvolvimento de sistemas para financiamento de veículos e gerenciamento de versionamento.",
    ],
    technologies: ["Java"],
  },
]

export function Experience() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionReveal id="experiencia" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 pb-16 lg:flex-row lg:items-end lg:justify-between lg:pb-24">
          <div className="flex flex-col gap-5">
            <p className="eyebrow">Experiência</p>
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Trajetória profissional
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Do balcão de automação bancária à liderança técnica em recomendação de produtos — seis
            empresas, sempre no mesmo eixo: sistemas críticos e times que precisam entregar.
          </p>
        </div>

        <div className="flex flex-col gap-20 lg:gap-28">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Year panel — alternating side */}
              <div
                className={`relative flex aspect-16/10 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="grain pointer-events-none absolute inset-0 opacity-60" />
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col items-center gap-3 px-6 text-center">
                  <span className="font-display text-7xl font-bold leading-none tracking-tight text-foreground tabular-nums sm:text-8xl">
                    {exp.years}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <MapPin size={13} />
                    {exp.location}
                    {exp.international && (
                      <>
                        <span className="text-border">·</span>
                        <Globe size={13} className="text-primary" aria-label="Atuação internacional" />
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* The work */}
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold tracking-tight text-foreground">{exp.company}</h3>
                <p className="font-medium text-primary">{exp.role}</p>
                <ul className="flex flex-col gap-3">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
