'use client';
import React from "react";
import { cn } from "@/lib/utils";

type TimelineItem = {
	title: string;
	subtitle?: string;
	meta?: string;
	badge?: string;
	points?: string[];
};

type TimelineProps = {
	items: TimelineItem[];
	className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
	return (
		<div className={cn("relative", className)}>
			<div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-5" />
			<ul className="space-y-8">
				{items.map((item, idx) => (
					<li key={idx} className="relative pl-10 md:pl-12">
						<span className="absolute left-3 top-1 inline-flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full bg-primary/20 ring-2 ring-primary md:left-4">
							<span className="h-1.5 w-1.5 rounded-full bg-primary" />
						</span>
						<div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
							<h3 className="text-base font-medium md:text-lg">{item.title}</h3>
							{item.badge ? (
								<span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">{item.badge}</span>
							) : null}
						</div>
						{item.subtitle ? (
							<p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
						) : null}
						{item.meta ? <p className="mt-1 text-xs text-muted-foreground/70">{item.meta}</p> : null}
						{item.points && item.points.length ? (
							<ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
								{item.points.map((p, i) => (
									<li key={i}>{p}</li>
								))}
							</ul>
						) : null}
					</li>
				))}
			</ul>
		</div>
	);
}


