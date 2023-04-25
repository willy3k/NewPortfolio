import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { AiOutlineGlobal, AiOutlineStock } from 'react-icons/ai';
import { Container } from '../../style/GlobalStyles';
import { SecME } from './styled';

import chapeu from '../../assets/img/chapeu.png';

export default function MinhasQE() {
  const [showElement, setShowElement] = useState(false);
  const showOpen = () => setShowElement(true);
  const showClose = () => setShowElement(false);
  return (
    <Container>
      <SecME>
        <section>
          <h2>Minhas qualificações e experiências</h2>
          <div className="butoes">
            <button className="open" type="submit" onClick={showOpen}>
              <AiOutlineStock fontSize={30} />
              Qualificações
            </button>
            <button className="clos" type="submit" onClick={showClose}>
              <AiOutlineGlobal fontSize={30} />
              Trabalhos
            </button>
          </div>

          <div className="QT">
            {showElement ? (
              <div className="qualificaçoes">
                <div className="card-q">
                  <h2>
                    <div className="imgs">
                      <img src={chapeu} alt="" />
                    </div>
                    Udemy
                  </h2>
                  <span>Desenvolvedor Front-End</span>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum nemo dolor quidem perferendis vitae dicta in quod
                    repudiandae a error similique distinctio voluptatem deserunt
                    doloremque minus neque, inventore, consequatur maxime?
                  </p>
                  <samp>
                    <FaCalendar />
                    2021
                  </samp>
                  <br />
                  <button className="btn" type="submit">
                    Vizualisar
                  </button>
                </div>

                <div className="card-q">
                  <h2>
                    <div className="imgs">
                      <img src={chapeu} alt="" />
                    </div>
                    Rocketseat
                  </h2>
                  <span>Desenvolvedor Front-End</span>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum nemo dolor quidem perferendis vitae dicta in quod
                    repudiandae a error similique distinctio voluptatem deserunt
                    doloremque minus neque, inventore, consequatur maxime?
                  </p>
                  <samp>
                    <FaCalendar />
                    2022 Desembro
                  </samp>
                  <br />
                  <button className="btn" type="submit">
                    Vizualisar
                  </button>
                </div>

                <div className="card-q">
                  <h2>
                    <div className="imgs">
                      <img src={chapeu} alt="" />
                    </div>
                    Udemy
                  </h2>
                  <span>Desenvolvedor Front-End</span>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum nemo dolor quidem perferendis vitae dicta in quod
                    repudiandae a error similique distinctio voluptatem deserunt
                    doloremque minus neque, inventore, consequatur maxime?
                  </p>
                  <samp>
                    <FaCalendar />
                    Em progresso
                  </samp>
                  <br />
                  <button className="btn" type="submit">
                    Em progresso
                  </button>
                </div>
              </div>
            ) : (
              <div className="trabalhos">
                <div className="card-t">
                  <h2>MKS</h2>
                  <span>Atuei como Freelancer</span>
                  <p>
                    Nesse trabalho, além de poder contribuir para o projeto do
                    cliente, puder revisar e aprendar conceitos importantes da
                    base do front-end. O cliente solicitou um trabalho, no qual
                    o foco do trabalho era fazer o layout de uma aplicação
                    disponibilizada no figma, e as ferramentas solicitadas para
                    esse trabalho foram Html, Css e React e javaScript git e
                    github. A MKS era um projeto web de loja.
                  </p>
                  <samp>2022-abril(4 meses de duração)</samp>
                </div>
                <div className="card-t">
                  <h2>IEBSL</h2>
                  <span>Atuei como Freelancer</span>
                  <p>
                    Nesse trabalho, além de poder contribuir para o projeto do
                    cliente, puder revisar e aprendar conceitos importantes e
                    novos do react e do front-end. O cliente solicitou um
                    trabalho, no qual o foco do trabalho era cria umas web site
                    de uma igreja e as ferramentas solicitadas para esse
                    trabalho foram Html, Css e React e javaScript git e github.
                  </p>
                  <samp>2022-desembro(3 meses de duração)</samp>
                </div>
              </div>
            )}
          </div>
        </section>
      </SecME>
    </Container>
  );
}
