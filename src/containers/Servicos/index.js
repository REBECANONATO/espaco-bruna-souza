import React from 'react';
import { Fade } from 'react-awesome-reveal';
import GreetingImg from '../../assets/unha1.jpg';
import GreetingImg2 from '../../assets/unha2.jpg';
import GreetingImg3 from '../../assets/unha3.jpg';
  
import { Container } from './styles';

function Servicos() {
  return (
    <Fade direction="right" delay={500} triggerOnce>
        <Container>
            <div class="frases">
                <h1> Manicure e Pedicure</h1>

                <p>Para quem deseja ter unhas de salão nossos serviços 
                    de manicure e pedicure são as opções mais indicadas, 
                    pois oferecemos o trabalho de remoção de cutículas, 
                    calosidade, embelezamento de unhas e 
                    tratamento de micoses indesejáveis.
                </p>
            </div>

            <div id="carouselExampleIndicators" class="carousel slide face" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={GreetingImg} alt="..." height="300px" />
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg2} alt="..." height="300px"/>
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg3} alt="..." height="300px" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>         
        </Container>
        <Container>
            <div id="carouselExampleIndicators" class="carousel slide face2" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={GreetingImg} alt="..." height="300px" />
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg2} alt="..." height="300px"/>
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg3} alt="..." height="300px" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="frases">
                <h1> Manicure e Pedicure</h1>

                <p>Para quem deseja ter unhas de salão nossos serviços 
                    de manicure e pedicure são as opções mais indicadas, 
                    pois oferecemos o trabalho de remoção de cutículas, 
                    calosidade, embelezamento de unhas e 
                    tratamento de micoses indesejáveis.
                </p>
            </div>       
        </Container>
        <Container>
            <div class="frases">
                <h1> Manicure e Pedicure</h1>

                <p>Para quem deseja ter unhas de salão nossos serviços 
                    de manicure e pedicure são as opções mais indicadas, 
                    pois oferecemos o trabalho de remoção de cutículas, 
                    calosidade, embelezamento de unhas e 
                    tratamento de micoses indesejáveis.
                </p>
            </div>

            <div id="carouselExampleIndicators" class="carousel slide face" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={GreetingImg} alt="..." height="300px" />
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg2} alt="..." height="300px"/>
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg3} alt="..." height="300px" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>         
        </Container>
      
    </Fade>
  );
};

export default Servicos;