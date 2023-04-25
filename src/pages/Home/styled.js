import styled from 'styled-components';
import { primaryDarkColor } from '../../config/colors';

export const SectHome = styled.section`
  background: linear-gradient(180deg, #efc75e, black);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    max-width: 1800px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .descri {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 30px;
  }
  h1 {
    margin-bottom: 10px;
    font-size: 42px;
    font-weight: 900;
  }
  h2 {
    margin-bottom: 10px;
    font-size: 33px;
    font-weight: 100;
  }
  h3 {
    border-radius: 8px;
    font-size: 18px;
    padding: 5px;
    margin: 15px;
    align-items: center;
    text-align: center;
    background: ${primaryDarkColor};
    width: 50%;
  }
  span {
    font-weight: 900;
    color: ${primaryDarkColor};
  }
  .paragrafo {
    font-size: 20px;
    margin-bottom: 20px;
  }
  //butão
  button {
    width: 40%;
    padding: 10px 30px;
    background: #07182e;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 30px;
  }

  button p {
    z-index: 1;
    color: white;
    font-size: 16px;
  }

  button::before {
    content: '';
    position: absolute;
    width: 400px;
    background-image: linear-gradient(180deg, black, #efc75e);
    height: 50%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
  button::after {
    content: '';
    position: absolute;
    background: #07182e;
    inset: 2px;
    /* border-radius: 15px; */
  }

  /// redes
  .reds {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  a {
    color: #efc75e;
    transition: 1s;
    &:hover {
      color: #07182e;
    }
  }
  @media (max-width: 1000px) {
    section {
      width: 100%;
    }
    .descri {
      width: 100%;
    }
  }
`;
