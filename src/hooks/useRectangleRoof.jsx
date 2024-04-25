import { useState } from "react";

export const useRectangleRoof = (roofWidth, roofHeight, panelWidth, panelHeight) => {

    const [Result, setResult] = useState(Number);

    // Resolución del problema matematico
    const calculate = () => {

        let roofX = Number(roofWidth);
        let roofY = Number(roofHeight);
        let panelX = Number(panelWidth);
        let panelY = Number(panelHeight);
        let totalPanel = 0;

        // Incicio del calculo
        const panelArea = panelWidth * panelHeight;

        let panelL;
        let countL = 0;

        let panelT;
        let countT = 0;

        for (panelL = 0; panelL < roofWidth;) {
            panelL += panelX
            countL++
        }

        if (panelL > roofX) {
            panelL--;
            countL--;
        }

        for (panelT = 0; panelT < roofHeight;) {
            panelT += panelY
            countT++
        }

        if (panelT > roofY) {
            panelT--;
            countT--;
        }

        //Calculo del resto
        totalPanel = Math.floor(countL * countT);

        let restWidth = roofWidth - (countL * panelWidth)
        let restHeight = roofHeight - (countT * panelHeight)

        // verificacion de espacio restante de forma horizontal y vertica
        if ((restWidth >= panelX && roofY >= panelY) || (roofX >= panelX && restHeight >= panelY)
            || (restWidth >= panelY && roofY >= panelX) || (roofX >= panelY && restHeight >= panelX)) {
            if (restWidth > restHeight) {
                const roofAreaR = restWidth * roofHeight;
                const totalPanelR = Math.floor(roofAreaR / panelArea);
                totalPanel += totalPanelR;
            } else if (restWidth < restHeight) {
                const roofAreaR = roofWidth * restHeight;
                const totalPanelR = Math.floor(roofAreaR / panelArea);
                totalPanel += totalPanelR;
            }
        }

        // Se verifica si el alto y el ancho del techo es menor al del panel en caso de que la condicion se cumpla el resultado es 0
        if (roofY >= panelY && roofX >= panelX) {
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
