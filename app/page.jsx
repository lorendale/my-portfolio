"use client"

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
import { useEffect, useState } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Force a re-render when page becomes visible again
        setIsVisible(false)
        setTimeout(() => setIsVisible(true), 10)
      }
    }

    const handlePageShow = (event) => {
      // Handle browser back/forward navigation
      if (event.persisted) {
        setIsVisible(false)
        setTimeout(() => setIsVisible(true), 10)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    window.addEventListener("pageshow", handlePageShow)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("pageshow", handlePageShow)
    }
  }, [])

  if (!isVisible) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#FEFDFE] to-[#E9D8E1] dark:from-[#170B3B] dark:to-[#281C2D] overflow-hidden">
        <NoiseTexture />
        <ParticleBackground />
        <ScrollProgress />
      </main>
    )
  }

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
