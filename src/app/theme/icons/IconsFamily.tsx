import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { ReactNode } from "react";

type Icons = {
    name: string,
    Icon: ReactNode,
    altText?: string,
}

export const IconsFamily: Record<string, Icons> = {
    chevronLeft: {
        name: 'chevron-left',
        Icon: <FiChevronsLeft />,
        altText: 'Ícone de seta para a esquerda',
    },
    chevronRight: {
        name: 'chevron-right',
        Icon: <FiChevronsRight />,
        altText: 'Ícone de seta para a direita',
    },
};