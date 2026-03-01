export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-navy-deep text-white px-6 py-3 shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">hub</span>
            <span className="text-lg font-extrabold tracking-tight">
              VOPAK <span className="text-primary">AI CoE</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {['programme','modules','videos','gems','analytics','champions'].map(id => (
              <a key={id} href={`#${id}`}
                className="hover:text-primary transition-colors capitalize">
                {id === 'gems' ? 'Gem Store' : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>
        <a href="#gems"
          className="bg-primary hover:bg-primary/90 text-navy-deep px-5 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">storefront</span>
          Open Gem Store
        </a>
      </div>
    </nav>
  )
}
