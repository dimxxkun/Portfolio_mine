import { caseStudies } from "@/data/case-studies";

const INSIGHTS = [
    {
        title: "Designing Resilient Utility Network Models",
        summary:
            "Lessons learned from building multi-hub IBEDC distribution models, plus tips for enforcing connectivity rules in ArcGIS Enterprise.",
        link: "https://www.linkedin.com/pulse/designing-resilient-utility-network-models-sanusi",
        date: "Oct 2025",
        category: "Utilities",
    },
    {
        title: "GeoAI for Rapid Disaster Assessment",
        summary:
            "Framework for combining SAR, multispectral imagery, and change detection for faster response in oil-spill and flood scenarios.",
        link: "https://www.linkedin.com/pulse/geoai-rapid-disaster-assessment-sanusi",
        date: "Sep 2025",
        category: "GeoAI",
    },
    {
        title: "Modernizing Field Data Collection Playbooks",
        summary:
            "How Survey123, ArcGIS Field Maps, and QA automations reduced enumeration errors across 5 IBEDC business hubs.",
        link: "https://www.linkedin.com/pulse/modernizing-field-data-collection-sanusi",
        date: "Aug 2025",
        category: "Field Ops",
    },
];

export async function getCaseStudies() {
    return caseStudies;
}

export async function getInsights() {
    return INSIGHTS;
}

