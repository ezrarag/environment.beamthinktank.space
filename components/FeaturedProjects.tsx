'use client'

import { useState } from 'react'
import { MapPin, Calendar, DollarSign, Users } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  location: string
  targetAmount: number
  currentAmount: number
  participants: number
  image: string
  category: string
  status: 'active' | 'completed' | 'fundraising'
}

const projects: Project[] = [
  {
    id: 1,
    title: "Downtown Tree Canopy Initiative",
    description: "Planting 500 native trees across downtown to improve air quality and provide shade for pedestrians.",
    location: "Downtown District",
    targetAmount: 75000,
    currentAmount: 52000,
    participants: 1200,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    category: "Tree Planting",
    status: "fundraising"
  },
  {
    id: 2,
    title: "Riverside Park Restoration",
    description: "Restoring 15 acres of riverside parkland with native plants, walking trails, and wildlife habitats.",
    location: "Riverside Area",
    targetAmount: 120000,
    currentAmount: 89000,
    participants: 800,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Park Development",
    status: "fundraising"
  },
  {
    id: 3,
    title: "Community Solar Co-op",
    description: "Installing solar panels on community buildings to provide clean energy and reduce carbon footprint.",
    location: "Community Center",
    targetAmount: 200000,
    currentAmount: 45000,
    participants: 2500,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    category: "Renewable Energy",
    status: "fundraising"
  }
]

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const categories = ['all', 'Tree Planting', 'Park Development', 'Renewable Energy', 'Climate Action']

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Conservation Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how your donations are making a real impact in our community. 
            Each project brings us closer to a sustainable future.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'fundraising' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status === 'completed' ? 'Completed' :
                     project.status === 'fundraising' ? 'Fundraising' : 'Active'}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  {project.location}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <DollarSign className="h-4 w-4 mr-1" />
                    ${project.currentAmount.toLocaleString()} / ${project.targetAmount.toLocaleString()}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {project.participants.toLocaleString()}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(project.currentAmount / project.targetAmount) * 100}%` }}
                  ></div>
                </div>

                <button className="w-full btn-primary">
                  Support This Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
