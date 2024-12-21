"use client"

import React from "react";
import ButtonsContainer from "./components/buttons/ButtonsContainer";

export default function Home() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center gap-4 h-screen">
                <h2>Botões</h2>
                <div className="flex flex-col gap-4">
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
                </div>
            </div>
        </main>
    )
}