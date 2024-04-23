import { useCalculate, useSuperpotition } from "../../hooks/";


export const Ejercicio3 = () => {

    const {definePanelWidth, defineRPanelHeight, defineRoofX, defineRoofY, defineSuperpotitionX, defineSuperpotitionY,
        roofWidth,roofHeight,panelHeight,panelWidth, superpotitionWidth,
        superpotitionHeight} = useCalculate()

    const {calculate, Result} = useSuperpotition(roofWidth, roofHeight, panelWidth, panelHeight,
        superpotitionWidth, superpotitionHeight);

    return (
        <div className="container">
            <div className="valueContainer">
                <h2>Ejercicio 3 (Opcional 2)</h2>
                <h3>Ingrese la altura, ancho y la superposicion:</h3>
                <span>superposisción: ingrese un valor entre 0 y 1. </span>
                <hr/>
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

                    <div className="dataContainer">
                        <span><b>Superposición (Alto)</b></span>
                        <input
                            className='data-input'
                            type='number'
                            placeholder='Alto'
                            value={superpotitionHeight}
                            onChange={e => defineSuperpotitionX(e.target.value)}
                        />
                    </div>

                    <div className="dataContainer">
                        <span><b>Superposición (Ancho)</b></span>
                        <input
                            className='data-input'
                            type='number'
                            placeholder='Ancho'
                            value={superpotitionWidth}
                            onChange={e => defineSuperpotitionY(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="valueContainer">
                <h3></h3>
                <div className="inputContainer">
                    <div className="dataContainer">
                        <span><b>Alto</b></span>
                        <input
                            className='data-input'
                            type='number'
                            placeholder='Largo'
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
                            (panelHeight <= 0 || '') ||
                            (superpotitionWidth <= 0 || '') ||
                            (superpotitionHeight <= 0 || '')
                        }>
                        Calcular
                    </button>
                </div>

                <div>
                    <h3>se pueden situar un total de: <span style={{fontSize: '25px'}}>
                        {Result} {(Result > 1) ? 'Paneles' : 'Panel' }
                    </span></h3>
                </div>

            </div>
        </div>
    );
};
