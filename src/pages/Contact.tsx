import { BaseLayout, HollowContainer } from "@/components";
import { Separator } from "@/components/ui/separator";

const contactMethods = [
    {
        label: "Email",
        value: "vlukianov04@email.com",
        href: "mailto:vlukianov04@email.com",
        action: "Write now",
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
];

const strengths = [
    "Full-stack development",
    "UI/UX-focused interfaces",
    "System architecture and product thinking",
    "Reliable delivery in fast-moving teams",
];

export const ContactPage = () => {
    return (
        <BaseLayout>
            <div className="mx-auto max-w-6xl px-4 py-6">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                    <HollowContainer className="flex flex-col justify-between p-8 md:p-10">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                Contact
                            </p>
                            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                Let&apos;s build something meaningful.
                            </h1>
                            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                                I&apos;m open to collaborations, freelance projects, and full-time opportunities.
                                Reach out and I&apos;ll get back to you soon.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="mailto:vlukianov04@email.com"
                                className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                            >
                                Send email
                            </a>
                            <a
                                href="https://t.me/viktorlukianov"
                                className="rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:bg-muted"
                            >
                                Message on Telegram
                            </a>
                        </div>
                    </HollowContainer>

                    <HollowContainer className="p-8 md:p-10">
                        <div className="space-y-3">
                            {contactMethods.map((method) => (
                                <a
                                    key={method.label}
                                    href={method.href}
                                    className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 p-4 transition hover:border-primary/60 hover:shadow-sm"
                                >
                                    <div className="mr-4">
                                        <p className="text-sm font-medium">{method.label}</p>
                                        <p className="text-sm text-muted-foreground">{method.value}</p>
                                    </div>
                                    <span className="text-sm font-medium text-primary">{method.action}</span>
                                </a>
                            ))}
                        </div>
                    </HollowContainer>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <HollowContainer className="p-8">
                        <h2 className="text-xl font-semibold">What I can help with</h2>
                        <Separator className="my-4" />
                        <ul className="space-y-3 text-muted-foreground">
                            {strengths.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </HollowContainer>

                    <HollowContainer className="p-8">
                        <h2 className="text-xl font-semibold">Quick details</h2>
                        <Separator className="my-4" />
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <div>
                                <p className="font-medium text-foreground">Availability</p>
                                <p>Open for new projects and thoughtful collaborations.</p>
                            </div>
                            <div>
                                <p className="font-medium text-foreground">Location</p>
                                <p>Ukraine, Odesa. Ready for a hybrid or remote work.</p>
                            </div>
                            <div>
                                <p className="font-medium text-foreground">Response time</p>
                                <p>Usually within 1–2 business days.</p>
                            </div>
                        </div>
                    </HollowContainer>
                </div>
            </div>
        </BaseLayout>
    );
};