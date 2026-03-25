import { RoleDashboardPage } from '@/app/viewer/_components/RoleDashboardPage'
import { environmentTracks } from '@/lib/environment/content'

export default function CohortPortalPage() {
  return (
    <RoleDashboardPage
      mode="student"
      title="Environment Cohort Dashboard"
      badgeLabel="Participant"
      actionTiles={environmentTracks.map((track) => ({
        title: track,
        subtitle: `Track scaffolding for ${track.toLowerCase()} tied to active client delivery and milestone reviews.`,
      }))}
      context={{
        title: 'Applied environmental compliance work with live client context.',
        seriesLabel: 'ClearTrace Delivery Sprint',
        locationLabel: 'Milwaukee / Wisconsin Watershed Network',
        institutionLabel: 'BEAM Environment',
        summary:
          'This portal follows the orchestra RoleDashboardPage pattern and acts as the authenticated workspace for cohort participants after they are routed in from the BEAM root platform.',
      }}
    />
  )
}
