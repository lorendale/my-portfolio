import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import ScrollProgress from "@/components/scroll-progress"
import NoiseTexture from "@/components/noise-texture"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FEFDFE] to-[#E9D8E1] dark:from-[#170B3B] dark:to-[#281C2D] overflow-hidden">
      <NoiseTexture />
      <ParticleBackground />
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
