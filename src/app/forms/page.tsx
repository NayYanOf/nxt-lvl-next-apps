"use client"

import { useState } from "react";
import ButtonsContainer from "../components/buttons/ButtonsContainer";
import Form from "../components/forms/Form";
import DynamicInput from "../components/inputs/DynamicInput";
import InputsContainer from "../components/inputs/InputsContainer";
import { Row, Col } from '../components/flex/flexMounters';

export default function Forms() {
    const [submitResult, setSubmitResult] = useState(null)
    interface FirstForm {
        firstName: string,
        lastName: string,
    }

    const onSubmit = (data: unknown): void => {
        const formData = data as FirstForm;
        setSubmitResult(formData)
    };

    const buttonsStyle = 'mt-8 min-w-52 justify-self-center'

    return (
        <>
            <h2>Formulário</h2>
            <div className="flex flex-col gap-4">
                <Form onSubmit={onSubmit}>
                    <div className="flex gap-4 p-6 border-solid border-zinc-500 border-[1px] rounded-md">
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
                    
                    {
                        submitResult &&
                        <div className="flex flex-col gap-2 mt-4" >
                            <span className="text-center font-semibold">Resultado</span>
                            <div className="flex gap-4 justify-center" >
                                {
                                    Object.entries(submitResult).map(([key, value]) => (
                                        <div key={key}>{`${key}: ${value}`}</div>
                                    ))
                                }
                            </div>
                        </div>
                    }

                    <ButtonsContainer
                        name='Enviar'
                        className={`${buttonsStyle}`}
                        variant="submit"
                    />
                </Form>

                <ButtonsContainer
                    name='Voltar à Home'
                    link='/'
                    className={`${buttonsStyle}`}
                    icon={{
                        name: 'chevronLeft',
                        direction: 'start'
                    }}
                />
            </div>
        </>
    )
}