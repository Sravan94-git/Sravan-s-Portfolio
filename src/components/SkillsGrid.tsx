import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Server, Layers, Terminal, Sparkles, ShieldCheck } from 'lucide-react'
import { skillsList } from '../data/portfolioData'

const iconMap: Record<string, React.ElementType> = {
  dotnet: Server,
  python: Code2,
  react: Layers,
  csharp: Terminal,
  sql: Database,
  cloud: Cpu,
  brain: Sparkles,
  api: ShieldCheck,
}

export function SkillsGrid() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-20 scroll-mt-24 sm:px-6">
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400"
        >
          Tech Stack
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-3xl font-extrabold text-white sm:text-4xl"
        >
          My Skills
        </motion.h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {skillsList.map((skill, idx) => {
          const IconComp = iconMap[skill.icon] || Code2
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative flex flex-col items-center justify-center rounded-3xl border border-purple-500/20 bg-[#130b29]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
            >
              {/* Top Row: Icon & Percentage */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-950/50 text-purple-400 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                <IconComp className="h-6 w-6" />
              </div>

              <span className="mt-4 font-mono text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                {skill.percentage}%
              </span>

              <span className="mt-1 text-sm font-semibold text-purple-200/80 text-center">
                {skill.name}
              </span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
