"use client";

import { createContext, useContext, useMemo, useState } from "react";

type Language = "en" | "fr";

const translations: Record<Language, Record<string, string>> = {
    en: {
        heroSubtitle:
            "Transforming geospatial data into decisions through GeoAI, enterprise GIS, and high-impact web mapping.",
        contactBlurb:
            "Let’s collaborate on geospatial intelligence, utility network modernization, or defense-grade GIS solutions.",
        contactFormIntro:
            "Type your message and hit send—your email app will open with everything ready to deliver.",
        letsTalk: "Let's Talk",
    },
    fr: {
        heroSubtitle:
            "Transformer les données géospatiales en décisions grâce au GeoIA, aux SIG d’entreprise et aux cartes web à fort impact.",
        contactBlurb:
            "Collaborons sur l’intelligence géospatiale, la modernisation des réseaux électriques ou des solutions SIG de défense.",
        contactFormIntro:
            "Écrivez votre message et cliquez sur envoyer—votre messagerie s’ouvrira avec tout le contenu pré-rempli.",
        letsTalk: "Discutons-en",
    },
};

type LanguageContextValue = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: keyof typeof translations["en"]) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    const value = useMemo<LanguageContextValue>(
        () => ({
            language,
            setLanguage,
            t: (key) => translations[language][key] ?? translations.en[key],
        }),
        [language]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}

