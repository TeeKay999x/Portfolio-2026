import React from 'react'
// import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className='bg-slate-950 text-slate-50  min-h-screen selection:bg-sky-500/30'>
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
