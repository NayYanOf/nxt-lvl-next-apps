import { InputHTMLAttributes, ChangeEvent, Ref } from "react";

export interface Mask {
    mask: string;
    replacement?: { [key: string]: RegExp };
}

export interface Description {
    text: string;
    className?: string;
}

export type ButtonTypes = 'default' | 'transparent' | 'submit' | 'cancel' | 'off'

export type FieldTypes = 'text' | 'password' | 'checkbox' | 'radio' | 'date' | 'time' | 'datetime' | 'number';

export interface InputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    placeholder?: string;
    type?: FieldTypes;
    rows?: number;
    inputSize?: 'sm' | 'md' | 'lg';
    radioOptions?: Array<
        {
            label: string,
            value: string | number,
            id: string,
            defaultChecked?: boolean
        }>
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    description?: Description
    defaultChecked?: boolean
}