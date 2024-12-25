"use client"

import ButtonsContainer from "../components/buttons/ButtonsContainer";
import Form from "../components/forms/Form";
import DynamicInput from "../components/inputs/DynamicInput";
import InputsContainer from "../components/inputs/InputsContainer";

export default function Forms() {
    interface FirstForm {
        firstName: string,
        lastName: string,
    }

    const onSubmit = (data: unknown): void => {
        const formData = data as FirstForm;
        console.log(formData);
    };

    return (
        <>
            <h2>Formulário</h2>
            <div className="flex flex-col gap-4">
                <Form onSubmit={onSubmit}>
                    <div>
                        <InputsContainer
                            id="firstName"
                            label="Nome"
                            placeholder="Insira seu Primeiro Nome"
                            type="text"
                            cleanString={true} // FAZER FUNCIONAR PARA OS VALORES RETORNADOS EM DATA DO ON SUBMIT
                        />

                        <InputsContainer
                            id="lastName"
                            label="Sobrenome"
                            placeholder="Insira seu Sobrenome"
                            type="text"
                        />
                    </div>

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