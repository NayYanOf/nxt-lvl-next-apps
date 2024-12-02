import DefaultButton from "./DefaultButton"
import { ReactElement, ReactNode } from "react"

interface ContainerProps {
    name: string,
    icon?: ReactNode,
    variant?: 'default' | 'primary' | 'submit' | 'navigation' | 'cancel'
}

export default function ButtonsContainer ({name, icon, variant}: ContainerProps) {
    switch(variant) {
        case 'primary':
            return <DefaultButton icon={icon}>{name}</DefaultButton>
            break
        default:
            return <DefaultButton icon={icon}>{name}</DefaultButton>
    }
}