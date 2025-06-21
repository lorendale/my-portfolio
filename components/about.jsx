"use client";

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, GraduationCap, Heart } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-pink dark:from-purple-darkest dark:to-purple-darker -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-DEFAULT to-purple-bright mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-white dark:bg-purple-darker rounded-2xl overflow-hidden border-2 border-purple-light/30 dark:border-purple-dark/30 shadow-xl">
                <div className="w-full h-full relative">
                 <Image
                  src="/public/Dale.JPG"
                  alt="Loren Dale Aleligay"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-bright rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg"
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
                className="absolute -top-6 -left-6 w-16 h-16 bg-purple-light dark:bg-purple-dark rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <span className="text-2xl">🎓</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-white/80 dark:bg-purple-darker/80">
                <TabsTrigger
                  value="about"
                  className="data-[state=active]:bg-purple-light/50 dark:data-[state=active]:bg-purple-dark/50 data-[state=active]:text-purple-DEFAULT dark:data-[state=active]:text-purple-light"
                >
                  <Code className="w-4 h-4 mr-2" />
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-purple-light/50 dark:data-[state=active]:bg-purple-dark/50 data-[state=active]:text-purple-DEFAULT dark:data-[state=active]:text-purple-light"
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="interests"
                  className="data-[state=active]:bg-purple-light/50 dark:data-[state=active]:bg-purple-dark/50 data-[state=active]:text-purple-DEFAULT dark:data-[state=active]:text-purple-light"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Interests
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <h3 className="text-2xl font-semibold text-purple-DEFAULT dark:text-purple-light">Who am I?</h3>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a fresh IT graduate from University of Cabuyao with a passion for frontend development. My
                    journey in tech has been focused on creating user-friendly web applications using modern
                    technologies.
                  </p>

                  <p>
                    During my internship at LegionTech Inc., I gained hands-on experience with React, API integration,
                    and state management. I believe in writing clean, maintainable code and creating interfaces that
                    provide excellent user experiences.
                  </p>

                  <p>
                    I'm always eager to learn new technologies and take on challenging projects that help me grow as a
                    developer. My goal is to contribute to meaningful projects that make a positive impact.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <div className="space-y-6">
                  <div className="bg-white/80 dark:bg-purple-darker/80 p-6 rounded-lg border border-purple-light/30 dark:border-purple-dark/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-light/30 dark:bg-purple-dark/30 flex items-center justify-center text-purple-DEFAULT dark:text-purple-light">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h4 className="font-semibold text-purple-DEFAULT dark:text-purple-light text-lg">
                        Bachelor of Science in Information Technology
                      </h4>
                    </div>
                    <p className="text-muted-foreground mb-2">University of Cabuyao • 2021 - Present</p>
                    <p className="text-muted-foreground">
                      Focused on web development, software engineering, and modern programming practices. Completed
                      capstone project on Web-Based Stress Level Assessment System.
                    </p>
                  </div>

                  <div className="bg-white/80 dark:bg-purple-darker/80 p-6 rounded-lg border border-purple-light/30 dark:border-purple-dark/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-bright/30 dark:bg-purple-bright/20 flex items-center justify-center text-purple-bright dark:text-purple-light">
                        <Code className="w-5 h-5" />
                      </div>
                      <h4 className="font-semibold text-purple-DEFAULT dark:text-purple-light text-lg">
                        Accountancy, Business and Management (ABM)
                      </h4>
                    </div>
                    <p className="text-muted-foreground mb-2">Pulo Senior High School • 2019 - 2021</p>
                    <p className="text-muted-foreground">
                      Strong foundation in analytical thinking and problem-solving skills that complement my technical
                      abilities.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="interests" className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Frontend Development", icon: "💻", color: "from-purple-light to-purple-DEFAULT" },
                    { name: "React & JavaScript", icon: "⚛️", color: "from-purple-DEFAULT to-purple-bright" },
                    { name: "UI/UX Design", icon: "🎨", color: "from-purple-bright to-purple-dark" },
                    { name: "API Integration", icon: "🔗", color: "from-purple-dark to-purple-DEFAULT" },
                    { name: "Learning New Tech", icon: "📚", color: "from-purple-DEFAULT to-purple-light" },
                    { name: "Problem Solving", icon: "🧩", color: "from-purple-light to-purple-bright" },
                  ].map((interest, i) => (
                    <motion.div
                      key={interest.name}
                      className="bg-white/80 dark:bg-purple-darker/80 p-4 rounded-lg border border-purple-light/30 dark:border-purple-dark/30 flex items-center gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${interest.color} flex items-center justify-center text-white shadow-md`}
                      >
                        <span className="text-lg">{interest.icon}</span>
                      </div>
                      <span className="text-sm font-medium text-purple-DEFAULT dark:text-purple-light">
                        {interest.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
