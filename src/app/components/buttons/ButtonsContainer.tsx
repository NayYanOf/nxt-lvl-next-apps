import DefaultButton from "./DefaultButton"
import { ReactElement, ReactNode } from "react"
import { getIconByName } from "../../theme/icons/IconsFamily"

interface ContainerProps {
    name: string,
    icon?: string,
    variant?: 'default' | 'primary' | 'submit' | 'navigation' | 'cancel'
}

export default function ButtonsContainer ({name, icon, variant}: ContainerProps) {
    const IconComponent = icon ? getIconByName(icon) : null;

    switch(variant) {
        case 'primary':
            return <DefaultButton icon={IconComponent}>{name}</DefaultButton>
            break
        default:
            return <DefaultButton icon={IconComponent}>{name}</DefaultButton>
    }
}