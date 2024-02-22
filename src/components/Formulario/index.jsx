import { useState, useMemo } from "react";
import Botao from "../Botao";
import CaixaDeTexto from "../CaixaDeTexto";
import "./styles.css";

const Formulario = ({lista, setLista}) => {
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [comidaQueNaoGosta, setComidaQueNaoGosta] = useState("");
    const [experienciaPositiva, setExperienciaPositiva] = useState("");

    const limparCampos = () => {
        setNome("");
        setFoto("");
        setComidaQueNaoGosta("");
        setExperienciaPositiva("");
    };

    const criarCartao = (event) => {
        event.preventDefault();

        const estudante = {
            nome: nome,
            foto: foto,
            comidaQueNaoGosta: comidaQueNaoGosta,
            experienciaPositiva: experienciaPositiva,
        };

        const novaLista = [estudante, ...lista];
        setLista(novaLista);

        limparCampos();
    };

    const quantidadeEstudantes = useMemo(() => lista.length, [lista]);

    return (
        <section className="formulario">
            <form onSubmit={criarCartao}>
                <b>
                    Preencha com os dados da mulher referÊncia para criar um card
                </b>
                <br/>
                <small>
                    {/* <i>Atualmente há {lista.lenght} estudantes cadastradas</i>*/}
                    <i>Atualmente há{quantidadeEstudantes} estudantes cadastradas</i>
                </small>
                <CaixaDeTexto
                    value={nome}
                    label="Nome"
                    placeholder="Digite o seu nome..."
                    handleChange={(e) => setNome(e.target.value)}
                />

                <CaixaDeTexto
                    value={foto}
                    label="Foto"
                    placeholder="Digite a url da sua foto..."
                    handleChange={(e) => setFoto(e.target.value)}
                />

                <CaixaDeTexto
                    value={comidaQueNaoGosta}
                    label="Comida que não gosta"
                    placeholder="Uma comida que não dá!!!"
                    handleChange={(e) => setComidaQueNaoGosta(e.target.value)}
                />

                <CaixaDeTexto
                    value={experienciaPositiva}
                    label="ExperiÊncia massa"
                    placeholder="Conta aí..."
                    handleChange={(e) => setExperienciaPositiva(e.target.value)}
                />

                <Botao texto="Criar card" acao={criarCartao}/>
            </form>

        </section>
    )
};

export default Formulario;