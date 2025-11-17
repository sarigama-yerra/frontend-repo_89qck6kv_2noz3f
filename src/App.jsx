import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Modules from './components/Modules'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Modules />
      <Pricing />
      <footer id="faq" className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
          <div>
            <h4 className="font-semibold text-gray-900">BlueHR</h4>
            <p className="mt-2">Modern HR platform for global teams. Built to automate people ops.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Product</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-gray-900" href="#features">Features</a></li>
              <li><a className="hover:text-gray-900" href="#modules">Modules</a></li>
              <li><a className="hover:text-gray-900" href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-gray-900" href="#">About</a></li>
              <li><a className="hover:text-gray-900" href="#">Careers</a></li>
              <li><a className="hover:text-gray-900" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
