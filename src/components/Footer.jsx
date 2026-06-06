import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {year} Your Company. All rights reserved.</p>
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-gray-900 transition-colors">
              Terms
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
