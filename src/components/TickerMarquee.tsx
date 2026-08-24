const techList = [
  'ASP.NET CORE',
  'FASTAPI',
  'REACT',
  'PYTHON',
  'C#',
  'DOCKER',
  'AWS',
  'AI & NLP',
  'SQL SERVER',
  'REST APIS',
  'TYPESCRIPT',
]

function SpinningStar() {
  return (
    <svg
      className="h-5 w-5 animate-[spin_6s_linear_infinite] text-white opacity-90"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="3.34" y1="7" x2="20.66" y2="17" />
      <line x1="3.34" y1="17" x2="20.66" y2="7" />
    </svg>
  )
}

export function TickerMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-5 border-y border-white/10 shadow-2xl transform -rotate-1 z-20 my-4">
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {[...techList, ...techList].map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-white">
              {item}
            </span>
            <SpinningStar />
          </div>
        ))}
      </div>
    </div>
  )
}
