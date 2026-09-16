import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Contact request failed')
      setStatus('success')
      setFormData({ name: '', email: '', message: '', website: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-[1128px] px-4 pb-12 pt-8 scroll-mt-24 sm:px-6 lg:pb-16 lg:pt-10">

      <div className="relative rounded-2xl border border-purple-500/25 bg-[#130b29]/70 p-5 backdrop-blur-2xl sm:p-7">
        
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
            Get In Touch
          </span>
          <h2 className="mt-3 flex items-center justify-center gap-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Let&apos;s have a chat
            <ArrowUpRight className="h-8 w-8 text-purple-400 sm:h-12 sm:w-12 opacity-80" />
          </h2>
          <p className="mt-3 text-sm text-purple-200/70 sm:text-base">
            Have a project in mind or want to collaborate? Feel free to reach out anytime!
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center space-y-3">
            <div className="flex items-center gap-3 rounded-xl border border-purple-500/20 bg-purple-950/30 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-purple-300">Email Address</p>
                <a
                  href="mailto:sravansunkara04@gmail.com"
                  className="break-all text-sm font-bold text-white transition-colors hover:text-purple-300"
                >
                  sravansunkara04@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-purple-500/20 bg-purple-950/30 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-purple-300">Location</p>
                <p className="text-sm font-bold leading-6 text-white">
                  Hyderabad, India • Open to Remote & Global Work
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full rounded-xl border border-purple-500/20 bg-[#090514]/80 px-4 py-3 text-sm text-white placeholder-purple-300/40 outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full rounded-xl border border-purple-500/20 bg-[#090514]/80 px-4 py-3 text-sm text-white placeholder-purple-300/40 outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                Your Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project idea..."
                className="w-full rounded-xl border border-purple-500/20 bg-[#090514]/80 px-4 py-3 text-sm text-white placeholder-purple-300/40 outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              />
            </div>

            <input
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="hidden"
              aria-hidden="true"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(168,85,247,0.45)] transition hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:scale-[1.01]"
            >
              {status === 'success' ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" /> Message Sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> {status === 'sending' ? 'Sending...' : 'Send Message'}
                </>
              )}
            </button>
            {status === 'error' && (
              <p className="text-center text-sm text-rose-300" role="alert">
                Your message could not be sent. Please email me directly.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}
