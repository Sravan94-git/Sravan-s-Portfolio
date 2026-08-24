import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/portfolioData'

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-20 scroll-mt-24 sm:px-6">
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-3xl font-extrabold text-white sm:text-4xl"
        >
          Client & Team Feedback
        </motion.h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative rounded-3xl border border-purple-500/20 bg-[#130b29]/70 p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          >
            <Quote className="h-8 w-8 text-purple-400/50" />
            <p className="mt-4 text-sm leading-relaxed text-purple-200/80 italic sm:text-base">
              &quot;{t.quote}&quot;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover border border-purple-400/30"
              />
              <div>
                <h4 className="text-sm font-bold text-white">{t.name}</h4>
                <p className="text-xs text-purple-300/70">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
