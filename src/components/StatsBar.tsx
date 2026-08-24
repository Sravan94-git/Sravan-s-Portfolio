import { motion } from 'framer-motion'
import { stats } from '../data/portfolioData'

export function StatsBar() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-purple-500/20 bg-[#130b29]/50 p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.15)] sm:p-12">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-purple-300/70 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
