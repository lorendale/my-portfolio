"use client";

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Simple text animation without scramble effect
function TypewriterText({ text }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return <span>{displayText}</span>
}

// Simple 3D visual component
function Simple3DVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {/* Main cube */}
        <div className="w-32 h-32 bg-gradient-to-br from-purple-DEFAULT to-purple-bright rounded-lg shadow-2xl relative">
          {/* Front face */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-light to-purple-DEFAULT rounded-lg opacity-90 flex items-center justify-center">
            <span className="text-4xl">💻</span>
          </div>

          {/* Side faces for 3D effect */}
          <div className="absolute top-0 right-0 w-4 h-full bg-purple-dark rounded-r-lg transform skew-y-12 origin-top"></div>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-purple-darker rounded-b-lg transform skew-x-12 origin-left"></div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute -top-8 -right-8 w-8 h-8 bg-purple-bright rounded-full flex items-center justify-center text-white text-sm"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          ⚡
        </motion.div>

        <motion.div
          className="absolute -bottom-8 -left-8 w-8 h-8 bg-purple-light rounded-full flex items-center justify-center text-purple-dark text-sm"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          🚀
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const [activeRole, setActiveRole] = useState(0)

  const roles = ["Frontend Developer", "React Developer", "IT Graduate", "Web Developer"]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-light/30 via-transparent to-purple-DEFAULT/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/80 dark:bg-purple-dark/50 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center gap-2 border border-purple-light/30 dark:border-purple-dark/30">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-purple-DEFAULT dark:text-purple-light">
                  Available for hire
                </span>
              </div>
            </motion.div>

            <motion.p
              className="text-purple-bright dark:text-purple-light font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="gradient-text">
                <TypewriterText text="Loren Dale F. Aleligay" />
              </span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-purple-DEFAULT dark:text-purple-light h-[35px] md:h-[40px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeRole}
                  className="inline-block text-purple-bright dark:text-purple-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[activeRole]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Fresh IT graduate from University of Cabuyao with hands-on experience in frontend development. Passionate
              about creating user-friendly web applications using React and modern technologies.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button 
                className="bg-purple-DEFAULT hover:bg-purple-bright text-white"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-purple-DEFAULT text-purple-DEFAULT hover:bg-purple-DEFAULT/10 hover:text-purple-DEFAULT dark:border-purple-light dark:text-purple-light dark:hover:bg-purple-light/10 dark:hover:text-purple-light"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="mailto:aleligayloren@gmail.com"
                className="text-muted-foreground hover:text-purple-bright dark:hover:text-purple-light transition-colors p-2 rounded-full hover:bg-purple-light/20 dark:hover:bg-purple-dark/30"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://github.com/lorendale"
                className="text-muted-foreground hover:text-purple-bright dark:hover:text-purple-light transition-colors p-2 rounded-full hover:bg-purple-light/20 dark:hover:bg-purple-dark/30"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/loren-dale-aleligay-1a69a2346/"
                className="text-muted-foreground hover:text-purple-bright dark:hover:text-purple-light transition-colors p-2 rounded-full hover:bg-purple-light/20 dark:hover:bg-purple-dark/30"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <Simple3DVisual />

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-bright rounded-lg flex items-center justify-center text-white font-bold text-sm"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <span>IT Grad</span>
              </motion.div>

              <motion.div
                className="absolute -top-6 -left-6 w-14 h-14 bg-purple-light dark:bg-purple-dark rounded-full flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <span className="text-xl">🎓</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <a href="#about" aria-label="Scroll down" className="block p-2 group">
            <ArrowDown className="w-6 h-6 text-purple-DEFAULT dark:text-purple-light group-hover:text-purple-bright dark:group-hover:text-purple-light transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}