import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-24 scroll-mt-24 sm:px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

      <div className="relative rounded-3xl border border-purple-500/20 bg-[#130b29]/70 p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.2)] sm:p-12 lg:p-16">
        
        {/* Giant Headline */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
            Get In Touch
          </span>
          <h2 className="mt-3 flex items-center justify-center gap-2 text-4xl font-extrabold text-white sm:text-6xl lg:text-7xl">
            Let&apos;s have a chat
            <ArrowUpRight className="h-8 w-8 text-purple-400 sm:h-12 sm:w-12 opacity-80" />
          </h2>
          <p className="mt-4 text-base text-purple-200/70 sm:text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out anytime!
          </p>
        </div>

        {/* Form & Direct Contact Info Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* Direct Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4 rounded-2xl border border-purple-500/20 bg-purple-950/30 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-purple-300">Email Address</p>
                <a
                  href="mailto:sravan@example.com"
                  className="text-base font-bold text-white hover:text-purple-300 transition-colors"
                >
                  sravan.engineering@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-purple-500/20 bg-purple-950/30 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-purple-300">Location</p>
                <p className="text-base font-bold text-white">
                  India • Open to Remote & Global Work
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full rounded-2xl border border-purple-500/20 bg-[#090514]/80 px-5 py-3.5 text-sm text-white placeholder-purple-300/40 outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
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
                className="w-full rounded-2xl border border-purple-500/20 bg-[#090514]/80 px-5 py-3.5 text-sm text-white placeholder-purple-300/40 outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
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
                className="w-full rounded-2xl border border-purple-500/20 bg-[#090514]/80 px-5 py-3.5 text-sm text-white placeholder-purple-300/40 outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(168,85,247,0.45)] transition hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:scale-[1.01]"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" /> Message Sent!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
