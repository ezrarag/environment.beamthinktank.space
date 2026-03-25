'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'

export type UserRole = 'beam_admin' | 'partner_admin' | 'board' | 'participant'

type UserWithRole = {
  user: User | null
  role: UserRole | null
  loading: boolean
}

const adminAuthBypassEnabled =
  process.env.NEXT_PUBLIC_ADMIN_AUTH_BYPASS === '1' ||
  (process.env.NODE_ENV !== 'production' && process.env.NEXT_PUBLIC_ADMIN_AUTH_BYPASS !== '0')

const mockAdminUser = {
  uid: 'local-admin-bypass',
  email: 'admin@local.dev',
  displayName: 'Local Admin',
  getIdToken: async () => 'admin-bypass-token',
  getIdTokenResult: async () => ({
    authTime: new Date(0).toISOString(),
    claims: { role: 'beam_admin', beam_admin: true },
    expirationTime: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    issuedAtTime: new Date().toISOString(),
    signInProvider: 'custom',
    signInSecondFactor: null,
    token: 'admin-bypass-token',
  }),
} as unknown as User

export function useUserRole(): UserWithRole {
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<UserRole | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (adminAuthBypassEnabled) {
      setUser(mockAdminUser)
      setRole('beam_admin')
      setLoading(false)
      return
    }

    if (!auth || !db) {
      setLoading(false)
      return
    }

    const firestore = db

    const unsubscribe = onAuthStateChanged(auth, async (nextUser) => {
      setUser(nextUser)

      if (!nextUser) {
        setRole(null)
        setLoading(false)
        return
      }

      try {
        const tokenResult = await nextUser.getIdTokenResult()
        const claims = tokenResult.claims

        if (claims.beam_admin === true || claims.role === 'beam_admin') {
          setRole('beam_admin')
          setLoading(false)
          return
        }

        if (claims.partner_admin === true || claims.role === 'partner_admin') {
          setRole('partner_admin')
          setLoading(false)
          return
        }

        if (claims.board === true || claims.role === 'board') {
          setRole('board')
          setLoading(false)
          return
        }

        const userDoc = await getDoc(doc(firestore, 'users', nextUser.uid))
        const userData = userDoc.data()
        setRole((userData?.role as UserRole | undefined) ?? 'participant')
      } catch (error) {
        console.error('Failed to resolve user role:', error)
        setRole('participant')
      } finally {
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [])

  return { user, role, loading }
}
