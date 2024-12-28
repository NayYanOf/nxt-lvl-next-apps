import { SelectHTMLAttributes, useState, useEffect } from "react";
import { cMap } from '../../utils/handleData'
import { Sizes } from '../../types/types'
import { getIconByName } from "../../theme/icons/IconsFamily";
import { Modal } from '../../types/types'

interface DynamicSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    id: string,
    label?: string,
    placeholder?: string,
    inputSize?: Sizes,
    options?: Array<{
        label: string,
        value: string | number | boolean
    }>,
    multiple?: boolean
}

export default function DynamicSelect(props: DynamicSelectProps) {
    const { id, label, placeholder, inputSize, options, multiple, ...rest } = props

    const [selecteds, setSelecteds] = useState<{ label: string, value: string | number | boolean }[]>([])
    const [modal, setModal] = useState<Modal>({ id: '', active: false })

    useEffect(() => {
        console.log(selecteds)
    }, [selecteds])

    let inputSizing
    switch (inputSize) {
        case 'sm':
            inputSizing = 'p-1 text-sm';
            break;
        case 'md':
            inputSizing = 'p-2';
            break;
        case 'lg':
            inputSizing = 'p-3';
            break;
        default:
            inputSizing = 'p-2';
            break;
    }

    const fieldGrpStyles = 'flex flex-col gap-1'
    const baseStyles = `rounded-sm placeholder:text-zinc-400 placeholder:text-sm border-solid border-b-2 border-zinc-700 focus:border-blue-500 transition-all duration-300 bg-zinc-800 ${inputSizing}`;

    return (
        <div className={`${fieldGrpStyles}`} >
            {label && <label htmlFor={id}>{label}</label>}
            {
                !multiple &&
                <select id={id} className={`${baseStyles}`} {...rest} >
                    {placeholder && <option value='null'>{placeholder}</option>}
                    {
                        options ? cMap({
                            arr: options,
                            element: <option></option>,
                            childrenField: 'label',
                            arrResult: false
                        }) : null
                    }
                </select>
            }
            {
                multiple &&
                <div className={`${fieldGrpStyles} relative`}>
                    <div className={`${baseStyles} min-h-[30px] max-w-full flex flex-wrap gap-2 items-center cursor-pointer`} onClick={() => setModal({ id: 'select-dropdown', active: !modal.active })}>
                        {
                            selecteds?.length > 0 ? (
                                selecteds.map((i, index) => (
                                    <div key={index} className="flex gap-2 items-center px-2 py-1 bg-blue-900">
                                        <span className="text-white font-normal">{i.label}</span>
                                        <div className="rounded-full p-[2px] bg-red-500 hover:bg-red-600 transition-colors duration-300 cursor-pointer" data-value={i.value} onClick={e => {
                                            const value = e.currentTarget.getAttribute('data-value')
                                            setSelecteds(prev => prev.filter(i => i.value !== value))
                                        }} >
                                            {getIconByName('x', 'white', 16)}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <span>{placeholder}</span>
                            )
                        }
                        {getIconByName('chevronDown')}
                    </div>
                    {
                        modal.id === 'select-dropdown' && modal.active &&
                        <ul className="flex flex-col gap-2 p-2 bg-zinc-800 rounded-sm absolute top-12 left-0 w-full" >
                            {
                                options ? cMap({
                                    arr: options,
                                    element: <li
                                        className="text-white font-normal border-solid border-b-[1px] border-zinc-400 last:border-none cursor-pointer hover:text-blue-500 transition-colors duration-300"
                                        onClick={e => {
                                            const value = e.currentTarget.getAttribute('value') || ''
                                            const label = e.currentTarget.getAttribute('label') || ''
                                            setSelecteds(prev => ([
                                                ...prev,
                                                { label: label, value: value }
                                            ]))
                                        }}
                                    ></li>,
                                    childrenField: 'label',
                                    arrResult: false
                                }) : null
                            }
                        </ul>
                    }
                </div>
            }
        </div>
    )
}