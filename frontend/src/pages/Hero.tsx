import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { heroData, stats } from '../data/portfolioData'
import { MapPin } from 'lucide-react'

function AnimatedCounter({
  value,
  duration = 1.5,
  delay = 0.2,
}: {
  value: string
  duration?: number
  delay?: number
}) {
  const numericMatch = value.match(/\d+/)
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0
  const suffix = value.replace(/\d+/, '')

  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrameId: number
    const timeoutId = window.setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const elapsed = (timestamp - startTime) / 1000
        const progress = Math.min(elapsed / duration, 1)

        // Ease-out cubic for smooth and readable counting from 0
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(easeOut * target))

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step)
        } else {
          setCount(target)
        }
      }

      animationFrameId = requestAnimationFrame(step)
    }, delay * 1000)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isInView, target, duration, delay])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] lg:h-[100svh] lg:max-h-[920px] overflow-hidden bg-[#0a0a0c] pt-20 sm:pt-20 flex flex-col justify-between scroll-mt-20">
      {/* Background PORTFOLIO text - Zoomed edge-to-edge to screen sides */}
      <div className="pointer-events-none absolute top-[52px] sm:top-[56px] lg:top-[60px] inset-x-0 w-full select-none z-[1] flex justify-center overflow-hidden">
        <span
          className="font-display text-[14.8vw] sm:text-[15.2vw] lg:text-[15.6vw] xl:text-[16vw] font-black uppercase tracking-[-0.01em] leading-none text-center block w-full whitespace-nowrap"
          style={{
            background: 'linear-gradient(180deg, rgba(43,80,255,0.28) 0%, rgba(43,80,255,0.05) 80%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          PORTFOLIO
        </span>
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(43,80,255,0.18)_0%,transparent_70%)] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-20 left-10 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(43,80,255,0.1)_0%,transparent_70%)] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-5 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between">
        {/* Main hero grid - tight gap brings portrait directly beside text */}
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] lg:gap-2 items-end my-auto pt-2">
          {/* Left: text content - moved down on mobile to cleanly clear navbar */}
          <div className="relative z-10 order-1 pt-12 sm:pt-6 lg:pt-0 pb-2 sm:pb-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-[20px] sm:text-[26px] text-white/80 italic font-medium mb-1"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[44px] sm:text-[60px] lg:text-[74px] font-black leading-[0.95] tracking-[-0.03em] text-white uppercase"
            >
              {heroData.name.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4"
            >
              <h2 className="text-[13px] sm:text-[15px] font-bold uppercase tracking-[0.15em] text-[#3865ff]">
                Software Engineer &
              </h2>
              <h2 className="text-[13px] sm:text-[15px] font-bold uppercase tracking-[0.15em] text-[#3865ff]">
                Full-Stack Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-4 max-w-[440px] text-[13px] sm:text-[14px] leading-[1.7] text-white/55 font-normal"
            >
              {heroData.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-5 flex items-center gap-2 text-[11px] font-medium text-white/50"
            >
              <MapPin className="h-3.5 w-3.5 text-[#3865ff]" />
              <span>Hyderabad, India</span>
            </motion.div>
          </div>

          {/* Right: profile photo - hidden on mobile screens, shown on md and up */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="hidden md:flex relative order-2 mx-auto md:mx-0 justify-center lg:justify-start lg:-ml-4 xl:-ml-8"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(43,80,255,0.22)_0%,transparent_70%)] blur-[40px]" />
              <img
                src={heroData.profileImage}
                alt={`${heroData.name} - Developer Portrait`}
                className="relative h-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[460px] w-auto object-contain object-bottom transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats row - elevated to appear above the fold on initial load */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-auto flex flex-wrap items-center gap-6 sm:gap-10 pb-4 sm:pb-6 border-t border-white/[0.08] pt-4"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-baseline gap-3">
              <span className="font-display text-[30px] sm:text-[38px] font-black tracking-[-0.03em] text-[#3865ff]">
                <AnimatedCounter value={stat.value} delay={0.4 + idx * 0.12} />
              </span>
              <div className="leading-tight">
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 block">
                  {stat.label.split(' ').slice(0, 1).join(' ')}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 block">
                  {stat.label.split(' ').slice(1).join(' ')}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
