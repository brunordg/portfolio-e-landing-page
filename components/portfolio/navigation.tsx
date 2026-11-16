"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin } from "lucide-react"

const links = [
  { label: "Início", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Formação", href: "#formacao" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-5">
        <a href="#sobre" className="flex shrink-0 items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary">
            <span className="absolute inset-y-0 right-0 w-1/2 rounded-r-full bg-background" />
            <span className="relative font-display text-[0.7rem] font-bold text-primary">BR</span>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Bruno<span className="text-muted-foreground"> Rodrigues</span>
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground underline-offset-8 transition-colors hover:text-foreground hover:underline hover:decoration-primary hover:decoration-2"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-6">
          <a
            href="https://github.com/brunordg"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary sm:inline-flex"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/brunorodrigues-rodrigues/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary sm:inline-flex"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#contato"
            className="hidden rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none md:inline-flex"
          >
            Fale comigo
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-foreground lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {[...links, { label: "Contato", href: "#contato" }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
