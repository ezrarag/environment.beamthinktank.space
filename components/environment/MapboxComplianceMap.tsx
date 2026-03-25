'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

type MapboxComplianceMapProps = {
  sensorPoints: Array<{ id: string; lng: number; lat: number; label: string }>
}

export default function MapboxComplianceMap({ sensorPoints }: MapboxComplianceMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const mapInstanceRef = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    if (!mapRef.current || !token || mapInstanceRef.current) return

    mapboxgl.accessToken = token
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-87.9065, 43.0389],
      zoom: 7,
    })

    sensorPoints.forEach((point) => {
      new mapboxgl.Marker({ color: '#3db7c6' })
        .setLngLat([point.lng, point.lat])
        .setPopup(new mapboxgl.Popup().setText(point.label))
        .addTo(map)
    })

    mapInstanceRef.current = map

    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  }, [sensorPoints])

  if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-[28px] border border-dashed border-white/15 bg-black/20 p-6 text-center text-sm text-white/60">
        Add `NEXT_PUBLIC_MAPBOX_TOKEN` to render the live Mapbox GL JS compliance map for sensor nodes and monitored water bodies.
      </div>
    )
  }

  return <div ref={mapRef} className="min-h-[320px] rounded-[28px] border border-white/10" />
}
