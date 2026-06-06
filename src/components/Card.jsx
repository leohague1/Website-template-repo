import { motion } from 'framer-motion'

export function Card({ children, hover = false, padding = 'md', className = '', ...props }) {
  const paddings = { sm: 'p-4', md: 'p-6', lg: 'p-8' }

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 12px 32px -8px rgba(0,0,0,0.12)' }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`bg-white rounded-xl border border-[--color-border] shadow-sm ${paddings[padding]} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div
      className={`bg-white rounded-xl border border-[--color-border] shadow-sm ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
