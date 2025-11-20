'use client';

interface CoordinateLabelProps {
    epsg?: string;
    lat?: number;
    lon?: number;
    className?: string;
}

export function CoordinateLabel({
    epsg = "EPSG:4326",
    lat = 6.5167,
    lon = 3.3667,
    className = ""
}: CoordinateLabelProps) {
    const formatCoordinate = (value: number, isLat: boolean) => {
        const degrees = Math.floor(Math.abs(value));
        const minutes = Math.floor((Math.abs(value) - degrees) * 60);
        const seconds = Math.floor(((Math.abs(value) - degrees) * 60 - minutes) * 60);
        const direction = isLat
            ? (value >= 0 ? 'N' : 'S')
            : (value >= 0 ? 'E' : 'W');

        return `${degrees}°${minutes}'${seconds}"${direction}`;
    };

    return (
        <div className={`font-mono text-xs text-primary/40 select-none ${className}`}>
            <div className="flex flex-col gap-0.5">
                <div>{formatCoordinate(lat, true)} {formatCoordinate(lon, false)}</div>
                <div className="text-[10px] text-muted-foreground/30">{epsg}</div>
            </div>
        </div>
    );
}
