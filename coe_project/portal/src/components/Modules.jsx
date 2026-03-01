import { useState } from 'react'

const phase1 = [
  {
    id: 'M1', dur: '15 min', icon: 'psychology',
    title: 'GenAI Foundations',
    what: 'What AI actually is — and what it is not.',
    detail: `We walk through the evolution from rule-based software to generative AI in plain language. You'll understand what Gemini is, where it fits in the AI landscape, and what the four tools in your Vopak account each do — including the difference that enterprise licensing makes for your data.`,
    tag: 'Opens any session', tagColor: 'bg-navy-deep/8 text-navy-deep',
  },
  {
    id: 'M2', dur: '10 min', icon: 'trending_up',
    title: 'The Flow Forward vision',
    what: 'The strategic "why" — in real Vopak numbers.',
    detail: `Every knowledge worker at Vopak spends up to 30% of their day searching for information across Oracle, Google Drive, and SharePoint. Project Ascend projects a 292% ROI on AI adoption with a 23-month payback. This module makes the case personal: your shift handover, your month-end close, your recurring report — these are the things we are here to fix.`,
    tag: 'Always pair with M1', tagColor: 'bg-navy-deep/8 text-navy-deep',
  },
  {
    id: 'M3', dur: '20 min', icon: 'shield',
    title: 'Security & Zero Trust',
    what: 'The non-negotiables — what you can and must never do.',
    detail: `No PII. No passwords. No safety-critical decisions handed off to AI without human review. We cover Enterprise Data Protection (your prompts never train the public model), the SHEQ Double-Check Rule, and the one test that applies to every AI output before it goes anywhere: would you be comfortable if your manager saw exactly what you typed?`,
    tag: 'Always before practice', tagColor: 'bg-navy-deep/8 text-navy-deep',
  },
  {
    id: 'M4', dur: '60 min', icon: 'edit_note',
    title: 'PTCF Prompting Framework',
    what: 'Persona · Task · Context · Format — and the advanced techniques that take you further.',
    detail: `PTCF is the foundation: Persona, Task, Context, Format — give Gemini a role, a precise task, specific context about your situation, and the exact format you need. Three live prompts are rewritten from vague to precise, with the room seeing the difference in real time.\n\nOnce PTCF is solid, we move to three advanced techniques that unlock genuinely complex outputs:\n\n— Persona / Role prompting: give Gemini a specific professional identity, communication style, and constraints. Not “summarise this” but “You are a senior Vopak Operations Superintendent reviewing a shift handover for completeness and safety-critical gaps. Flag anything missing.”\n\n— Chain of Thought: instruct Gemini to reason step by step before giving the answer. Essential for root cause analysis, decision support, and any output where the reasoning matters as much as the conclusion.\n\n— Conditional logic (if / then / else): write prompts that branch on conditions, so a single prompt adapts to different inputs or scenarios without you rewriting it each time.\n\nAll three are practised on a real Vopak task before the session ends. You will use every one of them in Phase 2.`,
    tag: 'Most impactful module · 60 min', tagColor: 'bg-primary/15 text-navy-deep',
  },
  {
    id: 'M5', dur: '15 min', icon: 'play_arrow',
    title: 'Live demo — the difference',
    what: 'Seeing is believing. Same task, two prompts, night-and-day results.',
    detail: `A live side-by-side: a generic prompt versus a well-structured TCF prompt, on a task from your department. Then quick-fire departmental demos — Operations shift handover, Finance CFF reconciliation, SHEQ incident report — to show that this isn't abstract. It works on your work.`,
    tag: 'Closes Phase 1', tagColor: 'bg-slate-100 text-slate-500',
  },
]

const phase2 = [
  {
    id: 'M6', dur: '60 min', icon: 'tab',
    title: 'Gemini in Workspace — side panel',
    what: 'The assistant that travels with you across every Workspace app.',
    detail: `The "Ask Gemini" side panel appears as the ✨ sparkle icon in Gmail, Docs, Sheets, and Drive. It reads whatever is open without you copying and pasting anything. Type @ to summon any file from Drive directly into the conversation. We practise triage, summarisation, and drafting — all without leaving your inbox.`,
    tag: '30 min instruction + 30 min practice', tagColor: 'bg-slate-100 text-slate-500',
  },
  {
    id: 'M7', dur: '60 min', icon: 'computer',
    title: 'Gemini Web App — heavy lifting',
    what: 'Complex reasoning, document comparison, and web research — where M4 techniques pay off.',
    detail: `Where the side panel is your fast-acting assistant, the Web App (gemini.google.com) is your analyst. Upload two documents and compare them clause by clause. Cross-reference an RFP against your internal Pricing Policy. Research a competitor using live web grounding.\n\nThis is where the advanced techniques from M4 (chain of thought, persona, conditional logic) make a real difference — you are no longer asking simple questions, you are running structured multi-step reasoning on documents that matter. We show you when to use each model — Flash for speed, Pro for complex reasoning — and practise at least one document analysis task from your department.`,
    tag: 'Builds on M4 advanced techniques', tagColor: 'bg-slate-100 text-slate-500',
  },
  {
    id: 'M8', dur: '30 min', icon: 'phone_android',
    title: 'Gemini on Mobile',
    what: 'For everyone — Gemini in your pocket, wherever you are.',
    detail: `The same enterprise-protected Gemini that runs on your laptop is available on your phone. Take a photo of a document, form, or physical object and ask questions about it. Speak observations and get a structured output. Translate on the spot.\n\nThe session includes a Gemini Live speed-prompting exercise: open a voice conversation, talk through an idea, problem, or brief — let Gemini push back, refine it, and explore it with you in real time — then ask it to turn that conversation into a finished report, an app brief, or a concrete action plan. It is the fastest way to go from a half-formed thought to something you can actually use.`,
    tag: 'For all colleagues · includes Gemini Live', tagColor: 'bg-primary/15 text-navy-deep',
  },
  {
    id: 'M9', dur: '60 min', icon: 'auto_stories',
    title: 'NotebookLM — your team\'s knowledge base',
    what: 'Grounded, source-cited answers from documents you control.',
    detail: `NotebookLM only reads what you give it — up to 300 sources. That means it never invents answers about your documents. Upload your BU's SOPs, a set of contracts, or your department's policy library, and ask questions in plain language. Every answer is cited back to the source. Includes audio overviews: a two-person podcast-style summary of your materials that you can listen to on the way in.`,
    tag: '30 min instruction + 30 min practice', tagColor: 'bg-slate-100 text-slate-500',
  },
]

const phase3 = [
  {
    id: 'M10', dur: '120 min', icon: 'smart_toy',
    title: 'Gems — build your AI colleague',
    what: 'A pre-loaded specialist, ready when you need them.',
    detail: `A Gem is a Gemini conversation pre-loaded with a persona, a set of rules, and a knowledge base you define. The difference between a Gem and a regular prompt is the difference between briefing a temp every single day and having a specialist on call who already knows your context. You build two: one for yourself, one for your department. By the end of the session, both are live and shareable.`,
    tag: 'Requires M6–M9 · 60 min instruction + 60 min build', tagColor: 'bg-slate-100 text-slate-500',
  },
  {
    id: 'M11', dur: '90 min', icon: 'automation',
    title: 'Workspace Studio & Apps Script',
    what: 'Automate what repeats — without writing a single line of code yourself.',
    detail: `Workspace Studio lets you describe an automation flow in plain language and it builds and runs it for you. For anything Studio can't do yet, Gemini writes the Apps Script — you describe what you want automated, Gemini produces the code, you paste it and click Run. No programming skills required. We automate one real task from your week before the session ends.`,
    tag: 'Requires M10 · 45 min instruction + 45 min build', tagColor: 'bg-slate-100 text-slate-500',
  },
]

const tabs = [
  { label: 'Phase 1', short: 'Foundation', modules: phase1 },
  { label: 'Phase 2', short: 'Core Tools', modules: phase2 },
  { label: 'Phase 3', short: 'Automate & Build', modules: phase3 },
]

function ModuleCard({ mod }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="bg-white rounded-xl border-l-4 border-navy-deep border border-slate-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col cursor-pointer"
      onClick={() => setOpen(o => !o)}
    >
      <span className="material-symbols-outlined text-primary text-3xl mb-3">{mod.icon}</span>
      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{mod.id} · {mod.dur}</div>
      <h4 className="font-bold text-navy-deep mb-2 leading-snug">{mod.title}</h4>
      <p className="text-slate-500 text-sm italic mb-3">{mod.what}</p>

      {open && (
        <p className="text-slate-600 text-sm leading-relaxed mb-4 border-t border-slate-100 pt-3">{mod.detail}</p>
      )}

      <div className="flex items-center justify-between mt-auto">
        <span className={`${mod.tagColor} text-[10px] px-2 py-1 rounded font-bold`}>{mod.tag}</span>
        <span className="material-symbols-outlined text-slate-400 text-sm">{open ? 'expand_less' : 'expand_more'}</span>
      </div>
    </div>
  )
}

export default function Modules() {
  const [active, setActive] = useState(0)

  return (
    <section id="modules" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-navy-deep px-3 py-1 rounded mb-5 inline-block">Module catalogue</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black text-navy-deep">All 11 training modules</h2>
            <p className="text-slate-500 mt-1 max-w-xl">Each module is self-contained with a clear outcome. Click any card to read what you'll actually learn and be able to do.</p>
          </div>
          <div className="flex bg-slate-200 p-1 rounded-lg gap-1 self-start md:self-auto">
            {tabs.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded text-sm font-bold transition-all ${active === i ? 'bg-white text-navy-deep shadow-sm' : 'text-slate-500 hover:text-navy-deep'}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-400 italic mb-6">Phase {active + 1} — {tabs[active].short}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {tabs[active].modules.map(m => <ModuleCard key={m.id} mod={m} />)}
        </div>

        <p className="text-xs text-slate-400 mt-6 text-center">
          Tap any module card to expand the full learning detail.
        </p>
      </div>
    </section>
  )
}
