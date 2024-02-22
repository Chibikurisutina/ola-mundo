import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from '@mui/material/Link';


const SobreMimPage = () => {
    return (
      <div className="sobremim">

        <img className="fotoEu" src="/foto.jpg" alt="mulher de cabelo raspado, óculos de grau e regata preta"/>
       
       <div className="apresentacao"> 
          <h1>Bem-vindes!</h1>
          
          <p>Meu nome é <strong>Cristina</strong>, tenho 37 anos, resido na cidade de Porto Alegre, na companhia de um cachorro caramelo chamado Mello.</p>
            
          <p>Trabalho em um banco, e em 10 anos lá dentro, já desempenhei diversas atividades. A principal atualmente, é extrair dados de alguns sistemas e gerar relatórios. 
            Minha principal ferramenta de trabalho é o Microsoft Excel.</p>
          
          <p>Através do Ciclo Formativo Pretalab, adquiri habilidades em Git e GitHub, HTML5, CSS3, JavaScript e React.</p>
          
       </div> 
        
       <div className="links">
          <ul className="linkslinks">
            <li>
              <FontAwesomeIcon icon={faGithub} size="2x" color="#864622" fade/>
            </li>
            <li>
              <Link href="https://github.com/Chibikurisutina" underline="none" target="_blank" rel="noopener" color="inherit">
                {'Repositório Github'}
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="#864622" fade/>
            </li>
            <li textAlign="center">
              <Link href="https://www.linkedin.com/in/cristinarsilva/" underline="none" target="_blank" rel="noopener" color="inherit">
              {'LinkedIn'}
              </Link>
            </li>
          </ul>       
       </div>

      </div>
        
    );
  };
  
  export default SobreMimPage;