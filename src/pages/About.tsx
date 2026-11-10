import { BaseLayout, HollowContainer } from "@/components";
import { Separator } from "@/components/ui/separator";

export const AboutPage = () => {
    return (
        <BaseLayout>
            <div className="container mx-auto max-w-3xl p-4">
                <HollowContainer className="p-8 text-left items-start">
                    <h1 className="text-3xl font-bold tracking-tight">About Viktor Lukianov</h1>
                    <p className="text-muted-foreground mt-1 text-base">Full-Stack Software Engineer • Python & TypeScript</p>
                    <Separator className="my-6 w-full" />
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            I am a full-stack engineer with hands-on experience building distributed backend systems, modern web and mobile applications, and AI integrations.
                        </p>
                        <p>
                            My engineering approach blends robust database engineering (PostgreSQL with PL/pgSQL triggers and roles), clean API contracts (FastAPI, NestJS, Express), and high-performance client experiences (React, Next.js, TanStack).
                        </p>
                        <p>
                            Having led a team of 21 instructors and mentored over 50 students, I bring strong communication, leadership, and code review rigor to engineering organizations.
                        </p>
                    </div>
                </HollowContainer>
            </div>
        </BaseLayout>
    );
};
