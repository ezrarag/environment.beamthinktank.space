import { redirect } from 'next/navigation'

export default async function ScopedDashboardPage({
  params,
}: {
  params: Promise<{ ngo: string }>
}) {
  await params
  redirect('/dashboard')
}
