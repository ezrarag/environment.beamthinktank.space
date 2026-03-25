import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null)

  /**
   * Expected LoRaWAN ingestion payload schema:
   * {
   *   deviceId: string
   *   timestamp: string
   *   gatewayId: string
   *   location: { lat: number; lng: number }
   *   measurements: {
   *     ph?: number
   *     turbidity?: number
   *     dissolvedOxygen?: number
   *     conductivity?: number
   *     temperatureC?: number
   *   }
   *   batteryVoltage?: number
   *   rawPayload?: string
   * }
   */

  return NextResponse.json({
    accepted: true,
    stub: true,
    received: payload,
    next: 'Persist normalized sensor packets to Firestore or Pub/Sub before enabling live compliance automation.',
  })
}
