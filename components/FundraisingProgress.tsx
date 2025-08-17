import { Target, CheckCircle, Lock, TrendingUp } from 'lucide-react'

interface Milestone {
  id: number
  title: string
  description: string
  targetAmount: number
  isUnlocked: boolean
  icon: React.ReactNode
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Community Recycling Program",
    description: "Launch city-wide recycling initiative with collection points and education campaigns",
    targetAmount: 100000,
    isUnlocked: true,
    icon: <CheckCircle className="h-8 w-8 text-green-600" />
  },
  {
    id: 2,
    title: "Solar Co-op Expansion",
    description: "Extend solar panel installations to 50 more community buildings",
    targetAmount: 250000,
    isUnlocked: false,
    icon: <Lock className="h-8 w-8 text-gray-400" />
  },
  {
    id: 3,
    title: "Clean-up Teams",
    description: "Deploy professional environmental clean-up teams across all districts",
    targetAmount: 500000,
    isUnlocked: false,
    icon: <Lock className="h-8 w-8 text-gray-400" />
  },
  {
    id: 4,
    title: "Climate Action Hub",
    description: "Establish a central hub for climate education and community engagement",
    targetAmount: 1000000,
    isUnlocked: false,
    icon: <Lock className="h-8 w-8 text-gray-400" />
  }
]

const currentTotal = 450000 // This would come from Supabase in production

export default function FundraisingProgress() {
  const nextMilestone = milestones.find(m => !m.isUnlocked)
  const progressPercentage = Math.min((currentTotal / (nextMilestone?.targetAmount || 1000000)) * 100, 100)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fundraising Progress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch as we unlock new environmental services through community support. 
            Every donation brings us closer to our next milestone.
          </p>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Current Total Raised
            </h3>
            <div className="text-4xl font-bold text-primary-600 mb-4">
              ${currentTotal.toLocaleString()}
            </div>
            {nextMilestone && (
              <p className="text-gray-600">
                Next milestone: <span className="font-semibold">{nextMilestone.title}</span> 
                at ${nextMilestone.targetAmount.toLocaleString()}
              </p>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-primary-600 h-4 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>${nextMilestone?.targetAmount.toLocaleString() || '1M'}</span>
          </div>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((milestone) => (
            <div 
              key={milestone.id} 
              className={`card transition-all duration-300 ${
                milestone.isUnlocked 
                  ? 'border-green-200 bg-green-50' 
                  : 'hover:shadow-lg'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {milestone.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    milestone.isUnlocked ? 'text-green-800' : 'text-gray-900'
                  }`}>
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{milestone.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      Target: ${milestone.targetAmount.toLocaleString()}
                    </span>
                    {milestone.isUnlocked && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        Unlocked!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Help us reach the next milestone and unlock new environmental services for our community.
          </p>
          <a href="#donate" className="btn-primary text-lg px-8 py-3">
            Donate Now
          </a>
        </div>
      </div>
    </section>
  )
}
