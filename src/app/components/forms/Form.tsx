import { ReactElement, Children, createElement } from "react";
import { useForm } from "react-hook-form";

interface Form {
    defaultValues?: { [key: string]: unknown },
    children?: ReactElement,
    onSubmit?: () => void
}

export default function Form(props: Form) {
    const { defaultValues, children, onSubmit } = props
    const methods = useForm({ defaultValues })
    const { handleSubmit } = methods

    return (
        <form onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}>
            {
                Children.map(children, (child) => {
                    return child?.props.name
                    ? createElement(child.type, {
                        ...{
                            ...child.props,
                            register: methods.register,
                            key: child.props.name
                        }
                    })
                    : child
                })
            }            
        </form>
    )
}