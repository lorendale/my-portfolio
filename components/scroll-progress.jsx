
import { motion, useScroll } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-light via-purple-bright to-purple-DEFAULT dark:from-purple-dark dark:via-purple-bright dark:to-purple-light z-[100]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  )
}
