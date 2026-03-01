const metrics = [
  { label: 'Projected ROI', value: '292', unit: '%', sub: 'Project Ascend analysis' },
  { label: 'Payback Period', value: '23', unit: ' Mo.', sub: 'Based on 67 trained participants' },
  { label: 'Knowledge Work Time Saved', value: '~30', unit: '%', sub: 'Daily time on search & summarising' },
  { label: 'Participants Trained', value: '67', unit: '', sub: 'Across 9 sessions · 12 departments' },
]

export default function Analytics() {
  return (
    <section id="analytics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-navy-deep px-3 py-1 rounded mb-4 inline-block">Analytics & ROI</span>
        <h2 className="text-3xl font-black text-navy-deep mb-2">Programme impact</h2>
        <p className="text-slate-500 mb-12">Measuring the value of AI adoption across Vopak's Flow Forward programme.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map(m => (
            <div key={m.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
              <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-3">{m.label}</p>
              <p className="text-5xl font-black text-navy-deep leading-none">
                {m.value}<span className="text-2xl">{m.unit}</span>
              </p>
              <div className="h-1 bg-primary w-10 mx-auto mt-4 rounded-full" />
              <p className="text-slate-400 text-xs mt-3">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Time Saved Calculator */}
        <div className="bg-navy-deep rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">Department Time Savings Breakdown</h3>
            <p className="text-slate-400 text-sm">Estimated hours saved per year by department based on Gem usage and TCF adoption.</p>
          </div>
          <div className="flex-1 w-full space-y-3">
            {[
              { dept: 'Operations', pct: 80, color: 'bg-primary' },
              { dept: 'Finance', pct: 65, color: 'bg-primary' },
              { dept: 'SHEQ', pct: 55, color: 'bg-primary' },
              { dept: 'Engineering', pct: 45, color: 'bg-primary' },
            ].map(r => (
              <div key={r.dept} className="flex items-center gap-3">
                <span className="text-white text-xs font-bold w-24 shrink-0">{r.dept}</span>
                <div className="flex-1 bg-white/10 rounded-full h-2">
                  <div className={`${r.color} h-2 rounded-full transition-all`} style={{ width: `${r.pct}%` }} />
                </div>
                <span className="text-primary font-bold text-xs w-8 shrink-0">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
