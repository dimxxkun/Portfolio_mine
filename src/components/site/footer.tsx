import React from "react";

export function Footer() {
	return (
		<footer className="mt-20 border-t">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
					<p>© {new Date().getFullYear()} Abdulfatai Sanusi. All rights reserved.</p>
					<nav className="flex items-center gap-4">
						<a href="#about" className="hover:text-foreground">About</a>
						<a href="#projects" className="hover:text-foreground">Projects</a>
						<a href="#contact" className="hover:text-foreground">Contact</a>
					</nav>
				</div>
			</div>
		</footer>
	);
}


