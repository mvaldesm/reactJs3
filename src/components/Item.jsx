import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function Item({ id, titulo, precio, img, alt }) {
  const onAdd = (cantidad) => {
    cantidad < 2
      ? alert(`Agregaste ${cantidad} producto.`)
      : alert(`Agregaste ${cantidad} productos.`);
  };
  return (
    <div className="column is-3">
      <div className="card">
        <div className="card-image has-text-centered px-6">
          <img src={img} alt={alt} />
        </div>
        <div className="card-content has-text-centered">
          <p>${precio}</p>
          <p className="title is-size-5">
            {titulo} {id}
          </p>
          <Link to={`/item/${id}`}>Ver</Link>
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
    </div>
  );
}

export default Item;
