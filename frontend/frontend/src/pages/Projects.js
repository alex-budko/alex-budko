import { motion } from "framer-motion"

function Projects() {
  return (
    <div className="full-page">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
      >
        Hi
      </motion.div>
    </div>
  )
}

export default Projects