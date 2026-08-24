import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TickerMarquee } from './components/TickerMarquee'
import { Services } from './components/Services'
import { ProjectsSection } from './components/ProjectsSection'
import { StatsBar } from './components/StatsBar'
import { ExperienceEducation } from './components/ExperienceEducation'
import { SkillsGrid } from './components/SkillsGrid'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { CursorGlow, ScrollProgress } from './components/effects'

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

        {/* 2. Horizontal Tech Ticker Banner */}
        <TickerMarquee />

        {/* 3. Services Section (2x2 Grid) */}
        <Services />

        {/* 4. My Recent Works (Projects Showcase with Filter Tabs) */}
        <ProjectsSection />

        {/* 5. Stats Counter Bar */}
        <StatsBar />

        {/* 6. Education & Work Experience Side-by-Side */}
        <ExperienceEducation />

        {/* 7. My Skills Grid with Percentage Badges */}
        <SkillsGrid />

        {/* 8. Contact Section ("Let's have a chat") */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  )
}

export default App
