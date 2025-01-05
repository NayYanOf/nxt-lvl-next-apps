import JoditEditor from "jodit-react";
import { TextareaHTMLAttributes, useState, useRef, useMemo } from "react";

interface DynamicTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string,
    label?: string,
    inputSize?: 'sm' | 'md' | 'lg',
    formatted?: boolean,
    formattedConfig?: object
}

export default function DynamicTextarea(props: DynamicTextareaProps) {
    const { id, label, inputSize, formatted, formattedConfig, ...rest } = props

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

    // FORMAT TEXTAREA
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = useMemo(() => ({
        readonly: false,
        placeholder: rest.placeholder || 'Digite aqui...',
        theme: 'dark',
        className: 'formatted-textarea',
        editorClassName: 'formatted-textarea-content',
        statusbar: false,
        removeButtons: [
            'source',
            'fullsize',
            'print',
            'about',
            'outdent',
            'indent',
            'video',
            'table',
            'file',
            'copyformat',
            'selectall',
            'cut',
            'hr',
            'eraser',
            'font',
            'fontsize',
            'paragraph',
            'lineHeight',
            'speechRecognize',
            'spellcheck',
            'left',
            'brush',
            'dots'
        ],
        ...formattedConfig
    }), [rest.placeholder])

    return (
        <div className={`${fieldGrpStyles}`} >
            {label && <label htmlFor={id} >{label}</label>}
            {
                formatted ? (
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1}
                        onBlur={newContent => setContent(newContent)}
                        onChange={rest.onChange}
                    />
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