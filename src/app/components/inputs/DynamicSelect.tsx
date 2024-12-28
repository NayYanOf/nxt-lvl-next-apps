import { SelectHTMLAttributes } from "react";
import { cMap } from '../../utils/handleData'
import { Sizes } from '../../types/types'

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
            <select id={id} className={`${baseStyles}`} {...rest} >
                {placeholder && <option value='null'>{placeholder}</option>}
                {
                    options ? cMap({
                        arr: options,
                        element: <option></option>,
                        childrenField: 'label',
                        arrResult: multiple
                    }) : null
                }
            </select>
        </div>
    )
}