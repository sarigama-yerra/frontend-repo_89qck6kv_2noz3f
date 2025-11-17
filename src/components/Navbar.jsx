import { useState, useEffect } from 'react'

export default function Navbar() {
  const [online, setOnline] = useState(false)

  useEffect(() => {
    const check = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/hello`)
        setOnline(res.ok)
      } catch (e) {
        setOnline(false)
      }
    }
    check()
  }, [])

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-600 to-sky-500" />
            <span className="font-semibold text-gray-800">BlueHR</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8 text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#modules" className="hover:text-gray-900">Modules</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <div className="flex items-center space-x-4">
            <span className={`hidden sm:inline-flex items-center text-xs px-2 py-1 rounded-full border ${online ? 'text-green-700 border-green-200 bg-green-50' : 'text-amber-700 border-amber-200 bg-amber-50'}`}>
              {online ? 'API Online' : 'API Checking'}
            </span>
            <a href="/test" className="text-sm text-gray-600 hover:text-gray-900">Status</a>
            <a href="#" className="text-sm px-4 py-2 rounded-md border border-gray-200 hover:border-gray-300">Sign in</a>
            <a href="#" className="text-sm px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Start free</a>
          </div>
        </div>
      </div>
    </header>
  )
}
