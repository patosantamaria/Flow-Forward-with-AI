import { useState } from 'react'

const gems = [
  { cat: ['official','ops'], dept: '✅ Official · Operations', version: 'v1.2', icon: 'sync_alt', name: 'Shift Handover Summarizer', desc: 'Paste raw shift notes → get a structured brief with Key Events, Safety, Equipment Status, Active PtWs, and Pending Maintenance in 90 seconds.', saves: '25 min/shift' },
  { cat: ['official','finance'], dept: '✅ Official · Finance', version: 'v2.0', icon: 'account_balance', name: 'CFF Reconciliation Analyzer', desc: 'Upload two Cash Flow Forecasts → get a line-by-line comparison with naming inconsistencies, formatting errors, and variances flagged.', saves: '2 hrs/month-end' },
  { cat: ['official','sheq'], dept: '✅ Official · SHEQ', version: 'v1.0', icon: 'health_and_safety', name: 'SHEQ Incident Investigator', desc: 'Run 5-Why and Bow-Tie analyses on incident reports. Classifies Tier 1/2/3 per Vopak URS and drafts the IN10 brief description format.', saves: '1.5 hrs/investigation' },
  { cat: ['official','all'], dept: '✅ Official · All Departments', version: 'v1.4', icon: 'translate', name: 'Bilingual Translator', desc: 'Translate any Vopak document or email between Dutch, English, Spanish, and Portuguese. Preserves SHEQ terminology and Vopak tone.', saves: '15 min/doc' },
  { cat: ['community','ops'], dept: 'Community · Operations', version: null, icon: 'construction', name: 'Toolbox Talk Generator', desc: 'Paste a procedure or incident report → get a ready-to-run 2-minute supervisor briefing script with key safety points and discussion questions.', saves: '20 min/briefing' },
  { cat: ['community','all'], dept: 'Community · All Departments', version: null, icon: 'event_note', name: 'Meeting Summary Machine', desc: 'Paste raw meeting notes → structured output: Meeting Purpose, Key Decisions, Action Items table (Owner | Action | Deadline), Open Questions.', saves: null, star: true },
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
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-navy-deep px-3 py-1 rounded mb-4 inline-block">Gem Store</span>
        <h2 className="text-3xl font-black text-navy-deep mb-2">Ready-to-use AI colleagues</h2>
        <p className="text-slate-500 mb-8">Copy any Gem with one click. Official Gems are reviewed and governed by the CoE. Submit your own via the intake form.</p>

        {/* Filter pills */}
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
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">{g.icon}</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{g.dept}</div>
                    <h6 className="font-bold text-navy-deep text-base leading-tight">{g.name}</h6>
                  </div>
                </div>
                {g.version && <span className="text-[10px] bg-primary/10 text-navy-deep px-2 py-1 rounded font-bold shrink-0 ml-2">{g.version}</span>}
              </div>
              <p className="text-slate-500 text-sm flex-1 mb-5">{g.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-1 rounded">
                  <span className="material-symbols-outlined text-xs">schedule</span>
                  {g.star ? 'Community favourite ⭐' : `Saves ${g.saves}`}
                </div>
                <button className="bg-navy-deep hover:bg-vopak-cobalt text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-1">
                  Copy Gem
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-primary text-navy-deep px-7 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
            Submit a Gem to the Store →
          </button>
        </div>
      </div>
    </section>
  )
}
