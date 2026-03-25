'use client'

import { useEffect, useState } from 'react'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import type { User } from 'firebase/auth'
import { db } from '@/lib/firebase'
import type { NGOConfig } from '@/lib/types/portal'
import type { UserRole } from '@/lib/hooks/useUserRole'

export type EnvironmentClientRecord = {
  id: string
  clientName: string
  clientType?: string
  monitoredWaterBody?: string
  status?: string
  redirectOnComplete?: string | null
  reportRoutingStatus?: string
  violationSummary?: string
  authorizedUserIds?: string[]
}

type PortalLandingState = {
  loading: boolean
  isAllowlisted: boolean
  clientRecord: EnvironmentClientRecord | null
}

async function querySingleCollection(collectionName: string, field: string, value: string) {
  if (!db) return []
  const firestore = db
  const snapshot = await getDocs(query(collection(firestore, collectionName), where(field, '==', value), limit(1)))
  return snapshot.docs
}

export function resolveEnvironmentLandingPath(args: {
  role: UserRole | null
  isAllowlisted: boolean
  hasClientRecord: boolean
}) {
  if (args.role === 'beam_admin' || args.role === 'partner_admin' || args.role === 'board') {
    return '/admin'
  }

  if (args.isAllowlisted || args.hasClientRecord) {
    return '/dashboard/client'
  }

  return '/cohort'
}

export function useEnvironmentPortalAccess(user: User | null, config: NGOConfig): PortalLandingState {
  const [state, setState] = useState<PortalLandingState>({
    loading: Boolean(user),
    isAllowlisted: false,
    clientRecord: null,
  })

  useEffect(() => {
    if (!user || !db) {
      setState({ loading: false, isAllowlisted: false, clientRecord: null })
      return
    }

    let cancelled = false

    const load = async () => {
      try {
        const [uidAllowlist, emailAllowlist, ownedClient, emailClient] = await Promise.all([
          querySingleCollection(config.ragAllowlistCollection, 'uid', user.uid),
          user.email ? querySingleCollection(config.ragAllowlistCollection, 'email', user.email) : Promise.resolve([]),
          querySingleCollection(config.firestoreCollection, 'ownerUid', user.uid),
          user.email ? querySingleCollection(config.firestoreCollection, 'ownerEmail', user.email) : Promise.resolve([]),
        ])

        if (cancelled) return

        const clientDoc = ownedClient[0] ?? emailClient[0] ?? null
        setState({
          loading: false,
          isAllowlisted: uidAllowlist.length > 0 || emailAllowlist.length > 0,
          clientRecord: clientDoc ? ({ id: clientDoc.id, ...clientDoc.data() } as EnvironmentClientRecord) : null,
        })
      } catch (error) {
        console.error('Unable to load environment access state:', error)
        if (!cancelled) {
          setState({ loading: false, isAllowlisted: false, clientRecord: null })
        }
      }
    }

    void load()

    return () => {
      cancelled = true
    }
  }, [config.firestoreCollection, config.ragAllowlistCollection, user])

  return state
}
