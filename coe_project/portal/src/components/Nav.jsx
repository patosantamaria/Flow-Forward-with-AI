export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-navy-deep border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 h-14 flex items-center gap-4">
        {/* Logo / Org */}
        <div className="flex items-center gap-2 shrink-0">
          <img
            src="https://storage.googleapis.com/vopak-asset-library-prod/raw/elements/1llsQNf8T1hY9yTLBf3CRpQYDSJmQjN79_Logo_VOPAK_diap_300_RGB.png"
            alt="Vopak"
            className="h-5 object-contain"
            onError={e => { e.target.style.display='none' }}
          />
        </div>

        {/* Search bar (decorative, GitHub style) */}
        <div className="flex-1 max-w-xs hidden md:flex items-center gap-2 bg-white/10 border border-white/20 rounded-md px-3 h-8 cursor-text hover:border-primary/60 transition-colors">
          <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
          <span className="text-slate-400 text-xs">Search portal...</span>
          <span className="ml-auto text-slate-500 text-[10px] border border-white/15 rounded px-1">/</span>
        </div>

        <div className="flex-1" />

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {[
            { href: '#programme', label: 'Programme' },
            { href: '#gems', label: 'Gem Store' },
            { href: '#champions', label: 'Champions' },
          ].map(l => (
            <a key={l.href} href={l.href}
              className="hidden lg:block text-slate-300 hover:text-white px-3 py-1.5 rounded-md text-sm hover:bg-white/10 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <button className="bg-primary text-navy-deep px-3 py-1 rounded-md text-xs font-bold hover:opacity-90 transition flex items-center gap-1 shrink-0">
          <span className="material-symbols-outlined text-xs">emoji_events</span>
          Join Champions
        </button>
      </div>
    </header>
  )
}
