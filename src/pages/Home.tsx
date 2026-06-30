import React from "react";
import { BaseLayout, HollowContainer } from "@/components";
import { Separator } from "@/components/ui/separator";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const TechnologyTooltip = (
    {
        src,
        content,
        alt,
        ...props
    }: React.HTMLAttributes<HTMLImageElement>
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
    )
}

export const HomePage = () => {
    return (
        <BaseLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">

                <HollowContainer className="p-8 justify-between">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight">Viktor Lukianov</h1>
                        <p className="text-muted-foreground mt-2 text-lg">Software Developer & Team Lead.</p>
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                        <p>I build systems that solve real problems. I believe code should be an asset, not a liability.</p>
                        <p>I think the things we build are just as important as the trade-offs we make to deliver them.</p>
                        <p>I strive for simplicity—fewer moving parts, better performance, and higher maintainability.</p>
                        <p className="italic font-medium text-slate-800 dark:text-slate-200">The best code is an optimal amount of structure.</p>
                    </div>
                </HollowContainer>

                <div className="grid grid-rows-2 gap-4">
                    <HollowContainer className="p-8 flex flex-col justify-between text-center">
                        <h1 className="text-3xl font-bold tracking-tight">Technology stack</h1>
                        <p className="text-muted-foreground mt-2 text-lg">Full-stack expertise focused on FastAPI, Django, and React ecosystems</p>
                        <Separator className="my-6" />
                        <div className="flex gap-3">
                            <TechnologyTooltip
                                src="/python.svg"
                                alt="Python"
                                className={"w-16 h-16"}
                                content="Backend development with FastAPI and Django. Used for production-ready APIs and complex logic."
                            />
                            <TechnologyTooltip
                                src="/react.svg"
                                alt="React"
                                className={"w-16 h-16"}
                                content="Frontend development with React, TypeScript, and Vite. Building responsive, component-driven interfaces."
                            />
                            <TechnologyTooltip
                                src="/sql.svg"
                                alt="SQL"
                                className={"w-16 h-16"}
                                content="Expertise in SQLAlchemy query builders, PostgreSQL for production, and SQLite for local environments."
                            />
                            <TechnologyTooltip
                                src="/typescript.svg"
                                alt="TypeScript"
                                className={"w-16 h-16"}
                                content="Type-safe development for both frontend applications and backend service architectures."
                            />
                        </div>
                    </HollowContainer>

                    <HollowContainer className="p-8 flex flex-col justify-between text-center">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Current focus</h1>
                            <p className="text-muted-foreground mt-2 text-lg">Building full-stack applications with modern solutions, while continuously advancing my expertise.</p>
                        </div>
                        <Separator className="my-6" />
                        <div className="flex flex-row gap-3">
                            <a href="https://github.com/MarryBye"><img src="/github.svg" alt="github" className={"w-8 h-8"} /></a>
                            <a href="https://www.linkedin.com/in/lukianov-viktor/"><img src="/linkedin.svg" alt="linkedin" className={"w-8 h-8"} /></a>
                            <a href="tg://resolve?domain=viktorlukianov"><img src="/telegram.svg" alt="telegram" className={"w-8 h-8"} /></a>
                        </div>
                    </HollowContainer>
                </div>
            </div>
        </BaseLayout>
    )
}