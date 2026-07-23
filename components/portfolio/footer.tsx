import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary">
            <span className="absolute inset-y-0 right-0 w-1/2 rounded-r-full bg-background" />
            <span className="relative font-display text-[0.6rem] font-bold text-primary">BR</span>
          </span>
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Bruno Rodrigues — São Paulo, Brasil
          </p>
        </div>

        <div className="flex items-center gap-1">
          <a
            href="mailto:rodrigues.brodrigues@gmail.com"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="E-mail"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/brunordg"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/brunorodrigues-rodrigues/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
