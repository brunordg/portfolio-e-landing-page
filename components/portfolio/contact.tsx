"use client"

import { Mail, Linkedin, ArrowUpRight, Send } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { SectionReveal } from "./section-reveal"

const channels = [
  {
    label: "E-mail",
    value: "rodrigues.brodrigues@gmail.com",
    href: "mailto:rodrigues.brodrigues@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "brunorodrigues-rodrigues",
    href: "https://www.linkedin.com/in/brunorodrigues-rodrigues",
    icon: Linkedin,
  },
]

export function Contact() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionReveal id="contato" className="relative px-6 py-24">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-30" />
      
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm md:p-12"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.95, delay: prefersReducedMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
                Contato
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
                Vamos construir algo juntos?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Estou sempre aberto a novos desafios, projetos e conexoes profissionais.
              </p>
              <a
                href="mailto:rodrigues.brodrigues@gmail.com"
                className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                <Send size={16} />
                Enviar mensagem
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              {channels.map((ch, index) => (
                <motion.a
                  key={ch.label}
                  href={ch.href}
                  target={ch.label === "LinkedIn" ? "_blank" : undefined}
                  rel={ch.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-secondary/30 p-4 transition-all hover:border-primary/40 hover:bg-secondary/50"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : 0.65,
                    delay: prefersReducedMotion ? 0 : index * 0.08 + 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ch.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                      {ch.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                      {ch.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
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
