import type { NGOConfig } from '@/lib/types/portal'
import { environmentConfig } from '@/lib/config/environmentConfig'

export const DEFAULT_NGO = 'environment'

export const ngoConfigs: Record<string, NGOConfig> = {
  [environmentConfig.id]: environmentConfig,
}

export function getNgoConfig(ngo?: string): NGOConfig | null {
  return ngoConfigs[ngo ?? DEFAULT_NGO] ?? null
}
