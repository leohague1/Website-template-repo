import { motion } from 'framer-motion'
import { SEO } from '../components/SEO'
import { Button } from '../components/Button'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to our website. Replace this with a real description."
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36 text-center">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-[--color-primary] mb-4"
          >
            Your tagline here
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
          >
            Build something
            <br />
            <span className="text-[--color-primary]">worth visiting.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl mx-auto text-lg text-gray-500 leading-relaxed"
          >
            Replace this with a clear one-sentence value proposition. What does this site do and
            why should visitors care?
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button size="lg">Get started</Button>
            <Button size="lg" variant="secondary">
              Learn more
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
