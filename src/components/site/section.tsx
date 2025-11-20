"use client";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
	id: string;
	title: string;
	children?: React.ReactNode;
	className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
	const reduceMotion = useReducedMotion();
	return (
		<motion.section
			id={id}
			initial={reduceMotion ? undefined : { opacity: 0, y: 40 }}
			whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={reduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
			className={cn("scroll-mt-24 py-16 md:py-24", className)}
		>
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
				<div className="mt-6">{children}</div>
			</div>
		</motion.section>
	);
}


