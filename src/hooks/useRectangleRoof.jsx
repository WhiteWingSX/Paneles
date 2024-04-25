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
        const totalWidth = Math.floor(roofX / panelX);
        const totalHeight = Math.floor(roofY / panelY);

        // Calculo resto
        const restWidth = roofX % panelX;
        const restHeight = roofY % panelY;

        // Posicion horizontal / vertical
        let totalPanelHorizontalHor = totalWidth * totalHeight;
        let totalPanelHorizontalVer = 0;

        let totalPanelVerticalHor = 0;
        let totalPanelVerticalVer = totalWidth * totalHeight;

        const countRestWidth = Math.floor(restHeight / panelX) * Math.floor(roofX / panelY);
        const countRestHeight = Math.floor(restWidth / panelY) * Math.floor(roofY / panelX);

        console.log(countRestHeight, countRestWidth)

        if(restHeight >= panelX || restWidth >= panelY) {
            totalPanelHorizontalHor += countRestWidth;
            totalPanelHorizontalVer += countRestHeight;
            totalPanelVerticalHor += countRestWidth;
            totalPanelVerticalVer += countRestHeight;
        }

        if(totalPanelHorizontalHor + totalPanelHorizontalVer >= totalPanelVerticalHor + totalPanelVerticalVer && totalPanelHorizontalHor > 0 && totalPanelHorizontalVer > 0) {
            setResult(totalPanelHorizontalHor + totalPanelHorizontalVer);

        } else {
            setResult(totalPanelVerticalVer + totalPanelVerticalHor);
        }
    }

    return {
        Result,
        calculate,
    }
};
