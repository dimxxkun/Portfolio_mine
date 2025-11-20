import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";

export default function CaseStudiesIndex() {
    return (
        <main className="bg-background">
            <section className="border-b border-border/40 bg-muted/10">
                <div className="container mx-auto px-6 py-16">
                    <Badge variant="outline" className="text-xs">
                        Portfolio Deep Dives
                    </Badge>
                    <h1 className="mt-3 text-4xl font-semibold tracking-tight">Case Studies</h1>
                    <p className="mt-3 max-w-3xl text-muted-foreground">
                        Selected engagements where I led end-to-end GIS, GeoAI, and enterprise deployments—highlighting the approach, workflows, and measurable outcomes.
                    </p>
                </div>
            </section>

            <section className="container mx-auto grid gap-6 px-6 py-16 md:grid-cols-2">
                {caseStudies.map((study) => (
                    <Link
                        href={`/case-studies/${study.slug}`}
                        key={study.slug}
                        className="group overflow-hidden rounded-2xl border border-border/50"
                    >
                        <div className="relative h-52 overflow-hidden">
                            <Image
                                src={study.heroImage}
                                alt={study.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <CardContent className="space-y-3 p-5">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                <Badge variant="outline">{study.period}</Badge>
                                <span>•</span>
                                <span>{study.client}</span>
                            </div>
                            <h2 className="text-xl font-semibold group-hover:text-primary">
                                {study.title}
                            </h2>
                            <p className="text-sm text-muted-foreground">{study.summary}</p>
                        </CardContent>
                    </Link>
                ))}
            </section>
        </main>
    );
}

