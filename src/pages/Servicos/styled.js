import styled from 'styled-components';

export const SecServiços = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1800px;
  }
  h3 {
    font-size: 23px;
    margin-bottom: 15px;
  }
  p {
    opacity: 0.6;
    font-size: 17px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h2 {
    font-size: 30px;
    padding: 20px;
  }
  samp {
    color: #efc75e;
  }
  span {
    opacity: 0.7;
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .card {
    border: 1px solid #2a2a2a;
    box-shadow: 1px 1px 10px 1px #2a2a2a;
    padding: 20px;
    max-width: 400px;
    margin: 20px;
  }
`;
