"use client";

import { useLanguage } from "./language-provider";

type TranslationKey =
    | "heroSubtitle"
    | "contactBlurb"
    | "contactFormIntro"
    | "letsTalk"
    | "downloadCV"
    | "learnMore"
    | "about"
    | "competence"
    | "experience"
    | "projects"
    | "caseStudies"
    | "education"
    | "certifications"
    | "accomplishments"
    | "testimonials"
    | "stats"
    | "contact"
    | "aboutYearsExperience"
    | "yearsInGIS"
    | "projectsLabel"
    | "certificationsLabel"
    | "connectLinkedIn"
    | "sendEmail"
    | "viewAllProjects"
    | "viewAllCaseStudies"
    | "exploreCase"
    | "portfolioDeepDives"
    | "caseStudiesDescription";

export function TransText({ token, fallback }: { token: TranslationKey; fallback: string }) {
    const { t } = useLanguage();
    return <>{t(token) ?? fallback}</>;
}
