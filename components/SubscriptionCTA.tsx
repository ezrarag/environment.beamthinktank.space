import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type SubscriptionCTAProps = {
  applicationUrl: string
  clientUrl: string
}

export default function SubscriptionCTA({ applicationUrl, clientUrl }: SubscriptionCTAProps) {
  return (
    <section className="env-shell">
      <p className="text-xs uppercase tracking-[0.18em] text-environment-water">Next Step</p>
      <h2 className="mt-3 text-4xl text-white">Join the cohort or register a client at the BEAM root platform.</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-white/72">
        Environment does not own registration. Intake stays centralized at `beamthinktank.space`, then approved users are redirected back here with shared BEAM auth.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={applicationUrl} className="btn-primary">
          Apply as Participant
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link href={clientUrl} className="btn-secondary">
          Register as Client
        </Link>
      </div>
    </section>
  )
}
