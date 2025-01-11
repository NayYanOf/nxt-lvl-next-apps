"use client"

import ButtonsContainer from "../components/buttons/ButtonsContainer";
import Form from "../components/forms/Form";
import DynamicInput from "../components/inputs/DynamicInput";
import DynamicSelect from "../components/inputs/DynamicSelect";
import { Row, Col } from "../components/flex/flexMounters";

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
                    <Row>
                        <Row>
                            <Col>
                                <DynamicInput
                                    id="firstName"
                                    label="Nome"
                                    placeholder="Insira seu Primeiro Nome"
                                    type="text"
                                />
                            </Col>

                            <Col>
                                <DynamicInput
                                    id="lastName"
                                    label="Sobrenome"
                                    placeholder="Insira seu Sobrenome"
                                    type="text"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <DynamicSelect
                                    id="gender"
                                    label="Gênero"
                                    placeholder="Selecione o seu Gênero"
                                />
                            </Col>
                        </Row>
                    </Row>

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