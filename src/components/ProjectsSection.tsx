import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, Layers, LayoutList, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData'

const categories = ['All', 'Full Stack', 'AI / ML', 'Backend']

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'stacked' | 'normal'>('stacked')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="mx-auto max-w-[1340px] px-6 py-20 scroll-mt-24 lg:px-12 bg-[#0f0715]">
      
      {/* Centered Title matching Image 1 */}
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-white sm:text-4xl lg:text-[42px] tracking-tight bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-[#ffffff] bg-clip-text text-transparent inline-block"
        >
          My Recent Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50"
        >
          RECENT PROJECTS
        </motion.p>
      </div>

      {/* Filter Row: Aligned Right with Category Pills & View Switcher */}
      <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#8750f7] text-white shadow-[0_0_15px_rgba(135,80,247,0.5)]'
                  : 'border border-[#8750f7]/20 bg-[#140c1d]/60 text-white/70 hover:border-[#8750f7]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Small Icon View Switcher (Slides vs Standard) */}
        <div className="flex items-center gap-1 rounded-full border border-[#8750f7]/30 bg-[#140c1d] p-1 backdrop-blur-md">
          <button
            onClick={() => setViewMode('stacked')}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold transition-all ${
              viewMode === 'stacked'
                ? 'bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white shadow-[0_0_12px_rgba(135,80,247,0.4)]'
                : 'text-white/60 hover:text-white'
            }`}
            title="Slides Overlap View"
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Slides</span>
          </button>
          <button
            onClick={() => setViewMode('normal')}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold transition-all ${
              viewMode === 'normal'
                ? 'bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white shadow-[0_0_12px_rgba(135,80,247,0.4)]'
                : 'text-white/60 hover:text-white'
            }`}
            title="Normal List View"
          >
            <LayoutList className="h-3.5 w-3.5" />
            <span>Standard</span>
          </button>
        </div>
      </div>

      {/* Projects Cards List Container */}
      <div className={`mt-8 ${viewMode === 'stacked' ? 'relative pb-32 space-y-10' : 'space-y-10'}`}>
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              style={
                viewMode === 'stacked'
                  ? {
                      position: 'sticky',
                      top: `${95 + idx * 16}px`,
                      zIndex: idx + 10,
                    }
                  : undefined
              }
              className={`group relative rounded-[22px] border border-[#8750f7]/30 bg-[#140c1d] p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 sm:p-8 lg:p-9 ${
                viewMode === 'normal' ? 'hover:border-[#8750f7]/60' : ''
              }`}
            >
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                
                {/* LEFT INFO SIDE matching Image 1 & 2 */}
                <div className="flex flex-col justify-center">
                  {/* Category Label in Purple */}
                  <span className="text-xs font-semibold text-[#8750f7] uppercase tracking-wider mb-1.5">
                    {project.category}
                  </span>

                  {/* Project Name */}
                  <h3 className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl mb-3">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-white/70 mb-5 max-w-md">
                    {project.description}
                  </p>

                  {/* Checkmark Bullet Points (matching Image 1 & 2) */}
                  <ul className="space-y-2.5 mb-6 text-xs text-white/80">
                    {project.highlights && project.highlights.length > 0 ? (
                      project.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <Check className="h-3.5 w-3.5 text-[#8750f7] flex-shrink-0 stroke-[2.5]" />
                          <span>{h}</span>
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-center gap-2.5">
                          <Check className="h-3.5 w-3.5 text-[#8750f7] flex-shrink-0 stroke-[2.5]" />
                          <span>High performance RESTful architecture &amp; clean code.</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="h-3.5 w-3.5 text-[#8750f7] flex-shrink-0 stroke-[2.5]" />
                          <span>Delivered ahead of target project milestones.</span>
                        </li>
                      </>
                    )}
                  </ul>

                  {/* Tech Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#8750f7]/30 bg-[#8750f7]/15 px-3 py-1 text-[11px] font-semibold text-[#c099ff]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Live Project Link */}
                  <div className="flex items-center gap-6">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white transition-colors hover:text-[#8750f7]"
                    >
                      View Live Project <ArrowUpRight className="h-3.5 w-3.5 text-[#8750f7]" />
                    </a>
                  </div>
                </div>

                {/* RIGHT SCREENSHOT MOCKUP SIDE matching Image 1 & 2 */}
                <div className="relative overflow-hidden rounded-[18px] border border-[#8750f7]/20 bg-[#090514] p-2.5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.015]">
                  {/* Window Bar */}
                  <div className="mb-2.5 flex items-center justify-between border-b border-[#8750f7]/20 pb-2 px-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-white/50 font-mono">
                      <span>{project.id}.app</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>

                  {/* Image */}
                  <div className="overflow-hidden rounded-lg border border-[#8750f7]/10">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
