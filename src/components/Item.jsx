import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function Item({ ...elproducto }) {
  return (
    <div className="column is-3">
      <div className="card">
        <div className="card-image has-text-centered px-6">
          <img src={elproducto.img} alt={elproducto.alt} />
        </div>
        <div className="card-content has-text-centered">
          <p>${elproducto.precio}</p>
          <p className="title is-size-5">{elproducto.titulo}</p>
        </div>
        <footer className="card-footer">
          <Link
            to={`/item/${elproducto.id}`}
            className="button is-fullwidth is-medium is-link ml-3 mr-3 mt-2 mb-2"
          >
            <button className="button is-link">Ver</button>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Item;
