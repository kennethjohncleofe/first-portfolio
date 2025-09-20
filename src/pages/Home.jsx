import { AboutSection } from "../component/AboutSection"
import { ContactSection } from "../component/ContactSection"
import { HeroSection } from "../component/HeroSection"
import { NavBar } from "../component/NavBar"
import { ProjectSection } from "../component/ProjectSection"
import { SkillsSection } from "../component/SkillsSection"
import { ThemeToggle } from "../component/ThemeToggle"
import { StarBackground } from "../component/StarBackground"
import { Footer } from "../component/Footer"
export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />

            <StarBackground />
            
            <NavBar />
            
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    )    
}