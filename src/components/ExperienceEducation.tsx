import { motion } from 'framer-motion'
import { GraduationCap, Briefcase } from 'lucide-react'
import { educationItems, experienceItems } from '../data/portfolioData'

export function ExperienceEducation() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-20 scroll-mt-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        
        {/* Left Column: Education */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-900/40 text-purple-400">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Education
            </h2>
          </div>

          <div className="relative mt-8 space-y-8 pl-6 border-l border-purple-500/20">
            {educationItems.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Node Dot */}
                <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-purple-400 bg-[#090514] shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono">
                  {item.period}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-purple-300/80">
                  {item.institution}
                </p>
                <p className="mt-2 text-sm text-purple-200/60 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-900/40 text-purple-400">
              <Briefcase className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Work Experience
            </h2>
          </div>

          <div className="relative mt-8 space-y-8 pl-6 border-l border-purple-500/20">
            {experienceItems.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Node Dot */}
                <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-purple-400 bg-[#090514] shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono">
                  {item.period}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-purple-300/80">
                  {item.company}
                </p>
                <p className="mt-2 text-sm text-purple-200/60 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
