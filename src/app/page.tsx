"use client"

import React from "react";
import ButtonsContainer from "./components/buttons/ButtonsContainer";

export default function Home() {
    return (
        <main>
            <ButtonsContainer
                name='Botão Padrão'
            />

            <ButtonsContainer
                name='Botão Transparente'
                variant='transparent'
            />

            <ButtonsContainer
                name='Enviar'
                variant='submit'
            />

            <ButtonsContainer
                name='Cancelar'
                variant='cancel'
            />

            <ButtonsContainer
                name='Desativado'
                variant='off'
            />
        </main>
    )
}