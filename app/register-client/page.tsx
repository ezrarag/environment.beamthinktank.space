import { redirect } from 'next/navigation'
import { environmentConfig } from '@/lib/config/environmentConfig'

export default function RegisterClientPage() {
  redirect(environmentConfig.rootClientRegistrationUrl)
}
