import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <h1 className="mt-3 pr-5 pl-5 has-text-white">
              <b>repArep.com</b>
            </h1>
          </Link>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="mt-3 pr-3 has-text-white">
              Inicio
            </Link>
            <Link to="/category/proteinas" className="mt-3 pr-3 has-text-white">
              Proteínas
            </Link>
            <Link to="/category/creatinas" className="mt-3 pr-3 has-text-white">
              Creatinas
            </Link>
            <Link
              to="/category/quemadores"
              className="mt-3 pr-3 has-text-white"
            >
              Quemadores
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
