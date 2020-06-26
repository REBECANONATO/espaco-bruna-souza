import React from 'react';
import { Fade } from 'react-awesome-reveal';
import GreetingImg from '../../assets/unha1.jpg';
import GreetingImg2 from '../../assets/unha2.jpg';
import GreetingImg3 from '../../assets/unha3.jpg';
import GreetingImg4 from '../../assets/depilacao1.jpg';
import GreetingImg5 from '../../assets/depilacao2.jpg';
import GreetingImg6 from '../../assets/depilacao3.jpg';
import GreetingImg7 from '../../assets/Limpeza1.jpg';
import GreetingImg8 from '../../assets/Limpeza2.jpg';
import GreetingImg9 from '../../assets/Limpeza3.jpg';
  
import { Container } from './styles';

function ServicosOferecidos() {
  return (
    <Fade direction="right" delay={500} triggerOnce>
        <Container id="Servicos">
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
                        <img src={GreetingImg} alt="..." height="200px" />
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg2} alt="..." height="200px"/>
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg3} alt="..." height="200px" />
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
                        <img src={GreetingImg4} alt="..." height="200px" />
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg5} alt="..." height="200px"/>
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg6} alt="..." height="200px" />
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
                <h1> Depilação</h1>

                <p>A depilação é a remoção de pelos indesejáveis no corpo, 
                    utilizamos cera quente ou fria para realizar o procedimento que resulta 
                    em uma pele macia, livre de pelos e muito mais lisa.
                    Um dos motivos de escolher a depilação com cera é que o método 
                    faz com que os pelos demorem para crescer e, se comparado com outras 
                    técnicas, como a lâmina, por exemplo, a cera é menos abrasiva com a pele.
                    As áreas tratadas com a depilação a cera são pernas, virilha, axilas, 
                    buço e outras regiões. Para cada uma delas um tipo diferente de cera 
                    deve ser utilizado.
                    Entre os benefícios da depilação com cera quente ou fria podemos citar 
                    a retirada do pelo pela raiz, essa é a explicação para que ele demore a crescer.
                    A cera quente pode ser considerada menos dolorida porque o calor do 
                    produto dilata os processos facilitando a retirada dos pelos.
                    Outra vantagem é que este método, se comparado a outros, é uma das 
                    formas mais econômicas de se livrar dos pelos indesejados.
                </p>
            </div>       
        </Container>
        <Container>
            <div class="frases">
                <h1> Limpeza de Pele</h1>

                <p>Para manter a saúde da pele facial é importante manter cuidados específicos, 
                    com cremes de tratamento apropriados para o seu tipo de pele.
                    Com a limpeza de pele realizada pela Bruna você terá uma higienização completa, 
                    o que inclui a aplicação de sabonete, tônico e esfoliante que removem as células mortas 
                    promovendo a renovação celular do local. Após esse procedimento, realizamos a extração de 
                    cravos e espinhas, utilizamos um equipamento de alta frequência e terminados com 
                    uma máscara de hidratação e um protetor solar. 
                    O procedimento completo chega a durar entre 1 hora a 1 hora e meia.
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
                        <img src={GreetingImg7} alt="..." height="200px" />
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg8} alt="..." height="200px"/>
                    </div>
                    <div class="carousel-item">
                        <img src={GreetingImg9} alt="..." height="200px" />
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

export default ServicosOferecidos;