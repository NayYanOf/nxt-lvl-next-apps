import DynamicButton from "./DynamicButton"
import { ButtonHTMLAttributes } from "react"
import { getIconByName } from "../../theme/icons/IconsFamily"
import { ButtonTypes } from '../../types/types'

interface ButtonContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
    link?: string,
    icon?: {
        name: string,
        color?: string,
        size?: number,
        direction?: 'start' | 'end'
    },
    variant?: ButtonTypes,
    size?: 'sm' | 'md' | 'lg'
}

export default function ButtonsContainer(props: ButtonContainerProps) {
    const { name, link, icon, variant = 'default', size = 'md', ...rest } = props;
    const IconComponent = icon ? getIconByName(icon.name) : null;

    return <DynamicButton
        {...rest}
        link={link}
        icon={{
            render: IconComponent,
            color: icon?.color,
            size: icon?.size,
            direction: icon?.direction
        }}
        variant={variant}
        size={size}
    >
        {name}
    </DynamicButton>
}