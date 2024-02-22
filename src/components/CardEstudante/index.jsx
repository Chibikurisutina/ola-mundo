import "./styles.css"

const CardEstudante = ({
    fotoUrl, 
    nome, 
    comidaQueNaoGosta, 
    experienciaPositiva,
}) => {
    return (
        <div className="card">
            <img src={fotoUrl} alt="foto da estudante" />
          
            <div className="container">
                <h4>{nome}</h4>

                <p>
                    <strong>Comida que não gosta:</strong>
                    {comidaQueNaoGosta}
                </p>

                <p>
                    <strong>Experiência Positiva:</strong>
                    {experienciaPositiva}
                </p>
            </div>
        </div>
    )
};

export default CardEstudante