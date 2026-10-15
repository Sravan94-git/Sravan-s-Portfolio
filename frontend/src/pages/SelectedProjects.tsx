import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, X, ExternalLink, Maximize2 } from 'lucide-react'
import { projects, type Project } from '../data/portfolioData'

export function SelectedProjects() {
  const [activePreview, setActivePreview] = useState<Project | null>(null)

  // Show first 3 projects as featured grid, rest in a list
  const featured = projects.slice(0, 3)
  const remaining = projects.slice(3)

  return (
    <section id="projects" className="relative w-full bg-[#0a0a0c] px-5 sm:px-8 lg:px-12 pt-6 pb-20 scroll-mt-20">
      {/* Section divider line */}
      <div className="mx-auto max-w-[1280px] border-t border-white/[0.06]" />

      {/* Header */}
      <div className="mx-auto max-w-[1280px] flex items-center justify-between pt-6 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-black uppercase tracking-[-0.02em] text-white"
        >
          Selected Projects
        </motion.h2>
        <motion.a
          href="#more-projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden sm:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-[#3865ff]"
        >
          View All Projects
          <ArrowUpRight className="h-3.5 w-3.5" />
        </motion.a>
      </div>

      {/* Featured projects grid - 3 cards side by side */}
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {featured.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12, duration: 0.5 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] transition-all duration-500 hover:border-[#2b50ff]/50 hover:shadow-[0_12px_40px_rgba(43,80,255,0.12)]"
          >
            {/* Top Browser Frame Mockup */}
            <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#15151a] px-3.5 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ff5f56]/80" />
              <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/80" />
              <span className="h-2 w-2 rounded-full bg-[#27c93f]/80" />
              <div className="ml-2 flex-1 truncate rounded bg-black/40 px-2 py-0.5 text-[10px] font-mono text-white/40">
                {project.demo ? project.demo.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${project.id}.app`}
              </div>
            </div>

            {/* Project Image Preview Container */}
            <div
              onClick={() => setActivePreview(project)}
              className="group/img relative block aspect-[2/1] w-full overflow-hidden bg-[#08080c] border-b border-white/[0.06] cursor-pointer"
              aria-label={`Preview ${project.name}`}
            >
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="h-full w-full object-contain object-center transition-transform duration-300 group-hover/img:scale-[1.01]"
              />

              {/* Clean hover action pill */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/img:opacity-100">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/90 px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-xl backdrop-blur-md">
                  <Maximize2 className="h-3 w-3 text-[#3865ff]" /> View Full Screenshot
                </span>
              </div>
            </div>

            {/* Bottom info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3865ff]">
                    {project.category}
                  </span>
                  <h3 className="mt-1 font-display text-[16px] font-bold text-white leading-snug line-clamp-2">
                    {project.name}
                  </h3>
                </div>
                <div className="flex gap-2 flex-shrink-0 pt-0.5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-[#2b50ff] hover:text-[#3865ff] hover:scale-110"
                      aria-label={`View ${project.name} live demo`}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-[#2b50ff] hover:text-[#3865ff] hover:scale-110"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[9px] font-medium text-white/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Numbered project labels */}
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {featured.map((project, idx) => (
          <div key={`label-${project.id}`} className="flex items-center gap-3 px-1">
            <span className="font-display text-[18px] font-black text-[#3865ff]/70">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <div className="text-right max-w-[200px] truncate">
              <p className="text-[11px] font-bold text-white/80 uppercase truncate">{project.name}</p>
              <p className="text-[9px] font-medium text-white/40 uppercase tracking-wider">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Remaining projects as compact list */}
      {remaining.length > 0 && (
        <div id="more-projects" className="mx-auto max-w-[1280px] scroll-mt-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              Other Noteworthy Projects
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="space-y-3">
            {remaining.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="group flex items-center justify-between rounded-xl border border-white/[0.04] bg-[#111114]/60 px-6 py-4 transition-all duration-400 hover:border-[#2b50ff]/30 hover:bg-[#16161a]/80"
              >
                <div className="flex items-center gap-5">
                  <span className="font-display text-[14px] font-black text-[#3865ff]/50">
                    {String(idx + 4).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-[14px] font-bold text-white group-hover:text-[#3865ff] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-[11px] text-white/40 mt-0.5">{project.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-[9px] font-medium text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-1.5">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-[#2b50ff] hover:text-[#3865ff]"
                      >
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-[#2b50ff] hover:text-[#3865ff]"
                      >
                        <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen Preview Lightbox Modal */}
      {activePreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8 backdrop-blur-md"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative max-w-5xl w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111116] p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3865ff]">
                  {activePreview.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">{activePreview.name}</h3>
              </div>
              <div className="flex items-center gap-3">
                {activePreview.demo && (
                  <a
                    href={activePreview.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#3865ff] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#2b50ff]"
                  >
                    Open Live Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setActivePreview(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close preview"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-black/90 p-1 flex items-center justify-center">
              <img
                src={activePreview.image}
                alt={activePreview.name}
                className="w-full max-h-[72vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
