import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/bilgiler', label: 'Bilgiler' },
    { path: '/program', label: 'Program' },
    { path: '/speakers', label: 'Konuşmacılar' },
    { path: '/kurullar', label: 'Kurullar' },
    { path: '/kayit', label: 'Kayıt' },
    { path: '/shuttle', label: 'Shuttle' },
    { path: '/duyurular', label: 'Duyurular' },
    { path: '/sertifika', label: 'E-Sertifika' },
    { path: '/kilavuz', label: 'Kılavuz' },
    { path: '/iletisim', label: 'İletişim' }
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">🏥</span>
            <span className="hidden sm:inline text-lg font-bold text-gray-800">Spine Congress</span>
          </Link>

          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
