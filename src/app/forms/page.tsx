"use client"

import ButtonsContainer from "../components/buttons/ButtonsContainer";
import Form from "../components/forms/Form";
import DynamicInput from "../components/inputs/DynamicInput";

export default function Forms() {
    const onSubmit = (data) => console.log(data)

    return (
        <>
            <h2>Formulário</h2>
            <div className="flex flex-col gap-4">
                <Form onSubmit={onSubmit}>
                    <DynamicInput
                        id="firstName"
                        label="Nome"
                        placeholder="Insira seu Primeiro Nome"
                        type="text"
                    />

                    <ButtonsContainer
                        name='Enviar'
                        className='my-4'
                        variant="submit"
                    />
                </Form>

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