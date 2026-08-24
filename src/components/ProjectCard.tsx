import { ArrowUpRight, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  name: string
  description: string
  technologies: string[]
  github: string
  demo: string
  accent: string
}

export function ProjectCard({ name, description, technologies, github, demo, accent }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
      className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-xl"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-80`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_35%)]" />
      <div className="relative z-10">
        <div className="mb-4 flex h-36 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] text-sm text-[var(--foreground-muted)]">
          Project Visual
        </div>
        <h3 className="text-xl font-bold text-[var(--foreground)]">{name}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs text-[var(--foreground-muted)]">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a href={github} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] hover:border-[var(--accent)]">
            <Code2 className="h-4 w-4" /> GitHub
          </a>
          <a href={demo} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-[var(--foreground)]">
            Live Demo <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
