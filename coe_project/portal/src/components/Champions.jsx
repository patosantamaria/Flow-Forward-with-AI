const levels = [
  { icon: 'emoji_events', color: 'text-slate-400', bg: 'bg-white/5 border-white/10', name: 'Explorer', level: '01', req: '1 Gem created & shared with your team' },
  { icon: 'military_tech', color: 'text-primary', bg: 'bg-primary/5 border-primary/20', name: 'Builder', level: '02', req: '3+ Gems · 1 Workspace Studio flow', featured: true },
  { icon: 'workspace_premium', color: 'text-vopak-orange', bg: 'bg-orange-400/5 border-orange-400/20', name: 'Pioneer', level: '03', req: '5+ Gems · Department Champion' },
]

export default function Champions() {
  return (
    <section id="champions" className="py-24 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-vopak-orange/5 blur-[80px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/20 px-3 py-1 rounded mb-4">AI Champions Network</span>
          <h2 className="text-4xl font-black mb-4">Become a Flow Forward Champion</h2>
          <p className="text-slate-400">Champions are the local AI advocates who scale adoption within their departments. Earn recognition, get early access to new tools, and shape the programme from the inside.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {levels.map(l => (
            <div key={l.name} className={`${l.bg} border rounded-3xl p-8 text-center group hover:scale-[1.02] transition-transform relative`}>
              {l.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-navy-deep text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Most Popular</div>
              )}
              <div className={`w-16 h-16 ${l.bg} border rounded-full flex items-center justify-center mx-auto mb-5 ${l.color} group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-4xl">{l.icon}</span>
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Level {l.level}</div>
              <h4 className={`text-2xl font-bold mb-3 ${l.color}`}>{l.name}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{l.req}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-navy-deep px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all">
            Nominate yourself →
          </button>
        </div>
      </div>
    </section>
  )
}
