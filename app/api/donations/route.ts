import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, projectId, communityNode, donorName, donorEmail } = body

    // Validate required fields
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      )
    }

    // In production, this would integrate with Stripe
    // For now, we'll simulate the process
    const mockStripePaymentIntentId = `pi_${Math.random().toString(36).substr(2, 9)}`

    // Insert donation into Supabase
    const { data, error } = await supabase
      .from('donations')
      .insert([
        {
          amount,
          project_id: projectId || null,
          community_node: communityNode || null,
          donor_name: donorName || null,
          donor_email: donorEmail || null,
          stripe_payment_intent_id: mockStripePaymentIntentId,
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to record donation' },
        { status: 500 }
      )
    }

    // Update project total if project_id is provided
    if (projectId) {
      // First get current values
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .select('current_amount, participants')
        .eq('id', projectId)
        .single()

      if (!projectError && projectData) {
        const { error: updateError } = await supabase
          .from('projects')
          .update({ 
            current_amount: projectData.current_amount + amount,
            participants: projectData.participants + 1
          })
          .eq('id', projectId)

        if (updateError) {
          console.error('Project update error:', updateError)
        }
      }
    }

    // Update community node total if community_node is provided
    if (communityNode) {
      // First get current values
      const { data: nodeData, error: nodeError } = await supabase
        .from('community_nodes')
        .select('total_raised, participants')
        .eq('name', communityNode)
        .single()

      if (!nodeError && nodeData) {
        const { error: updateError } = await supabase
          .from('community_nodes')
          .update({ 
            total_raised: nodeData.total_raised + amount,
            participants: nodeData.participants + 1
          })
          .eq('name', communityNode)

        if (updateError) {
          console.error('Community node update error:', updateError)
        }
      }
    }

    return NextResponse.json({
      success: true,
      donation: data[0],
      message: 'Donation recorded successfully'
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Get all donations for admin purposes
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json({ donations: data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
