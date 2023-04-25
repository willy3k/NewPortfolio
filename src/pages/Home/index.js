import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Container } from '../../style/GlobalStyles';
import { SectHome } from './styled';

import About from '../About';
import MinhasQE from '../MinhasQE';
import Serviços from '../Servicos';
import Conhecimento from '../Conhecimento';

export default function Home() {
  return (
    <Container>
      <SectHome>
        <section>
          <div className="descri">
            <h3>Tecnologia como um ativo</h3>
            <h2>
              Olá,eu sou <span> willy</span>
            </h2>
            <h1>Front-End Developer</h1>
            <p className="paragrafo">
              Sejá bem vindo ao Meu <span>Portfólio</span>,Espero que aproveite
              o Conteudo...
            </p>
            <button type="submit">
              <p>Conhecer mais</p>
            </button>
            <div className="reds">
              <a href="/">
                <FaInstagram fontSize={30} />
              </a>
              <a href="/">
                <FaLinkedin fontSize={30} />
              </a>
              <a href="/">
                <FaGithub fontSize={30} />
              </a>
            </div>
          </div>
        </section>
      </SectHome>
      <About />
      <MinhasQE />
      <Serviços />
      <Conhecimento />
    </Container>
  ); // Fa Ins tagram Fa Link edin Fa Github Square
}
