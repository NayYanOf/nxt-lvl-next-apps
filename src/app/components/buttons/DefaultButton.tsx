import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    icon?: ReactNode;
}

export default function DefaultButton ({children, icon}: ButtonProps) {
    return (
        <button className="flex gap-2 items-center py-2 px-4 bg-blue-600 rounded-sm hover:bg-blue-700 transition-colors">
            <span>{children}</span>
            {icon}
        </button>
    )
}