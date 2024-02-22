import "./styles.css";
import Box from '@mui/material/Box';

const SobrePretaLabPage = () => {
    return (
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <Box className="pretaLogo" component="img" src="/pretalab.png" alt="logo PretaLab" height={50} width={70}/> 
         
        <Box>
          <h1 className="pretaTitle">PretaLab</h1>
          
          <p className="pretaParagraph">Pretalab é uma plataforma que conecta mulheres negras que são ou gostariam de ser da tecnologia, por meio de ciclos formativos, 
            rede de profissionais, mercado de trabalho, consultorias e estudos.</p>
        </Box>

        <Box>
          <h1 className="pretaTitle">Meu Ciclo Formativo</h1>
          
          <p className="pretaParagraph">Faltam palavras para descrever o prazer imenso que foi participlar do Ciclo 9.</p>
            
          <p className="pretaParagraph">A qualidade do conteúdo, ter aulas com professoras que atuam no mercado, poder me ver nas colegas, professoras e monitoras, com certeza já estão fazendo a diferença
            no tamanho da motivação para continuar estudando.
          </p>
          
        </Box>  

      </Box>
      
    );
  };

  export default SobrePretaLabPage;