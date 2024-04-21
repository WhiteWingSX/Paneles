import { useState } from "react";

export const useTraingleRoof = (roofWidth,roofHeight,panelWidth,panelHeight) => {

    const [Result, setResult] = useState(0);
    const calculate = () => {

        const roofArea = (roofWidth * roofHeight) / 2;
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
        calculate
    }
};
