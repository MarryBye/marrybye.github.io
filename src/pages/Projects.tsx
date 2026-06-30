import { useMemo, useState } from "react";
import { Link } from "react-router";
import { BaseLayout } from "@/components";
import { HollowContainer } from "@/components/hollow-container";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";


const projects = [
    {
        title: "Portfolio Website",
        description: "A polished one-page portfolio built with React and Tailwind CSS.",
        link: "/projects/portfolio-website",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        category: "Web",
    },
    {
        title: "Task Manager API",
        description: "A RESTful backend service for organizing tasks and deadlines.",
        link: "/projects/task-manager-api",
        tags: ["Node.js", "Express", "MongoDB"],
        category: "Backend",
    },
    {
        title: "Mobile Notes App",
        description: "A lightweight notes experience designed for quick capture on the go.",
        link: "/projects/mobile-notes-app",
        tags: ["React Native", "TypeScript", "SQLite"],
        category: "Mobile",
    },
    {
        title: "Design System Kit",
        description: "Reusable UI primitives for building consistent products faster.",
        link: "/projects/design-system-kit",
        tags: ["React", "Storybook", "Figma"],
        category: "Web",
    },
];

const ProjectCard = (
    {
        title,
        description,
        link,
        tags
    }: {
        title: string,
        description: string,
        link: string,
        tags: string[]
    }
) => {
    return (
        <HollowContainer className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-2">{description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, index) => (
                    <Badge key={index} variant="default">
                        {tag}
                    </Badge>
                ))}
            </div>
            <Link to={link} className="text-blue-500 hover:underline">
                View Project
            </Link>
        </HollowContainer>
    )
}

export const ProjectsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        return projects.filter((project) => {
            const matchesFilter = activeFilter === "All" || project.category === activeFilter;
            const matchesSearch =
                normalizedSearch.length === 0 ||
                project.title.toLowerCase().includes(normalizedSearch);

            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, searchTerm]);

    return (
        <BaseLayout>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    <HollowContainer className="p-6 md:col-span-1 justify-start gap-4">
                        <div className="w-full space-y-2">
                            <Label htmlFor="project-search" className="text-sm font-medium">
                                Search by title
                            </Label>
                            <Input
                                id="project-search"
                                placeholder="Search projects"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />
                        </div>

                        <Separator className="w-full" />

                        <div className="w-full space-y-2">
                            <Label className="text-sm font-medium">Filter by category</Label>
                            <div className="flex flex-wrap gap-2">
                                {['All', 'Web', 'Backend', 'Mobile'].map((filter) => (
                                    <button
                                        key={filter}
                                        type="button"
                                        onClick={() => setActiveFilter(filter)}
                                        className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                                            activeFilter === filter
                                                ? "border-primary bg-primary text-primary-foreground"
                                                : "bg-background hover:bg-muted"
                                        }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </HollowContainer>

                    <div className="md:col-span-3">
                        <div className="mb-4 flex items-center justify-between gap-2">
                            <h1 className="text-3xl font-bold">Projects</h1>
                            <p className="text-sm text-muted-foreground">
                                {filteredProjects.length} result{filteredProjects.length === 1 ? "" : "s"}
                            </p>
                        </div>

                        {filteredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredProjects.map((project) => (
                                    <ProjectCard
                                        key={project.title}
                                        title={project.title}
                                        description={project.description}
                                        link={project.link}
                                        tags={project.tags}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
                                No projects match your search.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}