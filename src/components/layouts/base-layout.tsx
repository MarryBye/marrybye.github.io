import React, {type PropsWithChildren} from "react";
import { NavPanel } from "@/components";
import { TooltipProvider } from "@/components/ui/tooltip";

export const BaseLayout = (
    {children}: PropsWithChildren<{}>
) => {
    return (
        <div className={"space-y-6 flex flex-col items-center justify-center p-4"}>
            <TooltipProvider>
                <header>
                    <NavPanel />
                </header>
                <main>
                    {children}
                </main>
            </TooltipProvider>
        </div>
    )
}