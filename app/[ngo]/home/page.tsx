import { redirect } from 'next/navigation'

export default async function ScopedHomePage({
  params,
}: {
  params: Promise<{ ngo: string }>
}) {
  await params
  redirect('/')
}
