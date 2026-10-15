import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-[#111114] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#3865ff]"
      >
          <span className="h-1.5 w-1.5 rounded-full bg-[#3865ff] shadow-[0_0_8px_rgba(43,80,255,0.6)]" />
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 font-display text-[36px] font-black tracking-[-0.03em] text-white sm:text-[44px] uppercase"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-[14px] text-white/50"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#2b50ff] via-[#6085ff] to-[#2b50ff] shadow-[0_0_10px_rgba(43,80,255,0.5)]"
    />
  )
}

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    let x = 0
    let y = 0
    let tx = 0
    let ty = 0

    const move = (event: MouseEvent) => {
      tx = event.clientX
      ty = event.clientY
    }

    const animate = () => {
      x += (tx - x) * 0.15
      y += (ty - y) * 0.15
      el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`
      frame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[400px] w-[400px] rounded-full opacity-50 mix-blend-screen md:block"
      style={{
        background: 'radial-gradient(circle, rgba(43,80,255,0.18) 0%, rgba(43,80,255,0.04) 50%, transparent 70%)',
        filter: 'blur(25px)',
      }}
    />
  )
}

export function ParticleField({ count = 40 }: { count?: number }) {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; s: number; d: number; delay: number }>>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 2 + 1,
        d: Math.random() * 8 + 6,
        delay: Math.random() * 5,
      })),
    )
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <span
          key={`${particle.x}-${particle.y}-${index}`}
          className="absolute rounded-full bg-[#3865ff]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.s}px`,
            height: `${particle.s}px`,
            boxShadow: '0 0 6px rgba(43,80,255,0.6)',
            animation: `float ${particle.d}s ease-in-out ${particle.delay}s infinite`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  )
}
