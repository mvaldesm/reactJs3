import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1>
              <b>repArep.com</b>
            </h1>
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="/"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Inicio
            </a>

            <a className="navbar-item" href="/">
              Productos
            </a>

            <a className="navbar-item" href="/">
              Contacto
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {/* <div className="buttons">
                <a className="button is-primary" href="/">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="/">
                  Log in
                </a>
              </div> */}
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
