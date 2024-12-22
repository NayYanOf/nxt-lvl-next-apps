"use client"

import ButtonsContainer from "../components/buttons/ButtonsContainer";

export default function Buttons() {
    return (
        <>
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

                <ButtonsContainer
                    name='Voltar à Home'
                    link='/'
                    className='my-8'
                    icon={{
                        name: 'chevronLeft',
                        direction: 'start'
                    }}
                />
            </div>
        </>
    )
}