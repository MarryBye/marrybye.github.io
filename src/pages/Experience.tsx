import { BaseLayout, HollowContainer } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const experiences = [
    {
        role: "Software Engineer (Full Stack)",
        company: "Educaris.Pro",
        location: "Remote",
        period: "Jul 2026 – Oct 2026",
        highlights: [
            "Engineered backend services and responsive frontend components for an inclusive EdTech platform supporting children with special needs.",
            "Implemented longitudinal developmental tracking metrics and real-time student performance analytics.",
            "Contributed to multi-app architecture serving dedicated portals for parents and care centers alongside a centralized administrative dashboard.",
            "Collaborated within an agile Kanban workflow using Linear, Slack, and Miro for rapid sprint delivery and cross-functional synchronization.",
        ],
        technologies: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "REST APIs", "Docker"],
    },
    {
        role: "Team Lead",
        company: "Logika IT School",
        location: "Odesa, Ukraine",
        period: "Jun 2025 – Sep 2026",
        highlights: [
            "Supervised a cross-functional team of 21 programming instructors, establishing code quality guidelines and educational delivery benchmarks.",
            "Spearheaded the development and operational rollout of an internal Django & Google Sheets API management platform, automating student reporting and saving administrative hours weekly.",
            "Organized weekly technical workshops on software architecture, Python development best practices, and clean code principles.",
            "Revamped hiring and onboarding pipelines by introducing standardized technical interviews and peer code reviews.",
        ],
        technologies: ["Python", "Django", "Google APIs", "Team Leadership", "Process Optimization", "Code Review"],
    },
    {
        role: "Programming Teacher",
        company: "Logika IT School",
        location: "Odesa, Ukraine",
        period: "Jul 2022 – Jun 2025",
        highlights: [
            "Instructed 50+ students (ages 12–18) in Python programming, covering algorithms, OOP, data structures, and web technologies.",
            "Supervised student capstone projects through the entire software development lifecycle with Git version control and modular project architecture.",
            "Authored and continuously refined hands-on coding exercises aligned with industry standards.",
        ],
        technologies: ["Python", "Algorithms", "Data Structures", "Git", "OOP", "Pedagogy"],
    },
];

export const ExperiencePage = () => {
    return (
        <BaseLayout>
            <div className="container mx-auto max-w-4xl p-4">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">Work Experience</h1>
                    <p className="text-muted-foreground mt-1 text-base">
                        Track record in full-stack engineering, engineering leadership, and developer mentorship
                    </p>
                </div>

                <div className="space-y-6">
                    {experiences.map((exp) => (
                        <HollowContainer key={`${exp.company}-${exp.role}`} className="p-8 text-left items-start">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight text-foreground">{exp.role}</h2>
                                    <p className="text-primary font-medium text-base">{exp.company} • <span className="text-muted-foreground text-sm font-normal">{exp.location}</span></p>
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-background px-3 py-1 rounded-full border border-border/70 self-start sm:self-auto">
                                    {exp.period}
                                </span>
                            </div>

                            <Separator className="my-4 w-full" />

                            <ul className="space-y-2.5 text-sm text-muted-foreground mb-4 w-full">
                                {exp.highlights.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40 w-full">
                                {exp.technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="text-xs font-normal">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </HollowContainer>
                    ))}
                </div>
            </div>
        </BaseLayout>
    );
};
