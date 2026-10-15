import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react'
import { educationItems, experienceItems, certifications, skillsList, publication } from '../data/portfolioData'

const workProcess = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understanding goals, requirements, and constraints of the project.',
    color: '#2b50ff',
  },
  {
    step: '02',
    title: 'Architect',
    description: 'Designing system architecture, database schemas, and API contracts.',
    color: '#2b50ff',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Writing clean, maintainable code with a focus on scalability.',
    color: '#2b50ff',
  },
  {
    step: '04',
    title: 'Test',
    description: 'Building quality through automated testing and code reviews.',
    color: '#2b50ff',
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'Containerizing, automating CI/CD, and launching with confidence.',
    color: '#2b50ff',
  },
]

export function EducationSkills() {
  return (
    <section id="skills" className="relative w-full bg-[#f5f6fb] text-[#0a0a0c] px-5 sm:px-8 lg:px-12 pt-16 pb-24 scroll-mt-20 overflow-hidden">
      {/* Decorative large background text matching Image 3 editorial font aesthetic */}
      <div className="pointer-events-none absolute -top-6 -right-6 select-none z-0 opacity-[0.03]">
        <span className="font-display text-[140px] sm:text-[180px] lg:text-[220px] font-black uppercase text-black leading-none">
          SKILLS
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2b50ff]">
              Background & Capabilities
            </span>
            <div className="h-px flex-1 bg-black/[0.08]" />
          </div>
          <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[44px] font-black uppercase tracking-[-0.02em] text-[#0a0a0c]">
            Education & Skills
          </h2>
        </div>

        {/* Three-column grid matching the reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_0.8fr] gap-6">

          {/* LEFT: Education & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2b50ff]/10 text-[#2b50ff]">
                <GraduationCap className="h-4.5 w-4.5" />
              </div>
              <h2 className="font-display text-[18px] sm:text-[22px] font-black uppercase tracking-[-0.01em] text-[#0a0a0c]">
                Education & Skills
              </h2>
            </div>

            {/* Education label */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-4 bg-[#2b50ff]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2b50ff]">Education</span>
              </div>

              {educationItems.map((item, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[13px] font-bold text-[#0a0a0c] leading-snug">{item.title}</h3>
                    <span className="text-[10px] font-mono font-bold text-[#2b50ff] bg-[#2b50ff]/10 rounded px-2 py-0.5 whitespace-nowrap ml-3">
                      {item.period.includes('—') ? item.period.split('—').map(d => d.trim().split(' ').pop()).join(' - ') : item.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#555567] mt-0.5">{item.institution}</p>
                </div>
              ))}

              {/* Certifications */}
              {certifications.map((cert, idx) => (
                <div key={idx} className="mb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[13px] font-bold text-[#0a0a0c] leading-snug">{cert.title}</h3>
                    <span className="text-[10px] font-mono font-bold text-[#2b50ff] whitespace-nowrap ml-3">{cert.date}</span>
                  </div>
                  <p className="text-[11px] text-[#555567] mt-0.5">{cert.issuer}</p>
                </div>
              ))}
            </div>

            {/* Skills grid */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-4 bg-[#2b50ff]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2b50ff]">Skills & Technologies</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-lg border border-black/[0.08] bg-[#f0f2f7] px-3 py-1.5 text-[10px] font-bold text-[#1a1a24] uppercase tracking-wider transition-all duration-300 hover:border-[#2b50ff] hover:text-white hover:bg-[#2b50ff] hover:scale-105 cursor-default shadow-xs"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CENTER: Work Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          >
            <h2 className="font-display text-[18px] sm:text-[22px] font-black uppercase tracking-[-0.01em] text-[#0a0a0c] mb-7">
              Work Process
            </h2>

            <div className="space-y-5">
              {workProcess.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group flex gap-4 items-start"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[12px] font-black font-display transition-all duration-300 bg-[#2b50ff]/10 text-[#2b50ff] border border-[#2b50ff]/20 shadow-xs"
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3
                      className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#2b50ff]"
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-[1.6] text-[#555567]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience below work process */}
            <div className="mt-8 pt-6 border-t border-black/[0.06]">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-3.5 w-3.5 text-[#2b50ff]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2b50ff]">Experience</span>
              </div>

              {experienceItems.map((item, idx) => (
                <div key={idx} className="mb-4 last:mb-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[13px] font-bold text-[#0a0a0c]">{item.title}</h3>
                      <p className="text-[11px] text-[#555567] mt-0.5">{item.company}</p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#2b50ff] bg-[#2b50ff]/10 rounded px-2 py-0.5 whitespace-nowrap">{item.period.split('—').map(d => d.trim().split(' ').pop()).join(' - ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Quote + Publication + Inverted Black Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            {/* Quote card */}
            <div className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-7 relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              {/* Large decorative quote mark */}
              <div className="absolute -top-2 -left-1 text-[80px] font-display font-black text-[#2b50ff]/15 leading-none select-none">
                "
              </div>
              <div className="relative pt-6">
                <p className="text-[14px] sm:text-[15px] font-semibold leading-[1.6] text-[#1a1a24] italic">
                  Good engineering is not just how it works, but how it scales, how it's maintained, and how it evolves.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#2b50ff]/25" />
                  <span className="font-display text-[13px] font-bold text-[#2b50ff] italic">Sravan</span>
                </div>
              </div>
            </div>

            {/* Publication card */}
            <div className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-3.5 w-3.5 text-[#2b50ff]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2b50ff]">Publication</span>
              </div>
              <h3 className="text-[13px] font-bold text-[#0a0a0c] leading-snug">{publication.title}</h3>
              <p className="text-[11px] text-[#555567] mt-1">{publication.venue}</p>
              <p className="text-[10px] font-mono font-bold text-[#2b50ff] mt-2">{publication.date}</p>
            </div>

            {/* Inverted Black Block - high-contrast typography directly matching Image 3! */}
            <div className="rounded-2xl border border-black/20 bg-[#0a0a0c] p-6 sm:p-7 text-white shadow-2xl relative overflow-hidden">
              <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(43,80,255,0.35)_0%,transparent_70%)] blur-2xl" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3865ff] mb-2">Let's Create</p>
              <p className="font-display text-[18px] sm:text-[22px] font-black text-white leading-tight uppercase">
                Something Great
                <br />
                Together.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
