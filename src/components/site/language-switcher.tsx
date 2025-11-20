"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "./language-provider";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-1 rounded-full border border-border/60 px-2 py-1 text-xs">
            {(["en", "fr"] as const).map((lang) => (
                <Button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    variant={language === lang ? "default" : "ghost"}
                    size="sm"
                    className="h-6 px-2 text-xs"
                >
                    {lang.toUpperCase()}
                </Button>
            ))}
        </div>
    );
}

