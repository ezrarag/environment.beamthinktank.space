import { NextResponse } from 'next/server'
import { environmentProjects } from '@/lib/environment/content'

export async function GET() {
  return NextResponse.json({
    projects: environmentProjects,
    source: 'static scaffold',
  })
}
