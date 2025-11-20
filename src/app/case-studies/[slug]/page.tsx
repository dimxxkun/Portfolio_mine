import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ScrollToTop } from "@/components/site/scroll-to-top";

interface CaseStudyPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({ slug: study.slug }));
}

// Dynamic metadata for each case study
export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
    const study = caseStudies.find((item) => item.slug === params.slug);

    if (!study) {
        return {
            title: "Case Study Not Found",
        };
    }

    return {
        title: study.title,
        description: study.summary,
        openGraph: {
            title: study.title,
            description: study.summary,
            images: [study.heroImage],
        },
    };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
    const study = caseStudies.find((item) => item.slug === params.slug);

    if (!study) {
        notFound();
    }

    return (
        <main className="bg-background">
            {/* Hero Section with GIS Theme */}
            <section className="scroll-mt-24 border-b border-border/40 relative contour-bg">
                <div className="coordinate-grid pointer-events-none absolute inset-0 opacity-20" />
                <div className="container mx-auto grid gap-10 px-6 py-16 lg:grid-cols-[1.1fr_.9fr] relative">
                    <div className="space-y-4">
                        {/* Back Navigation */}
                        <Button asChild variant="ghost" className="mb-2 -ml-4">
                            <Link href="/case-studies" className="inline-flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Case Studies
                            </Link>
                        </Button>

                        <Badge variant="outline" className="text-xs">
                            Case Study • {study.period}
                        </Badge>
                        <h1 className="text-4xl font-semibold tracking-tight">{study.title}</h1>
                        <p className="text-lg text-muted-foreground">{study.summary}</p>
                        <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <Button asChild className="mt-4 w-fit">
                            <Link href="/#contact">Discuss similar project</Link>
                        </Button>
                    </div>
                    <div className="relative h-72 overflow-hidden rounded-2xl">
                        <Image
                            src={study.heroImage}
                            alt={study.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
                    <div className="space-y-8">
                        {study.body.map((block) => (
                            <article key={block.heading} className="space-y-3">
                                <h2 className="text-xl font-semibold">{block.heading}</h2>
                                {block.content.map((paragraph, index) => (
                                    <p key={index} className="text-muted-foreground">
                                        {paragraph}
                                    </p>
                                ))}
                            </article>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <Card className="dashboard-widget">
                            <CardContent className="space-y-4 p-5">
                                <h3 className="text-lg font-semibold">Impact Snapshot</h3>
                                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                                    {study.impact.map((metric) => (
                                        <div key={metric.label}>
                                            <div className="text-sm uppercase tracking-wide text-muted-foreground">
                                                {metric.label}
                                            </div>
                                            <div className="text-2xl font-semibold text-primary">
                                                {metric.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="layer-card">
                            <CardContent className="space-y-3 p-5">
                                <h3 className="text-lg font-semibold">Client</h3>
                                <p className="text-muted-foreground">{study.client}</p>
                                <Button asChild variant="link" className="px-0">
                                    <Link href="/#testimonials">Read testimonials</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <ScrollToTop />
        </main>
    );
}
