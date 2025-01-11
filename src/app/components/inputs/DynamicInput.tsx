import { useEffect, useState, ChangeEvent } from "react";
import { getIconByName } from "../../theme/icons/IconsFamily";
import { InputProps } from "../../types/types";
import { cleanSpecialCharacters } from "../../utils/formatString";
import { FieldValues } from "react-hook-form";

export default function DynamicInput<T extends FieldValues>(props: InputProps<T>) {
    const { id, label, placeholder, type = 'text', multiple, rows, inputSize, radioOptions, onChange, description, defaultChecked, cleanString, register, ...rest } = props;
    let input = null;

    // PASSWORD
    const [showPassword, setShowPassword] = useState(false);

    // CHECKBOX
    const [checked, setChecked] = useState(defaultChecked || false);
    const checkHandler = () => {
        setChecked(!checked)
    }
    useEffect(() => {
        if(onChange && type === 'checkbox') {
            const event = {
                target: {
                    type: 'checkbox',
                    checked: checked,
                },
            } as ChangeEvent<HTMLInputElement>;
            onChange(event);
        }
    }, [checked, onChange, type])

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
    let fieldGrpStyles = 'flex flex-col gap-1'
    switch (type) {
        case 'text':
            input = <input id={id} {...register} type='text' placeholder={placeholder} className={baseStyles} {...rest} onChange={e => {
                if (cleanString) {
                    const cleanedValue = cleanSpecialCharacters(e.target.value);
                    if (onChange) {
                        onChange({ ...e, target: { ...e.target, value: cleanedValue } });
                    }
                } else {
                    if(onChange) {
                        onChange(e)
                    }
                }
            }} />;
            break;
        case 'number':
            input = <input id={id} {...register} type='number' placeholder={placeholder} {...rest} className={baseStyles} onChange={onChange} />;
            break;
        case 'password':
            input = <div className="flex relative">
                <input id={id} {...register} type={showPassword ? 'text' : 'password'} placeholder={placeholder} {...rest} className={baseStyles} onChange={onChange} />
                <div className="absolute right-2 top-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {
                        getIconByName(showPassword ? 'eyeOff' : 'eye', 'white', 16)
                    }
                </div>
            </div>
            break;
        case 'checkbox':
            input = <div className="flex gap-2">
                <input id={id} {...register} type='checkbox' {...rest} className='hidden peer' onChange={checkHandler} checked={checked} />
                <label
                    className="
                        flex
                        items-center
                        font-medium
                        text-white
                        before:content-['']
                        before:block
                        before:transition-colors
                        before:duration-200
                        before:w-3
                        before:h-3
                        before:bg-transparent
                        before:mr-2
                        before:rounded-sm
                        before:outline
                        before:outline-2
                        before:outline-white
                        peer-checked:before:bg-blue-500
                        peer-checked:before:border-solid
                        peer-checked:before:border-2
                        peer-checked:before:border-[var(--bg-pr)]
                        peer-checked:before:outline
                        peer-checked:before:outline-2
                        peer-checked:before:outline-white
                    "
                    htmlFor={id}
                >
                    {label}
                </label>
            </div>;
            fieldGrpStyles = 'flex flex-row-reverse justify-end gap-2'
            break;
        case 'radio':
            input = input = <div className="flex flex-col gap-2">{
                radioOptions?.map((i, index) => (
                    <div className="flex gap-2" key={index}>
                        <input type="radio" id={i.id} {...register} name={id} value={i.value} defaultChecked={i.defaultChecked} className="hidden peer" onChange={onChange} />
                        <label htmlFor={i.id} className="
                            flex
                            items-center
                            before:content-['']
                            before:block
                            before:transition-colors
                            before:duration-200
                            before:w-3
                            before:h-3
                            before:bg-transparent
                            before:mr-2
                            before:rounded-full
                            before:outline
                            before:outline-2
                            before:outline-white
                            peer-checked:before:bg-blue-500
                            peer-checked:before:border-solid
                            peer-checked:before:border-2
                            peer-checked:before:border-[var(--bg-pr)]
                            peer-checked:before:outline
                            peer-checked:before:outline-2
                            peer-checked:before:outline-white
                        ">{i.label}</label>
                    </div>
                ))
            }</div>
            fieldGrpStyles = 'gap-2'
            break;
        case 'date':
            input = <input id={id} {...register} type='date' {...rest} className={`${baseStyles} bw-input-icon-color`} onChange={onChange} />;
            break;
        case 'time':
            input = <input id={id} {...register} type='time' {...rest} className={`${baseStyles} bw-input-icon-color`} onChange={onChange} />;
            break;
        case 'datetime':
            input = <input id={id} {...register} type='datetime-local' {...rest} className={`${baseStyles} bw-input-icon-color`} onChange={onChange} />;
            break;
        default:
            input = <input id={id} {...register} type='text' placeholder={placeholder} {...rest} className={baseStyles} onChange={onChange} />;
            break;
    }

    return (
        <div className={fieldGrpStyles}>
            {label && type !== 'checkbox' && <label className="font-medium text-white" htmlFor={id} >{label}</label>}
            {input}
            {description && <span className={`text-sm text-zinc-400 ${description.className}`}>{description.text}</span>}
        </div>
    )
}