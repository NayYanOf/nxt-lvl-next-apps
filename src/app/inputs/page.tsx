"use client"

import ButtonsContainer from "../components/buttons/ButtonsContainer";
import DynamicInput from "../components/inputs/DynamicInput";
import DynamicSelect from "../components/inputs/DynamicSelect";
import DynamicTextarea from "../components/inputs/DynamicTextarea";

export default function InputsPage() {
    return (
        <>
            <h2>Inputs</h2>

            <div className="flex flex-col gap-4 max-h-80 overflow-y-auto px-4">
            <div className="max-w-56">
                    <DynamicSelect
                        id="hobbies"
                        label="Hobbies"
                        placeholder="Selecione seus Hobbies"
                        options={[
                            { label: 'Filmes', value: 'movies' },
                            { label: 'Series', value: 'series' },
                            { label: 'Jogos', value: 'games' },
                            { label: 'Livros', value: 'books' },
                        ]}
                        multiple
                    />
                </div>

                <DynamicInput
                    id="text-field"
                    placeholder='Campo de Texto'
                />

                <DynamicInput
                    id="phone-field"
                    placeholder='Campo de Telefone'
                    mask='phone'
                    cleanString
                />

                <DynamicInput
                    id="cpf-field"
                    placeholder='Campo de CPF'
                    mask='cpf'
                    cleanString
                />

                <DynamicInput
                    id="cnpj-field"
                    placeholder='Campo de CNPJ'
                    mask='cnpj'
                    cleanString
                />

                <DynamicInput
                    id="cep-field"
                    placeholder='Campo de CEP'
                    mask='cep'
                    cleanString
                />

                <DynamicInput
                    id="number-field"
                    type="number"
                    placeholder="Campo de Número"
                    min={1}
                    max={10}
                    description={{
                        text: 'Entre 1 e 10'
                    }}
                />

                <DynamicInput
                    id="pass-field"
                    type="password"
                    placeholder="Campo de Senha"
                    description={{
                        text: 'Mínimo de 8 caracteres'
                    }}
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

                <DynamicSelect
                    id="gender"
                    label="Gênero"
                    placeholder="Selecione seu Gênero"
                    options={[
                        { label: 'Masculino', value: 'male' },
                        { label: 'Feminino', value: 'female' },
                        { label: 'Outro', value: 'other' }
                    ]}
                    onChange={e => console.log(e.target.value)}
                />
                  
                <DynamicTextarea
                    id="biography"
                    label="Biografia"
                    placeholder="Escreva sua biografia"
                />

                <DynamicTextarea
                    id="description"
                    label="Descrição"
                    placeholder="Escreva a descrição"
                    formatted
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