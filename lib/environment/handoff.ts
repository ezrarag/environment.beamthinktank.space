const BEAM_HOME_BASE_URL =
  process.env.NEXT_PUBLIC_BEAM_HOME_URL?.trim() || 'https://beamthinktank.space'

export function buildEnvironmentParticipantHandoffUrl() {
  const params = new URLSearchParams({
    scenarioLabel: 'BEAM Environment Participant',
    role: 'community',
    sourceType: 'ngo_site',
    sourceSystem: 'beam',
    entryChannel: 'environment.beamthinktank.space',
    organizationId: 'org_beam_environment',
    organizationName: 'BEAM Environment',
    cohortId: 'cohort_beam_environment',
    cohortName: 'BEAM Environment Cohort',
    siteUrl: 'https://environment.beamthinktank.space',
    landingPageUrl: 'https://environment.beamthinktank.space/dashboard',
    referrerUrl: 'https://environment.beamthinktank.space',
    redirectTarget: 'dashboard',
  })

  return `${BEAM_HOME_BASE_URL}/onboard/handoff?${params.toString()}`
}
