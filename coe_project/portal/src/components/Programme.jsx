const phases = [
  {
    accent: 'border-l-navy-deep',
    badge: 'bg-navy-deep/10 text-navy-deep',
    tag: 'Foundation',
    title: 'Phase 1 — Foundation & Ethics',
    sub: 'M1–M5 · ~90 minutes · No prerequisites',
    tagline: 'Welcome to the new way of working — safe, structured, and empowered by AI.',
    desc: `You'll leave this session knowing exactly what Gemini is, what your four Vopak AI tools do, and — critically — what you must never put into them. You'll also learn the PTCF prompting framework: the single upgrade that turns vague AI results into ones you can actually use.`,
    outcome: 'You leave with: a shared vocabulary, clear guardrails, and your first real prompt that works.',
    chips: ['Open to all · no prerequisites', 'Remote webinar or on-site', '~90 min'],
    comingSoon: false,
  },
  {
    accent: 'border-l-primary',
    badge: 'bg-primary/15 text-navy-deep',
    tag: 'Core Tools',
    title: 'Phase 2 — Core Tools Deep Dive',
    sub: 'M6–M9 · Half-day or full day · Requires Phase 1',
    tagline: 'Turning "Ask Gemini" into your unstoppable daily co-pilot.',
    desc: `We go hands-on with the four tools already in your Vopak account. The side panel in Gmail and Docs, the Web App for heavy analysis and document comparison, Gemini on Mobile + Gemini Live for all colleagues, and NotebookLM — a grounded research space that works only with files you control, so it never invents answers about your own documents.`,
    outcome: "You leave with: working knowledge of all four tools and at least one task you've already done faster.",
    chips: ['Hands-on workshop', 'Half-day or full day', 'Requires Phase 1'],
    comingSoon: false,
  },
  {
    accent: 'border-l-vopak-orange',
    badge: 'bg-orange-100 text-orange-700',
    tag: 'Automate & Build',
    title: 'Phase 3 — Automate & Build',
    sub: 'M10–M11 · Full day · M10 requires M6–M9 · M11 requires M10',
    tagline: 'From user to creator — build AI colleagues and automate the work that slows you down.',
    desc: `You build your first Gems: pre-loaded AI specialists with a fixed role, rules, and knowledge base — the difference between briefing a temp every day and having a specialist on call. Then you create automation flows in Workspace Studio and, with Gemini writing the code, connect anything Studio can't reach yet through Apps Script.`,
    outcome: "You leave with: two working Gems, one Studio automation flow, and one Gemini-written Apps Script — all yours.",
    chips: ['Full-day hands-on', 'Build & showcase format', 'M10 requires M6–M9', 'M11 requires M10'],
    comingSoon: false,
  },
  {
    accent: 'border-l-vopak-cobalt',
    badge: 'bg-sky-100 text-vopak-cobalt',
    tag: 'Coming Next',
    title: 'Phase 4 — AI Agents & Gemini Enterprise',
    sub: 'In development · Enterprise licence · Requires Phases 1–3',
    tagline: "The next frontier: AI that doesn't wait to be asked.",
    desc: `Phase 4 is built on Gemini Enterprise — the licence tier that unlocks extended context (2 million tokens), deeper grounding, and the enterprise-grade agent runtime. Where Phase 3 automates a task, Phase 4 deploys agents — AI systems that reason, plan, and act across multiple steps without you in the loop for every decision. Built on Google's Agent Builder and connected to Oracle, ServiceNow, and Vopak's internal infrastructure, this phase is designed for teams ready to go beyond prompts and into autonomous AI workflows.`,
    outcome: "What's coming: multi-step agents, system integrations, and Gemini Enterprise capabilities.",
    chips: ['In development · 2026', 'Gemini Enterprise licence', 'For Phase 3 graduates'],
    comingSoon: true,
  },
]

export default function Programme() {
  return (
    <section id="programme" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-navy-deep px-3 py-1 rounded mb-5 inline-block">The programme</span>
        <h2 className="text-3xl font-black text-navy-deep mb-2">
          A structured journey — from foundation to automation
        </h2>
        <p className="text-slate-500 mb-12 max-w-2xl">
          Eleven self-contained modules across three active phases — and a fourth phase on the horizon.
          Start with Phase 1 and stop there, or keep going. The further you go, the more you can build.
        </p>

        <div className="space-y-6 mb-16">
          {phases.map((p, i) => (
            <div key={i} className={`bg-white rounded-xl border border-slate-100 hover:shadow-md transition-all overflow-hidden border-l-4 ${p.accent} ${p.comingSoon ? 'opacity-80' : 'shadow-sm'}`}>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-navy-deep">{p.title}</h3>
                      <span className={`${p.badge} px-3 py-0.5 rounded text-xs font-bold uppercase shrink-0`}>{p.tag}</span>
                      {p.comingSoon && (
                        <span className="bg-vopak-cobalt/10 text-vopak-cobalt px-3 py-0.5 rounded text-xs font-bold uppercase">In development</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 font-medium mb-3">{p.sub}</p>
                    <p className="text-slate-500 italic text-sm mb-3">"{p.tagline}"</p>
                    <p className="text-slate-600 leading-relaxed text-sm">{p.desc}</p>
                  </div>
                </div>
                <div className={`${p.comingSoon ? 'bg-sky-50 border-sky-100' : 'bg-slate-50 border-slate-100'} border rounded-lg px-5 py-4 mt-2 mb-4`}>
                  <span className="material-symbols-outlined text-primary text-sm align-middle mr-2">
                    {p.comingSoon ? 'schedule' : 'check_circle'}
                  </span>
                  <span className="text-sm text-navy-deep font-medium">{p.outcome}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.chips.map(c => (
                    <span key={c} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why it works */}
        <div className="bg-navy-deep rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-4">Why it works in phases</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-slate-300 leading-relaxed">
            <div>
              <span className="text-primary font-bold block mb-1">Phase 1 builds the foundation.</span>
              Most training fails because people practise before they understand what the tool actually is. We fix that first.
            </div>
            <div>
              <span className="text-primary font-bold block mb-1">Phase 2 creates daily habits.</span>
              The tools are already in your Vopak account. This phase turns them into something you open every morning.
            </div>
            <div>
              <span className="text-primary font-bold block mb-1">Phase 3 makes you a multiplier.</span>
              Gems and automations save your team's time, not just yours. You become the person who builds things others couldn't.
            </div>
            <div>
              <span className="text-vopak-cobalt font-bold block mb-1">Phase 4 changes what's possible.</span>
              Agents that reason, plan, and act — integrated into Vopak's systems. This is the frontier we're building toward.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
