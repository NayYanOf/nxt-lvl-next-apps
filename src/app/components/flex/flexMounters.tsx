import { DetailedHTMLProps, ReactNode, Children, isValidElement } from "react"

interface Row extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode,
    className?: string
}

interface Col extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode,
    className?: string
}

export function Row(props: Row) {
    const { children, className, ...rest } = props

    const hasNestedRow = Children.toArray(children).some(
        (child) => isValidElement(child) && child.type === Row
    )

    return (
        <div className={`flex ${hasNestedRow ? 'flex-col' : 'flex-row'} flex-wrap gap-4 items-center ${className}`} {...rest} >
            {children}
        </div>
    )
}

export function Col(props: Col) {
    const { children, className, ...rest } = props

    return (
        <div className={`flex-1 ${className}`} {...rest} >
            {children}
        </div>
    )
}