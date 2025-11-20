import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type Stat = { value: React.ReactNode; label: string };

export function StatsGrid({ stats }: { stats: Stat[] }) {
	return (
		<div className="grid gap-4 md:grid-cols-3">
			{stats.map((s) => (
				<Card key={s.label}>
					<CardContent className="p-6 text-center">
						<div className="text-3xl font-semibold">{s.value}</div>
						<div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}


