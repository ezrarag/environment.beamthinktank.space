'use client'

type DashboardAction = {
  title: string
  subtitle: string
}

type DashboardContext = {
  title: string
  seriesLabel: string
  locationLabel: string
  institutionLabel: string
  summary: string
}

type RoleDashboardPageProps = {
  mode: 'student' | 'instructor' | 'partner'
  title: string
  badgeLabel: string
  actionTiles: DashboardAction[]
  context: DashboardContext
}

export function RoleDashboardPage({ title, badgeLabel, actionTiles, context }: RoleDashboardPageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070f13] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(61,183,198,0.18),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(157,209,124,0.18),transparent_30%),linear-gradient(180deg,rgba(4,10,13,0.94),rgba(9,19,23,0.96))]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="env-shell">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">BEAM Environment Cohort Portal</p>
              <h1 className="mt-2 text-4xl text-white sm:text-5xl">{title}</h1>
            </div>
            <span className="rounded-full border border-environment-water/30 bg-environment-water/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-environment-water">
              {badgeLabel}
            </span>
          </div>
        </header>

        <section className="mt-6 env-shell">
          <p className="text-xs uppercase tracking-[0.18em] text-environment-moss">Mission Header</p>
          <h2 className="mt-3 text-3xl text-white">{context.title}</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-white/75">{context.summary}</p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm">Series: {context.seriesLabel}</div>
            <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm">Location: {context.locationLabel}</div>
            <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm">Institution: {context.institutionLabel}</div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="env-shell">
            <p className="text-xs uppercase tracking-[0.12em] text-white/60">Delivery Snapshot</p>
            <p className="mt-3 text-3xl text-white">Live Workstream</p>
            <p className="mt-2 text-sm text-white/70">Status: cohort active</p>
            <p className="mt-1 text-sm text-white/70">Client model: ClearTrace</p>
          </article>
          <article className="env-shell md:col-span-2">
            <p className="text-xs uppercase tracking-[0.12em] text-white/60">Action Tiles</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {actionTiles.map((tile) => (
                <div key={tile.title} className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4">
                  <p className="text-sm font-semibold text-white">{tile.title}</p>
                  <p className="mt-2 text-xs leading-5 text-white/65">{tile.subtitle}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}
