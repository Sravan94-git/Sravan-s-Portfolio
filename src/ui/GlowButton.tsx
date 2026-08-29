import { ArrowRight, Download, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type GlowButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  icon?: 'arrow' | 'download' | 'send'
}

const iconMap = {
  arrow: ArrowRight,
  download: Download,
  send: Send,
}

export function GlowButton({ children, href, variant = 'primary', icon = 'arrow' }: GlowButtonProps) {
  const Icon = iconMap[icon]
  const base =
    'group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300'
  const styles =
    variant === 'primary'
      ? 'border-violet-400/60 bg-violet-400/12 text-white shadow-[0_0_26px_rgba(124,58,237,0.22)] hover:shadow-[0_0_34px_rgba(124,58,237,0.36)]'
      : 'border-white/15 bg-white/5 text-slate-100 hover:border-violet-300/70'

  return (
    <motion.a
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={`${base} ${styles}`}
    >
      <span>{children}</span>
      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  )
}
