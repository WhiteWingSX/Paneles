import { useState } from "react";

export const useSuperpotition = (roofWidth,roofHeight,panelWidth,panelHeight,superpotition) => {

    const [Result, setResult] = useState(0);
    const calculate = () => {

        console.log(superpotition, roofHeight, roofWidth)
        const roofArea = (2 - superpotition) * roofHeight * roofWidth;
        // const roofArea = (2 - 0.6) * 10 * 6;
        console.log(roofArea)
        const panelArea = panelWidth * panelHeight;

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
