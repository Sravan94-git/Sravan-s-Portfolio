import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { projects } from '../data/portfolioData'

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full overflow-hidden bg-[#09070f] px-4 pb-24 pt-20 scroll-mt-24 sm:px-6 lg:px-10 lg:pb-28 lg:pt-24">
      
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-gradient-to-r from-[#8750f7] via-[#b58aff] to-[#f5f0ff] bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-[42px]"
        >
          My Recent Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-sm font-medium uppercase tracking-[0.28em] text-white/65"
        >
          RECENT PROJECTS
        </motion.p>
      </div>

      <div className="mx-auto mt-16 max-w-[1128px] space-y-12 pb-40">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              style={{ position: 'sticky', top: `${92 + idx * 18}px`, zIndex: idx + 10 }}
              className="group relative min-h-[500px] min-w-0 rounded-[16px] border border-[#8750f7]/40 bg-[linear-gradient(115deg,#160b20_0%,#110b19_54%,#0d1117_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-500 sm:p-8 lg:min-h-[540px] lg:p-9"
            >
              <div className="grid h-full min-w-0 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
                
                <div className="flex flex-col justify-center">
                  <span className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#9c63ff]">
                    {project.category}
                  </span>

                  <h3 className="mb-5 max-w-xl text-xl font-extrabold leading-tight text-white sm:text-2xl lg:text-[36px]">
                    {project.name}
                  </h3>

                  <p className="mb-8 max-w-lg text-xs font-normal leading-6 text-white/70 sm:text-sm">
                    {project.description}
                  </p>

                  <ul className="mb-9 max-w-xl space-y-4 text-xs leading-5 text-white/80 sm:text-sm">
                    {project.highlights && project.highlights.length > 0 ? (
                      project.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 flex-shrink-0 stroke-[2.5] text-[#b995ff]" />
                          <span>{h}</span>
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 flex-shrink-0 stroke-[2.5] text-[#b995ff]" />
                          <span>High performance RESTful architecture &amp; clean code.</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 flex-shrink-0 stroke-[2.5] text-[#b995ff]" />
                          <span>Delivered ahead of target project milestones.</span>
                        </li>
                      </>
                    )}
                  </ul>

                  <div className="mb-10 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#8750f7]/35 bg-[#8750f7]/15 px-3 py-1 text-[11px] font-semibold text-[#d0b5ff]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-6">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-[#b995ff] sm:text-sm"
                      >
                        View Live Project <ArrowUpRight className="h-3.5 w-3.5 text-[#8750f7]" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-[#b995ff] sm:text-sm"
                      >
                        GitHub <ArrowUpRight className="h-3.5 w-3.5 text-[#8750f7]" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative min-w-0 overflow-hidden rounded-[14px] border border-[#13252a] bg-[#0b1013] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.01]">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="aspect-[16/10] w-full rounded-[6px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
