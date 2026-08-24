import { motion } from 'framer-motion'
import { Code2, Layout, FileText, TrendingUp } from 'lucide-react'
import { services } from '../data/portfolioData'

const iconMap = [Code2, Layout, FileText, TrendingUp]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1340px] px-6 py-24 scroll-mt-24 lg:px-12 bg-[#0f0715]">
      {/* Section Heading matching Image 1 */}
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-[#ffffff] bg-clip-text text-transparent inline-block"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
        >
          OFFERED SERVICES
        </motion.p>
      </div>

      {/* 2x2 Grid of Service Cards matching Image 1 */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {services.map((service, idx) => {
          const IconComp = iconMap[idx % iconMap.length]
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative rounded-[20px] border border-[#8750f7]/30 bg-[#140c1d]/80 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#8750f7] hover:shadow-[0_0_35px_rgba(135,80,247,0.25)]"
            >
              {/* Purple Line Art Icon at top left */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8750f7]/10 text-[#8750f7]">
                <IconComp className="h-6 w-6 stroke-[1.75]" />
              </div>

              {/* Card Title */}
              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white group-hover:text-[#8750f7] transition-colors">
                {service.title}
              </h3>

              {/* Description paragraph matching screenshot formatting */}
              <p className="mt-3 text-sm leading-relaxed text-white/70 font-normal">
                {service.description}
              </p>

              {/* Tech Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#8750f7]/20 bg-[#8750f7]/10 px-3 py-1 text-xs text-[#8750f7] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
