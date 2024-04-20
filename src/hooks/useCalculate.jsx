import { useState } from "react";

export const useCalculate = () => {

    const [roofHeight, setRoofHeight] = useState('');
    const [roofWidth, setRoofWidth] = useState('');

    const [panelHeight, setPanelHeight] = useState('');
    const [panelWidth, setPanelWidth] = useState('');

    const [superpotition, setSuperpotition] = useState('')


    //Datos del panel
    const defineRPanelHeight = (value) => {
        setPanelHeight(value)
    }

    const definePanelWidth = (value) => {
        setPanelWidth(value)
    }

    //Datos del panel con area Cuadrada (EJERCICIO 1)
    const defineRoofX = (value) => {
        setRoofHeight(value)
    }

    const defineRoofY = (value) => {
        setRoofWidth(value)
    }

    const defineSuperpotition= (value) => {
        setSuperpotition(value)
    }




    return {
        definePanelWidth,
        defineRPanelHeight,
        defineRoofY,
        defineRoofX,
        defineSuperpotition,


        roofHeight,
        roofWidth,
        panelWidth,
        panelHeight,
        superpotition,
    }
};
