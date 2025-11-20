"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    department: string;
    institution: string;
    email: string;
    content: string;
    highlight?: string;
    logoText?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Akpofure Fakpor Miller",
        role: "Supervisor",
        department: "Department of Remote Sensing & Geoscience Information Systems",
        institution: "The Federal University of Technology, Akure (FUTA)",
        email: "amfakpor@futa.edu.ng",
        highlight: "“Consistently demonstrated strong competence in GIS and remote sensing.”",
        logoText: "FUTA",
        content:
            "I supervised Sanusi Abdulfatai Oyewunmi at FUTA and found him to be highly skilled, disciplined, and technically exceptional. He consistently demonstrated strong competence in GIS, remote sensing, and geospatial analysis, completing his tasks with accuracy and professionalism. I confidently recommend him for any role requiring advanced geospatial expertise.",
    },
    {
        id: 2,
        name: "Aleem Mubarak",
        role: "Lead, Inspection & Quality Assurance",
        department: "Inspection & Quality Assurance",
        institution: "Ibadan Electricity Distribution Company (IBEDC)",
        email: "mubarak.aleem@ibedc.com",
        highlight: "Delivered accurate maps and analysis without needing follow-up.",
        logoText: "IBEDC",
        content:
            "I worked with Sanusi Abdulfatai Oyewunmi during his time with IBEDC, and he proved to be dependable, hardworking, and technically sound in his GIS work. He supported our inspection and quality assurance activities with accurate maps, clean data, and timely analysis. Sanusi works well with engineers, pays attention to detail, and consistently delivered what was required without needing follow-up. I confidently recommend him for any GIS or geospatial role.",
    },
    {
        id: 3,
        name: "Kelechi Njoku",
        role: "Lead, GIS",
        department: "GIS Department",
        institution: "Ibadan Electricity Distribution Company (IBEDC)",
        email: "Kelechi.Njoku@ibedc.com",
        highlight: "Maintained high-quality GIS databases that supported network planning.",
        logoText: "IBEDC",
        content:
            "I worked with Sanusi Abdulfatai Oyewunmi at IBEDC and found him to be a skilled and dependable GIS professional. He consistently produced accurate spatial data, maintained high-quality GIS databases, and supported our network planning work effectively. Sanusi is detail-oriented, collaborative, and a quick learner.",
    },
    {
        id: 4,
        name: "Folasade Sanya",
        role: "Chief Technical Officer (CTO)",
        department: "Technical Division",
        institution: "Ibadan Electricity Distribution Company (IBEDC)",
        email: "folasade.sanya@ibedc.com",
        highlight: "Instrumental in establishing enterprise GIS workflows at IBEDC.",
        logoText: "IBEDC",
        content:
            "Sanusi Abdulfatai Oyewunmi was instrumental in establishing GIS at IBEDC. He pioneered workflows, managed critical spatial data, and developed accurate maps that enhanced our technical operations and decision-making. Sanusi is proactive, highly skilled, and a trusted professional in geospatial analysis.",
    },
    {
        id: 5,
        name: "Brigadier General S.O.G Aremu",
        role: "Commander",
        department: "42 Engineer Brigade",
        institution: "Nigerian Army",
        email: "Available upon request",
        highlight: "Delivered actionable geospatial insight under mission-critical timelines.",
        logoText: "NA",
        content:
            "Sanusi Abdulfatai Oyewunmi provided exceptional geospatial support to our operations, delivering accurate maps, spatial analysis, and actionable insights that improved planning and situational awareness. He is disciplined, reliable, and highly skilled in GIS and remote sensing applications.",
    },
    // Add more testimonials here in the future
];

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

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

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
            role="region"
            aria-roledescription="carousel"
            aria-live="polite"
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
