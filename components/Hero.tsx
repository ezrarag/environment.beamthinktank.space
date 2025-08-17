import { TreePine, Users, Target } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Building a
            <span className="text-primary-600"> Greener Future</span>
            <br />
            Together
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join BEAM Environment & Conservation Trust in our mission to create sustainable cities 
            through tree planting, park development, and climate action projects. Every donation 
            brings us closer to unlocking new environmental services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#donate" className="btn-primary text-lg px-8 py-3">
              Donate Now
            </a>
            <a href="#projects" className="btn-secondary text-lg px-8 py-3">
              View Projects
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <TreePine className="h-12 w-12 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">2,500+</div>
              <div className="text-gray-600">Trees Planted</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">15,000+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">$450K</div>
              <div className="text-gray-600">Funds Raised</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
