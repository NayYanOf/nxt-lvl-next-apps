// ESTUDAR E REFATORAR
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { FieldValues } from 'react-hook-form';

interface GlobalFormProps<T extends FieldValues> {
    schema: z.ZodSchema<T>;
    onSubmit: SubmitHandler<T>;
    children: React.ReactNode;
}

const GlobalForm = <T extends FieldValues>({ schema, onSubmit, children }: GlobalFormProps<T>) => {
    const { register, handleSubmit, formState: { errors } } = useForm<T>({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { ...child.props, register, errors });
                }
                return child;
            })}
            <button type="submit">Submit</button>
        </form>
    );
};

export default GlobalForm;