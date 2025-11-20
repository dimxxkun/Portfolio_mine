"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-6 right-6 z-40 flex flex-col gap-2 transition-opacity duration-300",
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
        >
            <Button
                asChild
                className="shadow-lg shadow-primary/20"
                aria-label="Open contact section"
            >
                <Link href="#contact" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Let&apos;s collaborate
                </Link>
            </Button>
            <Button
                asChild
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full border-border/70 shadow-lg shadow-primary/10"
                aria-label="Email Abdulfatai"
            >
                <a href="mailto:work.abdulfatai@gmail.com">
                    <Mail className="h-5 w-5" />
                </a>
            </Button>
        </div>
    );
}

