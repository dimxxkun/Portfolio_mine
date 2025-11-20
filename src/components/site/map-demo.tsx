"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const DEMO_COORDS = [
    { lng: 3.3792, lat: 6.5244, label: "Lagos" },
    { lng: 4.5567, lat: 7.7823, label: "Ibadan Hub" },
    { lng: 5.1199, lat: 7.5620, label: "Oil Spill AOI" },
];

export function MapDemo() {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<maplibregl.Map | null>(null);

    useEffect(() => {
        if (!mapContainer.current || mapInstance.current) return;

        mapInstance.current = new maplibregl.Map({
            container: mapContainer.current,
            style: "https://demotiles.maplibre.org/style.json",
            center: [4.5, 7.5],
            zoom: 5,
        });

        DEMO_COORDS.forEach((point) => {
            new maplibregl.Marker({ color: "#2563eb" })
                .setLngLat([point.lng, point.lat])
                .setPopup(new maplibregl.Popup().setHTML(`<strong>${point.label}</strong>`))
                .addTo(mapInstance.current!);
        });

        return () => {
            mapInstance.current?.remove();
            mapInstance.current = null;
        };
    }, []);

    return (
        <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
            <div className="mb-3 flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-primary">Interactive Demo</p>
                    <p className="text-xs text-muted-foreground">
                        Sample AOIs from disaster assessment & utility planning work.
                    </p>
                </div>
            </div>
            <div
                ref={mapContainer}
                className="h-72 w-full rounded-xl border border-border/40"
                role="img"
                aria-label="Map showing project areas in Nigeria"
            />
        </div>
    );
}

