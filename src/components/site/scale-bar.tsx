interface ScaleBarProps {
    className?: string;
}

export function ScaleBar({ className = "" }: ScaleBarProps) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="flex h-3 border-b-2 border-l-2 border-r-2 border-primary/30">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className={`w-8 h-full border-l border-primary/30 ${i % 2 === 0 ? 'bg-primary/10' : 'bg-background'
                            }`}
                    />
                ))}
            </div>
            <span className="text-[10px] font-mono text-muted-foreground/50">
                0 ―――― 500m
            </span>
        </div>
    );
}
