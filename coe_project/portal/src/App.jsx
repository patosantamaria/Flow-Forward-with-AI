import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Programme from './components/Programme'
import Modules from './components/Modules'
import Videos from './components/Videos'
import GemStore from './components/GemStore'
import Analytics from './components/Analytics'
import Champions from './components/Champions'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-display antialiased">
      <Nav />
      <Hero />
      <Programme />
      <Modules />
      <Videos />
      <GemStore />
      <Analytics />
      <Champions />
      <Footer />
    </div>
  )
}
