'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function CursorGlow() {
    const pathname = usePathname();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isInHeroSection, setIsInHeroSection] = useState(true);

    // Only show on homepage
    const isHomepage = pathname === '/';

    useEffect(() => {
        if (!isHomepage) return;

        const handleScroll = () => {
            // Hide tooltip when scrolled past hero section (approximately 100vh)
            const heroHeight = window.innerHeight;
            setIsInHeroSection(window.scrollY < heroHeight * 0.8);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Calculate realistic coordinates based on mouse position
            // Base coordinates: Lagos, Nigeria (6.5244° N, 3.3792° E)
            const baseLatitude = 6.5244;
            const baseLongitude = 3.3792;

            // Map mouse position to coordinate offsets (±0.5 degrees)
            const latOffset = ((e.clientY / window.innerHeight) - 0.5) * -1.0; // Inverted Y
            const lonOffset = ((e.clientX / window.innerWidth) - 0.5) * 1.0;

            setCoordinates({
                lat: baseLatitude + latOffset,
                lon: baseLongitude + lonOffset,
            });

            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isHomepage]);

    const formatCoordinate = (value: number, isLat: boolean) => {
        const degrees = Math.floor(Math.abs(value));
        const minutesFloat = (Math.abs(value) - degrees) * 60;
        const minutes = Math.floor(minutesFloat);
        const seconds = Math.floor((minutesFloat - minutes) * 60);
        const direction = isLat
            ? (value >= 0 ? 'N' : 'S')
            : (value >= 0 ? 'E' : 'W');

        return `${degrees}°${minutes}'${seconds}"${direction}`;
    };

    // Don't render if not on homepage, not in hero section, or not visible
    if (!isHomepage || !isInHeroSection || !isVisible) return null;

    return (
        <div
            className="pointer-events-none fixed z-50 transition-opacity duration-200"
            style={{
                left: `${position.x + 15}px`,
                top: `${position.y + 15}px`,
            }}
        >
            <div className="rounded-md border border-primary/20 bg-background/95 px-3 py-1.5 shadow-lg backdrop-blur-sm">
                <div className="flex flex-col gap-0.5 font-mono text-xs">
                    <div className="text-primary/80">{formatCoordinate(coordinates.lat, true)}</div>
                    <div className="text-primary/80">{formatCoordinate(coordinates.lon, false)}</div>
                    <div className="text-[10px] text-muted-foreground/60">WGS 84</div>
                </div>
            </div>
            {/* Small connecting line to cursor */}
            <div
                className="absolute -left-2 -top-2 h-2 w-2 border-l border-t border-primary/30"
                style={{ transform: 'rotate(45deg)' }}
            />
        </div>
    );
}
