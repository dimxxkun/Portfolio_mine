"use client";

import { useLanguage } from "./language-provider";

type TranslationKey = "heroSubtitle" | "contactBlurb" | "contactFormIntro" | "letsTalk";

export function TransText({ token, fallback }: { token: TranslationKey; fallback: string }) {
    const { t } = useLanguage();
    return <>{t(token) ?? fallback}</>;
}

