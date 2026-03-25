import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    donations: [],
    note: 'Environment NGO scaffold does not use the legacy Supabase donation flow.',
  })
}

export async function POST() {
  return NextResponse.json(
    {
      error: 'Legacy donation endpoint disabled. Environment now routes registration and client onboarding through beamthinktank.space.',
    },
    { status: 410 },
  )
}
