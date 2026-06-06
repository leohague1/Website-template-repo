import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SEO } from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page not found" />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[--color-primary] mb-4">
            404
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block text-sm font-medium text-[--color-primary] hover:underline"
          >
            ← Back to home
          </Link>
        </motion.div>
      </section>
    </>
  )
}
