import { ButtonHTMLAttributes, ReactNode, cloneElement, ReactElement, isValidElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    icon?: {
        render: ReactNode,
        color?: string;
        size?: number;
        direction?: 'start' | 'end';
    };
    variant?: 'default' | 'transparent' | 'submit' | 'cancel' | 'off'
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function DynamicButton(props: ButtonProps) {
    const { children, icon, variant = 'default', size = 'md', className, ...rest } = props;

    let buttonStyle
    let iconStyle
    switch (variant) {
        case 'default':
            buttonStyle = 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700';
            iconStyle = 'text-white';
            break;
        case 'transparent':
            buttonStyle = 'bg-transparent border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white';
            iconStyle = 'text-blue-600';
            break;
        case 'submit':
            buttonStyle = 'bg-green-600 border-green-600 text-white hover:bg-green-700 hover:border-green-700';
            iconStyle = 'text-white';
            break;
        case 'cancel':
            buttonStyle = 'bg-red-600 border-red-600 text-white hover:bg-red-700 hover:border-red-700';
            iconStyle = 'text-white';
            break;
        case 'off':
            buttonStyle = 'bg-gray-400 border-gray-400 text-white cursor-default';
            iconStyle = 'text-white';
            break;
        default:
            buttonStyle = 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700';
            iconStyle = 'text-white';
            break;
    }

    let buttonSizing
    switch (size) {
        case 'sm':
            buttonSizing = 'px-2 py-1 text-sm';
            break;
        case 'md':
            buttonSizing = 'p-2 text-md';
            break;
        case 'lg':
            buttonSizing = 'p-3 text-lg';
            break;
        default:
            buttonSizing = 'p-2 text-md';
            break;
    }

    const IconComponent = icon?.render && isValidElement(icon.render)
        ? cloneElement(icon.render as ReactElement, { color: icon.color || iconStyle, size: icon.size })
        : null;
    const IconDirection = icon?.direction || 'right';

    return (
        <button {...rest} className={`rounded-sm flex justify-center items-center gap-2 border-2 border-solid font-medium transition-colors duration-300 ${buttonStyle} ${buttonSizing} ${className}`}>
            {IconDirection === 'start' && IconComponent}
            <span>{children}</span>
            {IconDirection === 'end' && IconComponent}
        </button>
    )
}