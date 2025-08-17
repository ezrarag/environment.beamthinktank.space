import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface Project {
  id: number
  title: string
  description: string
  location: string
  target_amount: number
  current_amount: number
  participants: number
  image_url: string
  category: string
  status: 'active' | 'completed' | 'fundraising'
  created_at: string
  updated_at: string
}

export interface Donation {
  id: number
  amount: number
  project_id?: number
  community_node?: string
  donor_name?: string
  donor_email?: string
  stripe_payment_intent_id: string
  created_at: string
}

export interface CommunityNode {
  id: number
  name: string
  participants: number
  total_raised: number
  description: string
  created_at: string
}
