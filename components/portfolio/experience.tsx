"use client"

import { Globe, ChevronRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { SectionReveal } from "./section-reveal"

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
  technologies?: string[]
  international?: boolean
}

const experiences: ExperienceItem[] = [
  {
    company: "Banco Itau",
    role: "Technical Lead",
    period: "Mar 2025 — Presente",
    location: "Sao Paulo, Brasil",
    highlights: [
      "Atuacao no projeto iCarros, integrando a equipe Match Perfeito, responsavel por encontrar o melhor veiculo para cada comprador.",
      "Desenvolvimento e lideranca tecnica em solucoes de recomendacao e integracao de sistemas.",
      "Apoio na definicao da arquitetura e boas praticas de engenharia de software.",
    ],
    technologies: ["Java", "Spring Boot", "Python", "AWS"],
  },
  {
    company: "BNP Paribas Cardif",
    role: "Coordenador de Desenvolvimento",
    period: "Jan 2019 — Mar 2025",
    location: "Sao Paulo, Brasil",
    highlights: [
      "Gestao e planejamento das atividades da Squad com desenvolvedores em tres paises da America Latina (Chile, Colombia e Brasil).",
      "Migracao do sistema monolitico para nova arquitetura de modulos, facilitando desenvolvimento e entregas mais rapidas.",
      "Implantacao do processo de integracao continua utilizando Jenkins, BitBucket(Git) e Sonar.",
    ],
    technologies: ["Java", "Jenkins", "BitBucket", "Sonar"],
    international: true,
  },
  {
    company: "Porto Seguro",
    role: "Analista de Sistemas Senior",
    period: "Abr 2013 — Nov 2018",
    location: "Sao Paulo, Brasil",
    highlights: [
      "Reducao de custos de Call Center atraves da implantacao de sistema mobile de self care.",
      "Responsavel pelo Aplicativo Conecta Center, contribuindo para decisoes de negocio, arquitetura e desenvolvimento.",
      "Aumento dos niveis de satisfacao do cliente (NPS, SSI, CSJ) atraves de funcionalidades de interacao.",
    ],
    technologies: ["Java", "Kotlin", "Android", "Angular", "Firebase"],
  },
  {
    company: "Itautec",
    role: "Analista de Sistemas",
    period: "Jan 2010 — Abr 2013",
    location: "Sao Paulo, Brasil",
    highlights: [
      "Criacao do projeto Security Way que combina software e hardware para fortalecer o controle de acesso nas instituicoes financeiras.",
      "Desenvolvimento do projeto Conceito Mesa do Gerente apresentado na CIAB 2012.",
      "Treinamento e desenvolvimento de projetos para automacao bancaria — Santander Espanha.",
    ],
    technologies: ["Java", ".NET", "Android", "REST"],
    international: true,
  },
  {
    company: "Dynasty Technology",
    role: "Analista de Sistemas",
    period: "2010",
    location: "Sao Paulo, Brasil",
    highlights: [
      "Desenvolvimento de sistemas para automacao bancaria e gerenciamento de Autoatendimento do Bradesco.",
    ],
    technologies: ["Java", "Websphere", "Mensageria"],
  },
  {
    company: "Disoft Solutions",
    role: "Analista de Sistemas",
    period: "2006 — 2010",
    location: "Sao Paulo, Brasil",
    highlights: [
      "Desenvolvimento de sistemas para financiamento de veiculos e gerenciamento de versionamento.",
    ],
    technologies: ["Java"],
  },
]

export function Experience() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionReveal id="experiencia" className="relative px-6 py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
            Experiencia
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Trajetoria Profissional
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-linear-to-b from-primary via-border to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                className="relative flex flex-col gap-4 pl-8 md:pl-0"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.75,
                  ease: [0.22, 1, 0.36, 1],
                  delay: prefersReducedMotion ? 0 : 0.12 + index * 0.12,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute top-1/2 left-0 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2"
                />

                <div className={`rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card md:w-[calc(50%-1rem)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        {exp.international && (
                          <Globe size={14} className="text-primary" />
                        )}
                      </div>
                      <p className="mt-0.5 font-medium text-primary">{exp.role}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
                      {exp.period.split(" — ")[0]}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <ChevronRight
                          size={14}
                          className="mt-1 shrink-0 text-primary/60"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-secondary-foreground"
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
      </div>
    </SectionReveal>
  )
}
