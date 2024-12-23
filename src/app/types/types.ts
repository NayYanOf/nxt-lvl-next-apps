interface Mask {
    mask: string;
    replacement?: { [key: string]: RegExp };
}

interface Description {
    text: string;
    className?: string;
}