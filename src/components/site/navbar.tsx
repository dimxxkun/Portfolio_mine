"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import React from "react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./language-switcher";

// Use absolute paths so links work from all pages
const NAV_ITEMS = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#education", label: "Education" },
    { href: "/#certifications", label: "Certifications" },
    { href: "/#achievement", label: "Achievement" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#stats", label: "Stats" },
    { href: "/#contact", label: "Contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("/#home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`/#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0.1,
            }
        );

        NAV_ITEMS.forEach((item) => {
            const el = document.querySelector(item.href.replace("/", ""));
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <Link href="/" className="font-semibold">
                    <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                        Abdulfatai
                    </span>
                </Link>
                <nav className="hidden items-center gap-6 text-sm md:flex">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "transition-colors",
                                activeSection === item.href
                                    ? "text-primary font-semibold"
                                    : "text-foreground/70 hover:text-foreground"
                            )}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <a
                        href="https://drive.google.com/file/d/1gDm1_NtEtD6tkm20qCqGZmCbAIQPE3o2/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex"
                    >
                        <Button size="sm" variant="secondary">
                            Download CV
                        </Button>
                    </a>
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" aria-label="Open menu">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>Navigate</SheetTitle>
                            </SheetHeader>
                            <div className="mt-6 grid gap-2">
                                {NAV_ITEMS.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                                            activeSection === item.href ? "bg-accent/40 font-medium" : ""
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <a
                                    href="https://drive.google.com/file/d/1gDm1_NtEtD6tkm20qCqGZmCbAIQPE3o2/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                                >
                                    Download CV
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
