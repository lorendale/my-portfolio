
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Frontend Developer Intern",
    organization: "LegionTech Inc.",
    location: "Remote",
    date: "February 2025 - April 2025",
    description:
      "Gained hands-on experience in frontend development, working with React and modern web technologies. Integrated RESTful APIs and implemented efficient state management solutions.",
    link: "#",
    details: [
      "Integrated RESTful APIs for CRUD operations across multiple modules",
      "Implemented Context API for efficient state management",
      "Created reusable components based on Figma design specifications",
      "Optimized API calls to improve overall application performance",
    ],
  },
  {
    type: "education",
    title: "Web-Based Stress Level Assessment System",
    organization: "University of Cabuyao - Capstone Project",
    location: "Cabuyao, Laguna",
    date: "2024 - May 2025",
    description:
      "Developed a comprehensive system for stress level evaluation using data analysis and machine learning. Led the frontend development using modern web technologies.",
    link: "#",
    details: [
      "Developed system utilizing data analysis for stress level evaluation",
      "Implemented frontend using HTML, CSS, and JavaScript",
      "Integrated KNN algorithm for stress level prediction",
      "Designed user-friendly interface for assessment, results, and recommendations",
    ],
  },
  {
    type: "education",
    title: "E-Commerce System",
    organization: "University of Cabuyao - College Project",
    location: "Cabuyao, Laguna",
    date: "2024 - May 2025",
    description:
      "Developed a full-stack e-commerce system using Vue.js and Bootstrap. Created responsive UI components with comprehensive product management features.",
    link: "#",
    details: [
      "Developed frontend of full-stack e-commerce system using Vue.js and Bootstrap",
      "Implemented product catalog, shopping cart, and admin dashboard interfaces",
      "Created responsive UI components with product filtering and sorting functionality",
      "Collaborated with team members on system architecture and design",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Science in Information Technology",
    organization: "University of Cabuyao",
    location: "Cabuyao, Laguna",
    date: "2021 - Present",
    description:
      "Pursuing a comprehensive IT education with focus on web development, software engineering, and modern programming practices. Maintaining strong academic performance.",
    link: "#",
    details: [
      "Focused on web development and software engineering",
      "Completed coursework in Data Structures, Algorithms, and Database Systems",
      "Participated in various programming projects and assignments",
      "Developed strong foundation in computer science principles",
    ],
  },
]

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedItems, setExpandedItems] = useState([])

  const toggleExpand = (index) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white/50 dark:bg-purple-darkest/50 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading gradient-text mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-DEFAULT to-purple-bright mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional experience in frontend development and web technologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-light via-purple-DEFAULT to-purple-bright dark:from-purple-dark dark:via-purple-DEFAULT dark:to-purple-bright"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5 }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-purple-darker border-2 border-purple-DEFAULT dark:border-purple-light z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                />

                {/* Content */}
                <div className="md:w-1/2 ml-8 md:ml-0 md:px-8">
                  <motion.div
                    className="bg-white/90 dark:bg-purple-darker/90 rounded-lg p-6 shadow-md border border-purple-light/30 dark:border-purple-dark/30"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          exp.type === "education"
                            ? "bg-purple-light/30 text-purple-DEFAULT dark:bg-purple-dark/30 dark:text-purple-light"
                            : "bg-purple-bright/30 text-purple-bright dark:bg-purple-bright/20 dark:text-purple-light"
                        }`}
                      >
                        {exp.type === "education" ? (
                          <GraduationCap className="w-4 h-4" />
                        ) : (
                          <Briefcase className="w-4 h-4" />
                        )}
                      </div>
                      <span className="text-xs font-medium uppercase text-muted-foreground">
                        {exp.type === "education" ? "Education" : "Work Experience"}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-purple-DEFAULT dark:text-purple-light mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                    {/* Expandable details */}
                    {exp.details && (
                      <div className="mt-4">
                        <button
                          onClick={() => toggleExpand(index)}
                          className="flex items-center gap-1 text-sm font-medium text-purple-DEFAULT hover:text-purple-bright dark:text-purple-light dark:hover:text-purple-light/80 transition-colors mb-2"
                        >
                          {expandedItems.includes(index) ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              Hide Details
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              Show Details
                            </>
                          )}
                        </button>

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: expandedItems.includes(index) ? "auto" : 0,
                            opacity: expandedItems.includes(index) ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-1 pl-5 list-disc text-sm text-muted-foreground">
                            {exp.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    )}

                    <div className="mt-4">
                      <span className="text-sm font-medium text-purple-DEFAULT dark:text-purple-light">
                        {exp.organization}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
