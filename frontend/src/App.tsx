import { Hero } from './pages/Hero'
import { TickerMarquee } from './pages/TickerMarquee'
import { About } from './pages/About'
import { ProjectsSection } from './pages/ProjectsSection'
import { ExperienceEducation } from './pages/ExperienceEducation'
import { SkillsGrid } from './pages/SkillsGrid'
import { Contact } from './pages/Contact'
import { Footer } from './ui/Footer'
import { Navbar } from './ui/Navbar'
import { ScrollToTop } from './ui/ScrollToTop'
import { CursorGlow, ScrollProgress } from './ui/effects'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0f0715] text-white">
      <CursorGlow />
      <ScrollProgress />

      <ScrollToTop />

      <Navbar />

      <main>
        <Hero />

        <TickerMarquee />

        <About />

        <SkillsGrid />

        <ExperienceEducation />

        <ProjectsSection />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
