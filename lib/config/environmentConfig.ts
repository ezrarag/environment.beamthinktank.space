import type { NGOConfig } from '@/lib/types/portal'
import { environmentProjects, environmentSlides } from '@/lib/environment/content'
import { buildEnvironmentParticipantHandoffUrl } from '@/lib/environment/handoff'

export const environmentConfig: NGOConfig = {
  id: 'environment',
  subdomain: 'environment',
  fullDomain: 'environment.beamthinktank.space',
  displayName: 'BEAM Environment',
  shortName: 'Environment',
  label: 'BEAM Environment',
  shortLabel: 'Environment',
  description: 'Compliance made clear. Water made safe.',
  color: '#3DB7C6',
  accentColor: '#9DD17C',
  darkBg: '#091317',
  defaultArea: 'environmental-monitoring',
  areas: [
    'environmental-monitoring',
    'sensor-fabrication',
    'regulatory-research',
    'legal-compliance',
    'data-engineering',
    'grant-writing',
  ],
  firestoreCollection: 'environmentClients',
  ragAllowlistCollection: 'environmentRagAllowlist',
  beamCoinEnabled: false,
  rootParticipantApplicationUrl: buildEnvironmentParticipantHandoffUrl(),
  rootClientRegistrationUrl: 'https://beamthinktank.space/register/client?ngo=environment',
  homeSlides: environmentSlides,
  recordingSlides: environmentSlides,
  projects: environmentProjects,
}
