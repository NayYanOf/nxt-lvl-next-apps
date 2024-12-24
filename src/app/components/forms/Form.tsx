import { ReactElement, Children, createElement } from "react";
import { useForm, FormProvider } from "react-hook-form";

interface Form {
    defaultValues?: { [key: string]: unknown },
    children?: ReactElement[],
    onSubmit?: (data: unknown) => void
}

export default function Form(props: Form) {
    const { defaultValues, children, onSubmit } = props
    const methods = useForm({ defaultValues })
    const { handleSubmit } = methods

    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}>
                {/* {
                    Children.map(children, (child) => {
                        return child?.props.id
                            ? createElement(child.type, {
                                ...{
                                    ...child.props,
                                    register: methods.register,
                                    key: child.props.id
                                }
                            })
                            : child
                    })
                } */}
                {children}
            </form>
        </FormProvider>
    )
}