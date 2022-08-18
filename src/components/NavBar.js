import React from "react";

const Navbar = () => {
  return (
    <nav className="menu">
      <div className="nombre">
        <b>repArep.com</b>
      </div>
      <div className="enlaces">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
