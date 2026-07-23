"use client"

import { useRef, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

interface SectionRevealProps {
  id?: string
  className?: string
  children: ReactNode
  delay?: number
}

export function SectionReveal({ id, className, children, delay = 0 }: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [prefersReducedMotion ? 0 : 28, 0, prefersReducedMotion ? 0 : -28],
  )

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={cn("scroll-mt-24 md:scroll-mt-28", className)}
      style={{ y: parallaxY }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {
          opacity: 0,
          scale: prefersReducedMotion ? 1 : 0.99,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: prefersReducedMotion ? 0.01 : 0.85,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.section>
  )
}