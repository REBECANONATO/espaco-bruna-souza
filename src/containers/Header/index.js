import React from 'react';
import { Fade, Flip } from 'react-awesome-reveal';
import { Container, Logo, Lista } from './styles';

function Header() {
    return (
        <Container>
            <Flip delay={1300} triggerOnce>
                <Logo>
                    <a href="/">
                        <h1> Bruna Souza Beleza e Estética </h1>
                    </a>
                </Logo>
            </Flip>
            <Fade direction="right" delay={1000} triggerOnce>
                <Lista>
                    <a href="#sobre">
                        <li>Sobre</li>
                    </a>
                    <a href="#servicos">
                        <li>Serviços</li>
                    </a>
                    <a href="#contato">
                        <li>Contato</li>
                    </a>
                </Lista>
            </Fade>
    </Container>
    );
}
export default Header;