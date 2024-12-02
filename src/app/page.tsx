import React from "react";
import ButtonsContainer from "./components/buttons/ButtonsContainer";
import { IconsFamily } from "./theme/icons/IconsFamily";

export default function Home() {
    return (
        <main>
            <ButtonsContainer name='Primeiro Botão' icon={IconsFamily.chevronRight.Icon} variant="primary" />
        </main>
    )
}