import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-4 sm:px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary font-mono text-xs font-bold text-primary-foreground">
            BR
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Bruno Rodrigues
          </p>
        </div>
        
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <a
            href="https://github.com/brunordg"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded p-1.5 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/brunorrodrigues"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded p-1.5 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
