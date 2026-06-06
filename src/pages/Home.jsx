import { motion } from 'framer-motion'
import { SEO } from '../components/SEO'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { PageTransition } from '../components/PageTransition'
import { ScrollReveal } from '../components/ScrollReveal'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const features = [
  {
    title: 'Fast by default',
    description: 'Vite 8 gives you instant dev server start and sub-second HMR on any size project.',
    badge: { label: 'Performance', variant: 'info' },
  },
  {
    title: 'Beautiful animations',
    description: 'Framer Motion 12 makes entrance, exit, hover, and scroll animations effortless.',
    badge: { label: 'UX', variant: 'primary' },
  },
  {
    title: 'Design system included',
    description: 'Tailwind 4 with custom tokens, a full colour palette, and reusable components ready to go.',
    badge: { label: 'Design', variant: 'success' },
  },
]

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Home"
        description="A production-ready React + Vite starter for building high-quality websites."
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36 text-center">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <Badge variant="primary" className="mb-6">Website Template</Badge>
          </motion.div>
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
            className="mt-6 max-w-xl mx-auto text-lg text-[--color-muted] leading-relaxed"
          >
            Replace this with a clear one-sentence value proposition. What does this site do and
            why should visitors care?
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button size="lg">Get started</Button>
            <Button size="lg" variant="secondary">Learn more</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features — demonstrates Card + ScrollReveal */}
      <section className="bg-[--color-surface] border-y border-[--color-border]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Everything you need
            </h2>
            <p className="mt-3 text-[--color-muted] max-w-lg mx-auto">
              Replace this section with your real features or services.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <Card hover className="h-full flex flex-col gap-4">
                  <Badge variant={feature.badge.variant}>{feature.badge.label}</Badge>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-[--color-muted] leading-relaxed">{feature.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-[--color-muted] mb-8 max-w-md mx-auto">
            Replace this with a compelling call to action for your specific project.
          </p>
          <Button size="lg">Get started today</Button>
        </ScrollReveal>
      </section>
    </PageTransition>
  )
}
