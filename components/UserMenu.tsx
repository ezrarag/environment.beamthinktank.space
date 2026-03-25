'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { ChevronDown, LayoutDashboard, LogIn, LogOut, Shield, User } from 'lucide-react'
import { auth } from '@/lib/firebase'
import { useUserRole } from '@/lib/hooks/useUserRole'

export default function UserMenu() {
  const { user, role, loading } = useUserRole()
  const [isOpen, setIsOpen] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.user-menu-container')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen])

  const handleSignIn = async () => {
    if (!auth) {
      setAuthError('Firebase Auth is not configured yet.')
      return
    }

    try {
      setAuthError(null)
      await signInWithPopup(auth, new GoogleAuthProvider())
      setIsOpen(false)
    } catch (error: any) {
      if (error?.code !== 'auth/popup-closed-by-user') {
        setAuthError(error?.message ?? 'Authentication failed.')
      }
    }
  }

  const handleSignOut = async () => {
    if (!auth) return
    await signOut(auth)
    setIsOpen(false)
  }

  if (loading) {
    return <div className="h-10 w-24 animate-pulse rounded-full bg-white/10" />
  }

  if (!user) {
    return (
      <button onClick={handleSignIn} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-environment-water">
        <LogIn className="h-4 w-4" />
        Sign In
      </button>
    )
  }

  return (
    <div className="user-menu-container relative">
      <button
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white transition hover:border-environment-water"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-environment-water/20">
          <User className="h-4 w-4" />
        </span>
        <span className="hidden max-w-[160px] truncate sm:inline">{user.displayName || user.email}</span>
        <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 z-50 mt-3 w-72 rounded-3xl border border-white/10 bg-[#0b171c]/95 p-3 shadow-2xl backdrop-blur-xl"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="truncate text-sm font-semibold text-white">{user.displayName || 'BEAM User'}</p>
              <p className="mt-1 truncate text-xs text-white/60">{user.email}</p>
              <p className="mt-3 inline-flex rounded-full border border-environment-moss/20 bg-environment-moss/10 px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-environment-moss">
                {role ?? 'participant'}
              </p>
            </div>
            <div className="mt-2 space-y-1">
              <Link href="/dashboard" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white">
                <LayoutDashboard className="h-4 w-4 text-environment-water" />
                Dashboard
              </Link>
              <Link href="/admin" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white">
                <Shield className="h-4 w-4 text-environment-moss" />
                Admin
              </Link>
              <button onClick={handleSignOut} className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm text-white/80 transition hover:bg-white/5 hover:text-white">
                <LogOut className="h-4 w-4 text-environment-alert" />
                Sign Out
              </button>
            </div>
            {authError ? <p className="px-4 pb-2 pt-3 text-xs text-environment-alert">{authError}</p> : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
