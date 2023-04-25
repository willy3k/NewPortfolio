import React from 'react';
import { AiOutlineDoubleRight, AiOutlinePlus } from 'react-icons/ai';
import perfil from '../../assets/img/wr.png';

import { Container } from '../../style/GlobalStyles';
import { SecAbout, SecExperi } from './styled';

export default function About() {
  return (
    <Container>
      <SecAbout>
        <section>
          <div className="photo">
            <img src={perfil} alt="" />
          </div>
          <div className="descrition">
            <span>
              <AiOutlineDoubleRight color="#efc75e" fontSize={23} />
              Desenvolvedor Front-End
            </span>
            <h2>
              Desenvolvedor Front-End, Com experiências em Html, CSS, React,
              JavaScript, Git, GitHub,
            </h2>

            <p>
              Meu nome é Willy, tenho 20 anos. Desde 2021 que estudo, pratico e
              trabalho com desenvolvimento. Meu principal objetivo é agregar com
              todo meu conhecimento e experiência que possuo na área de
              Desenvolvimento, e assim cada vez mais aumenta minhas habilidades
              e as geração de resultados positivos, de modo que seja possível
              viabilizar um crescimento qualitativo e quantitativo da empresa .
              Estou à disposição para entrevistas e comprovações.
              <br />
              <br />
              Logo a baixo tem o meu currículo com informações mais detalhadas
              sobre min. Se preferir, podemos marcar uma call atráves do meu
              e-mail que está disponibilizado.
            </p>
            <button type="submit">Baixar CV</button>
            <button type="submit" className="copia">
              Copiar email
            </button>
          </div>
        </section>
      </SecAbout>
      <SecExperi>
        <section>
          <samp>
            <span>
              {' '}
              <AiOutlinePlus className="ico" color="#efc75e" />
              02
            </span>
            <p>Anos de experiência como desenvolvedor</p>
          </samp>
          <samp>
            <span>
              <AiOutlinePlus className="ico" color="#efc75e" />
              09
            </span>
            <p>Projetos pessoais e educativos concluídos</p>
          </samp>
          <samp>
            <span>
              <AiOutlinePlus className="ico" color="#efc75e" fontWeight={900} />
              02
            </span>
            <p>Projetos freelancer entregues</p>
          </samp>
          <samp>
            <span>
              <AiOutlinePlus className="ico" color="#efc75e" />
              02
            </span>
            <p>Cursos concluídos</p>
          </samp>
        </section>
      </SecExperi>
    </Container>
  );
}
