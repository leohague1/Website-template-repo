import { motion } from 'framer-motion'
import { Player } from '@remotion/player'
import { MyComp } from './remotion/MyComp'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 gap-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center max-w-xl"
      >
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Your project name
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          A short description of what this site does.
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-[--color-primary] text-white px-6 py-3 rounded-xl font-medium shadow-md"
        >
          Get started
        </motion.a>
      </motion.div>

      {/* Remotion Player embed — remove if not embedding video on this page */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
      >
        <Player
          component={MyComp}
          inputProps={{ message: 'Hello, Remotion!' }}
          durationInFrames={90}
          fps={30}
          compositionWidth={1280}
          compositionHeight={720}
          style={{ width: 640, borderRadius: 12, overflow: 'hidden' }}
          controls
        />
      </motion.div>
    </div>
  )
}

export default App
