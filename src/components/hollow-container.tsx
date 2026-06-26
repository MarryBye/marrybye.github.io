import { cn } from "@/lib/utils";
import React from "react";

export const HollowContainer = (
    {
        className,
        children,
        ...props
    }: React.HTMLAttributes<HTMLDivElement>
) => {
    return (
        <div className={cn("rounded-xl p-4 bg-secondary flex flex-col items-center justify-center m-1", className)} {...props}>
            {children}
        </div>
    )
}