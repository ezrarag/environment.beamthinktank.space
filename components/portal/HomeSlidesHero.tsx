'use client'

import type { HeroSlide } from '@/lib/types/portal'
import SlideHero from '@/components/portal/SlideHero'

type Props = {
  fallbackSlides: HeroSlide[]
  ngo: string
  scopedRoutes?: boolean
}

export default function HomeSlidesHero({ fallbackSlides, ngo, scopedRoutes = false }: Props) {
  return <SlideHero slides={fallbackSlides} ngo={ngo} scopedRoutes={scopedRoutes} />
}
