import { Leaf, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">BEAM Environment Trust</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Building sustainable cities through community-driven environmental conservation, 
              tree planting, and climate action projects.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#donate" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-300 hover:text-primary-400 transition-colors">
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-primary-400" />
                <span>123 Green Street<br />Eco City, EC 12345</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-primary-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-primary-400" />
                <span>info@beamtrust.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BEAM Environment & Conservation Trust. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
