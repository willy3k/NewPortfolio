import styled from 'styled-components';

export const SecME = styled.section`
  padding: 50px 0;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    max-width: 1800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    text-align: center;
    font-size: 35px;
  }
  .butoes {
    width: 100%;
    margin-top: 30px;
    display: flex;
    margin-bottom: 30px;
  }
  button {
    width: 50%;
    background: black;
    font-size: 20px;
    border-bottom: 1px solid #efc75e;
  }
  .open {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #efc75e;
    border-radius: 0px 0px 0px;
  }
  .clos {
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #efc75e;
    border-radius: 0px 0px 0px 0px;
  }
  .QT {
  }

  .qualificaçoes {
    max-width: 500px;
  }
  .card-q {
    margin-bottom: 20px;
  }
  .imgs {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #efc75e;
    border-radius: 100%;
    width: 50px;
    height: 50px;
  }
  img {
    width: 80%;
    height: 80%;
    border-radius: 100%;
  }
  h2 {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  span {
    display: flex;
    margin-bottom: 20px;
  }
  p {
    display: flex;
    margin-bottom: 20px;
  }
  .btn {
    color: #efc75e;
    width: 100%;
    padding: 10px 40px;
    border: 1px solid #efc75e;
  }

  .trabalhos {
    max-width: 600px;
  }
  .card-t {
    border: 1px solid #2a2a2a;
    padding: 20px;
    box-shadow: 1px 1px 10px 1px #2a2a2a;
    margin-bottom: 20px;
  }
  span {
    opacity: 0.5;
  }
  p {
    font-size: 18px;
  }

  @media (max-width: 1000px) {
    section {
      width: 90%;
    }
  }
`;
