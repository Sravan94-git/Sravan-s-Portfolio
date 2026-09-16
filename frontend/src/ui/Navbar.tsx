import { useEffect, useState } from 'react'
import { Mail, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/portfolioData'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#8750f7]/10 bg-[#050609]/95 backdrop-blur-xl transition-all duration-500 ${
        scrolled ? 'py-4 shadow-[0_10px_30px_rgba(5,6,9,0.8)]' : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-6 lg:px-10">
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-[2.5px] border-white bg-transparent text-white transition-transform group-hover:scale-105">
            <span className="font-sans text-3xl font-black leading-none text-white">S</span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-white transition hover:text-[#a978ff]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://www.linkedin.com/in/sravan-sunkara-9ab532250/"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8750f7] bg-transparent text-[#a978ff] text-[10px] font-bold transition hover:bg-[#8750f7] hover:text-white hover:scale-110"
            aria-label="LinkedIn"
          >
            <span className="font-mono">in</span>
          </a>

          <a
            href="https://github.com/Sravan94-git"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8750f7] bg-transparent text-[#a978ff] transition hover:bg-[#8750f7] hover:text-white hover:scale-110"
            aria-label="GitHub"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          <a
            href="https://leetcode.com/u/Sravan94/"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8750f7] bg-transparent transition hover:bg-[#8750f7] hover:scale-110"
            aria-label="LeetCode"
          >
            <img
              src="https://cdn.simpleicons.org/leetcode/a978ff"
              alt=""
              className="h-4 w-4 object-contain"
            />
          </a>

          <a
            href="mailto:sravansunkara04@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8750f7] bg-transparent text-[#a978ff] transition hover:bg-[#8750f7] hover:text-white hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>

        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-[#8750f7]/30 bg-[#140c1d] p-2.5 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-6 mt-4 rounded-2xl border border-[#8750f7]/30 bg-[#0f0715]/98 p-6 backdrop-blur-2xl md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-[#8750f7]/20 hover:text-[#8750f7]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
