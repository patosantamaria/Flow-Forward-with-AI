import { useState } from 'react'

const gems = [
  {
    cat: ['official', 'ops'],
    dept: 'Operations',
    icon: 'sync_alt',
    name: 'Shift Handover Summarizer',
    desc: `Paste your raw shift notes — field shorthand, bullet points, whatever you wrote during the shift — and get a structured Shift Handover Report in 90 seconds. Sections: Safety & Incidents, Equipment Status, Active Permits to Work, and Pending Maintenance. Every shift. Consistent every time.`,
    saves: '~25 min per shift',
    badge: '✅ Official · v1.2',
    badgeColor: 'bg-emerald-50 text-emerald-700',
  },
  {
    cat: ['official', 'finance'],
    dept: 'Finance / Treasury',
    icon: 'account_balance',
    name: '12-Month CFF Analyzer',
    desc: `Upload two Cash Flow Forecast files — from Oracle, SharePoint, or email — and get a line-by-line comparison table: naming inconsistencies, formatting errors, variance above 5%, covenant impact assessment, and a prioritised action list. What used to take days takes minutes.`,
    saves: '~2 hrs per month-end',
    badge: '✅ Official · v2.0',
    badgeColor: 'bg-emerald-50 text-emerald-700',
  },
  {
    cat: ['official', 'sheq'],
    dept: 'SHEQ',
    icon: 'health_and_safety',
    name: 'SHEQ Incident Investigator',
    desc: `Paste raw witness statements and field notes from an incident or near-miss. Get a fully structured report: IN10 brief description, IN11 detailed narrative, Tier classification (1/2/3), HiPo assessment, 5-Why root cause analysis, immediate corrective actions, and a link to the Vopak Fundamental breached. Vopak URS-compliant.`,
    saves: '~1.5 hrs per investigation',
    badge: '✅ Official · v1.0',
    badgeColor: 'bg-emerald-50 text-emerald-700',
  },
  {
    cat: ['official', 'all'],
    dept: 'All departments',
    icon: 'translate',
    name: 'Bilingual Translator',
    desc: `Translate any Vopak document or communication between Dutch, English, Spanish, and Portuguese — while preserving Vopak-specific terminology, IUPAC chemical names, safety acronyms, and brand terms that must never be translated. Includes a Translator's Notes section flagging any ambiguous phrases or terms left untranslated by design.`,
    saves: '~15 min per document',
    badge: '✅ Official · v1.4',
    badgeColor: 'bg-emerald-50 text-emerald-700',
  },

  {
    cat: ['community', 'all'],
    dept: 'All departments',
    icon: 'event_available',
    name: 'Meeting Summary Machine',
    desc: `Paste any meeting notes and get a clean, structured summary: Meeting Purpose, Key Decisions, Action Items table (Owner | Action | Deadline), and Open Questions. Works for any team, any format of notes. The most-used community Gem in the store.`,
    saves: null,
    badge: '⭐ Community favourite',
    badgeColor: 'bg-amber-50 text-amber-700',
  },
]

const filters = [
  { id: 'all', label: 'All Gems' },
  { id: 'official', label: '✅ Official' },
  { id: 'ops', label: 'Operations' },
  { id: 'finance', label: 'Finance' },
  { id: 'sheq', label: 'SHEQ' },

  { id: 'community', label: 'Community' },
]

export default function GemStore() {
  const [active, setActive] = useState('all')
  const visible = gems.filter(g => active === 'all' || g.cat.includes(active))

  return (
    <section id="gems" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-navy-deep px-3 py-1 rounded mb-5 inline-block">Gem store</span>
        <h2 className="text-3xl font-black text-navy-deep mb-2">Ready-to-use AI colleagues</h2>
        <p className="text-slate-500 mb-2 max-w-2xl">
          A Gem is a Gemini conversation pre-loaded with a specialist role, a set of rules, and knowledge about your context.
          Copy the instructions with one click and create it in Gemini in under a minute.
        </p>
        <p className="text-sm text-slate-400 italic mb-8">
          Official Gems are reviewed and maintained by the CoE. Community Gems are shared by colleagues — always verify output before use.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(f => (
            <button key={f.id} onClick={() => setActive(f.id)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${active === f.id ? 'bg-navy-deep text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-navy-deep'}`}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(g => (
            <div key={g.name} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">{g.icon}</span>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{g.dept}</div>
                  <h6 className="font-bold text-navy-deep text-base leading-tight">{g.name}</h6>
                </div>
              </div>
              <p className="text-slate-600 text-sm flex-1 mb-5 leading-relaxed">{g.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex flex-col gap-1">
                  <span className={`text-[10px] px-2 py-1 rounded font-bold self-start ${g.badgeColor}`}>{g.badge}</span>
                  {g.saves && (
                    <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs">
                      <span className="material-symbols-outlined text-xs">schedule</span>
                      Saves {g.saves}
                    </span>
                  )}
                </div>
                <button className="bg-navy-deep hover:bg-vopak-cobalt text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-1">
                  Copy Gem
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white border border-slate-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-navy-deep mb-1">Have a Gem that saves your team time?</h3>
            <p className="text-slate-500 text-sm">Submit it to the store. The CoE will review it and — if it passes — publish it for the whole organisation.</p>
          </div>
          <button className="bg-primary text-navy-deep px-7 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity shrink-0">
            Submit a Gem →
          </button>
        </div>
      </div>
    </section>
  )
}
