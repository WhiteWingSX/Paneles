import { Ejercicio1, Ejercicio2, Ejercicio3 } from "./homework/";
import { useState } from "react";

export const EjerciciosApp = () => {

    //SideBar
    const [btnone, setBtnone] = useState(true)
    const [btntwo, setBtntwo] = useState(false)
    const [btnthree, setBtnthree] = useState(false)

    const btnexercise_1 = () => {
        setBtnone(true)
        setBtntwo(false)
        setBtnthree(false)
    }

    const btnexercise_2 = () => {
        setBtnone(false)
        setBtntwo(true)
        setBtnthree(false)
    }

    const btnexercise_3 = () => {
        setBtnone(false)
        setBtntwo(false)
        setBtnthree(true)
    }


    return (
            <div className="btnContainerEx">
                <h1 style={{ color: "#ffffff", marginTop: "10vh"}}>Ejercicios</h1>
                <div className="btn-ex">
                    <button className="btn" onClick={btnexercise_1}>Ejercicio 1</button>
                    <button className="btn" onClick={btnexercise_2}>Ejercicio 2</button>
                    <button className="btn" onClick={btnexercise_3}>Ejercicio 3</button>
                </div>

                <div className="exContainer">
                    {
                        (btnone === true)
                            ? <Ejercicio1/>
                            : ''
                    }

                    {
                        (btntwo === true)
                            ? <Ejercicio2/>
                            : ''
                    }

                    {
                        (btnthree === true)
                            ? <Ejercicio3/>
                            : ''
                    }
                </div>

            </div>
    );
};
