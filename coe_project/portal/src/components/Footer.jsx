const links = ['Internal Wiki', 'Privacy Policy', 'Help Desk', 'CoE Channel']

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/10 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">hub</span>
            <span className="text-lg font-extrabold text-white tracking-tight">
              VOPAK <span className="text-primary">AI CoE</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-8 text-sm justify-center">
            {links.map(l => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs font-medium gap-4">
          <p>Flow Forward with AI · Vopak Center of Excellence · © 2026 Royal Vopak N.V. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built by <span className="text-primary font-bold">AI CoE Team</span>
            <span className="material-symbols-outlined text-xs">bolt</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
