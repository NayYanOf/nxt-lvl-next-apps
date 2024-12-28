import { ReactElement } from "react";

interface Mask {
    mask: string;
    replacement?: { [key: string]: RegExp };
}

interface Description {
    text: string;
    className?: string;
}

type ButtonTypes = 'default' | 'transparent' | 'submit' | 'cancel' | 'off'

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