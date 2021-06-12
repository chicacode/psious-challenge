import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/img/Logo-azul.png';

const Header = () => (

  <header id="header">
    <div className="logo">
     <img id="header-img" className="logotype" width="100" src={logo} alt="psious-logo" /> 
    </div>
    <nav id="nav-bar">
      <ul>
        <li><a className="nav-link" href="#product">Producto</a></li>
        <li><a className="nav-link" href="#applications">Aplicaciones</a></li>
        <li><a className="nav-link" href="#plans"> Planes</a></li>
        <li><a className="nav-link" href="#customers">Clientes</a></li>
        <li><a className="nav-link" href="#resources">Recursos</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;