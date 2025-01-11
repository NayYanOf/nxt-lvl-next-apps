import { InputHTMLAttributes, ChangeEvent, ReactElement } from "react";
import { UseFormRegister, FieldValues } from 'react-hook-form';

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

export interface InputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
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
    cleanString?: boolean
    register?: UseFormRegister<T>;
type FieldTypes = 'text' | 'password' | 'checkbox' | 'radio' | 'date' | 'time' | 'datetime' | 'number';

export interface Map {
    arr: Record<string, unknown>[],
    element: ReactElement,
    childrenField?: string,
    arrResult?: boolean
}

export type Sizes = 'sm' | 'md' | 'lg'

export interface Modal {
    id: string,
    active: boolean
}