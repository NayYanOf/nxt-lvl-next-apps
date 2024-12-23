"use client"

import ButtonsContainer from "../components/buttons/ButtonsContainer";
import DynamicInput from "../components/inputs/DynamicInput";

export default function InputsPage() {
    return (
        <>
            <h2>Inputs</h2>

            <div className="flex flex-col gap-4 max-h-80 overflow-y-auto px-4">
                <DynamicInput
                    id="text-field"
                    placeholder='Campo de Texto'
                />

                <DynamicInput
                    id="phone-field"
                    placeholder='Campo de Telefone'
                    mask='phone'
                    onChange={(e) => console.log(e.target.value)}
                    cleanString
                />

                <DynamicInput
                    id="cpf-field"
                    placeholder='Campo de CPF'
                    mask='cpf'
                    onChange={(e) => console.log(e.target.value)}
                    cleanString
                />

                <DynamicInput
                    id="cnpj-field"
                    placeholder='Campo de CNPJ'
                    mask='cnpj'
                    onChange={(e) => console.log(e.target.value)}
                    cleanString
                />

                <DynamicInput
                    id="cep-field"
                    placeholder='Campo de CEP'
                    mask='cep'
                    onChange={(e) => console.log(e.target.value)}
                    cleanString
                />

                <DynamicInput
                    id="number-field"
                    type="number"
                    placeholder="Campo de Número"
                    min={1}
                    max={10}
                />

                <DynamicInput
                    id="pass-field"
                    type="password"
                    placeholder="Campo de Senha"
                />

                <DynamicInput
                    id="checkbox-field"
                    type="checkbox"
                    label="Campo Checkbox"
                />

                <DynamicInput
                    id="radio-field"
                    type="radio"
                    label="Campo Radio"
                    radioOptions={[
                        { label: 'Opção 1', value: 1, id: 'op1', defaultChecked: true },
                        { label: 'Opção 2', value: 2, id: 'op2' },
                        { label: 'Opção 3', value: 3, id: 'op3' },
                    ]}
                />

                <DynamicInput
                    id="date-field"
                    type="date"
                    label="Campo de Data"
                />

                <DynamicInput
                    id="time-field"
                    type="time"
                    label="Campo de Tempo"
                />

                <DynamicInput
                    id="datetime-field"
                    type="datetime"
                    label="Campo de Data e Tempo"
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