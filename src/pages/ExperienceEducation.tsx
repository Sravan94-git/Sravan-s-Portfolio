import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap, Briefcase } from 'lucide-react'
import { certifications, educationItems, experienceItems, publication } from '../data/portfolioData'

export function ExperienceEducation() {
  return (
    <section id="resume" className="mx-auto max-w-7xl px-4 py-20 scroll-mt-24 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="inline-block bg-gradient-to-r from-[#8750f7] via-[#b58aff] to-[#f5f0ff] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-[42px]">
          My Resume
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/60">
          A snapshot of my academic foundation and professional experience building software and AI products.
        </p>
      </div>
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

      <div className="mt-14 grid gap-10 border-t border-purple-500/15 pt-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-900/40 text-purple-400">
              <Award className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Certifications</h2>
          </div>
          <div className="mt-6 space-y-5">
            {certifications.map((certification) => (
              <div key={certification.title} className="border-l border-purple-500/30 pl-5">
                <h3 className="text-base font-bold text-white">{certification.title}</h3>
                <p className="mt-1 text-sm text-purple-300/80">{certification.issuer}</p>
                <p className="mt-1 text-xs font-mono uppercase tracking-wider text-purple-400">{certification.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-900/40 text-purple-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Publication</h2>
          </div>
          <div className="mt-6 border-l border-purple-500/30 pl-5">
            <h3 className="text-base font-bold leading-7 text-white">{publication.title}</h3>
            <p className="mt-2 text-sm text-purple-300/80">{publication.venue}</p>
            <p className="mt-1 text-xs font-mono uppercase tracking-wider text-purple-400">{publication.date}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
