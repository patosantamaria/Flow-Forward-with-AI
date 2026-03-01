const phases = [
  {
    num: 1, color: 'border-navy-deep', badge: 'bg-navy-deep/10 text-navy-deep',
    label: 'Foundation', tag: 'Foundation',
    title: 'Phase 1 — Foundation & Ethics',
    sub: 'M1–M5 · ~95 min',
    desc: 'Build the shared vocabulary. Understand what AI is, what Gemini does, and how to use it safely — including Zero Trust guardrails and the TCF prompting framework.',
    chips: ['M1 · M2 · M3 · M4 · M5', 'Webinar or On-site', 'Open to All'],
  },
  {
    num: 2, color: 'border-primary', badge: 'bg-primary/15 text-navy-deep',
    label: 'Core Tools', tag: 'Core Tools',
    title: 'Phase 2 — Core Tools Deep Dive',
    sub: 'M6–M9 · ~3.5 hrs',
    desc: 'Master the four AI tools in your Vopak account: the Gemini side panel in Gmail & Docs, the Web App for heavy analysis, Gemini on Mobile for field staff, and NotebookLM.',
    chips: ['M6 · M7 · M8 · M9', 'Half-day or Full-day', 'Requires Phase 1'],
  },
  {
    num: 3, color: 'border-vopak-orange', badge: 'bg-orange-100 text-orange-600',
    label: 'Automate', tag: 'Automate & Build',
    title: 'Phase 3 — Automate & Build',
    sub: 'M10–M11 · ~4 hrs',
    desc: 'Go from user to builder. Create custom Gems — pre-loaded AI colleagues — and build personal automation flows with Workspace Studio and team workflows with Apps Script.',
    chips: ['M10 · M11', 'Full-day or 2 Afternoons', 'Requires Phase 1'],
  },
]

const configs = [
  { color: 'border-l-primary', type: '⚡ QUICK HIT', title: 'AI Teaser', desc: 'M1 + M2 · 25 min · All-hands or leadership awareness' },
  { color: 'border-l-sky-400', type: '🕐 HALF-DAY', title: 'Foundation Basics', desc: 'M1–M5 · ~90 min · Remote webinar or on-site morning' },
  { color: 'border-l-vopak-cobalt', type: '🌅 FULL DAY', title: 'AI Week Summit', desc: 'M1–M9 · ~7.5 hrs · Foundation + all core tools in one day' },
  { color: 'border-l-vopak-orange', type: '📅 2 DAYS', title: 'Complete Journey', desc: 'All 11 modules · Day 1: Foundation + Tools · Day 2: Build & Automate' },
]

export default function Programme() {
  return (
    <section id="programme" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-navy-deep px-3 py-1 rounded mb-4 inline-block">The Programme</span>
        <h2 className="text-3xl font-black text-navy-deep mb-3">A structured journey from foundation to automation</h2>
        <p className="text-slate-500 mb-12 max-w-xl">11 self-contained modules across 3 phases. Mix and match for any session length.</p>

        <div className="space-y-5 mb-14">
          {phases.map(p => (
            <div key={p.num} className={`flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden border-l-4 ${p.color}`}>
              <div className="flex-1 p-7">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-navy-deep mb-1">
                      {p.title} <span className="text-slate-400 font-normal text-sm ml-1">{p.sub}</span>
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm max-w-2xl">{p.desc}</p>
                  </div>
                  <span className={`${p.badge} px-3 py-1 rounded text-xs font-bold uppercase ml-4 shrink-0`}>{p.tag}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.chips.map(c => (
                    <span key={c} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-navy-deep mb-5">Session configurations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {configs.map(c => (
            <div key={c.title} className={`bg-white border border-slate-200 rounded-xl p-6 border-l-4 ${c.color} hover:shadow-md transition-shadow`}>
              <div className="text-xs font-bold text-slate-400 mb-2">{c.type}</div>
              <div className="font-bold text-navy-deep mb-1">{c.title}</div>
              <div className="text-sm text-slate-500">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
