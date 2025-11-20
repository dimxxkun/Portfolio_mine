"use client";

"use client";

import { createContext, useContext, useMemo, useState } from "react";

type Language = "en" | "fr";

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Hero Section
        heroSubtitle:
            "Transforming geospatial data into decisions through GeoAI, enterprise GIS, and high-impact web mapping.",
        downloadCV: "Download CV",
        learnMore: "Learn More",

        // Navigation & Sections
        about: "About",
        competence: "Core Competence",
        experience: "Experience",
        projects: "Projects",
        caseStudies: "Case Studies",
        education: "Education",
        certifications: "Certifications",
        accomplishments: "Accomplishments",
        testimonials: "Testimonials",
        stats: "Stats",
        contact: "Contact",

        // About Section
        aboutYearsExperience: "+ years of experience turning complex spatial data into actionable insights",

        // Stats
        yearsInGIS: "Years in GIS",
        projectsLabel: "Projects",
        certificationsLabel: "Certifications",

        // Contact Section
        contactBlurb:
            "Let's collaborate on geospatial intelligence, utility network modernization, or defense-grade GIS solutions.",
        contactFormIntro:
            "Type your message and hit send—your email app will open with everything ready to deliver.",
        letsTalk: "Let's Talk",
        connectLinkedIn: "Connect on LinkedIn",
        sendEmail: "Send email",

        // Buttons & Actions
        viewAllProjects: "View all projects",
        viewAllCaseStudies: "View all case studies",
        exploreCase: "Explore case study",

        // Case Studies
        portfolioDeepDives: "Portfolio Deep Dives",
        caseStudiesDescription: "Selected engagements where I led end-to-end GIS, GeoAI, and enterprise deployments—highlighting the approach, workflows, and measurable outcomes.",
    },
    fr: {
        // Hero Section
        heroSubtitle:
            "Transformer les données géospatiales en décisions grâce au GeoIA, aux SIG d'entreprise et aux cartes web à fort impact.",
        downloadCV: "Télécharger le CV",
        learnMore: "En savoir plus",

        // Navigation & Sections
        about: "À propos",
        competence: "Compétences principales",
        experience: "Expérience",
        projects: "Projets",
        caseStudies: "Études de cas",
        education: "Formation",
        certifications: "Certifications",
        accomplishments: "Réalisations",
        testimonials: "Témoignages",
        stats: "Statistiques",
        contact: "Contact",

        // About Section
        aboutYearsExperience: "+ ans d'expérience dans la transformation de données spatiales complexes en informations exploitables",

        // Stats
        yearsInGIS: "Années en SIG",
        projectsLabel: "Projets",
        certificationsLabel: "Certifications",

        // Contact Section
        contactBlurb:
            "Collaborons sur l'intelligence géospatiale, la modernisation des réseaux électriques ou des solutions SIG de défense.",
        contactFormIntro:
            "Écrivez votre message et cliquez sur envoyer—votre messagerie s'ouvrira avec tout le contenu pré-rempli.",
        letsTalk: "Discutons-en",
        connectLinkedIn: "Se connecter sur LinkedIn",
        sendEmail: "Envoyer un e-mail",

        // Buttons & Actions
        viewAllProjects: "Voir tous les projets",
        viewAllCaseStudies: "Voir toutes les études",
        exploreCase: "Explorer l'étude de cas",

        // Case Studies
        portfolioDeepDives: "Analyses de portfolio",
        caseStudiesDescription: "Missions sélectionnées où j'ai dirigé des déploiements SIG, GeoIA et d'entreprise de bout en bout—mettant en évidence l'approche, les flux de travail et les résultats mesurables.",
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
