const videos = [
  { available: true, module: 'Pre-Work · Bridge Content', title: 'Gemini Foundations — Cloud Skills Boost', duration: 'Google · Available now', href: 'https://cloudskillsboost.google' },
  { available: false, module: 'M1 · Foundation', title: 'What is Generative AI — Vopak Edition', duration: '~15 min · CoE Production' },
  { available: false, module: 'M3 · Security', title: 'Zero Trust: What You Can & Cannot Share', duration: '~12 min · CoE Production' },
  { available: false, module: 'M4 · TCF Framework', title: 'Writing Prompts That Actually Work', duration: '~20 min · CoE Production' },
  { available: false, module: 'M6 · Gemini in Workspace', title: 'Using the Side Panel in Gmail & Docs', duration: '~18 min · CoE Production' },
  { available: false, module: 'M9 · NotebookLM', title: 'Build Your Team\'s Knowledge Base', duration: '~22 min · CoE Production' },
]

export default function Videos() {
  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-navy-deep px-3 py-1 rounded mb-4 inline-block">Training Videos</span>
        <h2 className="text-3xl font-black text-navy-deep mb-2">On-demand training library</h2>
        <p className="text-slate-500 mb-8">CoE-produced videos use Vopak-specific examples. Cloud Skills Boost is available as a bridge until CoE videos launch.</p>

        <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-xl p-5 mb-10">
          <span className="material-symbols-outlined text-orange-500 text-2xl">videocam</span>
          <div>
            <div className="font-semibold text-orange-800">CoE Videos coming April 2026</div>
            <div className="text-sm text-orange-700">Internal Vopak training videos are in production. Use Cloud Skills Boost below as foundation pre-work in the meantime.</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div key={i} className={`group rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all ${!v.available ? 'opacity-65' : ''}`}>
              <div className={`aspect-video flex items-center justify-center relative ${v.available ? 'bg-gradient-to-br from-navy-deep to-navy-mid' : 'bg-slate-200'}`}>
                {v.available ? (
                  <>
                    <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-navy-deep text-3xl">play_arrow</span>
                    </div>
                    <span className="absolute top-3 left-3 bg-primary text-navy-deep text-xs font-bold px-3 py-1 rounded-full uppercase">Available Now</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-slate-400 text-5xl">schedule</span>
                    <span className="absolute top-3 right-3 bg-vopak-orange/90 text-white text-xs font-bold px-2 py-1 rounded">Coming Apr 2026</span>
                  </>
                )}
              </div>
              <div className="p-5 bg-white">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{v.module}</div>
                <div className="font-bold text-navy-deep mb-1">{v.title}</div>
                <div className="text-sm text-slate-500">{v.duration}</div>
                {v.href && (
                  <a href={v.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3 hover:underline">
                    Open in Cloud Skills Boost →
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
