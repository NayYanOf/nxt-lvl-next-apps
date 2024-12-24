"use client"

import React from "react";
import ButtonsContainer from "./components/buttons/ButtonsContainer";

export default function Home() {
    return (
        <div className="flex gap-4">
            <ButtonsContainer name="Ver Botões" link="/buttons" />
            <ButtonsContainer name="Ver Inputs" link="/inputs" className="bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700" />
            <ButtonsContainer name="Ver Formulário" link="/forms" className="bg-zinc-600 border-zinc-600 hover:bg-zinc-700 hover:border-zinc-700" />
        </div>
    )
}