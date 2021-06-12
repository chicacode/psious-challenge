import React from 'react';
import '../assets/styles/components/Footer.scss';
import logo from '../assets/img/Logo-azul.png';

const Footer = () => (
    <footer className="footer">
    <div className="footer-frame">
      <img src={logo} className="logotype" alt="psious logo" />
      <div className="legal-menu">
        <nav>
          <ul>
            <li className="footer-list"><a href="#" title="Lea nuestra política de privacidad">Privacy</a>
            </li>
            <li className="footer-list"><a href="#" title="Lea el aviso legal">Accesibility</a></li>
          </ul>
        </nav>
        <small>Psious© 2021</small>
      </div>
    </div>
   </footer>
);

export default Footer;