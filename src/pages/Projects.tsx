import { useMemo, useState } from "react";
import { BaseLayout } from "@/components";
import { HollowContainer } from "@/components/hollow-container";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

const GitHubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
    </svg>
);

export interface Project {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    categories: string[];
    github: string;
}

export const projects: Project[] = [
    {
        title: "BizX Platform",
        subtitle: "Enterprise B2B SaaS Monorepo",
        description: "Multi-tenant SaaS platform organized as a pnpm + Turborepo monorepo with NestJS 11, Next.js 15, React 19, Expo SDK 52, Drizzle ORM, BullMQ, Redis, and Cloudflare R2.",
        tags: ["TypeScript", "NestJS", "Next.js", "React", "Expo", "Drizzle ORM", "Redis", "BullMQ", "Docker"],
        categories: ["Full-Stack", "SaaS"],
        github: "https://github.com/MarryBye/bizx-platform",
    },
    {
        title: "Taxi Service",
        subtitle: "Full-Stack Ride Hailing",
        description: "Full-stack ride dispatch platform featuring database-level role-based access control, PL/pgSQL audit triggers, FastAPI async backend, and React 18 frontend.",
        tags: ["Python", "FastAPI", "PostgreSQL", "PL/pgSQL", "React", "Vite", "Docker"],
        categories: ["Full-Stack"],
        github: "https://github.com/MarryBye/taxi-service",
    },
    {
        title: "Easy CRM",
        subtitle: "Fleet & Order Management",
        description: "Operational CRM for taxi fleets, driver allocation, and ride order lifecycle management with TanStack Suite, Express, TypeORM, Storybook, and Playwright E2E testing.",
        tags: ["TypeScript", "React", "TanStack Query", "TanStack Router", "Express", "TypeORM", "Playwright", "Docker"],
        categories: ["Full-Stack"],
        github: "https://github.com/MarryBye/easy-crm",
    },
    {
        title: "Donor Center Telegram Bot",
        subtitle: "Clinical Blood Bank Bot",
        description: "Clinical Telegram bot for the Kharkiv Blood Center supporting 6-language internationalization, FSM donor registration, clinic blood inventory tracking, and appointments.",
        tags: ["Python", "Aiogram 3", "PostgreSQL", "FSM", "i18n", "Docker"],
        categories: ["Bots / AI"],
        github: "https://github.com/MarryBye/donor-center-telegram-bot",
    },
    {
        title: "Coderator",
        subtitle: "Multimodal Discord AI Assistant",
        description: "Discord bot powered by Google Gemini API that processes conversational text and image attachments with persistent interaction logging via SQLAlchemy.",
        tags: ["Python", "Discord.py", "Google Gemini API", "SQLAlchemy", "SQLite", "Docker"],
        categories: ["Bots / AI"],
        github: "https://github.com/MarryBye/coderator-discord-bot",
    },
    {
        title: "SUITT Schedule Bot",
        subtitle: "University Timetable & AI Notes",
        description: "Telegram bot for university students that automates class schedules, calculates odd/even week parity, and provides AI study notes via Google Gemini.",
        tags: ["Python", "Aiogram", "Google Gemini API", "SQLite", "Docker"],
        categories: ["Bots / AI"],
        github: "https://github.com/MarryBye/suitt-schedule-bot",
    },
];

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <HollowContainer className="flex flex-col justify-between items-start text-left p-6 border border-border/80 bg-background/80 hover:border-primary/60 transition-all duration-200 rounded-xl shadow-xs">
            <div className="w-full">
                <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {project.categories.join(" • ")}
                    </span>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        aria-label={`Open ${project.title} on GitHub`}
                    >
                        <GitHubIcon className="w-5 h-5" />
                    </a>
                </div>

                <h2 className="text-xl font-bold tracking-tight text-foreground">{project.title}</h2>
                <p className="text-sm font-medium text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">{project.description}</p>
            </div>

            <div className="w-full pt-4 mt-auto border-t border-border/50">
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs py-0.5 px-2 font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group"
                >
                    <span>View Repository</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
            </div>
        </HollowContainer>
    );
};

export const ProjectsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    const categories = ["All", "Full-Stack", "Bots / AI", "SaaS"];

    const filteredProjects = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        return projects.filter((project) => {
            const matchesFilter =
                activeFilter === "All" ||
                project.categories.includes(activeFilter);

            const matchesSearch =
                normalizedSearch.length === 0 ||
                project.title.toLowerCase().includes(normalizedSearch) ||
                project.subtitle.toLowerCase().includes(normalizedSearch) ||
                project.description.toLowerCase().includes(normalizedSearch) ||
                project.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, searchTerm]);

    return (
        <BaseLayout>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    <HollowContainer className="p-6 md:col-span-1 justify-start gap-4 h-fit">
                        <div className="w-full space-y-2">
                            <Label htmlFor="project-search" className="text-sm font-medium">
                                Search projects
                            </Label>
                            <Input
                                id="project-search"
                                placeholder="Search by name, tech..."
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />
                        </div>

                        <Separator className="w-full" />

                        <div className="w-full space-y-2">
                            <Label className="text-sm font-medium">Filter by category</Label>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((filter) => (
                                    <button
                                        key={filter}
                                        type="button"
                                        onClick={() => setActiveFilter(filter)}
                                        className={`rounded-full border px-3 py-1 text-sm transition-colors cursor-pointer ${
                                            activeFilter === filter
                                                ? "border-primary bg-primary text-primary-foreground font-medium"
                                                : "bg-background hover:bg-muted text-muted-foreground"
                                        }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </HollowContainer>

                    <div className="md:col-span-3">
                        <div className="mb-4 flex items-center justify-between gap-2 px-1">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight">Featured Projects</h1>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Production-ready applications, distributed platforms, and AI integrations
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground font-medium">
                                {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
                            </p>
                        </div>

                        {filteredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {filteredProjects.map((project) => (
                                    <ProjectCard
                                        key={project.title}
                                        project={project}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-lg border border-dashed border-border p-12 text-center text-muted-foreground">
                                No projects match your search or filter criteria.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};
