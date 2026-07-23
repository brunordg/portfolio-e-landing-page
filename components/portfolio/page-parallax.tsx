"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

export function PageParallax() {
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { scrollYProgress } = useScroll()

  const topGlowY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -220])
  const topGlowScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.18])
  const midGlowY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 140])
  const midGlowX = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -80])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -120])
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.16, prefersReducedMotion ? 0.16 : 0.08])

  if (!mounted || prefersReducedMotion) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,oklch(0.65_0.18_240/0.2),transparent_26%),radial-gradient(circle_at_82%_28%,oklch(0.55_0.12_215/0.14),transparent_22%),radial-gradient(circle_at_50%_84%,oklch(0.72_0.11_260/0.08),transparent_30%)] blur-3xl" />
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.14]" />
      </div>
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: topGlowY, scale: topGlowScale }}
        className="absolute top-[-8rem] left-[-6rem] h-[32rem] w-[32rem] rounded-full bg-primary/18 blur-3xl"
      />
      <motion.div
        style={{ x: midGlowX, y: midGlowY }}
        className="absolute right-[-10rem] top-[18%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-3xl"
      />
      <motion.div
        style={{ y: gridY, opacity: gridOpacity }}
        className="bg-grid-pattern absolute inset-0"
      />
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_30%,oklch(0.11_0.015_250/0.35)_100%)]" />
    </div>
  )
}
