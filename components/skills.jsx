
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Code, Database, Globe, Layout, Server, Terminal } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
    color: "from-purple-light to-purple-DEFAULT",
    proficiency: 85,
  },
  {
    category: "State Management",
    icon: <Code className="w-6 h-6" />,
    items: ["Context API", "React Hooks", "Component State", "Props Management"],
    color: "from-purple-DEFAULT to-purple-bright",
    proficiency: 80,
  },
  {
    category: "APIs & Integration",
    icon: <Server className="w-6 h-6" />,
    items: ["REST APIs", "Axios", "Fetch API", "CRUD Operations"],
    color: "from-purple-bright to-purple-dark",
    proficiency: 75,
  },
  {
    category: "Tools & Workflow",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Git", "GitLab", "Jira", "Figma", "VS Code", "npm"],
    color: "from-purple-dark to-purple-DEFAULT",
    proficiency: 80,
  },
  {
    category: "Design & Productivity",
    icon: <Globe className="w-6 h-6" />,
    items: ["Figma", "Canva", "Excel", "PowerPoint", "Word"],
    color: "from-purple-DEFAULT to-purple-light",
    proficiency: 70,
  },
  {
    category: "Learning & Growth",
    icon: <Database className="w-6 h-6" />,
    items: ["Problem Solving", "Team Collaboration", "Agile Methodology", "Code Review"],
    color: "from-purple-light to-purple-bright",
    proficiency: 75,
  },
]

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-purple-darkest -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading gradient-text mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-DEFAULT to-purple-bright mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I've learned and worked with during my studies and internship
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="bg-white/90 dark:bg-purple-darker/90 rounded-xl shadow-lg overflow-hidden border border-purple-light/30 dark:border-purple-dark/30 transform transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${skill.color}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-purple-light/30 dark:bg-purple-dark/30 flex items-center justify-center text-purple-DEFAULT dark:text-purple-light"
                    animate={
                      hoveredSkill === index
                        ? {
                            scale: [1, 1.1, 1],
                          }
                        : {}
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-purple-DEFAULT dark:text-purple-light">{skill.category}</h3>
                </div>

                {/* Proficiency bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Proficiency</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: index * 0.05 + i * 0.05 + 0.7 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-purple-bright"
                        animate={
                          hoveredSkill === index
                            ? {
                                scale: [1, 1.3, 1],
                              }
                            : {}
                        }
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/90 dark:bg-purple-darker/90 rounded-xl p-8 shadow-lg border border-purple-light/30 dark:border-purple-dark/30"
        >
          <h3 className="text-xl font-semibold text-purple-DEFAULT dark:text-purple-light mb-6 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-purple-light/10 dark:bg-purple-dark/10 rounded-lg">
              <div className="w-12 h-12 bg-purple-bright rounded-lg flex items-center justify-center text-white font-bold">
                fCC
              </div>
              <div>
                <h4 className="font-semibold text-purple-DEFAULT dark:text-purple-light">
                  Front End Development Libraries
                </h4>
                <p className="text-sm text-muted-foreground">freeCodeCamp • May 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-light/10 dark:bg-purple-dark/10 rounded-lg">
              <div className="w-12 h-12 bg-purple-DEFAULT rounded-lg flex items-center justify-center text-white font-bold">
                JS
              </div>
              <div>
                <h4 className="font-semibold text-purple-DEFAULT dark:text-purple-light">JavaScript Essentials 2</h4>
                <p className="text-sm text-muted-foreground">Cisco Networking Academy • May 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
