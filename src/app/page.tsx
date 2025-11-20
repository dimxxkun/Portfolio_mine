import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/site/section";
import { Timeline } from "@/components/site/timeline";
import { ProjectsShowcase } from "@/components/site/projects-showcase";
import { StatsGrid } from "@/components/site/stats-grid";
import { Footer } from "@/components/site/footer";
import { ContactForm } from "@/components/site/contact-form";
import { Download, ChevronDown, Database, Satellite, Network, Code, Map, Layers, Globe, Users, Shield, ExternalLink, Trophy, Star, Crown, Linkedin, Mail, MapPin } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Counter } from "@/components/site/counter";
import { BackgroundGIS } from "@/components/site/background-gis";
import { CompetenceCard } from "@/components/site/competence-card";
import { caseStudies } from "@/data/case-studies";
import { TransText } from "@/components/site/translation";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { CoordinateLabel } from "@/components/site/coordinate-label";
import { CompassRose } from "@/components/site/compass-rose";
import { ScaleBar } from "@/components/site/scale-bar";
import { CursorGlow } from "@/components/site/cursor-glow";

// Lazy load below-the-fold components for better performance
const TestimonialCarousel = dynamic(() => import("@/components/site/testimonial-carousel").then(mod => ({ default: mod.TestimonialCarousel })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />,
  ssr: true
});

const MapDemo = dynamic(() => import("@/components/site/map-demo").then(mod => ({ default: mod.MapDemo })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />
});


const HEADLINE =
  "Geospatial & Remote Sensing Specialist | GeoDev & GeoAI Innovator | Utility Networks & Defense GIS | Esri YSA ’25 (3rd Place)";

const INSIGHTS = [
  {
    title: "Designing Resilient Utility Network Models",
    summary: "Lessons learned from building multi-hub IBEDC distribution models, plus tips for enforcing connectivity rules in ArcGIS Enterprise.",
    link: "https://www.linkedin.com/pulse/designing-resilient-utility-network-models-sanusi",
    date: "Oct 2025",
    category: "Utilities",
  },
  {
    title: "GeoAI for Rapid Disaster Assessment",
    summary: "Framework for combining SAR, multispectral imagery, and change detection for faster response in oil-spill and flood scenarios.",
    link: "https://www.linkedin.com/pulse/geoai-rapid-disaster-assessment-sanusi",
    date: "Sep 2025",
    category: "GeoAI",
  },
  {
    title: "Modernizing Field Data Collection Playbooks",
    summary: "How Survey123, ArcGIS Field Maps, and QA automations reduced enumeration errors across 5 IBEDC business hubs.",
    link: "https://www.linkedin.com/pulse/modernizing-field-data-collection-sanusi",
    date: "Aug 2025",
    category: "Field Ops",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sanusi Abdulfatai Oyewunmi",
  jobTitle: "Geospatial & Remote Sensing Specialist",
  email: "work.abdulfatai@gmail.com",
  url: "https://sanusi-abdulfatai.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/abdulfatai-sanusi-26b320372/",
    "https://github.com/dimxxkun",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Proforce Galaxies Limited",
  },
  knowsAbout: [
    "GIS",
    "Remote sensing",
    "Utility network modeling",
    "GeoAI",
    "ArcGIS Enterprise",
  ],
};

export default function Home() {
  return (
    <main className="bg-background">
      {/* Skip to content link for accessibility */}
      <a href="#about" className="skip-to-content">
        Skip to content
      </a>

      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      {/* Hero */}
      <section id="home" className="scroll-mt-24">
        <div className="relative overflow-hidden contour-bg">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.primary/20),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,theme(colors.primary/25),transparent_55%)]" />
          <div className="coordinate-grid pointer-events-none absolute inset-0 -z-10 opacity-30" />
          {/* Coordinate Label */}
          <CoordinateLabel className="absolute top-4 right-4 md:top-6 md:right-6" />
          <BackgroundGIS />
          <div className="container mx-auto max-w-6xl px-6 py-28 md:py-36 min-h-[calc(100vh-56px)] flex items-center">
            <div className="grid items-center gap-16 md:grid-cols-[1.2fr_.8fr]">
              <div>
                <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                  <span className="block">Abdulfatai</span>
                  <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Sanusi</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{HEADLINE}</p>
                <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                  <TransText
                    token="heroSubtitle"
                    fallback="Transforming geospatial data into decisions through GeoAI, enterprise GIS, and high-impact web mapping."
                  />
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="https://drive.google.com/file/d/1gDm1_NtEtD6tkm20qCqGZmCbAIQPE3o2/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                  <a href="#about" className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-accent">
                    Learn More
                    <ChevronDown className="h-4 w-4" />
                  </a>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-foreground/10 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-foreground/20 dark:bg-white/10 dark:text-white">
                    <TransText token="letsTalk" fallback="Let&apos;s Talk" />
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative h-56 w-56 overflow-hidden rounded-full ring-1 ring-border shadow-[0_0_40px_-24px_theme(colors.primary/25)] md:h-80 md:w-80">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-white/30 to-transparent opacity-70 blur-3xl dark:from-primary/50 dark:via-primary/10" />
                  <div className="absolute inset-[6%] rounded-full border border-white/60 dark:border-white/10" />
                  <Image
                    src="/mypic.png"
                    alt="Abdulfatai Sanusi"
                    fill
                    className="relative z-10 object-cover"
                    sizes="(max-width: 768px) 224px, 320px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections with placeholders to be filled by you */}
      <Section id="about" title="Spatial Profile" className="section-panel-1 section-topglow">
        <div className="space-y-4 text-muted-foreground">
          <p>
            I&apos;m a Geospatial & Remote Sensing Specialist and GeoDev with{" "}
            <span className="font-medium text-foreground"><Counter to={5} />+</span>{" "}
            years of experience turning complex spatial data into actionable insights. I build custom GIS applications, deploy enterprise GIS solutions, and apply advanced techniques in GeoAI, satellite imagery analysis, utility network optimization, and infrastructure monitoring. Skilled in the full ESRI tool stack, QGIS, Python/ArcPy, database management, and full-stack web GIS, I deliver scalable, high-impact geospatial solutions.
          </p>
          <p>
            My versatility has allowed me to work across diverse sectors, including Environmental Management, Power & Utilities, Real Estate, Urban Planning, and Defense & Security. By adapting geospatial solutions to each domain, I help organizations optimize operations, support decision-making, and unlock the full potential of their spatial data.
          </p>
        </div>
      </Section>

      <Section id="competence" title="Technical Capabilities" className="section-panel-2 section-topglow">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CompetenceCard
            title="GIS & Remote Sensing"
            icon={<Map className="h-5 w-5" />}
            items={[
              "Advanced spatial analysis with ArcGIS Pro, ArcMap & QGIS",
              "Cloud-based analysis using Google Earth Engine",
              "Enterprise GIS deployment (Esri Portal, Server, ArcGIS Online)",
              "Geospatial data standards (GeoJSON, KML, Shapefile, GeoPackage)",
              "OGC web services (WMS, WFS, WCS) & GeoServer configuration",
            ]}
          />
          <CompetenceCard
            title="GeoAI Applications"
            icon={<Satellite className="h-5 w-5" />}
            items={[
              "Deep learning for water body detection & change analysis",
              "Automated building footprint extraction from imagery",
              "Training data generation & image chip preparation",
              "Land Use/Land Cover (LULC) classification & modeling",
              "Object detection (vehicles, structures) with CNN models",
            ]}
          />
          <CompetenceCard
            title="Image Processing"
            icon={<Layers className="h-5 w-5" />}
            items={[
              "Multi-spectral & SAR imagery processing (ESA SNAP, ENVI)",
              "Radiometric & geometric corrections",
              "Advanced feature extraction & spectral indices (NDVI, NDWI)",
              "Supervised & unsupervised classification workflows",
              "Change detection & time-series analysis",
            ]}
          />
          <CompetenceCard
            title="Database Management"
            icon={<Database className="h-5 w-5" />}
            items={[
              "Enterprise geodatabase design & implementation",
              "Spatial database management with PostGIS & PostgreSQL",
              "Data quality assurance, validation & topology rules",
              "ETL workflows & data integration pipelines",
              "Database optimization & spatial indexing",
            ]}
          />
          <CompetenceCard
            title="Utility Network & Assets"
            icon={<Network className="h-5 w-5" />}
            items={[
              "Utility network modeling & tracing operations",
              "Network topology validation & connectivity analysis",
              "Asset lifecycle management & inspection workflows",
              "Route optimization & service area analysis",
              "Field data collection with GPS & Survey123",
            ]}
          />
          <CompetenceCard
            title="Automation & Scripting"
            icon={<Code className="h-5 w-5" />}
            items={[
              "Python automation with ArcPy & ArcGIS API",
              "Model Builder workflows for complex geoprocessing",
              "Custom geospatial tools & add-ins development",
              "Batch processing & scheduled task automation",
              "REST API integration & web scraping for spatial data",
            ]}
          />
          <CompetenceCard
            title="Esri Apps Creation"
            icon={<Globe className="h-5 w-5" />}
            items={[
              "Configurable web apps with Instant Apps & Web AppBuilder",
              "Interactive storytelling with ArcGIS StoryMaps",
              "Real-time monitoring dashboards & Operations Dashboard",
              "Custom experiences with Experience Builder",
              "Survey design & field data collection (Survey123)",
            ]}
          />
          <CompetenceCard
            title="GIS in Power Systems"
            icon={<Network className="h-5 w-5" />}
            items={[
              "Electric distribution network analysis & modeling",
              "Customer-to-transformer assignment & load balancing",
              "Feeder tracing, protective device coordination",
              "Power outage analysis & restoration planning",
              "Single-line diagram generation & visualization",
              "Network reliability metrics & performance analysis",
            ]}
          />
          <CompetenceCard
            title="Cloud & Web GIS"
            icon={<Globe className="h-5 w-5" />}
            items={[
              "OGC web services deployment (WMS, WFS, WCS, WMTS, WPS)",
              "ArcGIS Enterprise & Portal administration",
              "Web mapping with ArcGIS JS API & Leaflet/MapLibre",
              "Full-stack GIS development (React, Node.js, PostGIS)",
              "Cloud infrastructure (AWS, Azure) for GIS workloads",
            ]}
          />
          <CompetenceCard
            title="GIS in Defense"
            icon={<Shield className="h-5 w-5" />}
            items={[
              "Tactical mapping and terrain analysis",
              "Mission planning and route optimization",
              "Intelligence gathering and spatial analysis",
              "Asset tracking and logistics support",
              "Threat assessment and security perimeter mapping",
              "Surveillance and reconnaissance support",
            ]}
          />
          <CompetenceCard
            title="Soft Skills"
            icon={<Users className="h-5 w-5" />}
            items={[
              "Cross-functional collaboration & stakeholder engagement",
              "Large-scale geospatial dataset management",
              "Technical documentation & knowledge transfer",
              "Agile project management & sprint delivery",
              "Training & mentoring junior GIS analysts",
            ]}
          />
        </div>
      </Section>

      <Section id="experience" title="Experience" className="section-panel-2 section-topglow">
        <Timeline
          items={[
            {
              title: "Geospatial Specialist",
              subtitle: "Proforce Galaxies Limited (Space & Satellite Technology) • Aug 2025 – Present",
              badge: "Satellite & Defense GIS",
              points: [
                "Process and analyze satellite imagery (SAR, multispectral, optical) to deliver actionable geospatial intelligence for security and surveillance operations",
                "Design GIS workflows enabling Satellite Data-as-a-Service (SDaaS) for homeland security, border monitoring, and infrastructure protection",
                "Build interactive dashboards and web maps using ArcGIS Pro and Esri Enterprise, delivering geospatial solutions across web, desktop, and mobile platforms",
                "Collaborate with development teams to integrate real-time geospatial data into client applications, optimizing decision-making workflows",
                "Define geospatial parameters for satellite mission tasking including coverage areas, temporal frequency, and spatial resolution requirements",
                "Automate analysis pipelines using Python and ArcPy, improving processing efficiency and scalability for high-volume satellite datasets",
                "Implement data validation frameworks ensuring accuracy and integrity for critical defense applications",
                "Apply GeoAI techniques for automated feature extraction including water detection, building footprints, and vehicle identification"
              ],
            },
            {
              title: "GIS Analyst",
              subtitle: "Ibadan Electricity Distribution Company (IBEDC) • Jul 2024 – Jun 2025",
              badge: "Utility Network GIS",
              points: [
                "Managed enterprise geospatial database for electrical distribution assets across 5 business hubs in Osun State, including transformers, feeders, poles, and substations",
                "Designed and optimized Injection Substation (ISS) service area boundaries to support energy planning, load distribution analysis, and operational efficiency",
                "Developed customer-to-transformer linking workflows enabling accurate load management, billing accuracy, and network capacity planning",
                "Conducted field verification campaigns using GPS technology, ensuring spatial accuracy and data integrity of 1,000+ network assets",
                "Automated routine GIS workflows with Model Builder and ArcPy, reducing processing time by 60% and improving dataset consistency",
                "Built interactive dashboards, web maps, and Experience Builder applications for utility engineers using ArcGIS Enterprise platform",
                "Led technical training programs for interns and cross-functional staff, enhancing organizational GIS capability and adoption",
                "Supported critical operations including fault tracing, transformer load balancing, outage tracking, and feeder performance analysis through advanced spatial analysis",
                "Integrated field-collected data with enterprise GIS infrastructure, enabling seamless cross-departmental access and data-driven decision-making"
              ],
            },
            {
              title: "Freelance GIS Analyst",
              subtitle: "Upwork & Fiverr (Remote) • 2023 – Present",
              badge: "Multi-Domain GIS",
              points: [
                "Delivered utility infrastructure mapping projects using ArcGIS Pro, including customer locations, power poles, and transformer networks for distribution planning",
                "Processed LiDAR and radar imagery to generate high-resolution terrain models and perform advanced feature extraction",
                "Created DEM-based 3D terrain visualizations and elevation profiles for construction planning and site suitability analysis",
                "Produced land-use change detection maps supporting environmental conservation initiatives and regulatory compliance",
                "Developed interactive 3D urban models for public engagement and project approval processes in municipal planning projects",
                "Performed agricultural suitability analysis integrating soil data, vegetation indices (NDVI/EVI), climate variables, and topographic factors",
                "Generated flood risk and vulnerability assessments to support disaster preparedness and emergency response planning",
                "Automated geospatial data processing workflows using Python and ArcPy, improving project delivery efficiency by 40%",
                "Consulted on Enterprise GIS architecture and Decision Support Systems (DSS) implementation for scalable geospatial solutions",
                "Designed and delivered technical training programs on GIS software, spatial analysis methodologies, and best practices for diverse client teams"
              ],
            },
            {
              title: "GIS Intern",
              subtitle: "Ibadan Electricity Distribution Company (IBEDC) • Jan 2022 – Jul 2022",
              badge: "Foundation & Capacity Building",
              points: [
                "Contributed to foundational geospatial initiatives at IBEDC prior to formal GIS unit establishment, supporting Network Planning & Design operations",
                "Maintained Distribution Substation System (DSS) database using MS Excel and ArcGIS, ensuring data accuracy for infrastructure planning",
                "Performed weekly spatial data updates and map edits for transformers, feeders, and service routes across distribution network",
                "Conducted route length calculations and distance measurements to support infrastructure assessments and capital planning decisions",
                "Provided spatial data support to engineering and planning teams, fulfilling ad-hoc mapping requests and data queries",
                "Trained peer interns on fundamental GIS tools and workflows, building early internal capacity for spatial analysis within the organization",
                "Demonstrated initiative by independently exploring GIS capabilities and establishing preliminary geospatial workflows that informed future departmental processes"
              ],
            },
            {
              title: "Geospatial Analyst",
              subtitle: "Geotechnics Service Limited • Feb 2020 – Jan 2022",
              badge: "Environmental & Infrastructure GIS",
              points: [
                "Launched professional GIS career supporting multi-domain projects across environmental monitoring, urban development, and infrastructure planning using GIS, GPS, and remote sensing technologies",
                "Performed geospatial analysis revealing critical spatial patterns, trends, and relationships to support evidence-based decision-making for diverse client requirements",
                "Processed satellite imagery and remote sensing datasets to monitor environmental changes, land-use patterns, and ecosystem health for impact assessments",
                "Produced high-quality cartographic outputs, geo-visualizations, and technical reports for client presentations, regulatory compliance, and strategic planning",
                "Implemented GIS infrastructure including data conversion, digitization, scanning workflows, and enterprise spatial database development",
                "Supported Environmental Impact Assessments (EIA), environmental audits, sensitivity mapping, and waste disposal site selection using advanced geospatial analysis",
                "Collaborated with engineering teams on telecom transmitter site selection leveraging satellite data analysis and spatial suitability modeling",
                "Delivered comprehensive GIS training programs to clients and junior staff, building organizational capacity and promoting geospatial literacy",
                "Managed complete project lifecycles from requirements gathering through solution design, execution, quality assurance, and final client delivery"
              ],
            },
          ]}
        />
      </Section>

      <Section id="projects" title="GIS Deployments" className="section-panel-1 section-topglow">
        <ProjectsShowcase />
      </Section>

      <Section id="case-studies" title="Field Operations" className="section-panel-2 section-topglow">
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Deep dives into complex deployments where I owned discovery, architecture, implementation, and change management.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.slice(0, 2).map((study) => (
              <Card key={study.slug} className="border-border/50 bg-card/60 backdrop-blur-sm">
                <CardContent className="space-y-3 p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline">{study.period}</Badge>
                    <span>•</span>
                    <span>{study.client}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{study.title}</h3>
                  <p className="text-sm text-muted-foreground">{study.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <Button asChild variant="link" className="px-0 text-primary">
                    <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center gap-2">
                      Explore case study <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <Button asChild variant="outline">
              <Link href="/case-studies">View all case studies</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section id="insights" title="Insights" className="section-panel-2 section-topglow">
        <div className="grid gap-4 md:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <Card key={insight.title} className="border-border/50 bg-card/60 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/40">
              <CardContent className="space-y-3 p-5">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <Badge variant="outline" className="text-[11px]">{insight.category}</Badge>
                  <span>{insight.date}</span>
                </div>
                <h3 className="text-lg font-semibold">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.summary}</p>
                <Button asChild variant="link" className="px-0 text-primary">
                  <a href={insight.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm">
                    Read insight <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="demo" title="Live Demo" className="section-panel-1 section-topglow">
        <MapDemo />
      </Section>

      <Section id="education" title="Education" className="section-panel-2 section-topglow">
        <Timeline
          items={[
            {
              title: "MSc. in Geo-Information Science (Discontinued)",
              subtitle: "University of Ibadan, Oyo State, Nigeria • 2025 – Aug 2025",
              badge: "Advanced GIS",
              points: [
                "Discontinued to pursue professional opportunity as Geospatial Specialist at Proforce Galaxies Limited"
              ],
            },
            {
              title: "B.Tech. in Remote Sensing & Geoscience Information System",
              subtitle: "Federal University of Technology, Akure (FUTA), Ondo State, Nigeria • 2018 – 2024",
              badge: "Second Class Upper (Hons)",
              points: [
                "Graduated with Second Class Upper Division honors",
                "Specialized in remote sensing, GIS, and geospatial information systems"
              ],
            },
            {
              title: "West African Examinations Council (WAEC)",
              subtitle: "Seed of Life College, Ibadan • 2017",
              badge: "Sciences",
              points: [
                "Science track with focus on mathematics and sciences"
              ],
            },
          ]}
        />
      </Section>

      <Section id="certifications" title="Selected Training & Certifications" className="section-panel-1 section-topglow">
        <div className="space-y-6">
          {/* 2025 Certifications */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">2025</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  <a href="https://drive.google.com/file/d/1kIkOQBa05_tJrfB530xYTRCTGlZIF_lZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    Esri Users Conference West Africa <ExternalLink className="h-3 w-3" />
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  <a href="https://drive.google.com/file/d/1MFsQM1KbTLa8FXNosa-CtPfekv7Add9E/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    Esri MOOC | Going Places with Spatial Analysis <ExternalLink className="h-3 w-3" />
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  <a href="https://drive.google.com/file/d/1VuGYZ9b_QPDkXosabu2lddXhjeT5Rdix/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    Esri MOOC | GIS for Climate Action <ExternalLink className="h-3 w-3" />
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  <a href="https://drive.google.com/file/d/1MFsQM1KbTLa8FXNosa-CtPfekv7Add9E/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    Esri MOOC | Make an Impact with Modern Geo Apps <ExternalLink className="h-3 w-3" />
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  <a href="https://www.esri.com/training/catalog/67a2388c892ceda507accec9/power-datadriven-decisions-with-arcgis-dashboards/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    Training Seminar | Power Data-Driven Decisions with ArcGIS Dashboards <ExternalLink className="h-3 w-3" />
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  <a href="https://www.esri.com/training/catalog/6791143fdc6bc2001a949d0c/designing-gis-applications-with-accessibility/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    Training Seminar | Design GIS Applications with Accessibility <ExternalLink className="h-3 w-3" />
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  <a href="https://drive.google.com/file/d/1jqd3DRKz8iLtF0Lpw808frYojfUfdZVt/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    Quantic School of Business and Technology | Decision-Making with Analytics <ExternalLink className="h-3 w-3" />
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* 2024-2023 Certifications */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">2024 - 2023</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Advanced Diploma in GIS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Representing the Real World in GIS</span>
              </li>
            </ul>
          </div>

          {/* 2022 Certifications */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">2022</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>GIS Data Quality and GPS</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="achievement" title="Accomplishments" className="section-panel-2 section-topglow">
        <div className="space-y-6">
          {/* 2025 Accomplishments */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">2025</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Trophy className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                <span>
                  <a href="https://drive.google.com/file/d/1gmPYWFR4LAZfWsKnB6PmxPduCMdYtSwf/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    <strong>3rd Place</strong>, Esri Young Scholars Award, Nigeria <ExternalLink className="h-3 w-3" />
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                <span>
                  <a href="https://drive.google.com/file/d/1dHUa2hUyP_6cglY2TkeILRxRHdzWRysf/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    Shortlisted Finalist, Esri Young Scholars Award <ExternalLink className="h-3 w-3" />
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* 2024 Accomplishments */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">2024</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Crown className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-500" />
                <span>Winner, NYSC Chess Inter-Platoon Tournament</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="testimonials" title="Testimonials" className="section-panel-1 section-topglow">
        <TestimonialCarousel />
      </Section>

      <Section id="stats" title="Geospatial Metrics" className="section-panel-2 section-topglow">
        <StatsGrid
          stats={[
            { value: (<span><Counter to={5} />+</span>), label: "Years in GIS" },
            { value: (<span><Counter to={20} />+</span>), label: "Projects" },
            { value: (<span><Counter to={10} />+</span>), label: "Certifications" },
          ]}
        />
      </Section>

      <Section id="contact" title="Coordinate Connection" className="section-panel-1 section-topglow">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-border/50 bg-card/60 backdrop-blur">
            <CardContent className="space-y-6 p-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <TransText
                    token="contactBlurb"
                    fallback="Let’s collaborate on geospatial intelligence, utility network modernization, or defense-grade GIS solutions."
                  />{" "}
                  Reach out via LinkedIn,
                  open your mail client with one tap, or drop a quick note through the form.
                </p>
                <p className="text-xs text-muted-foreground">
                  Prefer email? Click the mail icon and your email app will launch with everything ready to send.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="flex-1 justify-center gap-3 bg-[#0A66C2] text-white hover:bg-[#0956a3]"
                >
                  <a
                    href="https://www.linkedin.com/in/abdulfatai-sanusi-26b320372/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 rounded-full border-border/70"
                    >
                      <a
                        href="mailto:work.abdulfatai@gmail.com"
                        aria-label="Email Abdulfatai Sanusi"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Send email</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Opens your email app</TooltipContent>
                </Tooltip>
              </div>
              <p className="text-xs text-muted-foreground">
                The mail icon keeps your address private—click it and your default email client opens with my address prefilled.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/60 backdrop-blur">
            <CardContent className="space-y-4 p-6">
              <div>
                <h3 className="text-lg font-semibold">Send a Message</h3>
                <p className="text-sm text-muted-foreground">
                  <TransText
                    token="contactFormIntro"
                    fallback="Type your message and hit send—your email app will open with everything ready to deliver."
                  />
                </p>
              </div>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </Section>
      <Footer />

      {/* Compass Rose */}
      <CompassRose />

      {/* Coordinate Tooltip - Homepage only */}
      <CursorGlow />

      {/* Scroll to Top */}
      <ScrollToTop />
    </main >
  );
}
