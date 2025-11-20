export interface Testimonial {
    id: number;
    name: string;
    role: string;
    department: string;
    institution: string;
    email: string;
    content: string;
    highlight?: string;
    logoText?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Akpofure Fakpor Miller",
        role: "Supervisor",
        department: "Department of Remote Sensing & Geoscience Information Systems",
        institution: "The Federal University of Technology, Akure (FUTA)",
        email: "amfakpor@futa.edu.ng",
        highlight: "\"Consistently demonstrated strong competence in GIS and remote sensing.\"",
        logoText: "FUTA",
        content:
            "I supervised Sanusi Abdulfatai Oyewunmi at FUTA and found him to be highly skilled, disciplined, and technically exceptional. He consistently demonstrated strong competence in GIS, remote sensing, and geospatial analysis, completing his tasks with accuracy and professionalism. I confidently recommend him for any role requiring advanced geospatial expertise.",
    },
    {
        id: 2,
        name: "Aleem Mubarak",
        role: "Lead, Inspection & Quality Assurance",
        department: "Inspection & Quality Assurance",
        institution: "Ibadan Electricity Distribution Company (IBEDC)",
        email: "mubarak.aleem@ibedc.com",
        highlight: "Delivered accurate maps and analysis without needing follow-up.",
        logoText: "IBEDC",
        content:
            "I worked with Sanusi Abdulfatai Oyewunmi during his time with IBEDC, and he proved to be dependable, hardworking, and technically sound in his GIS work. He supported our inspection and quality assurance activities with accurate maps, clean data, and timely analysis. Sanusi works well with engineers, pays attention to detail, and consistently delivered what was required without needing follow-up. I confidently recommend him for any GIS or geospatial role.",
    },
    {
        id: 3,
        name: "Kelechi Njoku",
        role: "Lead, GIS",
        department: "GIS Department",
        institution: "Ibadan Electricity Distribution Company (IBEDC)",
        email: "Kelechi.Njoku@ibedc.com",
        highlight: "Maintained high-quality GIS databases that supported network planning.",
        logoText: "IBEDC",
        content:
            "I worked with Sanusi Abdulfatai Oyewunmi at IBEDC and found him to be a skilled and dependable GIS professional. He consistently produced accurate spatial data, maintained high-quality GIS databases, and supported our network planning work effectively. Sanusi is detail-oriented, collaborative, and a quick learner.",
    },
    {
        id: 4,
        name: "Folasade Sanya",
        role: "Chief Technical Officer (CTO)",
        department: "Technical Division",
        institution: "Ibadan Electricity Distribution Company (IBEDC)",
        email: "folasade.sanya@ibedc.com",
        highlight: "Instrumental in establishing enterprise GIS workflows at IBEDC.",
        logoText: "IBEDC",
        content:
            "Sanusi Abdulfatai Oyewunmi was instrumental in establishing GIS at IBEDC. He pioneered workflows, managed critical spatial data, and developed accurate maps that enhanced our technical operations and decision-making. Sanusi is proactive, highly skilled, and a trusted professional in geospatial analysis.",
    },
    {
        id: 5,
        name: "Brigadier General S.O.G Aremu",
        role: "Commander",
        department: "42 Engineer Brigade",
        institution: "Nigerian Army",
        email: "Available upon request",
        highlight: "Delivered actionable geospatial insight under mission-critical timelines.",
        logoText: "NA",
        content:
            "Sanusi Abdulfatai Oyewunmi provided exceptional geospatial support to our operations, delivering accurate maps, spatial analysis, and actionable insights that improved planning and situational awareness. He is disciplined, reliable, and highly skilled in GIS and remote sensing applications.",
    },
];
