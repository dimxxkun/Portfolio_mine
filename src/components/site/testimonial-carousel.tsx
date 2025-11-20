"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";

// Auto-slide interval constant for better maintainability
const CAROUSEL_INTERVAL = 5000;

export function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    }, []);

    // Keyboard navigation handler
    const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            prevSlide();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            nextSlide();
        }
    }, [nextSlide, prevSlide]);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, CAROUSEL_INTERVAL);

        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX === null) return;
        const delta = event.changedTouches[0].clientX - touchStartX;
        if (delta > 50) {
            prevSlide();
        } else if (delta < -50) {
            nextSlide();
        }
        setTouchStartX(null);
    };

    return (
        <div
            className="relative mx-auto max-w-4xl px-4 py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-live="polite"
            aria-label={`Testimonial ${currentIndex + 1} of ${testimonials.length}`}
        >
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial) => {
                        const emailIsPublic = testimonial.email.includes("@");
                        return (
                            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                                    <CardContent className="flex flex-col gap-6 p-8 text-left md:flex-row md:p-12">
                                        <div className="md:w-3/5">
                                            <div className="flex items-center justify-between">
                                                <Quote className="mb-4 h-10 w-10 text-primary/20" />
                                                {testimonial.logoText && (
                                                    <span className="rounded-full border border-border/70 px-3 py-1 text-xs uppercase text-muted-foreground">
                                                        {testimonial.logoText}
                                                    </span>
                                                )}
                                            </div>
                                            <blockquote className="text-lg font-medium leading-relaxed text-foreground md:text-xl">
                                                &quot;{testimonial.content}&quot;
                                            </blockquote>
                                            {testimonial.highlight && (
                                                <p className="mt-4 text-sm italic text-primary/80">
                                                    {testimonial.highlight}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-1 flex-col gap-1 rounded-lg border border-border/60 bg-muted/30 p-4 text-sm">
                                            <div className="mb-2 flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                                    {testimonial.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </div>
                                                <div className="text-xs uppercase tracking-wide text-muted-foreground">
                                                    Reference
                                                </div>
                                            </div>
                                            <span className="text-base font-semibold text-primary">
                                                {testimonial.name}
                                            </span>
                                            <span className="text-foreground/80">{testimonial.role}</span>
                                            <span className="text-muted-foreground">{testimonial.department}</span>
                                            <span className="text-foreground/90">{testimonial.institution}</span>
                                            {emailIsPublic ? (
                                                <a
                                                    href={`mailto:${testimonial.email}`}
                                                    className="text-xs text-primary/70 hover:text-primary hover:underline"
                                                >
                                                    {testimonial.email}
                                                </a>
                                            ) : (
                                                <span className="text-xs text-muted-foreground">
                                                    {testimonial.email}
                                                </span>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    className="h-10 w-10 rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>

                <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                                "h-2 w-2 rounded-full transition-all",
                                index === currentIndex
                                    ? "w-6 bg-primary"
                                    : "bg-primary/20 hover:bg-primary/40"
                            )}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    className="h-10 w-10 rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}
