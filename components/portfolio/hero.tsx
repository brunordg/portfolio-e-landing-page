"use client"

import Image from "next/image"
import { motion, MotionConfig } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"

const stack = ["Java", "Spring Boot", "AWS", "Docker", "Kubernetes", "Python", "Apache Camel", "Oracle"]

export function Hero() {
  const rise = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  }

  return (
    <MotionConfig reducedMotion="user">
    <section id="sobre" className="relative overflow-hidden scroll-mt-24">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-8 lg:pb-32 lg:pt-40">
        {/* Left — the claim */}
        <div className="flex flex-col gap-7">
          <motion.p className="eyebrow" initial="hidden" animate="visible" variants={rise} custom={0}>
            Tech Lead @ Banco Itaú
          </motion.p>

          <motion.h1
            className="text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            initial="hidden"
            animate="visible"
            variants={rise}
            custom={0.1}
          >
            Olá,
            <br />
            sou Bruno
            <br />
            <span className="text-primary">Rodrigues</span>
          </motion.h1>

          <motion.p
            className="max-w-lg text-base leading-relaxed text-muted-foreground"
            initial="hidden"
            animate="visible"
            variants={rise}
            custom={0.2}
          >
            Arquiteto de soluções e líder técnico com{" "}
            <span className="font-medium text-foreground">15+ anos de experiência</span> em projetos
            bancários, telecomunicações e seguros.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial="hidden"
            animate="visible"
            variants={rise}
            custom={0.3}
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none"
            >
              Entrar em contato
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#experiencia"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ver trajetória
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
            initial="hidden"
            animate="visible"
            variants={rise}
            custom={0.4}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-primary" />
              São Paulo, Brasil
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Disponível para novos projetos
            </span>
          </motion.div>
        </div>

        {/* Right — portrait held by the emerald arc */}
        <motion.div
          className="relative mx-auto w-full max-w-88 lg:max-w-none"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="group portrait-ring relative aspect-square rounded-full p-3.5">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-card">
              <Image
                src="/images/profile.png"
                alt="Bruno Rodrigues — Tech Lead"
                fill
                sizes="(max-width: 1024px) 22rem, 26rem"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stack rail */}
      <div className="relative mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:gap-10">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Stack principal
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {stack.map((tech, index) => (
              <motion.span
                key={tech}
                className="font-mono text-sm text-secondary-foreground transition-colors hover:text-primary"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.5 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
    </MotionConfig>
  )
}
