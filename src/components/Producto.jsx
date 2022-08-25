import React from "react";

function Producto({ img, alt, precio, nombre }) {
  return (
    <div className="card">
      <div className="card-image has-text-centered px-6">
        <img src={img} alt={alt} />
      </div>
      <div className="card-content has-text-centered">
        <p>{precio}</p>
        <p className="title is-size-5">{nombre}</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <a href="/" className="has-text-grey">
            Ver
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Producto;
