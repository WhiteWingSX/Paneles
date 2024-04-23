import '../../style.css'
import { useCalculate, useRectangleRoof } from "../../hooks/index.js";

export const Ejercicio1 = () => {

    const {definePanelWidth, defineRPanelHeight, defineRoofX, defineRoofY,
    roofWidth,roofHeight,panelHeight,panelWidth
    } = useCalculate()

    const {calculate, Result} = useRectangleRoof(roofWidth, roofHeight, panelWidth,panelHeight)

    return (
        <div className="container">
            <div className="valueContainer">
                <h2>Ejercicio 1</h2>
                <h3>Ingrese la altura y el ancho del techo</h3>
                <div className="inputContainer">
                    <div className="dataContainer">
                        <span><b>Alto</b></span>
                        <input
                            className='data-input'
                            type='number'
                            placeholder='Alto'
                            value={roofHeight}
                            onChange={e => defineRoofX(e.target.value)}
                        />
                    </div>

                    <div className="dataContainer">
                        <span><b>Ancho</b></span>
                        <input
                            className='data-input'
                            type='number'
                            placeholder='Ancho'
                            value={roofWidth}
                            onChange={e => defineRoofY(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="valueContainer">
                <h3>Ingrese el largo y ancho del panel solar</h3>
                <div className="inputContainer">
                    <div className="dataContainer">
                        <span><b>Alto</b></span>
                        <input
                            className='data-input'
                            type='number'
                            placeholder='Alto'
                            value={panelHeight}
                            onChange={e => defineRPanelHeight(e.target.value)}
                        />
                    </div>

                    <div className="dataContainer">
                        <span><b>Ancho</b></span>
                        <input
                            className='data-input'
                            type='number'
                            placeholder='Ancho'
                            value={panelWidth}
                            onChange={e => definePanelWidth(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <hr/>

            <div className="btnContainer">
                <div className="btnMod">
                    <button
                        className="btn"
                        onClick={calculate}
                        disabled={
                            (roofWidth <= 0 || '') ||
                            (roofHeight <= 0 || '') ||
                            (panelWidth <= 0 || '') ||
                            (panelHeight <= 0 || '')
                        }>
                        Calcular
                    </button>
                </div>

                <div>
                    <h3>se pueden situar un total de: <span style={{fontSize: '25px'}}>
                        {Result} {(Result > 1) ? 'Paneles' : 'Panel' }</span></h3>
                </div>

            </div>
        </div>
    );
};
