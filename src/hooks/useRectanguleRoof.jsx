import { useState } from "react";

export const useRectanguleRoof = (roofWidth,roofHeight,panelWidth,panelHeight) => {

    const [Result, setResult] = useState(0);

    // Resolución del problema matematico
    const calculate = () => {

        const roofArea = roofWidth * roofHeight;
        const panelArea = panelWidth * panelHeight;

        const totalPanel = Math.floor(roofArea / panelArea);

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
