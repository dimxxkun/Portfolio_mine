'use client';
import { useEffect, useState } from 'react';

export function CompassRose() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Subtle rotation based on scroll position
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 360;
            setRotation(scrollPercent / 4); // Gentle rotation
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-8 left-8 z-40 pointer-events-none opacity-20 hover:opacity-40 transition-opacity">
            <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                className="transition-transform duration-700 ease-out"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {/* Outer circle */}
                <circle
                    cx="30"
                    cy="30"
                    r="28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-primary"
                />

                {/* Cardinal directions */}
                <g className="text-primary font-mono text-[8px]">
                    <text x="30" y="8" textAnchor="middle" className="fill-current font-semibold">N</text>
                    <text x="52" y="34" textAnchor="middle" className="fill-current">E</text>
                    <text x="30" y="55" textAnchor="middle" className="fill-current">S</text>
                    <text x="8" y="34" textAnchor="middle" className="fill-current">W</text>
                </g>

                {/* North arrow (red) */}
                <path
                    d="M 30 30 L 27 15 L 30 10 L 33 15 Z"
                    className="fill-red-500/60"
                />

                {/* South arrow */}
                <path
                    d="M 30 30 L 27 45 L 30 50 L 33 45 Z"
                    className="fill-primary/40"
                />

                {/* East-West arrows */}
                <path
                    d="M 30 30 L 45 27 L 50 30 L 45 33 Z"
                    className="fill-primary/30"
                />
                <path
                    d="M 30 30 L 15 27 L 10 30 L 15 33 Z"
                    className="fill-primary/30"
                />

                {/* Center dot */}
                <circle cx="30" cy="30" r="2" className="fill-primary" />
            </svg>
        </div>
    );
}
