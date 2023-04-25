import React from 'react';

import { Container } from '../../style/GlobalStyles';
import { SecConhecimento } from './styled';

export default function Conhecimento() {
  return (
    <Container>
      <SecConhecimento>
        <h2>Conhecimento</h2>
        <section>
          <div className="card">
            <h3>HTML</h3>
          </div>
          <div className="card">
            <h3>CSS</h3>
          </div>
          <div className="card">
            <h3>JavaScript</h3>
          </div>
          <div className="card">
            <h3>React.js</h3>
          </div>
        </section>
      </SecConhecimento>
    </Container>
  );
}
