const masks: { [key: string]: Mask } = {
    phone: {
        mask: '+0 (___) ___-__-__',
        replacement: { _: /\d/ },
    }
}

export default function getMask(name: string): Mask {
    return masks[name];
}