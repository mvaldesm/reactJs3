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
            <Link to="/" className="mt-3 pr-3 has-text-white">
              Inicio
            </Link>
            <Link to="/category/proteina" className="mt-3 pr-3 has-text-white">
              Productos
            </Link>
            <Link to="/category/creatina" className="mt-3 pr-3 has-text-white">
              Creatina
            </Link>
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
