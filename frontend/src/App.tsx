import { Hero } from './pages/Hero'
import { SelectedProjects } from './pages/SelectedProjects'
import { EducationSkills } from './pages/EducationSkills'
import { Contact } from './pages/Contact'
import { Footer } from './ui/Footer'
import { Navbar } from './ui/Navbar'
import { ScrollToTop } from './ui/ScrollToTop'
import { CursorGlow, ScrollProgress } from './ui/effects'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0c] text-white">
      <CursorGlow />
      <ScrollProgress />

      <ScrollToTop />

      <Navbar />

      <main>
        <Hero />

        <SelectedProjects />

        <EducationSkills />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
