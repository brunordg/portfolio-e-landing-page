"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

export function CursorGlow() {
  const prefersReducedMotion = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 70, damping: 18, mass: 0.2 })
  const y = useSpring(rawY, { stiffness: 70, damping: 18, mass: 0.2 })

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const handlePointerMove = (event: PointerEvent) => {
      rawX.set(event.clientX)
      rawY.set(event.clientY)
    }

    window.addEventListener("pointermove", handlePointerMove)

    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [prefersReducedMotion, rawX, rawY])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/18 blur-3xl mix-blend-screen"
        style={{ x, y }}
      />
      <motion.div
        className="absolute left-0 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-2xl"
        style={{ x, y }}
      />
    </div>
  )
}