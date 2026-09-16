import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 scroll-mt-24 sm:px-6 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
            About Me
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Engineering with curiosity and purpose.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-5 text-sm leading-8 text-white/70 sm:text-base"
        >
          <p>
            I am Sravan, a software engineer and full-stack developer working in Hyderabad, India. I build dependable digital products across backend engineering, full-stack development, and applied machine learning, with hands-on experience in Java, Python, SQL, AWS, and Docker.
          </p>
          <p>
            I enjoy taking a product from an early idea to a working, scalable system. Recently, I have worked on a multi-tenant recruitment platform with strict data isolation, secure role-based access, automated deployment, and complete hiring workflows. I am especially interested in the space where robust APIs, cloud infrastructure, and intelligent features meet.
          </p>
        </motion.div>
      </div>

    </section>
  )
}
