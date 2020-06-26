import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ContactImg from '../../assets/horario.jpg';

import { Container, ContactImgDiv, ContactDiv } from './styles';

export default class Contact extends React.Component {

    render(){
        return(
            <Fade direction="top" delay={500} triggerOnce>
                <Container id="contato">
                    <ContactDiv>
                        <h1>Bruna Souza "Beleza e Estética"</h1>
                        <p>Um momento relaxante, onde eu cuido de você.
                        </p><br />
                        <p>
                            <b>Endereço:</b> 
                            R. Gil de Andrade Botelho, 120 - Colinas da Serra, Lavras - MG, 37206-086
                        </p>
                        <h1>Entre em contato:</h1>
                        <p>
                            <a href="tel:35998581340">+55 (35) 99858-1340</a>
                        </p>
                    </ContactDiv>
                    <ContactImgDiv>
                        <img src={ContactImg} alt="Imagem de contato" />
                    </ContactImgDiv>
                </Container>
                </Fade>
        );
    }
}