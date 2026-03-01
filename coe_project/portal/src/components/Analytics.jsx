const kpis = [
  { value: '292%', label: 'Projected ROI', sub: 'Project Ascend internal analysis', icon: 'trending_up' },
  { value: '23 mo.', label: 'Payback period', sub: 'Based on current adoption rates', icon: 'schedule' },
  { value: '~30%', label: 'Of the day — searching', sub: 'Knowledge workers across Oracle, Drive & SharePoint', icon: 'manage_search' },
  { value: '67', label: 'Colleagues trained', sub: 'Across 9 sessions in 12 departments', icon: 'groups' },
]

const examples = [
  {
    dept: 'Operations',
    before: 'Shift handover report written manually every shift — 30 minutes of formatting, checking PtWs, translating field notes into a legible brief.',
    after: 'Same brief generated from raw shorthand in 90 seconds. Every shift. Consistently structured. Ready for the incoming superintendent.',
    saving: '~25 min per shift',
  },
  {
    dept: 'Finance / Treasury',
    before: 'Monthly CFF consolidation: manually comparing 15–20 BU submissions across different formats from Oracle, SharePoint, and email — taking days every month-end.',
    after: 'Upload two files, describe the comparison. Gemini returns a reconciliation table with naming inconsistencies, formatting errors, and variances above 5% flagged — in two minutes.',
    saving: '~2 hrs per month-end',
  },
  {
    dept: 'SHEQ',
    before: 'Incident investigation narrative written from memory and witness statements — hours to structure, classify, and cross-reference against Vopak standards.',
    after: 'Paste raw witness notes. Get a structured IN10/IN11 report, Tier classification, HiPo assessment, and 5-Why in one pass. Review and approve rather than start from scratch.',
    saving: '~1.5 hrs per investigation',
  },
]

export default function Analytics() {
  return (
    <section id="analytics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-navy-deep px-3 py-1 rounded mb-5 inline-block">Why this matters</span>
        <h2 className="text-3xl font-black text-navy-deep mb-2">The business case — in plain language</h2>
        <p className="text-slate-500 mb-12 max-w-2xl">
          Every hour you save with AI is an hour you can spend on the work that actually moves Vopak forward.
          These are the numbers behind that statement.
        </p>

        {/* KPI grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {kpis.map(k => (
            <div key={k.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <span className="material-symbols-outlined text-primary text-2xl mb-4 block">{k.icon}</span>
              <div className="text-4xl font-black text-navy-deep leading-none mb-1">{k.value}</div>
              <div className="text-sm font-semibold text-navy-deep mb-2">{k.label}</div>
              <div className="h-1 bg-primary w-8 rounded-full mb-3" />
              <p className="text-slate-400 text-xs leading-relaxed">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Before / After */}
        <h3 className="text-xl font-bold text-navy-deep mb-6">What this looks like in practice</h3>
        <div className="space-y-6">
          {examples.map(e => (
            <div key={e.dept} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="bg-navy-deep text-white px-6 py-3 flex items-center justify-between">
                <span className="font-bold text-sm">{e.dept}</span>
                <span className="text-primary font-bold text-sm">Saves {e.saving}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Before</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{e.before}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">With AI</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{e.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-navy-deep rounded-2xl p-8 text-white">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold mb-3">AI is not here to replace your expertise.</h3>
            <p className="text-slate-300 leading-relaxed">
              Your judgment, your experience with Vopak operations, and your professional accountability are what make the output valuable.
              Gemini makes you faster. It does not make you redundant. Use AI to prepare — always let the expert decide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
