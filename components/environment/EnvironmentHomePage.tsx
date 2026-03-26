import Link from 'next/link'
import HomeSlidesHero from '@/components/portal/HomeSlidesHero'
import SubscriptionCTA from '@/components/SubscriptionCTA'
import UserMenu from '@/components/UserMenu'
import { environmentConfig } from '@/lib/config/environmentConfig'
import { environmentPartnerLogos, environmentTracks } from '@/lib/environment/content'

export default function EnvironmentHomePage() {
  return (
    <main>
      <div className="absolute left-0 right-0 top-0 z-30 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-[28px] border border-white/12 bg-[#0a161b]/72 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl lg:grid-cols-[minmax(220px,1fr)_auto_minmax(220px,1fr)]">
          <Link href="/" className="min-w-0 leading-none">
            <p className="text-[11px] uppercase tracking-[0.28em] text-environment-water">BEAM NGO</p>
            <p className="mt-1 text-[2rem] leading-[0.88] text-white">Environment</p>
          </Link>
          <div className="hidden items-center justify-center gap-8 text-sm text-white/72 lg:flex">
            <a className="transition hover:text-white" href="#problem">Problem</a>
            <a className="transition hover:text-white" href="#solution">Solution</a>
            <a className="transition hover:text-white" href="#partners">Partners</a>
            <a className="transition hover:text-white" href="#tracks">Tracks</a>
          </div>
          <div className="justify-self-end">
            <UserMenu />
          </div>
        </div>
      </div>

      <HomeSlidesHero fallbackSlides={environmentConfig.homeSlides} ngo={environmentConfig.id} />

      <section id="problem" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="env-shell">
            <p className="eyebrow">Problem Framing</p>
            <h2 className="mt-4 text-4xl text-white">Water compliance is a workflow problem, not just a data problem.</h2>
            <p className="mt-4 text-base leading-7 text-white/72">
              In 2023, 1 in 5 public water systems missed EPA deadlines. The issue is rarely a single sensor or a single report. It is the handoff between monitoring, interpretation, legal review, and delivery.
            </p>
          </div>
          <div className="env-shell">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-black/15 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-environment-water">Mission</p>
                <p className="mt-3 text-sm leading-6 text-white/78">Build water compliance capacity that municipalities, farms, and NGOs can actually operate.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/15 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-environment-water">Model Client</p>
                <p className="mt-3 text-sm leading-6 text-white/78">ClearTrace anchors the first dashboard and reporting workflow for automated compliance review.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/15 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-environment-water">Expansion</p>
                <p className="mt-3 text-sm leading-6 text-white/78">The same architecture extends into AgriTech, GovTech, and municipal services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="env-shell">
          <p className="eyebrow">Solution Overview</p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-black/15 p-5">
              <h3 className="text-2xl text-white">Shared intake</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">Root-platform registration, shared Firebase auth, NGO-specific redirect after role assignment.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/15 p-5">
              <h3 className="text-2xl text-white">Client shell</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">Firestore-backed compliance views, violation flags, reporting status, and PDF generation triggers.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/15 p-5">
              <h3 className="text-2xl text-white">Applied cohort</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">Participants contribute across monitoring, fabrication, legal research, and data pipelines.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/15 p-5">
              <h3 className="text-2xl text-white">Geographic layer</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">Mapbox scaffolding supports sensor nodes, monitored water bodies, and future public API overlays.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="env-shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Partners</p>
              <h2 className="mt-4 text-4xl text-white">Scaffolded for public-sector and watershed collaboration.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/68">These are placeholder logo slots for partner display on the public marketing page.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {environmentPartnerLogos.map((partner) => (
              <div key={partner} className="rounded-3xl border border-dashed border-white/15 bg-black/15 p-6 text-center text-sm font-medium text-white/78">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tracks" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="env-shell">
            <p className="eyebrow">Cohort Tracks</p>
            <h2 className="mt-4 text-4xl text-white">Participants move through work that matters to real compliance deadlines.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {environmentTracks.map((track) => (
              <div key={track} className="env-shell">
                <h3 className="text-2xl text-white">{track}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">Structured around ClearTrace and future environment clients so each track maps to production work, not simulation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <SubscriptionCTA
          applicationUrl={environmentConfig.rootParticipantApplicationUrl}
          clientUrl={environmentConfig.rootClientRegistrationUrl}
        />
      </div>
    </main>
  )
}
