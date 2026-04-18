import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Education from './components/Education'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Education />
      <Skills />
      <Portfolio />
      <Contact />
      <Chatbot />
    </main>
  )
}
