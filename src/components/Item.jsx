import React from "react";
import ItemCount from "./ItemCount";

function Item({ img, alt, precio, nombre }) {
  const onAdd = (cantidad) => {
    cantidad < 2
      ? alert(`Agregaste ${cantidad} producto.`)
      : alert(`Agregaste ${cantidad} productos.`);
  };
  return (
    <div className="card">
      <div className="card-image has-text-centered px-6">
        <img src={img} alt={alt} />
      </div>
      <div className="card-content has-text-centered">
        <p>{precio}</p>
        <p className="title is-size-5">{nombre}</p>
        <a href="/" className="has-text-grey">
          Ver
        </a>
      </div>
      <footer className="card-footer">
        <ItemCount onAdd={onAdd} inicial={1} stock={9} />
        {/* <p className="card-footer-item">
          <a href="/" className="has-text-grey">
            Ver
          </a>
        </p> */}
      </footer>
    </div>
  );
}

export default Item;
