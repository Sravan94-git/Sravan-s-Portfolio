import { motion } from 'framer-motion'
import { skillsList } from '../data/portfolioData'

export function SkillsGrid() {
  return (
    <section id="skills" className="relative w-full bg-[#09070f] px-4 py-24 scroll-mt-24 sm:px-6 lg:py-28">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block bg-gradient-to-r from-[#8750f7] via-[#b58aff] to-[#f5f0ff] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-[42px]"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-sm font-medium uppercase tracking-[0.28em] text-white/65"
        >
          TECH STACK
        </motion.p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-4 justify-items-center gap-4 sm:grid-cols-6 sm:gap-5 lg:grid-cols-9">
        {skillsList.map((skill, idx) => {
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              title={skill.name}
              aria-label={skill.name}
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-[#8750f7]/30 bg-[#0d0b15]/70 p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b995ff]/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
            >
              <img src={skill.logo} alt="" className="h-8 w-8 object-contain transition-transform group-hover:scale-110" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
