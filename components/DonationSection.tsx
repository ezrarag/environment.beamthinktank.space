'use client'

import { useState } from 'react'
import { Heart, Users, MapPin, CreditCard, Shield } from 'lucide-react'

interface DonationOption {
  id: string
  amount: number
  description: string
  impact: string
  popular?: boolean
}

const donationOptions: DonationOption[] = [
  {
    id: 'small',
    amount: 25,
    description: 'Small Impact',
    impact: 'Plants 1 tree or maintains 1 park bench'
  },
  {
    id: 'medium',
    amount: 50,
    description: 'Medium Impact',
    impact: 'Creates 1 square meter of green space'
  },
  {
    id: 'large',
    amount: 100,
    description: 'Large Impact',
    impact: 'Funds 1 week of environmental education'
  },
  {
    id: 'custom',
    amount: 0,
    description: 'Custom Amount',
    impact: 'Choose your own donation amount'
  }
]

const communityNodes = [
  { name: 'Downtown District', participants: 1200, totalRaised: 85000 },
  { name: 'Riverside Area', participants: 800, totalRaised: 65000 },
  { name: 'Hilltop Community', participants: 600, totalRaised: 45000 },
  { name: 'Suburban Heights', participants: 400, totalRaised: 32000 }
]

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number>(50)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [selectedNode, setSelectedNode] = useState<string>('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleDonation = async () => {
    setIsProcessing(true)
    
    // In production, this would integrate with Stripe
    // For now, we'll simulate the process
    setTimeout(() => {
      alert('Thank you for your donation! In production, this would redirect to Stripe checkout.')
      setIsProcessing(false)
    }, 2000)
  }

  const getFinalAmount = () => {
    if (selectedAmount === 0) {
      return parseFloat(customAmount) || 0
    }
    return selectedAmount
  }

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Make a Difference Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation directly supports environmental conservation projects in our community. 
            Choose an amount and see the immediate impact of your contribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Options */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Impact</h3>
            
            <div className="space-y-4 mb-8">
              {donationOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    (option.id === 'custom' && selectedAmount === 0) || 
                    (option.id !== 'custom' && selectedAmount === option.amount)
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => {
                    if (option.id === 'custom') {
                      setSelectedAmount(0)
                      setCustomAmount('')
                    } else {
                      setSelectedAmount(option.amount)
                      setCustomAmount('')
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {option.id === 'custom' ? 'Custom Amount' : `$${option.amount}`}
                      </div>
                      <div className="text-sm text-gray-600">{option.impact}</div>
                    </div>
                    {option.popular && (
                      <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Amount Input */}
            {selectedAmount === 0 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Custom Amount ($)
                </label>
                <input
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter amount"
                />
              </div>
            )}

            {/* Community Node Selection */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Support Your Community Node</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {communityNodes.map((node) => (
                  <div
                    key={node.name}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedNode === node.name
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedNode(node.name)}
                  >
                    <div className="font-medium text-gray-900">{node.name}</div>
                    <div className="text-sm text-gray-600">
                      {node.participants} participants • ${node.totalRaised.toLocaleString()} raised
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Donation Button */}
            <button
              onClick={handleDonation}
              disabled={isProcessing || getFinalAmount() <= 0}
              className="w-full btn-primary text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </div>
              ) : (
                `Donate $${getFinalAmount().toFixed(2)}`
              )}
            </button>

            {/* Security Notice */}
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <Shield className="h-4 w-4 mr-2" />
              Secure payment processing via Stripe
            </div>
          </div>

          {/* Impact Preview */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h3>
            
            <div className="bg-primary-50 rounded-lg p-6 mb-6">
              <div className="text-center">
                <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  ${getFinalAmount().toFixed(2)}
                </div>
                <p className="text-gray-700">Your donation amount</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card">
                <h4 className="font-semibold text-gray-900 mb-3">Immediate Impact</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Funds local conservation projects</li>
                  <li>• Supports community engagement</li>
                  <li>• Contributes to milestone unlocks</li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-semibold text-gray-900 mb-3">Long-term Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Improved air quality</li>
                  <li>• Enhanced green spaces</li>
                  <li>• Community resilience</li>
                  <li>• Climate action progress</li>
                </ul>
              </div>

              {selectedNode && (
                <div className="card border-primary-200 bg-primary-50">
                  <h4 className="font-semibold text-primary-800 mb-3">Community Node Support</h4>
                  <p className="text-sm text-primary-700">
                    Your donation will directly support environmental projects in the{' '}
                    <span className="font-semibold">{selectedNode}</span> area.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
