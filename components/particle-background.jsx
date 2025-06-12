"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/components/theme-provider"

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef([])
  const animationRef = useRef(0)
  const { theme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // Initialize dimensions - this hook must always run
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    // Check if we should disable particles on low-end devices
    const checkPerformance = () => {
      // Simple check for mobile devices
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

      // Disable particles on mobile for better performance
      if (isMobile) {
        setIsVisible(false)
      }
    }

    handleResize()
    checkPerformance()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Create particles - this hook must always run
  useEffect(() => {
    if (!isVisible) return

    const isDark = theme === "dark"
    const particleColors = isDark
      ? ["#8155BA", "#E5CEF6", "#695E93", "#341948", "#BEAFC2"]
      : ["#8155BA", "#E5CEF6", "#695E93", "#BEAFC2", "#E9D8E1"]

    if (dimensions.width > 0 && dimensions.height > 0) {
      const particles = []
      // Reduce particle count for better performance
      const particleCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 30000), 50)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * 2 + 1, // Smaller particles
          speedX: (Math.random() - 0.5) * 0.2, // Slower movement
          speedY: (Math.random() - 0.5) * 0.2, // Slower movement
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          opacity: Math.random() * 0.4 + 0.1,
        })
      }

      particlesRef.current = particles
    }
  }, [dimensions, theme, isVisible])

  // Handle mouse movement - this hook must always run
  useEffect(() => {
    if (!isVisible) return

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsHovering(true)

      // Reset hovering state after mouse stops moving
      setTimeout(() => setIsHovering(false), 2000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isVisible])

  // Animation loop - this hook must always run
  useEffect(() => {
    if (!isVisible) return

    // Animation function that only runs when all conditions are met
    const animate = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      if (dimensions.width === 0 || dimensions.height === 0) return

      canvas.width = dimensions.width
      canvas.height = dimensions.height

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Boundary check
        if (particle.x < 0 || particle.x > dimensions.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > dimensions.height) particle.speedY *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()

        // Connect particles that are close to each other - limit connections for performance
        let connectionsCount = 0
        for (let i = 0; i < particlesRef.current.length; i++) {
          if (connectionsCount > 3) break // Limit connections per particle

          const otherParticle = particlesRef.current[i]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 80 && distance > 0) {
            // Reduced connection distance
            connectionsCount++
            ctx.beginPath()
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = 0.05 * (1 - distance / 80) // Reduced opacity
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        }

        // Interact with mouse - simplified for performance
        if (isHovering) {
          const dx = particle.x - mousePosition.x
          const dy = particle.y - mousePosition.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 120 // Reduced interaction distance

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            const angle = Math.atan2(dy, dx)
            particle.x += Math.cos(angle) * force * 1.5 // Reduced force
            particle.y += Math.sin(angle) * force * 1.5
          }
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, mousePosition, isHovering, theme, isVisible])

  if (!isVisible) {
    return null
  }

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-20" />
}
