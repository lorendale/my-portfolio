"use client";

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function NoiseTexture() {
  const { theme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  // Always call hooks at the top level
  useEffect(() => {
    setIsDark(theme === "dark")
  }, [theme])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 opacity-[0.015] dark:opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        filter: `contrast(120%) brightness(${isDark ? 150 : 100}%)`,
      }}
    />
  )
}
