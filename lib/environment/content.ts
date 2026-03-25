import type { HeroSlide, ProjectSummary } from '@/lib/types/portal'

export const environmentTracks = [
  'Environmental monitoring',
  'Sensor fabrication',
  'Regulatory research',
  'Legal compliance',
  'Data engineering',
  'Grant writing',
] as const

export const environmentPartnerLogos = [
  'Wisconsin DNR',
  'EPA Region 5',
  'UWM School of Freshwater Sciences',
  'County Land and Water Conservation Departments',
]

export const environmentSlides: HeroSlide[] = [
  {
    id: 'cleartrace-command',
    title: 'ClearTrace turns raw water data into compliance action.',
    subtitle: 'Scaffolded for farms, municipalities, and NGOs that need a shared operating layer across sensors, deadlines, and reporting.',
    ctaLabel: 'Open Dashboard',
    ctaPath: '/dashboard',
    imageSrc: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Lake water surface at dusk',
  },
  {
    id: 'cohort-builders',
    title: 'Applied cohorts build the compliance stack with clients in the loop.',
    subtitle: 'Participants work across monitoring, legal research, data engineering, and grant writing instead of isolated internships.',
    ctaLabel: 'Apply as Participant',
    ctaPath: '/apply',
    imageSrc: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Wetland landscape with water and reeds',
  },
  {
    id: 'client-intake',
    title: 'Client intake stays on the BEAM root platform, not the subdomain.',
    subtitle: 'Environment inherits the shared Firebase Auth project and receives approved users after root-level role assignment.',
    ctaLabel: 'Register as Client',
    ctaPath: '/register-client',
    imageSrc: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'River curve seen from above',
  },
]

export const environmentProjects: ProjectSummary[] = [
  {
    id: 'cleartrace',
    name: 'ClearTrace Compliance Pilot',
    summary: 'Model client workspace for automated water compliance, PDF packet routing, and violation flag review.',
    status: 'Active',
    href: '/dashboard/client',
  },
  {
    id: 'county-water-support',
    name: 'County Water Support',
    summary: 'Template workstream for county land and water conservation departments needing grant-backed reporting support.',
    status: 'Planning',
    href: '/cohort',
  },
]
