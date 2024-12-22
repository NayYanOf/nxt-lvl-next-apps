import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { ReactNode, ReactElement, cloneElement } from "react";

type Icons = {
    name: string,
    Icon: ReactElement,
    altText?: string,
}

const icons: Record<string, Icons> = {
    chevronLeft: {
        name: 'chevron-left',
        Icon: <FiChevronsLeft color="white" />,
        altText: 'Ícone de seta para a esquerda',
    },
    chevronRight: {
        name: 'chevron-right',
        Icon: <FiChevronsRight color="white" />,
        altText: 'Ícone de seta para a direita',
    },
};

export const getIconByName = (name: string, color: string = 'white', size: number = 20): ReactNode | null => {
    const icon = icons[name]?.Icon
    if(icon) {
        return cloneElement(icon, {color: color, size: size})
    }
    return null;
};

export default icons;