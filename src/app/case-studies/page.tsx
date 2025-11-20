import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ScrollToTop } from "@/components/site/scroll-to-top";

export default function CaseStudiesIndex() {
    return (
        <main className="bg-background">
            {/* Hero Section with GIS Theme */}
            <section className="relative border-b border-border/40 contour-bg">
                <div className="coordinate-grid pointer-events-none absolute inset-0 opacity-20" />
                <div className="container mx-auto px-6 py-16 relative">
                    {/* Back Navigation */}
                    <Button asChild variant="ghost" className="mb-6 -ml-4">
                        <Link href="/" className="inline-flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Portfolio
                        </Link>
                    </Button>

                    <Badge variant="outline" className="text-xs">
                        Portfolio Deep Dives
                    </Badge>
                    <h1 className="mt-3 text-4xl font-semibold tracking-tight">Case Studies</h1>
                    <p className="mt-3 max-w-3xl text-muted-foreground">
                        Selected engagements where I led end-to-end GIS, GeoAI, and enterprise deployments—highlighting the approach, workflows, and measurable outcomes.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid with GIS Styling */}
            <section className="container mx-auto grid gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-2">
                {caseStudies.map((study) => (
                    <Card
                        key={study.slug}
                        className="layer-card overflow-hidden border-border/50"
                    >
                        <Link
                            href={`/case-studies/${study.slug}`}
                            className="group block"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={study.heroImage}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                />
                            </div>
                            <CardContent className="space-y-3 p-5">
                                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                    <Badge variant="outline">{study.period}</Badge>
                                    <span>•</span>
                                    <span>{study.client}</span>
                                </div>
                                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {study.title}
                                </h2>
                                <p className="text-sm text-muted-foreground">{study.summary}</p>

                                {/* View case study link */}
                                <div className="pt-2 flex items-center gap-2 text-sm font-medium text-primary">
                                    <span>View details</span>
                                    <ExternalLink className="h-4 w-4" />
                                </div>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </section>

            <ScrollToTop />
        </main>
    );
}
