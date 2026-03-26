'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { resolvePortalPath } from '@/lib/portal/routes'
import type { HeroSlide } from '@/lib/types/portal'

type SlideHeroProps = {
  slides: HeroSlide[]
  ngo?: string
  scopedRoutes?: boolean
}

export default function SlideHero({ slides, ngo, scopedRoutes = false }: SlideHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = useMemo(() => slides[activeIndex] ?? slides[0], [activeIndex, slides])

  if (!activeSlide) return null

  const nextIndex = () => setActiveIndex((current) => (current + 1) % slides.length)
  const prevIndex = () => setActiveIndex((current) => (current - 1 + slides.length) % slides.length)

  return (
    <section className="relative min-h-[88vh] overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(6,18,22,0.84), rgba(6,18,22,0.44)), url(${activeSlide.imageSrc})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(61,183,198,0.24),transparent_25%),radial-gradient(circle_at_80%_24%,rgba(157,209,124,0.18),transparent_24%)]" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-between px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <div className="flex justify-end">
          <div className="flex items-center gap-2">
            <button type="button" onClick={prevIndex} className="rounded-full border border-white/20 bg-black/25 p-3 text-white transition hover:border-environment-water">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={nextIndex} className="rounded-full border border-white/20 bg-black/25 p-3 text-white transition hover:border-environment-water">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-10 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:pt-12"
        >
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-environment-moss">Compliance made clear. Water made safe.</p>
            <h1 className="mt-4 text-5xl leading-none text-white sm:text-6xl lg:text-7xl">{activeSlide.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">{activeSlide.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={resolvePortalPath(activeSlide.ctaPath, ngo, scopedRoutes)} className="btn-primary">
                {activeSlide.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#problem" className="btn-secondary">
                View Problem Framing
              </Link>
            </div>
          </div>

          <div className="env-shell max-w-xl justify-self-end">
            <p className="text-xs uppercase tracking-[0.18em] text-environment-water">Operating Model</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/55">Auth</p>
                <p className="mt-2 text-sm text-white/80">Shared BEAM Firebase Auth across all `beamthinktank.space` NGO subdomains.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/55">Registration</p>
                <p className="mt-2 text-sm text-white/80">Participant and client intake happens at `beamthinktank.space`, then approved users land here.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/55">Model Client</p>
                <p className="mt-2 text-sm text-white/80">ClearTrace anchors the first compliance dashboard and content scaffolding.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                index === activeIndex ? 'bg-environment-water text-black' : 'bg-white/10 text-white/75 hover:bg-white/15'
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
