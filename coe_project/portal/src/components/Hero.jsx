const stats = [
  { value: '67', label: 'colleagues trained' },
  { value: '11', label: 'training modules' },
  { value: '3', label: 'programme phases' },
  { value: '12', label: 'departments' },
]

export default function Hero() {
  return (
    <section className="bg-navy-deep text-white pt-24 pb-20 relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00cfe1 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      {/* Glow */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-xs">verified</span>
            Vopak · Center of Excellence
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Flow Forward<br />with <span className="text-primary">AI</span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed mb-4 max-w-2xl">
            Your AI skills programme. Learn at your pace, use the tools you already have,
            and turn the work that slows you down into something you finish before your coffee goes cold.
          </p>

          <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-xl italic">
            "What's your shift handover? What's your month-end close?
            Every team has one. That's what we're here to fix."
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#programme"
              className="bg-primary text-navy-deep px-8 py-4 rounded-xl font-bold text-base hover:shadow-[0_0_24px_rgba(0,207,225,0.4)] transition-all inline-flex items-center gap-2">
              Explore the programme
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a href="#gems"
              className="border-2 border-white/25 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-bold text-base transition-all">
              Open Gem Store
            </a>
          </div>
        </div>

        {/* Stats bar — inline, no absolute clipping */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((s, i) => (
            <div key={i} className="bg-navy-deep/60 backdrop-blur px-8 py-7">
              <div className="text-4xl font-black text-primary leading-none">{s.value}</div>
              <div className="text-sm text-slate-400 mt-2 capitalize">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
