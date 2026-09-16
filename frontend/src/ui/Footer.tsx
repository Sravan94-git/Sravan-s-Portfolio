import { ArrowUp } from 'lucide-react'
import { navLinks } from '../data/portfolioData'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-purple-500/15 bg-[#090514] px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center">
        
        <a href="#home" className="group inline-flex items-center justify-center">
          <span className="text-lg font-bold tracking-tight text-white">
            Sravan<span className="text-purple-400">.</span>
          </span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-widest text-purple-300/70">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-purple-500/10 pt-8 sm:flex-row text-xs text-purple-300/60">
          <p>© 2026 Sravan. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-950/40 px-4 py-2 text-purple-300 transition hover:border-purple-400 hover:text-white"
          >
            Back to Top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}
