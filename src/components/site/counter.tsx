'use client';
import React from "react";

type CounterProps = {
	from?: number;
	to: number;
	durationMs?: number;
	className?: string;
};

export function Counter({ from = 0, to, durationMs = 1200, className }: CounterProps) {
	const ref = React.useRef<HTMLSpanElement | null>(null);
	const [hasStarted, setHasStarted] = React.useState(false);
	const [value, setValue] = React.useState(from);

	React.useEffect(() => {
		if (!ref.current) return;
		const el = ref.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setHasStarted(true);
				} else {
					setHasStarted(false);
					setValue(from);
				}
			},
			{ threshold: 0.35 }
		);
		observer.observe(el);
		return () => {
			observer.disconnect();
		};
	}, [from]);

	React.useEffect(() => {
		if (!hasStarted) return;
		let raf = 0;
		const start = performance.now();
		const animate = (now: number) => {
			const elapsed = now - start;
			const progress = Math.min(1, elapsed / durationMs);
			const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
			const current = Math.round(from + (to - from) * eased);
			setValue(current);
			if (progress < 1) {
				raf = requestAnimationFrame(animate);
			}
		};
		raf = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(raf);
	}, [from, to, durationMs, hasStarted]);

	return (
		<span ref={ref} className={className}>
			{value}
		</span>
	);
}


