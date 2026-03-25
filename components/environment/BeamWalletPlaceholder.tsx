import { Wallet } from 'lucide-react'

type BeamWalletPlaceholderProps = {
  enabled: boolean
}

export default function BeamWalletPlaceholder({ enabled }: BeamWalletPlaceholderProps) {
  return (
    <section className="env-shell">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-environment-water/12">
          <Wallet className="h-6 w-6 text-environment-water" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-environment-water">BEAM Coin</p>
          <h2 className="mt-2 text-3xl text-white">Wallet connection placeholder</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72">
            This panel is reserved for BEAM FCU and BEAM coin wallet connectivity. Keep the UI in place now so the feature can be enabled later without restructuring the dashboard.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/55">
            Feature flag: beamCoinEnabled = {enabled ? 'true' : 'false'}
          </p>
        </div>
      </div>
    </section>
  )
}
