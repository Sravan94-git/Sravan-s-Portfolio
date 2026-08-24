type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)]/80">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-[var(--foreground)] md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] md:text-base">{description}</p>
    </div>
  )
}
