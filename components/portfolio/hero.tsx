"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { MapPin, ArrowRight, Terminal } from "lucide-react"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const backgroundShift = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : -140],
  )
  const glowShift = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -80])
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.12])
  const imageShift = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 56])
  const imageTilt = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 4])
  const cardsShift = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 36])
  const stackShift = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -24])

  const rise = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 18,
    },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section ref={sectionRef} id="sobre" className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid pattern background */}
        <motion.div
          style={{ y: backgroundShift }}
          className="bg-grid-pattern animate-grid-drift absolute inset-0 opacity-50"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />

        {/* Blue glow effect */}
        <motion.div
          style={{ y: glowShift, scale: glowScale }}
          className="animate-float-slow absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        />

        <motion.div
          style={{ y: glowShift, scale: glowScale }}
          className="-right-32 -bottom-40 h-104 w-104 absolute rounded-full bg-cyan-400/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20">
        {/* Top bar with status */}
        <motion.div
          className="mb-12 flex items-center gap-3"
          initial="hidden"
          animate="visible"
          variants={rise}
          custom={0}
        >
          <div className="flex h-3 w-3 items-center justify-center">
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-500/60" />
            <span className="relative h-2 w-2 rounded-full bg-green-500" />
          </div>
          <span className="font-mono text-sm text-muted-foreground">
            Disponivel para novos projetos
          </span>
        </motion.div>

        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          {/* Left content */}
          <div className="flex-1 space-y-8">
            {/* Terminal-like tag */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2"
              initial="hidden"
              animate="visible"
              variants={rise}
              custom={0.12}
            >
              <Terminal size={14} className="text-primary" />
              <span className="font-mono text-sm text-muted-foreground">Tech Lead @ Banco Itau</span>
            </motion.div>

            <div>
              <motion.h1
                className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
                initial="hidden"
                animate="visible"
                variants={rise}
                custom={0.2}
              >
                Bruno
                <br />
                <span className="text-primary">Rodrigues</span>
              </motion.h1>
              <motion.p
                className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
                initial="hidden"
                animate="visible"
                variants={rise}
                custom={0.34}
              >
                Arquiteto de solucoes e lider tecnico com{" "}
                <span className="text-foreground font-medium">15+ anos de experiencia</span>{" "}
                em projetos bancarios, telecomunicacoes e seguros.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial="hidden"
              animate="visible"
              variants={rise}
              custom={0.46}
            >
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Entrar em contato
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#experiencia"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Ver experiencia
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center gap-2 text-muted-foreground"
              initial="hidden"
              animate="visible"
              variants={rise}
              custom={0.58}
            >
              <MapPin size={16} />
              <span className="text-sm">Sao Paulo, Brasil</span>
            </motion.div>
          </div>

          {/* Right - Profile photo */}
          <div className="relative shrink-0 mx-auto">
            <motion.div
              style={{ y: imageShift, rotate: imageTilt }}
              className="glow-blue relative h-56 w-56 mx-auto overflow-hidden rounded-2xl border border-border sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96"
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96, y: prefersReducedMotion ? 0 : 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            >
              <Image
                src="/images/profile.png"
                alt="Bruno Rodrigues - Tech Lead"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
            
            {/* Stats cards floating */}
            <motion.div
              style={{ y: cardsShift }}
              className="hidden md:block absolute md:-bottom-6 md:-left-6 rounded-xl border border-border bg-card/90 p-4 backdrop-blur-sm"
              animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-xs text-muted-foreground">Anos de<br />experiencia</p>
            </motion.div>
            
            <motion.div
              style={{ y: cardsShift }}
              className="hidden md:block absolute md:-top-4 md:-right-4 rounded-xl border border-border bg-card/90 p-4 backdrop-blur-sm"
              animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <p className="text-3xl font-bold text-primary">6+</p>
              <p className="text-xs text-muted-foreground">Empresas<br />atendidas</p>
            </motion.div>
          </div>
        </div>

        {/* Tech stack */}
        <motion.div
          style={{ y: stackShift }}
          className="mt-20 border-t border-border pt-10"
          initial="hidden"
          animate="visible"
          variants={rise}
          custom={0.7}
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Stack principal
          </p>
          <div className="flex flex-wrap gap-3">
            {['Java', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'Python', 'Apache Camel', 'Oracle'].map((tech, index) => (
              <motion.span
                key={tech}
                className="rounded-lg border border-border bg-secondary/30 px-4 py-2 font-mono text-sm text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-secondary/50"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.45, delay: 0.82 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
