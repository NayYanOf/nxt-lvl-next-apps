import { cloneElement, ReactNode } from "react"
import { Map } from '../types/types'

export const cMap = (props: Map) => {
    const { arr, element, childrenField, arrResult } = props

    const mapping = arr.map((i, index) => {
        if(arrResult) {
            return cloneElement(element, {
                key: index + 1,
                value: i.value
            });
        }

        let result
        if(childrenField) {
            const childContent = i[childrenField] as ReactNode
            result = cloneElement(element, { key: index + 1, ...i }, childContent)
        } else {
            result = cloneElement(element, { key: index + 1, ...i })
        }
        
        return result
    })

    return mapping
}