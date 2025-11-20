"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Layers, ZoomIn, ZoomOut, Navigation, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEMO_COORDS = [
    { lng: 3.3792, lat: 6.5244, label: "Lagos HQ", color: "#38cfd6" },
    { lng: 4.5567, lat: 7.7823, label: "Ibadan Hub", color: "#2ce89c" },
    { lng: 5.1199, lat: 7.5620, label: "Oil Spill AOI", color: "#ff6b6b" },
];

const MAP_STYLES = {
    street: "https://demotiles.maplibre.org/style.json",
    satellite: {
        version: 8,
        sources: {
            "raster-tiles": {
                type: "raster",
                tiles: [
                    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                ],
                tileSize: 256,
                attribution: "Esri, Maxar, Earthstar Geographics, and the GIS User Community"
            }
        },
        layers: [
            {
                id: "simple-tiles",
                type: "raster",
                source: "raster-tiles",
                minzoom: 0,
                maxzoom: 22
            }
        ]
    }
};

export function MapDemo() {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<maplibregl.Map | null>(null);
    const [mapStyle, setMapStyle] = useState<'street' | 'satellite'>('satellite');
    const [currentCoords, setCurrentCoords] = useState({ lng: 4.5, lat: 7.5 });
    const [showCoords, setShowCoords] = useState(false);

    useEffect(() => {
        if (!mapContainer.current || mapInstance.current) return;

        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: MAP_STYLES.satellite as any,
            center: [4.5, 7.5],
            zoom: 6,
            pitch: 0,
            bearing: 0,
        });

        // Add navigation control
        map.addControl(new maplibregl.NavigationControl({
            showCompass: true,
            showZoom: false, // We'll use custom zoom controls
        }), 'top-left');

        // Track mouse position for coordinates
        map.on('mousemove', (e) => {
            setCurrentCoords({ lng: e.lngLat.lng, lat: e.lngLat.lat });
        });

        map.on('mouseenter', () => setShowCoords(true));
        map.on('mouseleave', () => setShowCoords(false));

        // Add markers with custom styling
        DEMO_COORDS.forEach((point) => {
            const el = document.createElement('div');
            el.className = 'custom-marker';
            el.style.cssText = `
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: ${point.color};
                border: 3px solid white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                cursor: pointer;
                transition: transform 0.2s;
            `;
            el.addEventListener('mouseenter', () => {
                el.style.transform = 'scale(1.2)';
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'scale(1)';
            });

            new maplibregl.Marker({ element: el })
                .setLngLat([point.lng, point.lat])
                .setPopup(
                    new maplibregl.Popup({ offset: 25 })
                        .setHTML(`
                            <div style="padding: 8px; font-family: monospace;">
                                <strong style="color: ${point.color}; font-size: 14px;">${point.label}</strong>
                                <div style="margin-top: 4px; font-size: 11px; color: #666;">
                                    ${point.lat.toFixed(4)}°N, ${point.lng.toFixed(4)}°E
                                </div>
                            </div>
                        `)
                )
                .addTo(map);
        });

        mapInstance.current = map;

        return () => {
            map.remove();
            mapInstance.current = null;
        };
    }, []);

    // Handle style toggle
    const toggleMapStyle = () => {
        if (!mapInstance.current) return;
        const newStyle = mapStyle === 'street' ? 'satellite' : 'street';
        mapInstance.current.setStyle(MAP_STYLES[newStyle] as any);
        setMapStyle(newStyle);
    };

    // Zoom controls
    const zoomIn = () => mapInstance.current?.zoomIn();
    const zoomOut = () => mapInstance.current?.zoomOut();
    const resetView = () => mapInstance.current?.flyTo({ center: [4.5, 7.5], zoom: 6 });

    const formatCoordinate = (value: number, isLat: boolean) => {
        const direction = isLat ? (value >= 0 ? 'N' : 'S') : (value >= 0 ? 'E' : 'W');
        return `${Math.abs(value).toFixed(4)}°${direction}`;
    };

    return (
        <div className="rounded-2xl border border-border/60 bg-card/40 p-4 layer-card">
            <div className="mb-3 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <p className="text-sm font-medium text-primary">Interactive GIS Demo</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                        Sample AOIs from disaster assessment & utility planning work
                    </p>
                </div>
                <Button
                    onClick={toggleMapStyle}
                    size="sm"
                    variant="outline"
                    className="text-xs"
                >
                    <Layers className="h-3 w-3 mr-1" />
                    {mapStyle === 'street' ? 'Satellite' : 'Street'}
                </Button>
            </div>

            <div className="relative">
                <div
                    ref={mapContainer}
                    className="h-80 w-full rounded-xl border border-border/40 overflow-hidden"
                    role="img"
                    aria-label="Interactive map showing project areas in Nigeria"
                />

                {/* Custom zoom controls */}
                <div className="absolute right-3 top-3 flex flex-col gap-1">
                    <Button
                        onClick={zoomIn}
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-md shadow-lg"
                        aria-label="Zoom in"
                    >
                        <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button
                        onClick={zoomOut}
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-md shadow-lg"
                        aria-label="Zoom out"
                    >
                        <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button
                        onClick={resetView}
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-md shadow-lg"
                        aria-label="Reset view"
                    >
                        <Navigation className="h-4 w-4" />
                    </Button>
                </div>

                {/* Coordinate display */}
                {showCoords && (
                    <div className="absolute bottom-3 left-3 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-md px-3 py-1.5 shadow-lg">
                        <div className="font-mono text-xs text-primary/80">
                            {formatCoordinate(currentCoords.lat, true)} {formatCoordinate(currentCoords.lng, false)}
                        </div>
                    </div>
                )}

                {/* Legend */}
                <div className="absolute bottom-3 right-3 bg-background/95 backdrop-blur-sm border border-border/40 rounded-md px-3 py-2 shadow-lg">
                    <div className="text-[10px] font-mono text-muted-foreground mb-1">PROJECT SITES</div>
                    {DEMO_COORDS.map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: point.color }}
                            />
                            <span className="text-muted-foreground">{point.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground/60 font-mono">
                <span>MapLibre GL | WGS 84</span>
                <span>EPSG:4326</span>
            </div>
        </div>
    );
}
