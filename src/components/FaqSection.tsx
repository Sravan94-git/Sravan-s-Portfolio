import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../data/portfolioData'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 scroll-mt-24 sm:px-6">
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400"
        >
          FAQ
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-3xl font-extrabold text-white sm:text-4xl"
        >
          Your Questions and Answers
        </motion.h2>
      </div>

      <div className="mt-12 space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? 'border-purple-400/50 bg-[#1c0e3b] shadow-[0_0_25px_rgba(168,85,247,0.25)]'
                  : 'border-purple-500/20 bg-[#130b29]/60 hover:border-purple-400/30'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-base font-bold text-white sm:text-lg">
                  {faq.question}
                </span>
                <div
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all ${
                    isOpen
                      ? 'border-purple-300 bg-purple-600 text-white'
                      : 'border-purple-500/30 bg-purple-950/40 text-purple-300'
                  }`}
                >
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-purple-500/20 px-6 pb-6 pt-3 text-sm leading-relaxed text-purple-200/80">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
