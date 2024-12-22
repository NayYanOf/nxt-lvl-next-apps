"use client"

import React from "react";
import ButtonsContainer from "./components/buttons/ButtonsContainer";

export default function Home() {
    return (
        <div className="flex gap-4">
            <ButtonsContainer name="Ver Botões" link="/buttons" />
            <ButtonsContainer name="Ver Inputs" link="/inputs" className="bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700" />
        </div>
    )
}