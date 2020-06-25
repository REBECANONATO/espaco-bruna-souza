import React from 'react';
import { Fade } from 'react-awesome-reveal';
import GreetingImg from '../../assets/esmaltes.png'

import { Container, GrettingTextDiv, GrettingImgDiv, GrettingButtonDiv } from './styles';

function Greeting () {
  return (
    <Fade direction="left" delay={500} triggerOnce>
      <Container>
        <GrettingTextDiv>
          <a href="/"><h1>Oi, sou a Bruna Souza</h1></a>
          <p>
            <b>Cuidar do seu bem estar é nossa meta principal. </b>
            Oferecer a você um trabalho com profissionalismo e excelência nos resultados, 
            sempre buscando satisfação e qualidade.            
          </p>
          <span>Venha cuidar de você!</span>

          <GrettingButtonDiv>
                <form>
                    <a href="#contact" class="button">
                        Agende um horário!
                    </a>
                </form>
          </GrettingButtonDiv>
        </GrettingTextDiv>
        
        <GrettingImgDiv>
          <img src={GreetingImg} alt="gretting" />
        </GrettingImgDiv>
      </Container>
    </Fade>
  );
}

export default Greeting;
