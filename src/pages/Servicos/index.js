import React from 'react';

import { Container } from '../../style/GlobalStyles';
import { SecServiços } from './styled';

export default function Serviços() {
  return (
    <Container>
      <SecServiços>
        <section>
          <div className="title">
            <h2>
              Conheça meus <samp>Serviços</samp>
            </h2>
            <span>Metodologias que eu ultilizo nos meus trabalhos</span>
          </div>

          <div className="cards">
            <div className="card">
              <h3>Desenvolvimento web</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                consequuntur! Ratione exercitationem iusto sit officiis quae,
                iste dolor corrupti maiores sint magnam commodi similique quo
                debitis id illo? Deserunt, nihil.
              </p>
            </div>
            <div className="card">
              <h3>Desenvolvimento Responsivo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                consequuntur! Ratione exercitationem iusto sit officiis quae,
                iste dolor corrupti maiores sint magnam commodi similique quo
                debitis id illo? Deserunt, nihil.
              </p>
            </div>
            <div className="card">
              <h3>Experiência Do usuário</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                consequuntur! Ratione exercitationem iusto sit officiis quae,
                iste dolor corrupti maiores sint magnam commodi similique quo
                debitis id illo? Deserunt, nihil.
              </p>
            </div>
          </div>
        </section>
      </SecServiços>
    </Container>
  );
}
