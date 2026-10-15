import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle2, Globe } from 'lucide-react'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // If bot filled out honeypot, fake success without sending
    if (formData.website.trim()) {
      setStatus('success')
      setFormData({ name: '', email: '', message: '', website: '' })
      return
    }

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedMessage = formData.message.trim()

    if (trimmedName.length < 2 || trimmedMessage.length < 10) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const baseUrl = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/+$/, '')
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          website: '',
        }),
      })
      if (!response.ok) throw new Error('Contact request failed')
      setStatus('success')
      setFormData({ name: '', email: '', message: '', website: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative w-full bg-[#0a0a0c] px-5 sm:px-8 lg:px-12 pt-6 pb-20 scroll-mt-20">
      {/* Section divider */}
      <div className="mx-auto max-w-[1280px] border-t border-white/[0.06]" />

      <div className="mx-auto max-w-[1280px] pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
              Let's Work
              <br />
              Together
            </h2>

            <p className="mt-5 max-w-md text-[13px] leading-[1.8] text-white/50">
              I'm currently open for new projects and collaborations. Let's create something amazing that drives results.
            </p>

            {/* Contact info cards */}
            <div className="mt-8 space-y-3">
              <a
                href="mailto:sravansunkara04@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#111114]/60 px-5 py-4 transition-all hover:border-[#2b50ff]/40 hover:bg-[#16161a]/80"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2b50ff]/10 text-[#3865ff]">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">Email</p>
                  <p className="text-[13px] font-semibold text-white group-hover:text-[#3865ff] transition-colors">
                    sravansunkara04@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#111114]/60 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2b50ff]/10 text-[#3865ff]">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">Location</p>
                  <p className="text-[13px] font-semibold text-white">Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#111114]/60 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2b50ff]/10 text-[#3865ff]">
                  <Globe className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">Portfolio</p>
                  <p className="text-[13px] font-semibold text-white">sravankumar.dev</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="rounded-2xl border border-white/[0.06] bg-[#111114] p-6 sm:p-8">
              <h3 className="font-display text-[18px] font-bold text-white mb-6">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/[0.06] bg-[#0a0a0c]/80 px-4 py-3 text-[13px] text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[#2b50ff]/50 focus:shadow-[0_0_0_3px_rgba(43,80,255,0.12)]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/[0.06] bg-[#0a0a0c]/80 px-4 py-3 text-[13px] text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[#2b50ff]/50 focus:shadow-[0_0_0_3px_rgba(43,80,255,0.12)]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    maxLength={5000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project idea..."
                    className="w-full rounded-xl border border-white/[0.06] bg-[#0a0a0c]/80 px-4 py-3 text-[13px] text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[#2b50ff]/50 focus:shadow-[0_0_0_3px_rgba(43,80,255,0.12)] resize-none"
                  />
                </div>

                {/* Honeypot for bot protection */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#2b50ff] via-[#1f42e6] to-[#122ab2] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] text-white shadow-[0_4px_25px_rgba(43,80,255,0.35)] transition-all duration-300 hover:shadow-[0_6px_35px_rgba(43,80,255,0.55)] hover:scale-[1.01] disabled:opacity-60"
                >
                  {status === 'success' ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-white" /> Message Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-center text-[12px] text-rose-400" role="alert">
                    Your message could not be sent. Please email me directly.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
