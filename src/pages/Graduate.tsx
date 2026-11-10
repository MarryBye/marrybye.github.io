import { BaseLayout, HollowContainer } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const educationList = [
    {
        degree: "Bachelor of Science in Software Development",
        institution: "State University of Intelligent Technologies and Communications (SUITT)",
        period: "2025 – 2027 (Expected)",
        description: "Specialized in software engineering principles, distributed systems, high-performance database management, and cloud architecture.",
        courses: ["Software Architecture", "Distributed Systems", "Database Systems", "Algorithmic Analysis", "Cloud Computing"],
    },
    {
        degree: "Junior Specialist in Computer Science (with Honors)",
        institution: "Odessa Professional College of Computer Technologies (OPCCT)",
        period: "2020 – 2024",
        description: "Graduated with highest honors (Summa Cum Laude equivalent). In-depth coursework in data structures, relational databases, OOP, operating systems, and computer networks.",
        courses: ["Algorithms & Data Structures", "Relational Databases", "Object-Oriented Programming", "Operating Systems", "Networking"],
    },
];

const languages = [
    {
        language: "English",
        level: "B2 (Professional Working Proficiency)",
        description: "Fluent in technical documentation, architectural debates, code reviews, and cross-border team collaboration.",
    },
    {
        language: "Ukrainian",
        level: "Native",
        description: "Mother tongue.",
    },
    {
        language: "Russian",
        level: "Native",
        description: "Native fluency.",
    },
];

export const GraduatePage = () => {
    return (
        <BaseLayout>
            <div className="container mx-auto max-w-4xl p-4">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">Education & Qualifications</h1>
                    <p className="text-muted-foreground mt-1 text-base">
                        Academic background, formal technical foundations, and language proficiency
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Academic Degrees</h2>
                        <div className="space-y-4">
                            {educationList.map((edu) => (
                                <HollowContainer key={edu.degree} className="p-8 text-left items-start">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                                            <p className="text-primary font-medium text-sm">{edu.institution}</p>
                                        </div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-background px-3 py-1 rounded-full border border-border/70 self-start sm:self-auto">
                                            {edu.period}
                                        </span>
                                    </div>

                                    <Separator className="my-4 w-full" />

                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                        {edu.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40 w-full">
                                        {edu.courses.map((course) => (
                                            <Badge key={course} variant="secondary" className="text-xs font-normal">
                                                {course}
                                            </Badge>
                                        ))}
                                    </div>
                                </HollowContainer>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">Languages</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {languages.map((lang) => (
                                <HollowContainer key={lang.language} className="p-6 text-left items-start justify-start">
                                    <h3 className="text-base font-bold text-foreground">{lang.language}</h3>
                                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mt-1">
                                        {lang.level}
                                    </p>
                                    <Separator className="my-3 w-full" />
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {lang.description}
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
