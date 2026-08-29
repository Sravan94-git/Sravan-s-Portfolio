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
      {/* Interactive cursor glow & progress bar */}
      <CursorGlow />
      <ScrollProgress />

      {/* Floating Scroll to Top button */}
      <ScrollToTop />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* Compact technology strip at the edge of the hero */}
        <TickerMarquee />

        {/* 2. About */}
        <About />

        {/* 3. Skills */}
        <SkillsGrid />

        {/* 4. Education & Work Experience */}
        <ExperienceEducation />

        {/* 5. My Recent Works */}
        <ProjectsSection />

        {/* 6. Contact */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  )
}

export default App
