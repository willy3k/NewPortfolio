import styled from 'styled-components';
import { primaryDarkColor } from '../../config/colors';

export const SecAbout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: black;
    max-width: 1800px;
  }
  .photo {
    margin-right: 100px;
    display: flex;
    justify-content: center;
    width: 400px;
    height: 400px;
    overflow: hidden;
    border-radius: 50%;
    border-bottom: 3px solid #efc75e;
    border-right: 3px solid #efc75e;
    box-shadow: 1px 4px 10px 1px #efc75e;
  }
  img {
    width: 150%;
    height: 150%;
  }
  .descrition {
    margin-left: 100px;
    padding: 30px;
    max-width: 600px;
  }
  span {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-bottom: 20px;
  }
  h2 {
    display: flex;
    align-items: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  // butoes
  button {
    color: black;
    background: #efc75e;
    width: 40%;
    margin: 10px 5px;
  }
  .copia {
    color: #efc75e;
    border: 2px solid #efc75e;
    background: black;
  }
  @media (max-width: 1000px) {
    .photo {
      margin-right: 0;
    }
    .descrition {
      margin-left: 0;
    }
  }
`;
export const SecExperi = styled.section`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${primaryDarkColor};
  padding: 10px 0;

  section {
    display: flex;
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: center;
    max-width: 1800px;
  }

  samp {
    margin: 20px;
    text-align: center;
    max-width: 300px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 50px;
    font-weight: 900;
  }
  .ico {
    font-weight: 900;
  }
  p {
    font-size: 16px;
    font-weight: 800;
  }
`;
