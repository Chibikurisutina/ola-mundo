import { useState } from "react";
import Botao from "../Botao";
import "./styles.css";

const Contator = () => {
    const [valor, setValor] = useState(0);

    const incrementar = () => {
        setValor((valorAnterior) => valorAnterior + 1);
    };

    const decrementar = () => {
        setValor((valorAnterior) => valorAnterior - 1);
    }



    return (
        <section className="contador-section">
            <h1>Contador</h1>
            <main className="contador-main">
                <Botao texto="+" acao={incrementar}/>
                <h2 className="contador-value">{valor}</h2>
                <Botao texto="-" acao={decrementar}/>
            </main>
        </section>
    );
};

export default Contator 