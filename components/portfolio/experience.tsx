"use client"

import { Globe, MapPin } from "lucide-react"

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
    company: "Banco Itaú",
    role: "Technical Lead",
    period: "Mar 2025 — Presente",
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
    location: "São Paulo, Brasil",
    highlights: [
      "Desenvolvimento de sistemas para financiamento de veículos e gerenciamento de versionamento.",
    ],
    technologies: ["Java"],
  },
]

export function Experience() {
  return (
    <SectionReveal id="experiencia" className="relative px-6 py-20 lg:py-28">
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

        <div className="flex flex-col divide-y divide-border border-y border-border">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="group grid gap-4 py-10 lg:grid-cols-[14rem_1fr] lg:gap-16"
            >
              <div className="flex flex-col gap-1.5 font-mono text-xs text-muted-foreground">
                <span className="uppercase tracking-[0.14em] text-primary">{exp.period}</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} />
                  {exp.location}
                  {exp.international && (
                    <Globe size={13} className="text-primary" aria-label="Atuação internacional" />
                  )}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">{exp.company}</h3>
                <p className="font-medium text-primary">{exp.role}</p>
                <ul className="flex flex-col gap-2.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="leading-relaxed text-muted-foreground">
                      {h}
                    </li>
                  ))}
                </ul>
                {exp.technologies && (
                  <p className="pt-1 font-mono text-xs text-secondary-foreground">
                    {exp.technologies.join(" · ")}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
