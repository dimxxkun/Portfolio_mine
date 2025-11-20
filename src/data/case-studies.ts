export type CaseStudy = {
    slug: string;
    title: string;
    client: string;
    period: string;
    summary: string;
    heroImage: string;
    tags: string[];
    impact: { label: string; value: string }[];
    body: { heading: string; content: string[] }[];
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "ibedc-utility-network-modernization",
        title: "IBEDC Utility Network Modernization",
        client: "Ibadan Electricity Distribution Company (IBEDC)",
        period: "2024 – 2025",
        summary:
            "Modeled and published a utility network covering 5 business hubs, improving load-balancing decisions and engineering response time by 35%.",
        heroImage: "/projects/utility_network_publishing.png",
        tags: ["Utilities", "ArcGIS Enterprise", "Network Modeling", "Field Operations"],
        impact: [
            { label: "Assets mapped", value: "11k+" },
            { label: "Feeder uptime", value: "+18%" },
            { label: "Training sessions", value: "12" },
        ],
        body: [
            {
                heading: "Challenge",
                content: [
                    "IBEDC needed an enterprise-ready utility network model with accurate transformer-to-customer relationships.",
                    "Field teams relied on spreadsheets and ad-hoc maps, causing delays for load planning and outage response.",
                ],
            },
            {
                heading: "Approach",
                content: [
                    "Designed a multi-hub data model, enforced topology rules, and automated transformer linking workflows with ArcPy.",
                    "Published services through ArcGIS Enterprise Portal, built dashboards, and trained cross-functional engineers.",
                ],
            },
            {
                heading: "Outcome",
                content: [
                    "Engineers now trace feeders, simulate outages, and coordinate field verification directly from dashboards.",
                    "Data freshness improved with Survey123 collection standards and QA scripts, reducing reconciliation time by 60%.",
                ],
            },
        ],
    },
    {
        slug: "geoai-disaster-intelligence-pipeline",
        title: "GeoAI Disaster Intelligence Pipeline",
        client: "Defense & Humanitarian Taskforce",
        period: "2023 – 2024",
        summary:
            "Created a reusable workflow that combines SAR, multispectral imagery, and deep learning to detect oil spills and flood extents in under 4 hours.",
        heroImage: "/projects/oil_spill_assessment.png",
        tags: ["GeoAI", "Disaster Response", "Remote Sensing", "Python"],
        impact: [
            { label: "Assessment time", value: "-70%" },
            { label: "Detection accuracy", value: "92%" },
            { label: "Regions covered", value: "5" },
        ],
        body: [
            {
                heading: "Challenge",
                content: [
                    "Humanitarian teams required near-real-time insights after spills and floods but imagery pipelines were manual.",
                    "Decision-makers needed easy-to-share dashboards for multi-agency coordination.",
                ],
            },
            {
                heading: "Approach",
                content: [
                    "Automated preprocessing of Sentinel-1/2 and PlanetScope scenes, applied change detection, and ran lightweight CNN classifiers.",
                    "Published results to dashboards with alerting hooks and exported GeoPackage deliverables for field units.",
                ],
            },
            {
                heading: "Outcome",
                content: [
                    "Reduced turnaround to under 4 hours, enabling faster containment and resource deployment.",
                    "Standardized reports improved situational awareness for defense, environmental, and energy stakeholders.",
                ],
            },
        ],
    },
];

