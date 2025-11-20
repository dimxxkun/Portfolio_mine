'use client';
import React from "react";
import { cn } from "@/lib/utils";

type BackgroundGISProps = {
	className?: string;
};

// Subtle GIS-themed background with contour lines and floating map markers.
export function BackgroundGIS({ className }: BackgroundGISProps) {
	return (
		<div
			aria-hidden
			className={cn(
				"pointer-events-none absolute inset-0 z-0 overflow-hidden",
				className
			)}
		>
			{/* Contour lines (SVG) */}
			<svg
				className="absolute -left-20 top-10 h-[140%] w-[140%] animate-drift-slow"
				viewBox="0 0 800 800"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g stroke="hsl(var(--primary))" strokeOpacity="0.22" strokeWidth="1">
					<path d="M100 200c80-60 180-60 260 0s180 60 260 0" />
					<path d="M80 300c110-70 230-70 340 0s230 70 340 0" />
					<path d="M50 420c140-80 290-80 430 0s290 80 430 0" />
					<path d="M20 560c170-90 350-90 520 0s350 90 520 0" />
				</g>
			</svg>

			{/* Pins removed for a cleaner, more professional background */}
		</div>
	);
}


