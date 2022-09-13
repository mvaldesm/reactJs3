import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ titulo, descripcion, precio, img, alt }) {
  const [irAlCarro, setIrAlCarro] = useState(false);
  const onAdd = (cantidad) => {
    setIrAlCarro(true);
  };
  return (
    <div className="columns">
      <div className="column is-two-fifths ml-6 mt-5">
        <div className="card">
          <div className="card-image has-text-centered">
            <img src={img} alt={alt} />
          </div>
        </div>
      </div>
      <div className="column is-6 ml-3 mr-6 mt-5">
        <div className="card pl-5 pr-5 pb-5">
          <h1 className="title is-4 pt-4">{titulo}</h1>
          <h2 className="title is-2">${precio}</h2>
          <h3 className="title is-5">
            <strong>Descripción</strong>
          </h3>
          <p className="pb-4 has-text-justified">{descripcion}</p>
          {irAlCarro ? (
            <Link
              to="/cart"
              className="button is-fullwidth is-medium is-link ml-3 mr-3 mt-2 mb-2"
            >
              <button className="button is-link">Terminar la compra</button>
            </Link>
          ) : (
            <ItemCount onAdd={onAdd} inicial={1} stock={9} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
