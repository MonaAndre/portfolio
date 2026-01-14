import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'
import { ProjectsSection } from '../components/ProjectsSection'
import { SkillsSection } from '../components/SkillsSection'

export const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
