import React from "react";

export function Footer() {
	return (
		<footer className="mt-20 border-t">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
					<div className="flex flex-col gap-1">
						<p>© {new Date().getFullYear()} Abdulfatai Sanusi. All rights reserved.</p>
						<p className="text-xs font-mono text-muted-foreground/60">
							Coordinate System: WGS 84 / UTM Zone 31N | EPSG:32631 | Datum: WGS84
						</p>
					</div>
					<nav className="flex items-center gap-4">
						<a href="/#about" className="hover:text-foreground">Spatial Profile</a>
						<a href="/#projects" className="hover:text-foreground">GIS Deployments</a>
						<a href="/#contact" className="hover:text-foreground">Coordinate Connection</a>
					</nav>
				</div>
			</div>
		</footer>
	);
}
