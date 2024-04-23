import { useState } from "react";

export const useCalculate = () => {

    const [roofHeight, setRoofHeight] = useState(Number);
    const [roofWidth, setRoofWidth] = useState(Number);

    const [panelHeight, setPanelHeight] = useState(Number);
    const [panelWidth, setPanelWidth] = useState(Number);

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
