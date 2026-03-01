const phases = [
  { slug: 'phase-1', label: 'Phase 1 — Foundation', status: 'Active', dot: 'bg-emerald-400' },
  { slug: 'phase-2', label: 'Phase 2 — Core Tools', status: 'Active', dot: 'bg-emerald-400' },
  { slug: 'phase-3', label: 'Phase 3 — Automate & Build', status: 'Active', dot: 'bg-emerald-400' },
  { slug: 'phase-4', label: 'Phase 4 — Agents & Enterprise', status: 'In development', dot: 'bg-yellow-400' },
]

const links = [
  { icon: 'link', label: 'AI CoE Channel', href: '#' },
  { icon: 'folder_open', label: 'Programme Toolkit (all materials)', href: '#' },
  { icon: 'cloud', label: 'Cloud Skills Boost', href: 'https://cloudskillsboost.google' },
]

const topics = ['vopak', 'gemini', 'ai-adoption', 'training', 'flow-forward', 'coe', 'gems', 'notebooklm', 'Google Workspace']

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* About */}
      <div className="border border-slate-200 rounded-lg p-4">
        <h3 className="font-semibold text-navy-deep text-sm mb-2">About</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          An AI skills programme for Vopak colleagues. Learn at your pace, use the tools you already
          have, and turn the work that slows you down into something you finish before your coffee goes cold.
        </p>
        <div className="space-y-2 mb-4">
          {links.map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline">
              <span className="material-symbols-outlined text-slate-400 text-base">{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
        {/* Topics */}
        <div className="flex flex-wrap gap-1.5">
          {topics.map(t => (
            <span key={t} className="bg-primary/10 text-navy-deep text-xs px-2 py-0.5 rounded-full font-medium hover:bg-primary/20 cursor-pointer transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Phases / Releases */}
      <div className="border border-slate-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-navy-deep text-sm">Phases</h3>
          <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full font-medium">4</span>
        </div>
        <div className="space-y-3">
          {phases.map(p => (
            <div key={p.slug} className="flex items-start gap-2.5">
              <span className={`w-2 h-2 rounded-full ${p.dot} mt-1.5 shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-navy-deep truncate">{p.label}</div>
                <div className="text-xs text-slate-400">{p.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick stats — GitHub "Languages" equivalent */}
      <div className="border border-slate-200 rounded-lg p-4">
        <h3 className="font-semibold text-navy-deep text-sm mb-3">Programme stats</h3>
        {/* Stacked bar */}
        <div className="flex h-2 rounded-full overflow-hidden mb-3">
          <div className="bg-primary" style={{ width: '40%' }} title="Operations" />
          <div className="bg-navy-deep" style={{ width: '25%' }} title="Finance" />
          <div className="bg-vopak-orange" style={{ width: '20%' }} title="SHEQ" />
          <div className="bg-vopak-cobalt" style={{ width: '15%' }} title="Other" />
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            { color: 'bg-primary', label: 'Modules', value: '11' },
            { color: 'bg-navy-deep', label: 'Departments', value: '12' },
            { color: 'bg-vopak-orange', label: 'Trained', value: '67' },
            { color: 'bg-vopak-cobalt', label: 'Sessions', value: '9' },
          ].map(s => (
            <div key={s.label} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${s.color} shrink-0`} />
              <span className="text-slate-600 truncate">{s.label}</span>
              <span className="font-bold text-navy-deep ml-auto">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contributors / Champions */}
      <div className="border border-slate-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-navy-deep text-sm">AI Champions</h3>
          <a href="#champions" className="text-xs text-primary hover:underline">View all</a>
        </div>
        <div className="flex -space-x-2 mb-3">
          {[...Array(7)].map((_, i) => (
            <div key={i}
              className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br flex items-center justify-center text-white text-[10px] font-bold shrink-0"
              style={{ background: `hsl(${200 + i * 20} 70% 40%)` }}>
              {String.fromCharCode(65 + i)}
            </div>
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-slate-500 text-[10px] font-bold">
            +
          </div>
        </div>
        <p className="text-xs text-slate-500">
          67 participants · 3 champion levels · Explorers → Builders → Pioneers
        </p>
      </div>

      {/* ROI callout */}
      <div className="bg-navy-deep rounded-lg p-4 text-white">
        <div className="text-3xl font-black text-primary mb-1">292%</div>
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Projected ROI</div>
        <p className="text-xs text-slate-300 leading-relaxed">Project Ascend analysis · 23-month payback period</p>
      </div>
    </aside>
  )
}
