import { useState } from "react";

export const useRectangleRoof = (roofWidth, roofHeight, panelWidth, panelHeight) => {

    const [Result, setResult] = useState(0);

    // Resolución del problema matematico
    const calculate = () => {

        const roofArea = roofWidth * roofHeight;
        const panelArea = panelWidth * panelHeight;

        //Muestra el total de paneles redondeado al numero menor
        const totalPanel = Math.floor(roofArea / panelArea);

        //Prevención de resultado negativo remplazandolo con 0
        if(totalPanel >= 0) {
            setResult(totalPanel);
        } else {
            setResult(0)
        }
    }

    return {
        Result,
        calculate,
    }
};
