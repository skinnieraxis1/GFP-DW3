<<<<<<< HEAD
import React from 'react';
import logo from '../assets/Logo.png'
import './Footer.css'; // Importa el archivo CSS para los estilos adicionales
import {AiOutlineInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import {BsPaypal} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div>
          <AiOutlineInstagram className="logo"/>
          <AiFillTwitterCircle className="logo"/>
          <BsPaypal className='logo'/>
        </div>
        <div className="login">
          <img src={logo} alt="Logo" className="main-logo" />
          <a href="/login" className="login-link">Iniciar sesión</a>
        </div>
      </div>
    </footer>
  );
};

=======
import React from 'react';
import logo from '../assets/Logo.png'
import './Footer.css'; // Importa el archivo CSS para los estilos adicionales
import {AiOutlineInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import {BsPaypal} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div>
          <AiOutlineInstagram className="logo"/>
          <AiFillTwitterCircle className="logo"/>
          <BsPaypal className='logo'/>
        </div>
        <div className="login">
          <img src={logo} alt="Logo" className="main-logo" />
          <a href="/login" className="login-link">Iniciar sesión</a>
        </div>
      </div>
    </footer>
  );
};

>>>>>>> 4401f718d5b0462495dd8645e91537a20c6df4ee
export default Footer;