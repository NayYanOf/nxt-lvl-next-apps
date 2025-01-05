import { TextareaHTMLAttributes } from "react";

interface DynamicTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string,
    label?: string,
    inputSize?: 'sm' | 'md' | 'lg',
    formatted?: boolean
}

export default function DynamicTextarea(props: DynamicTextareaProps) {
    const { id, label, inputSize, formatted, ...rest } = props

    const fieldGrpStyles = 'flex flex-col gap-1'

    let inputSizing
    switch (inputSize) {
        case 'sm':
            inputSizing = 'p-1 text-sm';
            break;
        case 'md':
            inputSizing = 'px-2 py-1';
            break;
        case 'lg':
            inputSizing = 'px-3 py-2';
            break;
        default:
            inputSizing = 'px-2 py-1';
            break;
    }

    const baseStyles = `rounded-sm placeholder:text-zinc-400 placeholder:text-sm border-solid border-b-2 border-zinc-700 focus:border-blue-500 transition-all duration-300 bg-zinc-800 ${inputSizing}`;

    return (
        <div className={`${fieldGrpStyles}`} >
            {label && <label htmlFor={id} >{label}</label>}
            {
                formatted ? (
                    null
                ) : (
                    <textarea
                        id={id}
                        {...rest}
                        className={`${baseStyles} ${inputSizing}`}
                    />
                )
            }
        </div>
    )
}