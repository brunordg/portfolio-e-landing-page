"use client"

import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { SectionReveal } from "./section-reveal"

const channels = [
  {
    label: "E-mail",
    value: "rodrigues.brodrigues@gmail.com",
    href: "mailto:rodrigues.brodrigues@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "brunorodrigues-rodrigues",
    href: "https://www.linkedin.com/in/brunorodrigues-rodrigues",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "brunordg",
    href: "https://github.com/brunordg",
    icon: Github,
    external: true,
  },
]

export function Contact() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionReveal id="contato" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-14"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="grain pointer-events-none absolute inset-0 opacity-50" />
          <div
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="flex flex-col gap-5">
              <p className="eyebrow">Contato</p>
              <h2 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                Vamos construir algo juntos?
              </h2>
              <p className="max-w-md leading-relaxed text-muted-foreground">
                Estou sempre aberto a novos desafios, projetos e conexões profissionais. Escreva —
                respondo pessoalmente.
              </p>
              <a
                href="mailto:rodrigues.brodrigues@gmail.com"
                className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Enviar mensagem
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="flex flex-col divide-y divide-border">
              {channels.map((ch, index) => (
                <motion.a
                  key={ch.label}
                  href={ch.href}
                  target={ch.external ? "_blank" : undefined}
                  rel={ch.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 py-5 first:pt-0 last:pb-0"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : 0.6,
                    delay: prefersReducedMotion ? 0 : index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ch.icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {ch.label}
                    </span>
                    <span className="mt-1 block truncate font-medium text-foreground">
                      {ch.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="ml-auto shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  )
}
