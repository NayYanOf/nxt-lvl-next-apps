"use client"

import ButtonsContainer from "../components/buttons/ButtonsContainer";
import DynamicInput from "../components/inputs/DynamicInput";

export default function InputsPage() {
    return (
        <>
            <h2>Inputs</h2>

            <div>
                <DynamicInput
                    placeholder='Campo de Texto'
                    onChange={(e) => console.log(e.target.value)}
                    inputSize="md"
                />
            </div>

            <ButtonsContainer
                name='Voltar à Home'
                link='/'
                className='my-8'
                icon={{
                    name: 'chevronLeft',
                    direction: 'start'
                }}
            />
        </>
    )
}