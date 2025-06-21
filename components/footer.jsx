
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <footer className="py-8 bg-white/80 dark:bg-purple-darkest/80 backdrop-blur-sm border-t border-purple-light/20 dark:border-purple-dark/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Loren Dale Aleligay. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-1 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <span>Made with</span>
            <motion.div
              animate={
                isHovered
                  ? {
                      scale: [1, 1.3, 1],
                    }
                  : {
                      scale: [1, 1.1, 1],
                    }
              }
              transition={
                isHovered
                  ? {
                      duration: 0.5,
                    }
                  : {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }
              }
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>using Next.js and Tailwind CSS</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
