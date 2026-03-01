const levels = [
  {
    icon: 'emoji_events',
    iconColor: 'text-slate-400',
    bg: 'bg-white/5 border-white/10',
    name: 'AI Explorer',
    level: '01',
    what: 'You've completed Phase 1 and shared what you've learned with at least one colleague.',
    earns: 'Early access to new Gems and programme updates.',
    featured: false,
  },
  {
    icon: 'military_tech',
    iconColor: 'text-primary',
    bg: 'bg-primary/5 border-primary/20',
    name: 'AI Builder',
    level: '02',
    what: 'You've completed Phase 1, built at least one Gem that your team actively uses, and completed Phase 2.',
    earns: 'Published Gem in the store, access to the Champions channel, and invitation to programme shaping sessions.',
    featured: true,
  },
  {
    icon: 'workspace_premium',
    iconColor: 'text-vopak-orange',
    bg: 'bg-orange-400/5 border-orange-400/20',
    name: 'AI Pioneer',
    level: '03',
    what: 'Phase 1 + Phase 2 + Phase 3 completed. You're running a local CoE node and actively mentoring Explorers and Builders in your department.',
    earns: 'Department AI lead recognition, early access to Phase 4 when it launches, and direct input into the programme roadmap.',
    featured: false,
  },
]

export default function Champions() {
  return (
    <section id="champions" className="py-24 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-vopak-orange/5 blur-[80px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-14 max-w-2xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/20 px-3 py-1 rounded mb-5">AI Champions Network</span>
          <h2 className="text-4xl font-black mb-4">The more you share, the further we go</h2>
          <p className="text-slate-300 leading-relaxed">
            Champions are the colleagues who don't just learn — they bring others along. If you've built something useful and you're willing to show it, you belong here.
            The network exists to recognise that effort and make it count.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {levels.map(l => (
            <div key={l.name} className={`${l.bg} border rounded-3xl p-8 group hover:scale-[1.02] transition-transform relative`}>
              {l.featured && (
                <div className="absolute -top-3 left-8 bg-primary text-navy-deep text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  Most active level
                </div>
              )}
              <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Level {l.level}</div>
              <div className={`w-14 h-14 ${l.bg} border rounded-full flex items-center justify-center mb-4 ${l.iconColor} group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-3xl">{l.icon}</span>
              </div>
              <h4 className={`text-2xl font-bold mb-3 ${l.iconColor}`}>{l.name}</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{l.what}</p>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">What you earn</span>
                <p className="text-slate-400 text-xs leading-relaxed">{l.earns}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white/5 border border-white/10 rounded-2xl px-8 py-7">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Ready to take part?</h3>
            <p className="text-slate-400 text-sm">Tell us what you've built or how you've been using AI at Vopak. We'll nominate you for the right level.</p>
          </div>
          <button className="bg-white text-navy-deep px-8 py-3 rounded-xl font-bold text-base hover:-translate-y-1 hover:shadow-xl transition-all shrink-0">
            Nominate yourself →
          </button>
        </div>
      </div>
    </section>
  )
}
