import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
	title: string;
	description: string;
	imageSrc?: string;
	stack?: string[];
	className?: string;
};

export function ProjectCard({ title, description, imageSrc, stack = [], className }: ProjectCardProps) {
	return (
		<Card className={cn("overflow-hidden", className)}>
			{imageSrc ? (
				<div className="relative h-40 w-full">
					<Image src={imageSrc} alt={title} fill className="object-cover" />
				</div>
			) : (
				<div className="h-40 w-full bg-muted" />
			)}
			<CardContent className="p-5">
				<h3 className="font-medium">{title}</h3>
				<p className="mt-2 text-sm text-muted-foreground">{description}</p>
				{stack.length ? (
					<div className="mt-3 flex flex-wrap gap-2">
						{stack.map((tag) => (
							<Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
						))}
					</div>
				) : null}
			</CardContent>
		</Card>
	);
}


