import styled from 'styled-components';
import { primaryDarkColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryDarkColor};
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    width: 200px;
    height: 100px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  nav {
    width: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  header .nav-btn {
    background: transparent;
    outline: none;
    visibility: hidden;
    opacity: 0;
    position: absolute;
  }

  a {
    color: #fff;
    font-size: 18px;
    margin: 0 10px 0;
    font-weight: bold;
    position: relative;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }
  a:focus:after,
  a:hover:after {
    width: 100%;
    left: 0%;
  }
  a:after {
    content: '';
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 3px;
    background-color: #efc75e;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }

  @media (max-width: 900px) {
    header .nav-btn {
      visibility: visible;
      opacity: 1;
      position: relative;
    }

    header nav {
      position: fixed;
      z-index: 10;
      top: 0;
      right: 0;
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: ${primaryDarkColor};
      box-shadow: 1px 1px 1px 1px black;
      justify-content: center;
      gap: 1.9rem;
      transition: 1s;
      transform: translateX(100vh);
    }
    header {
    }
    header .response_nav {
      transform: none;
    }
    nav .nav-btn-close {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
`;
