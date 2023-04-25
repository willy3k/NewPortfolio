import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: black;
}

html, body, #root {
  height: 100%;
}

button{
  cursor: pointer;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: 1s;
  &:hover {
    color: #efc75e;
  }
}


a {
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.sucessColor};
}
body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
}
`;

export const Container = styled.section`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
