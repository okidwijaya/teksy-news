import React from "react";
import { cn } from "@/lib/componentUtils";
import { LucideIcon } from "lucide-react";

type ButtonProps = {
    label: string;
    onClick?: () => void;
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};

function ButtonLabel({ iconPosition, label, icon } : ButtonProps){
    return (
        <>
            {
                iconPosition === "left" ? (
                    <span className="flex items-center gap-2">
                        {icon && React.createElement(icon, { className: "w-3 h-3" })}
                        <span>{label}</span>
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <span>{label}</span>
                        {icon && React.createElement(icon, { className: "w-3 h-3" })}
                    </span>
                )
            }
        </>
    )
}

const BaseButton: React.FC<ButtonProps> = ({
    label,
    icon,
    iconPosition,
    onClick,
    className,
    type = "button",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "border border-gray-200 rounded-md inline-flex items-center gap-2 p-2 bg-white text-[#212121] hover:bg-hover-white transition disabled:opacity-50 disabled:cursor-not-allowed text-[10px] md:text-[14px]",
                className
            )}
        >   
            <ButtonLabel label={label} icon={icon} iconPosition={iconPosition} />
        </button>
    );
};

export default BaseButton;
