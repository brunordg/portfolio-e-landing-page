import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface SectionRevealProps {
  id?: string
  className?: string
  children: ReactNode
}

export function SectionReveal({ id, className, children }: SectionRevealProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 md:scroll-mt-28", className)}>
      {children}
    </section>
  )
}
