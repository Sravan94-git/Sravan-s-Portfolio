import { motion } from 'framer-motion'
import { heroData } from '../data/portfolioData'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[78vh] items-center overflow-hidden pt-28 pb-16 bg-[#0f0715]">
      {/* Background ambient radial violet glow */}
      <div className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(135,80,247,0.18)_0%,transparent_70%)] blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 left-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-[1340px] items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        
        {/* LEFT COLUMN: Circular Profile Photo with Minimal Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto flex items-center justify-center w-full max-w-[380px] lg:max-w-[440px]"
        >
          <div className="relative flex w-full max-w-[420px] items-center justify-center transition-transform duration-500 hover:scale-[1.015]">
            <img
              src={heroData.profileImage}
              alt="Sravan - Developer Portrait"
              className="h-auto max-h-[520px] w-full object-contain object-center transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Typography & Action Buttons */}
        <div className="relative z-10 text-left">
          {/* Greeting */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2"
          >
            Hi, I am {heroData.name}.
          </motion.h3>

          {/* Headline (Decreased Font Size) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.12] tracking-tight mb-5"
          >
            <span className="bg-gradient-to-r from-[#8750f7] via-[#9f65ff] to-[#c099ff] bg-clip-text text-transparent block">
              A Software Engineer &amp;
            </span>
            <span className="bg-gradient-to-r from-[#8750f7] via-[#9f65ff] to-[#c099ff] bg-clip-text text-transparent block">
              AI Developer
            </span>
          </motion.h1>

          {/* Bio Description (Decreased Font Size) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-sm sm:text-base font-normal leading-relaxed text-white/70 max-w-md mb-7"
          >
            I design and code beautifully simple things and I love what I do. Just simple like that!
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary navigation actions */}
            <a
              href="#contact"
              className="rounded-full border border-white/50 bg-transparent px-7 py-3 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#0f0715] hover:scale-105"
            >
              Request Resume
            </a>

            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-[#8750f7] via-[#7c3aed] to-[#2a1454] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_0_20px_rgba(135,80,247,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(135,80,247,0.7)] hover:scale-105"
            >
              View Works
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
