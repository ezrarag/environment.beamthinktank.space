import type { PortalPath } from '@/lib/types/portal'

export function resolvePortalPath(path: PortalPath, ngo?: string, scoped = false): string {
  const scopeEligible: PortalPath[] = ['/home', '/dashboard', '/admin']
  if (scoped && ngo && scopeEligible.includes(path)) {
    return `/${ngo}${path}`
  }
  return path
}
