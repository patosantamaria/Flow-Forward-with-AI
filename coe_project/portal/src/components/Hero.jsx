const stats = [
  { label: 'Participants Trained', value: '67' },
  { label: 'Training Modules', value: '11' },
  { label: 'Programme Phases', value: '3' },
  { label: 'Departments Covered', value: '12' },
]

export default function Hero() {
  return (
    <section className="bg-navy-deep text-white pt-24 pb-20 relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00cfe1 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />
      {/* Glow */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-xs">verified</span>
            Vopak Center of Excellence
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Flow Forward<br />with <span className="text-primary">AI</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
            Your one-stop hub for AI training, custom Gems, resources, and peer knowledge — building AI skills that stick across every Vopak department.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#programme" className="bg-primary text-navy-deep px-8 py-4 rounded-xl font-bold text-base hover:shadow-[0_0_24px_rgba(0,207,225,0.4)] transition-all">
              Explore the Programme →
            </a>
            <a href="#gems" className="border-2 border-white/25 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-bold text-base transition-all">
              Open Gem Store
            </a>
          </div>
        </div>

        {/* Stats bar — inline, no absolute positioning */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((s, i) => (
            <div key={i} className="bg-navy-deep/60 backdrop-blur px-8 py-6">
              <div className="text-4xl font-black text-primary">{s.value}</div>
              <div className="text-sm text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
