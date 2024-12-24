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