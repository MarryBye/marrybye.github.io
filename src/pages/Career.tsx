import { BaseLayout, HollowContainer } from "@/components";
import { Separator } from "@/components/ui/separator";

const milestones = [
    {
        title: "Full-Stack Product Engineering",
        subtitle: "Educaris.Pro & Flagship Monorepos",
        description:
            "Engineered production web applications and background processing pipelines with NestJS, FastAPI, Next.js, and React. Architected the BizX multi-tenant B2B SaaS platform using Turborepo and Drizzle ORM.",
    },
    {
        title: "Engineering Team Leadership",
        subtitle: "Logika IT School",
        description:
            "Supervised 21 programming instructors, structured team communication, conducted technical interviews, and automated administrative operations using Django and Google APIs.",
    },
    {
        title: "Technical Pedagogy & Mentorship",
        subtitle: "50+ Students Guided to Capstone Success",
        description:
            "Taught algorithms, data structures, and Python programming to over 50 students, guiding capstone projects through clean architecture, Git versioning, and rigorous peer code reviews.",
    },
];

const principles = [
    {
        title: "Code as an Asset, Not a Liability",
        body: "Write concise, self-documenting code with clear boundaries. Every line of code should earn its place by delivering concrete business value without unnecessary cognitive overhead.",
    },
    {
        title: "Database-Level Integrity",
        body: "Rely on strong relational guarantees, triggers, and granular role permissions rather than fragile application-only checks. The database is the ultimate source of truth.",
    },
    {
        title: "Type Safety Across the Full Stack",
        body: "Eliminate entire classes of runtime errors through strict TypeScript and Pydantic validation across client-server boundaries, APIs, and background job queues.",
    },
    {
        title: "Predictable, Automated DevOps",
        body: "Containerize every service with multi-stage Dockerfiles. Automate linting, type checks, and test suites with GitHub Actions CI to ensure fast, confident deployments.",
    },
];

export const CareerPage = () => {
    return (
        <BaseLayout>
            <div className="container mx-auto max-w-4xl p-4">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">Career & Engineering Philosophy</h1>
                    <p className="text-muted-foreground mt-1 text-base">
                        Professional trajectory, leadership milestones, and core software engineering principles
                    </p>
                </div>

                <div className="space-y-6">
                    <HollowContainer className="p-8 text-left items-start">
                        <h2 className="text-xl font-bold text-foreground">Career Trajectory</h2>
                        <p className="text-sm text-muted-foreground mt-1 mb-4 leading-relaxed">
                            A path built on strong foundational computer science principles, practical full-stack engineering, and high-responsibility team leadership.
                        </p>
                        <Separator className="mb-6 w-full" />

                        <div className="space-y-6 w-full">
                            {milestones.map((m) => (
                                <div key={m.title} className="relative pl-6 border-l-2 border-primary/50">
                                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                                    <h3 className="text-base font-bold text-foreground">{m.title}</h3>
                                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mt-0.5 mb-1.5">
                                        {m.subtitle}
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {m.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </HollowContainer>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">Engineering Principles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {principles.map((p) => (
                                <HollowContainer key={p.title} className="p-6 text-left items-start justify-start">
                                    <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                                    <Separator className="my-3 w-full" />
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {p.body}
                                    </p>
                                </HollowContainer>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};
