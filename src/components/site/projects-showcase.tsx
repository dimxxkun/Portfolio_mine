"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
    title: string;
    description: string;
    image: string;
    category: string;
    badge?: string;
    links?: { href: string; label: string }[];
};

const projects: Project[] = [
    {
        title: "Solar Suitability Mapping",
        description:
            "GIS-based multi-criteria analysis for solar installation site selection in Akure and Ikorodu using Conditional Tool.",
        image: "/projects/solar_suitability_mapping.png",
        category: "Energy",
        links: [
            {
                href: "https://drive.google.com/file/d/1JZwndvvhij9jbknM61xCxnUjj23C-t9Z/view?usp=drive_link",
                label: "Akure Map",
            },
            {
                href: "https://drive.google.com/file/d/1l8WuxpWEFYTtxgHHJX3JagaADptXL4gq/view?usp=drive_link",
                label: "Ikorodu Map",
            },
        ],
    },
    {
        title: "LULC Classification Analysis",
        description:
            "Land Use/Land Cover analysis of Akure using remote sensing data and supervised classification techniques.",
        image: "/projects/lulc_classification_analysis.png",
        category: "Research",
        links: [
            {
                href: "https://drive.google.com/file/d/1dQofbIb19X7FgxapuTC71viM1CDdMrog/view?usp=drive_link",
                label: "View Analysis Report",
            },
        ],
    },
    {
        title: "Oil Spill Environmental Assessment",
        description:
            "Satellite imagery-based oil spill assessment in Oyigbo, Rivers State for environmental monitoring and impact evaluation.",
        image: "/projects/oil_spill_assessment.png",
        category: "Environmental",
        links: [
            {
                href: "https://eu.docworkspace.com/d/sIIKu6-2pAbfF878G",
                label: "View Assessment",
            },
        ],
    },
    {
        title: "Utility Network Asset Publishing",
        description:
            "Published spatial distribution of 11kV and 33kV electricity network assets across 5 business hubs in Osun State using Esri Enterprise Portal.",
        image: "/projects/utility_network_publishing.png",
        category: "Utilities",
        badge: "IBEDC Project",
    },
    {
        title: "GIS Education YouTube Channel",
        description:
            "Teaching GIS and Remote Sensing techniques, making complex geospatial concepts accessible to learners and professionals.",
        image: "/projects/youtube_gis_education.png",
        category: "Education",
        links: [
            {
                href: "https://youtube.com/@gamingandmiscworld1411?si=Z8pQTT9MrCy35swH",
                label: "Visit Channel",
            },
        ],
    },
    {
        title: "Customer Enumeration System",
        description:
            "Customer enumeration and CIN data collection supporting accurate billing, network planning, and improved service delivery.",
        image: "/projects/customer_enumeration_system.png",
        category: "Utilities",
        badge: "IBEDC Project",
    },
];

const filters = ["All", "Utilities", "Energy", "Environmental", "Research", "Education"];

export function ProjectsShowcase() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return projects;
        return projects.filter((project) => project.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <Button
                        key={filter}
                        size="sm"
                        variant={activeCategory === filter ? "default" : "outline"}
                        className={cn(
                            "rounded-full text-xs",
                            activeCategory === filter ? "shadow-sm" : "text-muted-foreground"
                        )}
                        onClick={() => setActiveCategory(filter)}
                    >
                        {filter}
                    </Button>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                    <Card
                        key={project.title}
                        className="group border-border/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 overflow-hidden"
                    >
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <CardContent className="p-6 space-y-3">
                            <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs font-normal">
                                    {project.category}
                                </Badge>
                                {project.badge && (
                                    <Badge variant="secondary" className="text-xs">
                                        {project.badge}
                                    </Badge>
                                )}
                            </div>
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                            {project.links?.length ? (
                                <div className="flex flex-wrap items-center gap-2 text-xs text-primary">
                                    {project.links.map((link, index) => (
                                        <div key={link.href} className="flex items-center gap-1">
                                            {index > 0 && (
                                                <span className="text-muted-foreground">•</span>
                                            )}
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 hover:underline"
                                            >
                                                {link.label} <ExternalLink className="h-3 w-3" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="border-border/50 overflow-hidden">
                <div className="grid gap-0 md:grid-cols-2">
                    <div className="relative h-64 md:h-full">
                        <Image
                            src="/projects/infrastructure_optimization.png"
                            alt="Infrastructure Optimization & Integration"
                            fill
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>
                    <CardContent className="flex flex-col justify-center space-y-2 p-6">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs font-normal">
                                Infrastructure
                            </Badge>
                            <Badge variant="secondary" className="text-xs font-normal">
                                GSL
                            </Badge>
                        </div>
                        <h3 className="text-lg font-semibold">Infrastructure Optimization &amp; Integration</h3>
                        <p className="text-sm text-muted-foreground">
                            Contributed to geospatial data integration and analysis using ArcGIS Pro to optimize IBEDC&apos;s infrastructure and improve network efficiency at Geotechnics Services Limited (GSL).
                        </p>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}

