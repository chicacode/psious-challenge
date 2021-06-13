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
        <li><a className="nav-link" href="#product">Product</a></li>
        <li><a className="nav-link" href="#applications">Applications</a></li>
        <li><a className="nav-link" href="#science"> Science </a></li>
        <li><a className="nav-link" href="#customers">Customers</a></li>
        <li><a className="nav-link" href="#resources">Resources</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;