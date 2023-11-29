import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <h2>Nombre</h2>
        </li>
        <li className="sidebar-item">
          <h2>Inicio</h2>
        </li>
        <li className="sidebar-item">
          <h2>Gastos del mes</h2>
        </li>
        <li className="sidebar-item">
          <h2>Gasto Diario</h2>
        </li>
        <li className="sidebar-item">
          <h2>Gasto Anual</h2>
        </li>
      </ul>
      <div className="gif-container">
        <img src="https://cdn.discordapp.com/attachments/1114259837031821343/1126952366114086984/Perro-GIF-unscreen.gif" alt="Animated GIF"/>
      </div>
      <div className="qr-container">
        <img src="https://www.dreamhost.com/blog/wp-content/uploads/2022/12/qr-estatico-600x600.jpg" alt="QR"/>
      </div>
    </div>
  );
}

export default Sidebar;
