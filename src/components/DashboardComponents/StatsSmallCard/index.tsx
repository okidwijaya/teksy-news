import React from 'react'
import { cn } from "@/lib/componentUtils";
import { LucideIcon } from "lucide-react";

interface StatsTabProps {
    heading: string;
    onClick?: () => void;
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
    className?: string;
    content: React.ReactNode;
}

interface StatsTabHeadingProps {
    heading: string;
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
}

function StatsTabHeading({ iconPosition, heading, icon }: StatsTabHeadingProps) {
    return (
        <h3 className='text-sm font-light'>
            {
                iconPosition === "left" ? (
                    <span className="flex items-center gap-2">
                        {icon && React.createElement(icon, { className: "w-3 h-3" })}
                        <span>{heading}</span>
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <span>{heading}</span>
                        {icon && React.createElement(icon, { className: "w-3 h-3" })}
                    </span>
                )
            }
        </h3>
    )
}

export default function index({ heading, onClick, icon, iconPosition, className, content }: StatsTabProps) {
    return (
        <div onClick={onClick} className={cn(
            "min-w-[182px] border-r-1 border-r-[#F1F1F1] last:border-r-0 hover:border-noone hover:rounded-md px-4 py-2 flex flex-col items-start justify-between gap-0 bg-white text-[#212121] hover:bg-hover-white transition",
            className
        )}>
            <div className='statsTabHeading'>
                <StatsTabHeading heading={heading} iconPosition={iconPosition} icon={icon} />
            </div>
            <div>
                { React.Children.map(content, (child) => (
                    <div className="statsTabContent">
                        {child}
                    </div>
                )) }
            </div>
        </div>
    )
}
