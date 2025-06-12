"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Web-Based Stress Level Assessment System",
    description:
      "A comprehensive capstone project that evaluates stress levels using data analysis and KNN algorithm. Features user-friendly interface for assessments and recommendations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["HTML5", "CSS3", "JavaScript", "KNN Algorithm", "Data Analysis"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    color: "#8155BA",
  },
  {
    title: "E-Commerce System",
    description:
      "Full-stack e-commerce platform with product catalog, shopping cart, and admin dashboard. Built with Vue.js and Bootstrap for responsive design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Bootstrap", "JavaScript", "Responsive Design"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    color: "#695E93",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing my projects and skills as a frontend developer. Built with React and modern web technologies.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    color: "#341948",
  },
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const displayedProjects = showAll ? projects : projects.filter((project) => project.featured)

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white/50 dark:bg-purple-darkest/50 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading gradient-text mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-DEFAULT to-purple-bright mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my key projects that demonstrate my skills in frontend development and web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-purple-darker rounded-lg overflow-hidden shadow-md border border-purple-light/20 dark:border-purple-dark/20 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top, ${project.color}CC, transparent)`,
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 dark:bg-purple-dark/90 text-purple-DEFAULT dark:text-white p-2 rounded-full hover:bg-purple-bright hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="sr-only">Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 dark:bg-purple-dark/90 text-purple-DEFAULT dark:text-white p-2 rounded-full hover:bg-purple-bright hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span className="sr-only">View Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-purple-DEFAULT dark:text-purple-light mb-2 group-hover:text-purple-bright dark:group-hover:text-purple-light/90 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-purple-light/20 text-purple-DEFAULT dark:bg-purple-dark/20 dark:text-purple-light border-purple-light/30 dark:border-purple-dark/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
