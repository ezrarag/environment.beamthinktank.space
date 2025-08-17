'use client'

import { useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              BEAM Environment Trust
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#projects" className="text-gray-700 hover:text-primary-600 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </a>
            <a href="#donate" className="text-gray-700 hover:text-primary-600 transition-colors">
              Donate
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Projects
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                About
              </a>
              <a href="#donate" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Donate
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
