import { Mask } from '../types/types'

const masks: { [key: string]: Mask } = {
    phone: {
        mask: '(99) 9.9999-9999',
        replacement: { _: /\d/ }
    },
    cpf: {
        mask: '999.999.999-99',
        replacement: { _: /\d/ }
    },
    cnpj: {
        mask: '99.999.999/9999-99',
        replacement: { _: /\d/ }
    },
    cep: {
        mask: '99999-999',
        replacement: { _: /\d/ }
    }
}

export default function getMask(name: string): Mask {
    return masks[name];
}