import type { Metadata } from "next";

export const siteMetadata: Metadata = {
    title: {
        default: "Sanusi Abdulfatai - GIS & Remote Sensing Specialist",
        template: "%s | Sanusi Abdulfatai",
    },
    description:
        "Geospatial & Remote Sensing Specialist with 5+ years of experience in GIS, GeoAI, utility network optimization, and geospatial intelligence. Esri Young Scholars Award 2025 (3rd Place). Specializing in enterprise GIS, satellite imagery analysis, defense GIS, and full-stack web mapping solutions.",
    keywords: [
        "GIS Specialist",
        "Remote Sensing",
        "GeoAI",
        "Utility Network",
        "ArcGIS Enterprise",
        "Satellite Imagery Analysis",
        "Defense GIS",
        "Geospatial Intelligence",
        "Web Mapping",
        "Python GIS",
        "ArcPy",
        "PostGIS",
        "Esri",
        "QGIS",
        "Google Earth Engine",
        "Spatial Analysis",
        "Mapping Professional",
    ],
    authors: [{ name: "Sanusi Abdulfatai Oyewunmi" }],
    creator: "Sanusi Abdulfatai Oyewunmi",
    publisher: "Sanusi Abdulfatai",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sanusi-abdulfatai.vercel.app",
        siteName: "Sanusi Abdulfatai - GIS Portfolio",
        title: "Sanusi Abdulfatai - GIS & Remote Sensing Specialist",
        description:
            "Geospatial & Remote Sensing Specialist with 5+ years of experience. Esri Young Scholars Award 2025 (3rd Place). Expert in GIS, GeoAI, utility networks, and geospatial intelligence.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sanusi Abdulfatai - GIS & Remote Sensing Specialist",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sanusi Abdulfatai - GIS & Remote Sensing Specialist",
        description:
            "Geospatial & Remote Sensing Specialist with 5+ years of experience in GIS, GeoAI, and geospatial intelligence.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
};
