import { BaseLayout, HollowContainer } from "@/components";
import { Separator } from "@/components/ui/separator";

const contactMethods = [
    {
        label: "Email",
        value: "vlukianov04@gmail.com",
        href: "mailto:vlukianov04@gmail.com",
        action: "Send email",
    },
    {
        label: "Telegram",
        value: "@viktorlukianov",
        href: "https://t.me/viktorlukianov",
        action: "Open chat",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/lukianov-viktor",
        href: "https://www.linkedin.com/in/lukianov-viktor/",
        action: "Visit profile",
    },
    {
        label: "GitHub",
        value: "github.com/MarryBye",
        href: "https://github.com/MarryBye",
        action: "View code",
    },
];

const strengths = [
    "Full-stack software engineering (Python & TypeScript)",
    "Distributed backend architecture & relational database design (PostgreSQL)",
    "Modern frontend systems (React, Next.js, TanStack, Tailwind CSS)",
    "Team leadership, developer mentorship, and agile delivery",
    "Production containerization and CI/CD pipelines (Docker, GitHub Actions)",
];

export const ContactPage = () => {
    return (
        <BaseLayout>
            <div className="mx-auto max-w-5xl px-4 py-6">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                    <HollowContainer className="flex flex-col justify-between p-8 md:p-10 text-left items-start">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                                Get In Touch
                            </p>
                            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                Let&apos;s build something exceptional.
                            </h1>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                I am open to full-stack engineering opportunities, high-impact collaborations, and challenging software projects.
                                Feel free to reach out directly through any channel below.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="mailto:vlukianov04@gmail.com"
                                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                            >
                                Send Email
                            </a>
                            <a
                                href="https://t.me/viktorlukianov"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
                            >
                                Message on Telegram
                            </a>
                        </div>
                    </HollowContainer>

                    <HollowContainer className="p-8 md:p-10 justify-center">
                        <div className="space-y-3 w-full">
                            {contactMethods.map((method) => (
                                <a
                                    key={method.label}
                                    href={method.href}
                                    target={method.href.startsWith("http") ? "_blank" : undefined}
                                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex items-center justify-between rounded-xl border border-border/70 bg-background/70 p-4 transition hover:border-primary/60 hover:shadow-sm"
                                >
                                    <div className="mr-4 text-left">
                                        <p className="text-sm font-medium">{method.label}</p>
                                        <p className="text-xs text-muted-foreground">{method.value}</p>
                                    </div>
                                    <span className="text-xs font-semibold text-primary">{method.action}</span>
                                </a>
                            ))}
                        </div>
                    </HollowContainer>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <HollowContainer className="p-8 text-left items-start">
                        <h2 className="text-xl font-semibold">Core Competencies</h2>
                        <Separator className="my-4" />
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            {strengths.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </HollowContainer>

                    <HollowContainer className="p-8 text-left items-start">
                        <h2 className="text-xl font-semibold">Location & Availability</h2>
                        <Separator className="my-4" />
                        <div className="space-y-3.5 text-sm text-muted-foreground">
                            <div>
                                <p className="font-medium text-foreground">Location</p>
                                <p>Brno, Czech Republic (Open to Remote / Hybrid / Relocation)</p>
                            </div>
                            <div>
                                <p className="font-medium text-foreground">Availability</p>
                                <p>Full-time Software Engineering roles, contracting, and technical consulting.</p>
                            </div>
                            <div>
                                <p className="font-medium text-foreground">Languages</p>
                                <p>English (B2 Professional), Ukrainian (Native), Russian (Native)</p>
                            </div>
                        </div>
                    </HollowContainer>
                </div>
            </div>
        </BaseLayout>
    );
};
