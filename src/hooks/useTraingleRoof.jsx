import { useState } from "react";

export const useTraingleRoof = (roofWidth,roofHeight,panelWidth,panelHeight) => {

    const [Result, setResult] = useState(0);
    const calculate = () => {

        const roofArea = (roofWidth * roofHeight) / 2;
        const panelArea = panelWidth * panelHeight;

        const totalPanel = Math.floor(roofArea / panelArea);

        //Prevención de resultado negativo
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
