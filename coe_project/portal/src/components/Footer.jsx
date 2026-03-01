export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/10 py-14 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">hub</span>
              <span className="text-lg font-extrabold text-white tracking-tight">
                VOPAK <span className="text-primary">AI CoE</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              The Centre of Excellence for AI adoption at Vopak. Supporting the Flow Forward with AI programme — building skills that stick.
            </p>
            <p className="text-xs text-slate-500">
              Part of <span className="text-slate-400 font-medium">Shifting Gears towards 2030</span>
            </p>
          </div>

          {/* Toolkit */}
          <div>
            <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">The toolkit</h5>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Everything behind this programme — slides, detailed module curricula, department-specific prompts, Gem instruction sets,
              facilitator guides, and session materials — is in one place.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              If you're looking for more than what's on this portal, the toolkit has it all.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">On this portal</h5>
            <div className="space-y-2 text-sm">
              {[
                ['#programme', 'The programme'],
                ['#modules', 'Module catalogue'],
                ['#videos', 'Training videos'],
                ['#gems', 'Gem store'],
                ['#analytics', 'Why it matters'],
                ['#champions', 'Champions network'],
              ].map(([href, label]) => (
                <div key={href}>
                  <a href={href} className="hover:text-primary transition-colors">{label}</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs gap-4">
          <p>Flow Forward with AI · Vopak Center of Excellence · © 2026 Royal Vopak N.V. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built by the <span className="text-primary font-bold mx-1">AI CoE Team</span>
            <span className="material-symbols-outlined text-xs">bolt</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
