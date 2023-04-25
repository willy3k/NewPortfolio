import styled from 'styled-components';

export const SecConhecimento = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: black;
  color: white;

  h2 {
    padding: 30px;
  }

  section {
    color: #efc75e;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1700px;
  }
  .card {
    padding: 20px;
    margin: 20px;
    width: 400px;
    border: 1px solid #2a2a2a;
    box-shadow: 1px 1px 10px 1px #2a2a2a;
  }
`;
