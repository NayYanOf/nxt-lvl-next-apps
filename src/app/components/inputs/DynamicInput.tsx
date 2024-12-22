import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'number' | 'email' | 'password' | 'checkbox' | 'radio' | 'date' | 'time' | 'datetime' | 'url' | 'tel';
    rows?: number;
    inputSize?: 'sm' | 'md' | 'lg';
}

export default function DynamicInput(props: InputProps) {
    const { label, placeholder, type = 'text', multiple, rows, inputSize, ...rest } = props;
    let input = null;

    let inputSizing
    switch(inputSize) {
        case 'sm':
            inputSizing = 'py-1';
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

    let baseStyles = `rounded-sm placeholder:text-zinc-400 placeholder:text-sm border-solid border-b-2 border-zinc-700 focus:border-blue-500 transition-all duration-300 bg-zinc-800 ${inputSizing}`;
    switch(type) {
        case 'text':
            input = <input type='text' placeholder={placeholder} className={baseStyles} {...rest} />;
            break;
        case 'number':
            input = <input type='number' placeholder={placeholder} {...rest} className={baseStyles} />;
            break;
        case 'email':
            input = <input type='email' placeholder={placeholder} {...rest} className={baseStyles} />;
            break;
        case 'password':
            input = <input type='password' placeholder={placeholder} {...rest} className={baseStyles} />;
            break;
        case 'checkbox':
            input = <input type='checkbox' {...rest} className={baseStyles} />;
            break;
        case 'radio':
            input = <input type='radio' {...rest} className={baseStyles} />;
            break;
        case 'date':
            input = <input type='date' {...rest} className={baseStyles} />;
            break;
        case 'time':
            input = <input type='time' {...rest} className={baseStyles} />;
            break;
        case 'datetime':
            input = <input type='datetime-local' {...rest} className={baseStyles} />;
            break;
        case 'url':
            input = <input type='url' placeholder={placeholder} {...rest} className={baseStyles} />;
            break;
        case 'tel':
            input = <input type='tel' placeholder={placeholder} {...rest} className={baseStyles}/>;
        default:
            input = <input type='text' placeholder={placeholder} {...rest} className={baseStyles} />;
            break;
    }

    return (
        <div className="flex flex-col gap-1">
            {label && <label className="font-medium text-white" >{label}</label>}
            {input}
        </div>
    )
}