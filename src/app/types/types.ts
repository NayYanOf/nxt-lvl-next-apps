interface Mask {
    mask: string;
    replacement?: { [key: string]: RegExp };
}

interface Description {
    text: string;
    className?: string;
}

enum ButtonTypes {
    default = 'default',
    transparent = 'transparent',
    submit = 'submit',
    cancel = 'cancel',
    off = 'off'
}


type FieldTypes = 'text' | 'password' | 'checkbox' | 'radio' | 'date' | 'time' | 'datetime' | 'number';