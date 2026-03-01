const videos = [
  {
    available: true,
    module: 'Pre-work · bridge learning',
    title: 'Generative AI fundamentals — Google Cloud Skills Boost',
    duration: 'Self-paced · Free · Available now',
    note: 'Use this as pre-reading before your Phase 1 session. Covers the foundations in a Vopak-relevant context.',
    href: 'https://cloudskillsboost.google',
    cta: 'Open Cloud Skills Boost →',
  },
  {
    available: false,
    module: 'M1 · Phase 1',
    title: 'What is Generative AI — the Vopak edition',
    duration: '~15 min · CoE production · Coming April 2026',
    note: null, href: null, cta: null,
  },
  {
    available: false,
    module: 'M3 · Phase 1',
    title: 'Zero Trust — what you can and cannot share',
    duration: '~12 min · CoE production · Coming April 2026',
    note: null, href: null, cta: null,
  },
  {
    available: false,
    module: 'M4 · Phase 1',
    title: 'Writing prompts that actually work — the PTCF framework',
    duration: '~20 min · CoE production · Coming April 2026',
    note: null, href: null, cta: null,
  },
  {
    available: false,
    module: 'M6 · Phase 2',
    title: 'Getting the most from the Gemini side panel in Gmail and Docs',
    duration: '~18 min · CoE production · Coming April 2026',
    note: null, href: null, cta: null,
  },
  {
    available: false,
    module: 'M9 · Phase 2',
    title: 'NotebookLM — build your team\'s grounded knowledge base',
    duration: '~22 min · CoE production · Coming April 2026',
    note: null, href: null, cta: null,
  },
]

export default function Videos() {
  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-navy-deep px-3 py-1 rounded mb-5 inline-block">Training videos</span>
        <h2 className="text-3xl font-black text-navy-deep mb-2">On-demand learning library</h2>
        <p className="text-slate-500 mb-4 max-w-2xl">
          Vopak-specific training videos are in production and launching in April 2026.
          In the meantime, Cloud Skills Boost is available now as a strong foundation — use it as pre-work before your Phase 1 session.
        </p>

        <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-5 mb-10">
          <span className="material-symbols-outlined text-blue-500 text-xl shrink-0 mt-0.5">info</span>
          <p className="text-blue-800 text-sm leading-relaxed">
            CoE-produced videos will use real Vopak examples — shift handovers, CFF reconciliation, SHEQ reports — so the learning connects directly to your day-to-day work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div key={i} className={`rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all ${!v.available ? 'opacity-65' : ''}`}>
              <div className={`aspect-video flex items-center justify-center relative ${v.available ? 'bg-gradient-to-br from-navy-deep to-navy-mid' : 'bg-slate-100'}`}>
                {v.available ? (
                  <>
                    <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-navy-deep text-3xl">play_arrow</span>
                    </div>
                    <span className="absolute top-3 left-3 bg-primary text-navy-deep text-xs font-bold px-3 py-1 rounded-full uppercase">Available now</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-slate-300 text-5xl">videocam_off</span>
                    <span className="absolute top-3 right-3 bg-navy-deep/80 text-white text-xs font-bold px-2 py-1 rounded">Apr 2026</span>
                  </>
                )}
              </div>
              <div className="p-5 bg-white">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{v.module}</div>
                <div className="font-bold text-navy-deep mb-1 leading-snug">{v.title}</div>
                <div className="text-xs text-slate-400 mb-3">{v.duration}</div>
                {v.note && <p className="text-slate-500 text-xs italic leading-relaxed mb-3">{v.note}</p>}
                {v.href && (
                  <a href={v.href} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline">
                    {v.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
