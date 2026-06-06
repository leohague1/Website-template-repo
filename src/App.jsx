import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ErrorBoundary } from 'react-error-boundary'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
        <p className="text-gray-500 text-sm mb-6">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="text-sm font-medium text-[--color-primary] hover:underline"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

function AppLayout() {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AppLayout />
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  )
}
