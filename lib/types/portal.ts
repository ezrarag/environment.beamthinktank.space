export type PortalPath =
  | '/'
  | '/home'
  | '/dashboard'
  | '/admin'
  | '/cohort'
  | '/dashboard/client'
  | '/apply'
  | '/register-client'
  | '/api/ingest/lorawan'

export interface HeroSlide {
  id: string
  title: string
  subtitle: string
  ctaLabel: string
  ctaPath: PortalPath
  imageSrc: string
  imageAlt: string
}

export interface ProjectSummary {
  id: string
  name: string
  summary: string
  status: 'Planning' | 'Active' | 'In Review'
  href: string
}

export interface NGOConfig {
  id: string
  subdomain: string
  fullDomain: string
  displayName: string
  shortName: string
  label: string
  shortLabel: string
  description: string
  color: string
  accentColor: string
  darkBg: string
  defaultArea: string
  areas: string[]
  firestoreCollection: string
  ragAllowlistCollection: string
  beamCoinEnabled: boolean
  rootParticipantApplicationUrl: string
  rootClientRegistrationUrl: string
  homeSlides: HeroSlide[]
  recordingSlides: HeroSlide[]
  projects: ProjectSummary[]
}
