export const supabase = null

export interface Project {
  id: string | number
  title: string
  description: string
  location?: string
  status?: 'active' | 'completed' | 'fundraising'
}

export interface Donation {
  id: string | number
  amount: number
  donor_name?: string
  donor_email?: string
}

export interface CommunityNode {
  id: string | number
  name: string
  participants?: number
  total_raised?: number
  description?: string
}
