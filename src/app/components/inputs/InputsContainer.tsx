import DynamicInput from "./DynamicInput"
import { InputProps } from "../../types/types";
import { useFormContext, FieldValues, UseFormRegister } from "react-hook-form";
import { useHookFormMask } from 'use-mask-input';
import getMask from "../../utils/inputMasks";

interface InputsContainerProps<T extends FieldValues> extends InputProps<T> {
    mask?: string
}

export default function InputsContainerContainer<T extends FieldValues>(props: InputsContainerProps<T>) {
    const { id, mask, ...rest } = props

    const formContext = useFormContext();
    const emptyRegister = (() => ({ onChange: async () => { }, onBlur: async () => { }, ref: () => { }, name: '' })) as unknown as UseFormRegister<FieldValues>
    const register = formContext ? formContext.register : emptyRegister;
    const registerWithMask = useHookFormMask(register);
    const finalRegister = mask && registerWithMask
        ? registerWithMask(id, getMask(mask).mask, { required: false })
        : register(id);

    return (
        <DynamicInput
            {...rest}
            register={finalRegister}
        />
    )
}