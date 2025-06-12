"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileMenuOpen(false)
    const sectionId = href.substring(1)
    setActiveSection(sectionId)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 dark:bg-purple-darkest/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#home"
            className="text-xl md:text-2xl font-bold font-heading gradient-text relative group"
            onClick={() => handleNavClick("#home")}
          >
            Portfolio<span className="text-[#8155BA]">.</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#695e93] to-[#8155ba] dark:from-[#8155ba] dark:to-[#e5cef6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium relative group ${
                  activeSection === link.href.substring(1)
                    ? "text-purple-bright dark:text-purple-light"
                    : "text-purple-DEFAULT hover:text-purple-bright dark:text-neutral-light dark:hover:text-purple-light"
                } transition-colors`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-bright dark:bg-purple-light"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {activeSection !== link.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-bright dark:bg-purple-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                )}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 relative overflow-hidden"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button className="ml-4 bg-purple-DEFAULT hover:bg-purple-bright text-white relative overflow-hidden group">
              <span className="relative z-10">Resume</span>
              <span className="absolute inset-0 bg-purple-bright transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="relative z-50"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white dark:bg-purple-darkest flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-medium ${
                      activeSection === link.href.substring(1)
                        ? "text-purple-bright dark:text-purple-light"
                        : "text-purple-DEFAULT dark:text-neutral-light"
                    }`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button className="mt-6 bg-purple-DEFAULT hover:bg-purple-bright text-white px-8 py-2">Resume</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
