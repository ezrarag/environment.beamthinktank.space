'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { environmentConfig } from '@/lib/config/environmentConfig'
import { resolveEnvironmentLandingPath, useEnvironmentPortalAccess } from '@/lib/environment/portal'
import { useUserRole } from '@/lib/hooks/useUserRole'

export default function DashboardRouter() {
  const router = useRouter()
  const { user, role, loading } = useUserRole()
  const access = useEnvironmentPortalAccess(user, environmentConfig)

  useEffect(() => {
    if (loading || access.loading) return

    const destination = user
      ? resolveEnvironmentLandingPath({
          role,
          isAllowlisted: access.isAllowlisted,
          hasClientRecord: Boolean(access.clientRecord),
        })
      : '/cohort'

    router.replace(destination)
  }, [access.clientRecord, access.isAllowlisted, access.loading, loading, role, router, user])

  return <main className="mx-auto max-w-4xl px-4 py-20 text-white/70">Resolving portal route...</main>
}
