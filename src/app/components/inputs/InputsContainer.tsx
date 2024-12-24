import DynamicInput from "./DynamicInput"
import { InputProps } from "../../types/types";
import getMask from "../../utils/inputMasks";
import { useMask, InputMask } from "@react-input/mask";
import { cleanSpecialCharacters } from "../../utils/formatString";

interface InputContainerProps<T> extends InputProps<T> {
    mask?: string
    cleanString?: boolean
}

export default function InputsContainerContainer<T>(props: InputContainerProps<T>) {
    const { mask, cleanString } = props
    let currentMask
    if(mask) {
        currentMask = getMask(mask)
    }

    return (
        <InputMask
            {...props}
            component={DynamicInput}
            mask={currentMask?.mask}
            replacement={currentMask?.replacement}
        />
    )
}