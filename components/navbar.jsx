"use client";

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

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const handleNavClick = (href) => {
    setMobileMenuOpen(false)
    const sectionId = href.substring(1)
    setActiveSection(sectionId)

    // Smooth scroll to section
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offsetTop = element.offsetTop - 80 // Account for fixed navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-purple-darkest/95 backdrop-blur-md shadow-lg border-b border-purple-light/20 dark:border-purple-dark/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="#home"
              className="text-xl md:text-2xl font-bold font-heading gradient-text relative group z-[101]"
              onClick={() => handleNavClick("#home")}
            >
              Portfolio<span className="text-[#8155BA]">.</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#695e93] to-[#8155ba] dark:from-[#8155ba] dark:to-[#e5cef6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 text-sm font-medium relative group transition-colors duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-purple-bright dark:text-purple-light"
                      : "text-purple-DEFAULT hover:text-purple-bright dark:text-neutral-light dark:hover:text-purple-light"
                  }`}
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
                </button>
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
                <a  
                href="/Aleligay-Loren-Dale-Resume.pdf"
                download="Aleligay-Loren-Dale-Resume.pdf" 
                className="relative z-10">
                Resume
              </a>
              <span className="absolute inset-0 bg-purple-bright transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2 z-[101]">
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="relative">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                className="relative"
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
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Portal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 max-w-[75vw] bg-white dark:bg-purple-darkest z-[95] shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-purple-light/20 dark:border-purple-dark/20">
                  <span className="text-base font-semibold text-purple-DEFAULT dark:text-purple-light">Navigation</span>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 overflow-y-auto">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <button
                          onClick={() => handleNavClick(link.href)}
                          className={`block w-full text-left text-sm font-medium py-3 px-3 rounded-lg transition-all duration-200 ${
                            activeSection === link.href.substring(1)
                              ? "text-purple-bright dark:text-purple-light bg-purple-light/10 dark:bg-purple-dark/20 border-l-2 border-purple-bright dark:border-purple-light"
                              : "text-purple-DEFAULT dark:text-neutral-light hover:text-purple-bright dark:hover:text-purple-light hover:bg-purple-light/5 dark:hover:bg-purple-dark/10"
                          }`}
                        >
                          {link.name}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-purple-light/20 dark:border-purple-dark/20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button className="w-full bg-purple-DEFAULT hover:bg-purple-bright text-white text-sm py-2.5">
                      <a href="/resume.pdf" download="Loren_Dale_Aleligay_Resume.pdf" className="w-full block">
                        Download Resume
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
