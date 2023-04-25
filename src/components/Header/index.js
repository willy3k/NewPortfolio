import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav } from './styled';
import logo from '../../assets/img/wxp.png';

export default function Header() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('response_nav');
  };
  return (
    <Nav>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/Login">About</a>
          <a href="/d">Service</a>
          <a href="/d">Projetos</a>
          <a href="/d">Tecnologias</a>
          <a href="/d">Contacto</a>
          <button
            type="submit"
            className="nav-btn nav-btn-close"
            onClick={showNavBar}
          >
            <FaTimes fontSize={30} />
          </button>
        </nav>
        <button type="submit" className="nav-btn" onClick={showNavBar}>
          <FaBars fontSize={30} />
        </button>
      </header>
    </Nav>
  );
}
