'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AlertTriangle, FileText, Waves, Wifi } from 'lucide-react'
import MapboxComplianceMap from '@/components/environment/MapboxComplianceMap'
import BeamWalletPlaceholder from '@/components/environment/BeamWalletPlaceholder'
import UserMenu from '@/components/UserMenu'
import { environmentConfig } from '@/lib/config/environmentConfig'
import { resolveEnvironmentLandingPath, useEnvironmentPortalAccess } from '@/lib/environment/portal'
import { useUserRole } from '@/lib/hooks/useUserRole'

const sensorPoints = [
  { id: 'mke-harbor-1', lng: -87.8917, lat: 43.0287, label: 'Harbor Intake Node' },
  { id: 'menomonee-2', lng: -87.9609, lat: 43.0317, label: 'Menomonee Tributary Node' },
  { id: 'waukesha-3', lng: -88.2315, lat: 43.0117, label: 'Municipal Monitoring Node' },
]

export default function ComplianceDashboardShell() {
  const router = useRouter()
  const { user, role, loading } = useUserRole()
  const access = useEnvironmentPortalAccess(user, environmentConfig)

  useEffect(() => {
    if (loading || access.loading) return
    if (!user) return

    const landing = resolveEnvironmentLandingPath({
      role,
      isAllowlisted: access.isAllowlisted,
      hasClientRecord: Boolean(access.clientRecord),
    })

    if (landing !== '/dashboard/client') {
      router.replace(landing)
    }
  }, [access.clientRecord, access.isAllowlisted, access.loading, loading, role, router, user])

  if (loading || access.loading) {
    return <main className="mx-auto max-w-7xl px-4 py-20 text-white/70">Loading dashboard...</main>
  }

  if (!user) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20">
        <div className="env-shell">
          <h1 className="text-4xl text-white">Client dashboard requires shared BEAM sign-in.</h1>
          <p className="mt-4 text-base leading-7 text-white/72">
            Clients are registered on `beamthinktank.space`, then redirected here after BEAM assigns access in the shared Firebase project.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href={environmentConfig.rootClientRegistrationUrl} className="btn-primary">Register at Root Platform</Link>
            <Link href="/" className="btn-secondary">Return Home</Link>
          </div>
        </div>
      </main>
    )
  }

  const client = access.clientRecord

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Client Dashboard</p>
          <h1 className="mt-4 text-5xl text-white">{client?.clientName ?? 'ClearTrace'}</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-white/72">
            Firestore-backed shell for the `environmentClients` collection, live API ingestion, violation flagging, report generation, and routing status.
          </p>
        </div>
        <UserMenu />
      </header>

      <section className="grid gap-4 lg:grid-cols-4">
        <div className="env-shell">
          <p className="text-xs uppercase tracking-[0.16em] text-environment-water">Source Feeds</p>
          <p className="mt-3 text-3xl text-white">USGS / EPA</p>
          <p className="mt-2 text-sm text-white/68">Public API ingestion stub ready for water quality and compliance deadline feeds.</p>
        </div>
        <div className="env-shell">
          <p className="text-xs uppercase tracking-[0.16em] text-environment-water">Violations</p>
          <p className="mt-3 flex items-center gap-2 text-3xl text-white">
            <AlertTriangle className="h-6 w-6 text-environment-alert" />
            Needs Review
          </p>
          <p className="mt-2 text-sm text-white/68">{client?.violationSummary ?? 'Lead/copper, operator certification, and reporting anomalies will surface here.'}</p>
        </div>
        <div className="env-shell">
          <p className="text-xs uppercase tracking-[0.16em] text-environment-water">Report Trigger</p>
          <p className="mt-3 flex items-center gap-2 text-3xl text-white">
            <FileText className="h-6 w-6 text-environment-silt" />
            PDF Packet
          </p>
          <p className="mt-2 text-sm text-white/68">Queue automated compliance packet generation and reviewer delivery.</p>
        </div>
        <div className="env-shell">
          <p className="text-xs uppercase tracking-[0.16em] text-environment-water">Routing Status</p>
          <p className="mt-3 flex items-center gap-2 text-3xl text-white">
            <Wifi className="h-6 w-6 text-environment-moss" />
            {client?.reportRoutingStatus ?? 'Awaiting routing config'}
          </p>
          <p className="mt-2 text-sm text-white/68">`redirectOnComplete` supports return to external client platforms with a BEAM session token.</p>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="env-shell">
          <div className="mb-4 flex items-center gap-2">
            <Waves className="h-5 w-5 text-environment-water" />
            <h2 className="text-3xl text-white">Sensor geography</h2>
          </div>
          <MapboxComplianceMap sensorPoints={sensorPoints} />
        </div>
        <div className="space-y-6">
          <div className="env-shell">
            <p className="text-xs uppercase tracking-[0.16em] text-environment-water">Client Record</p>
            <dl className="mt-4 space-y-3 text-sm text-white/78">
              <div>
                <dt className="text-white/45">Collection</dt>
                <dd>environmentClients</dd>
              </div>
              <div>
                <dt className="text-white/45">Client Type</dt>
                <dd>{client?.clientType ?? 'Municipality / Water Tech'}</dd>
              </div>
              <div>
                <dt className="text-white/45">Water Body</dt>
                <dd>{client?.monitoredWaterBody ?? 'Milwaukee River Basin'}</dd>
              </div>
              <div>
                <dt className="text-white/45">Redirect On Complete</dt>
                <dd>{client?.redirectOnComplete ?? 'Not configured'}</dd>
              </div>
            </dl>
          </div>
          <BeamWalletPlaceholder enabled={environmentConfig.beamCoinEnabled} />
        </div>
      </section>
    </main>
  )
}
