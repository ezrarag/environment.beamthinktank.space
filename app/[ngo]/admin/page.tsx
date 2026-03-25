import { redirect } from 'next/navigation'

export default async function ScopedAdminPage({
  params,
}: {
  params: Promise<{ ngo: string }>
}) {
  await params
  redirect('/admin')
}
