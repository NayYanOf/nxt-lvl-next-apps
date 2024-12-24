import { Mask } from '../types/types'

const masks: { [key: string]: Mask } = {
    phone: {
        mask: '(__) _.____-____',
        replacement: { _: /\d/ }
    },
    cpf: {
        mask: '___.___.___-__',
        replacement: { _: /\d/ }
    },
    cnpj: {
        mask: '__.___.___/____-__',
        replacement: { _: /\d/ }
    },
    cep: {
        mask: '_____-___',
        replacement: { _: /\d/ }
    }
}

export default function getMask(name: string): Mask {
    return masks[name];
}