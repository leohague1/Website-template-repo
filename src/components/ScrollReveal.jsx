import { motion } from 'framer-motion'

export function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  const offsets = {
    up:    { y: 28 },
    down:  { y: -28 },
    left:  { x: 28 },
    right: { x: -28 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-64px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
