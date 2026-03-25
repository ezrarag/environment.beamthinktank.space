import Link from 'next/link'
import UserMenu from '@/components/UserMenu'

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Admin</p>
          <h1 className="mt-4 text-5xl text-white">Environment Admin</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-white/72">
            Placeholder admin surface for BEAM admins and approved partner operators. This is where home slides, client routing, allowlists, and reporting automation controls should land next.
          </p>
        </div>
        <UserMenu />
      </header>
      <section className="grid gap-4 md:grid-cols-3">
        <div className="env-shell">
          <h2 className="text-3xl text-white">Allowlists</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">Manage `environmentRagAllowlist` entries that route specialized users into the client dashboard shell.</p>
        </div>
        <div className="env-shell">
          <h2 className="text-3xl text-white">Client Records</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">Review `environmentClients`, including `redirectOnComplete` values for clients returning to external platforms.</p>
        </div>
        <div className="env-shell">
          <h2 className="text-3xl text-white">Automation</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">Queue EPA / USGS ingestion, PDF reporting, and routing jobs here.</p>
        </div>
      </section>
      <div className="mt-6">
        <Link href="/" className="btn-secondary">Return Home</Link>
      </div>
    </main>
  )
}
