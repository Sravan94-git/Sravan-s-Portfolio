import { ArrowUp } from 'lucide-react'
import { navLinks } from '../data/portfolioData'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.04] bg-[#0a0a0c] px-5 sm:px-8 lg:px-12 py-12">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-8 text-center">
        
        <a href="#home" className="group inline-flex items-center justify-center">
          <span className="font-display text-[18px] font-bold tracking-tight text-white">
            Sravan<span className="text-[#3865ff]">.</span>
          </span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-[#3865ff]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex w-full max-w-[1280px] flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 sm:flex-row text-[11px] text-white/30">
          <p>© 2026 Sravan. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-[#111114] px-4 py-2 text-white/40 transition-all hover:border-[#3865ff]/30 hover:text-[#3865ff]"
          >
            Back to Top <ArrowUp className="h-3 w-3" />
          </button>
        </div>

      </div>
    </footer>
  )
}
