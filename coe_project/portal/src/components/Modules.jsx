import { useState } from 'react'

const phase1 = [
  { id: 'M1', dur: '15 min', icon: 'psychology', title: 'GenAI Foundations', desc: "The AI evolution, what Gemini is, Vopak's 4 tools, and Enterprise Data Protection.", tag: 'OPENS ANY SESSION', tagColor: 'bg-navy-deep/8 text-navy-deep' },
  { id: 'M2', dur: '10 min', icon: 'trending_up', title: 'The Flow Forward Vision', desc: 'Real Vopak friction points, Shifting Gears 2030, and the 292% projected ROI case.', tag: 'PAIR WITH M1', tagColor: 'bg-navy-deep/8 text-navy-deep' },
  { id: 'M3', dur: '20 min', icon: 'shield', title: 'Security & Zero Trust', desc: 'No PII, no secrets, hallucination awareness, and the SHEQ Double-Check Rule.', tag: 'BEFORE ANY PRACTICE', tagColor: 'bg-navy-deep/8 text-navy-deep' },
  { id: 'M4', dur: '35 min', icon: 'edit_note', title: 'TCF Prompting Framework', desc: 'Persona + Task + Context + Format — the universal formula with live practice.', tag: 'MOST IMPACTFUL', tagColor: 'bg-primary/15 text-navy-deep' },
  { id: 'M5', dur: '15 min', icon: 'play_arrow', title: 'Live Demo: The Difference', desc: 'Side-by-side: bad prompt vs. TCF master prompt. Departmental quick-fire demos.', tag: 'AFTER M4', tagColor: 'bg-slate-100 text-slate-500' },
]

const phase2 = [
  { id: 'M6', dur: '60 min', icon: 'tab', title: 'Gemini in Workspace — Side Panel', desc: 'The "Ask Gemini" side panel across Gmail, Docs, Sheets, and Drive. Using the @ connector.', tag: '30 min instruction + 30 min practice', tagColor: 'bg-slate-100 text-slate-500' },
  { id: 'M7', dur: '60 min', icon: 'computer', title: 'Gemini Web App', desc: 'Heavy lifting: complex document comparison, web research, visual analysis, multi-file reasoning.', tag: 'Pair with M6 for 2-hr tools session', tagColor: 'bg-slate-100 text-slate-500' },
  { id: 'M8', dur: '20 min', icon: 'phone_android', title: 'Gemini on Mobile', desc: 'For terminal and field staff. Photo → structured data, voice → safety walk report, quick translation.', tag: 'Best for field/terminal teams', tagColor: 'bg-slate-100 text-slate-500' },
  { id: 'M9', dur: '60 min', icon: 'auto_stories', title: 'NotebookLM — Your Team\'s Brain', desc: 'Upload up to 300 sources. Get grounded, source-cited answers. Audio overviews. Multi-document synthesis.', tag: '30 min instruction + 30 min practice', tagColor: 'bg-slate-100 text-slate-500' },
]

const phase3 = [
  { id: 'M10', dur: '120 min', icon: 'smart_toy', title: 'Gems — Build Your AI Colleague', desc: 'Create pre-loaded AI specialists with a fixed role, rules, knowledge base, and conversation starters.', tag: '60 min instruction + 60 min practice', tagColor: 'bg-slate-100 text-slate-500' },
  { id: 'M11', dur: '105 min', icon: 'automation', title: 'Workspace Studio & Apps Script', desc: 'Studio: personal automation flows. Apps Script: Gemini writes the code — you describe, paste, click Run.', tag: '45 min instruction + 60 min practice', tagColor: 'bg-slate-100 text-slate-500' },
]

const tabs = [
  { label: 'Phase 1 — Foundation', modules: phase1 },
  { label: 'Phase 2 — Core Tools', modules: phase2 },
  { label: 'Phase 3 — Automate & Build', modules: phase3 },
]

function ModuleCard({ mod }) {
  return (
    <div className="bg-white rounded-xl border-l-4 border-navy-deep border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all p-6 flex flex-col">
      <span className="material-symbols-outlined text-primary text-3xl mb-3">{mod.icon}</span>
      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{mod.id} · {mod.dur}</div>
      <h4 className="font-bold text-navy-deep mb-2 leading-snug">{mod.title}</h4>
      <p className="text-slate-500 text-sm flex-1 mb-4">{mod.desc}</p>
      <span className={`${mod.tagColor} text-[10px] px-2 py-1 rounded font-bold self-start`}>{mod.tag}</span>
    </div>
  )
}

export default function Modules() {
  const [active, setActive] = useState(0)

  return (
    <section id="modules" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-navy-deep px-3 py-1 rounded mb-4 inline-block">Module Catalogue</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black text-navy-deep">All 11 training modules</h2>
            <p className="text-slate-500 mt-1">Each module is self-contained with clear outcomes and prerequisites.</p>
          </div>
          <div className="flex bg-slate-200 p-1 rounded-lg gap-1 self-start">
            {tabs.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded text-sm font-bold transition-all ${active === i ? 'bg-white text-navy-deep shadow-sm' : 'text-slate-500 hover:text-navy-deep'}`}>
                Phase {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {tabs[active].modules.map(m => <ModuleCard key={m.id} mod={m} />)}
        </div>
      </div>
    </section>
  )
}
