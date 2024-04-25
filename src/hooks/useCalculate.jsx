import { useState } from "react";

export const useCalculate = () => {

    const [roofHeight, setRoofHeight] = useState(0);
    const [roofWidth, setRoofWidth] = useState(0);

    const [panelHeight, setPanelHeight] = useState(0);
    const [panelWidth, setPanelWidth] = useState(0);

    const [superpotitionHeight, setSuperpotitionHeight] = useState(0)
    const [superpotitionWidth, setSuperpotitionWidth] = useState(0)

    //Datos del panel
    const defineRPanelHeight = (value) => {
        setPanelHeight(value)
    }

    const definePanelWidth = (value) => {
        setPanelWidth(value)
    }

    // Datos de la superficie
    const defineRoofX = (value) => {
        setRoofHeight(value)
    }

    const defineRoofY = (value) => {
        setRoofWidth(value)
    }

    //Dato de la superposición
    const defineSuperpotitionX= (value) => {
        setSuperpotitionHeight(value)
    }

    const defineSuperpotitionY = (value) => {
        setSuperpotitionWidth(value)
    };


    return {
        definePanelWidth,
        defineRPanelHeight,
        defineRoofY,
        defineRoofX,
        defineSuperpotitionY,
        defineSuperpotitionX,


        roofHeight,
        roofWidth,
        panelWidth,
        panelHeight,
        superpotitionWidth,
        superpotitionHeight,
    }
};
