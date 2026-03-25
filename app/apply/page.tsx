import { redirect } from 'next/navigation'
import { environmentConfig } from '@/lib/config/environmentConfig'

export default function ApplyPage() {
  redirect(environmentConfig.rootParticipantApplicationUrl)
}
