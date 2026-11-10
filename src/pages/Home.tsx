import React from "react";
import { BaseLayout, HollowContainer } from "@/components";
import { Separator } from "@/components/ui/separator";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechnologyTooltipProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    content: string;
}

const TechnologyTooltip = (
    {
        src,
        content,
        alt,
        ...props
    }: TechnologyTooltipProps
) => {
    return (
        <Tooltip>
            <TooltipTrigger>
                <img src={src} alt={alt} {...props} />
            </TooltipTrigger>
            <TooltipContent>
                {content}
            </TooltipContent>
        </Tooltip>
    );
};

export const HomePage = () => {
    return (
        <BaseLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">

                <HollowContainer className="p-8 justify-between">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight">Viktor Lukianov</h1>
                        <p className="text-muted-foreground mt-2 text-lg">Full-Stack Software Engineer & Team Lead</p>
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                        <p>I build scalable systems that solve real problems. I believe code should be an asset, not a liability.</p>
                        <p>I think the things we build are just as important as the architectural trade-offs we make to deliver them.</p>
                        <p>I strive for simplicity—fewer moving parts, better performance, and higher maintainability.</p>
                        <p className="italic font-medium text-slate-800 dark:text-slate-200">The best code is an optimal amount of structure.</p>
                    </div>
                </HollowContainer>

                <div className="grid grid-rows-2 gap-4">
                    <HollowContainer className="p-8 flex flex-col justify-between text-center">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Technology stack</h1>
                            <p className="text-muted-foreground mt-2 text-base">Full-stack expertise focused on Python (FastAPI/Django) and TypeScript (NestJS/React) ecosystems</p>
                        </div>
                        <Separator className="my-6" />
                        <div className="flex gap-4 justify-center items-center">
                            <TechnologyTooltip
                                src="/python.svg"
                                alt="Python"
                                className="w-14 h-14 transition-transform hover:scale-110"
                                content="Backend development with FastAPI and Django. Used for production-ready APIs and complex business logic."
                            />
                            <TechnologyTooltip
                                src="/typescript.svg"
                                alt="TypeScript"
                                className="w-14 h-14 transition-transform hover:scale-110"
                                content="Type-safe engineering across full-stack applications, NestJS APIs, and Next.js/React frontends."
                            />
                            <TechnologyTooltip
                                src="/react.svg"
                                alt="React"
                                className="w-14 h-14 transition-transform hover:scale-110"
                                content="Frontend development with React 19/18, Next.js 15, and Vite. Building responsive, accessible interfaces."
                            />
                            <TechnologyTooltip
                                src="/sql.svg"
                                alt="SQL"
                                className="w-14 h-14 transition-transform hover:scale-110"
                                content="Relational databases with PostgreSQL and SQLite: raw DDL, PL/pgSQL triggers, views, roles, and Drizzle/SQLAlchemy ORMs."
                            />
                        </div>
                    </HollowContainer>

                    <HollowContainer className="p-8 flex flex-col justify-between text-center">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Current focus</h1>
                            <p className="text-muted-foreground mt-2 text-base">Architecting enterprise monorepos, high-throughput backend services, and AI-assisted workflows.</p>
                        </div>
                        <Separator className="my-6" />
                        <div className="flex flex-row gap-4 justify-center items-center">
                            <a
                                href="https://github.com/MarryBye"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-110"
                                aria-label="GitHub Profile"
                            >
                                <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/lukianov-viktor/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-110"
                                aria-label="LinkedIn Profile"
                            >
                                <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                            </a>
                            <a
                                href="https://t.me/viktorlukianov"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-110"
                                aria-label="Telegram"
                            >
                                <img src="/telegram.svg" alt="Telegram" className="w-8 h-8" />
                            </a>
                        </div>
                    </HollowContainer>
                </div>
            </div>
        </BaseLayout>
    );
};
