import { ArrowUpRight, Code2, Sparkles } from 'lucide-react'

export function GithubStats() {
  const githubUsername = (import.meta.env.VITE_GITHUB_USERNAME as string | undefined)?.trim()
  const resolvedUsername = githubUsername && githubUsername !== 'your-github-username' ? githubUsername : 'octocat'
  const isConfigured = Boolean(githubUsername && githubUsername !== 'your-github-username')

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(resolvedUsername)}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000`
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${encodeURIComponent(resolvedUsername)}&layout=compact&theme=dark&hide_border=true&bg_color=00000000`
  const streakUrl = `https://streak-stats.demolab.com/?user=${encodeURIComponent(resolvedUsername)}&theme=dark&hide_border=true`

  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="mb-2 flex items-center gap-2 text-[var(--accent)]">
            <Code2 className="h-5 w-5" />
            <span className="font-semibold">GitHub activity</span>
          </div>
          <p className="text-sm text-[var(--foreground-muted)]">
            Pull in live GitHub stats with a single username override.
          </p>
        </div>
        <a
          href={isConfigured ? `https://github.com/${resolvedUsername}` : 'https://github.com'}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
        >
          <Sparkles className="h-4 w-4" />
          View profile
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {!isConfigured && (
        <div className="mb-4 rounded-2xl border border-dashed border-[rgba(37,99,235,0.24)] bg-[var(--surface-strong)] p-3 text-sm text-[var(--foreground-muted)]">
          Add your GitHub username to the <span className="font-semibold text-[var(--foreground)]">VITE_GITHUB_USERNAME</span> value in your .env file to replace the demo card.
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4">
          <img src={statsUrl} alt="GitHub stats card" className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-2" loading="lazy" />
          <img src={langsUrl} alt="Top languages card" className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-2" loading="lazy" />
        </div>
        <div className="grid gap-4">
          <img src={streakUrl} alt="GitHub streak card" className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-2" loading="lazy" />
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4 text-sm text-[var(--foreground-muted)]">
            <p className="font-semibold text-[var(--foreground)]">Tip</p>
            <p className="mt-2 leading-6">
              These cards are powered by public GitHub profile endpoints, so they work without any API keys.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
