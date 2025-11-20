import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

type Stat = { value: React.ReactNode; label: string };

export function StatsGrid({ stats }: { stats: Stat[] }) {
	return (
		<div className="grid gap-4 md:grid-cols-3">
			{stats.map((s, index) => (
				<Card key={s.label} className="dashboard-widget zoom-hover">
					<CardContent className="p-6 text-center relative">
						{/* Coordinate label decoration */}
						<div className="coord-label absolute top-2 right-2">
							{37.7749 + index * 0.001}° N
						</div>
						<div className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
							{s.value}
						</div>
						<div className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
							{s.label}
						</div>
						{/* Trend indicator */}
						<div className="mt-3 inline-flex items-center gap-1 text-xs text-primary/70">
							<TrendingUp className="h-3 w-3" />
							<span>Active</span>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
