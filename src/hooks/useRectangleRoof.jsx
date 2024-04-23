import { useState } from "react";

export const useRectangleRoof = (roofWidth, roofHeight, panelWidth, panelHeight) => {

    const [Result, setResult] = useState(Number);

    // Resolución del problema matematico
    const calculate = () => {

        let roofX = Number(roofWidth);
        let roofY = Number(roofHeight);
        let panelX = Number(panelWidth);
        let panelY = Number(panelHeight);

        // Incicio del calculo
        const roofArea = roofWidth * roofHeight;
        const panelArea = panelWidth * panelHeight;

        const totalPanel = Math.floor(roofArea / panelArea);

        // Se verifica si el alto y el ancho del techo es menor al del panel en caso de que la condicion se cumpla el resultado es 0
        if (roofY >= panelY && roofX >= panelX){
            if (totalPanel >= 0) {
                setResult(totalPanel);
            } else { // si el resultado es negativo devuelve 0
                setResult(0);
            }
        } else {
            setResult(0);
        }
    }

    return {
        Result,
        calculate,
    }
};
