import { useState } from 'react'
import Nav from './components/Nav'
import Programme from './components/Programme'
import Modules from './components/Modules'
import Videos from './components/Videos'
import GemStore from './components/GemStore'
import Analytics from './components/Analytics'
import Champions from './components/Champions'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

const tabs = [
  { id: 'programme', icon: 'route', label: 'Programme', count: null },
  { id: 'modules', icon: 'menu_book', label: 'Modules', count: '11' },
  { id: 'gems', icon: 'diamond', label: 'Gem Store', count: '4' },
  { id: 'videos', icon: 'play_circle', label: 'Videos', count: null },
  { id: 'analytics', icon: 'bar_chart', label: 'Why it matters', count: null },
  { id: 'champions', icon: 'emoji_events', label: 'Champions', count: null },
]

const stats = [
  { icon: 'groups', value: '67', label: 'trained' },
  { icon: 'fork_right', value: '12', label: 'departments' },
  { icon: 'visibility', value: '9', label: 'sessions' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('programme')

  return (
    <div className="min-h-screen bg-white text-navy-deep">
      <Nav />

      {/* Repo Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-sm mb-2 flex-wrap">
            <span className="material-symbols-outlined text-slate-400 text-base">hub</span>
            <a href="#" className="text-primary hover:underline font-medium">vopak-coe</a>
            <span className="text-slate-300 font-light text-lg">/</span>
            <span className="font-bold text-navy-deep">flow-forward-with-ai</span>
            <span className="bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full ml-1">Internal</span>
          </div>

          {/* Title + description */}
          <p className="text-slate-600 text-sm mb-4 max-w-2xl">
            An end-to-end AI skills programme for Vopak colleagues — 11 modules across 3 active phases,
            a Gem Store, and an AI Champions network. Part of <span className="font-medium text-navy-deep">Shifting Gears towards 2030</span>.
          </p>

          {/* Action buttons + stats — GitHub top-right */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {stats.map(s => (
              <button key={s.label}
                className="flex items-center gap-1.5 border border-slate-200 rounded-md px-3 py-1 text-sm hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-slate-500 text-base">{s.icon}</span>
                <span className="font-bold text-navy-deep">{s.value}</span>
                <span className="text-slate-500">{s.label}</span>
              </button>
            ))}
            <a href="#gems"
              className="flex items-center gap-1.5 border border-slate-200 rounded-md px-3 py-1 text-sm hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-primary text-base">diamond</span>
              <span className="font-bold text-navy-deep">4</span>
              <span className="text-slate-500">gems</span>
            </a>
            <a href="#champions"
              className="bg-primary text-navy-deep rounded-md px-4 py-1.5 text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-1">
              <span className="material-symbols-outlined text-base">emoji_events</span>
              Nominate yourself
            </a>
          </div>

          {/* Tab bar */}
          <div className="flex items-end gap-0 border-b border-slate-200 -mx-0 overflow-x-auto">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap
                  ${activeTab === t.id
                    ? 'border-vopak-orange text-navy-deep'
                    : 'border-transparent text-slate-500 hover:text-navy-deep hover:border-slate-300'
                  }`}
              >
                <span className="material-symbols-outlined text-base">{t.icon}</span>
                {t.label}
                {t.count && (
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {t.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content — two columns */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Tab content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'programme' && <ProgrammeTab />}
            {activeTab === 'modules' && <ModulesTab />}
            {activeTab === 'gems' && <GemsTab />}
            {activeTab === 'videos' && <VideosTab />}
            {activeTab === 'analytics' && <AnalyticsTab />}
            {activeTab === 'champions' && <ChampionsTab />}
          </main>

          {/* Sidebar */}
          <div className="hidden lg:block w-80 shrink-0">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

/* ─── Tab wrappers — strip outer section padding, keep content ─── */

function ProgrammeTab() {
  return (
    <div id="programme">
      <Programme />
    </div>
  )
}

function ModulesTab() {
  return (
    <div id="modules">
      <Modules />
    </div>
  )
}

function GemsTab() {
  return (
    <div id="gems">
      <GemStore />
    </div>
  )
}

function VideosTab() {
  return (
    <div id="videos">
      <Videos />
    </div>
  )
}

function AnalyticsTab() {
  return (
    <div id="analytics">
      <Analytics />
    </div>
  )
}

function ChampionsTab() {
  return (
    <div id="champions">
      <Champions />
    </div>
  )
}
