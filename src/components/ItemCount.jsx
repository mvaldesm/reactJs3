import React from "react";
import { useState } from "react";

const ItemCount = ({ onAdd, inicial, stock }) => {
  const [cantidad, setCantidad] = useState(inicial);
  const addProduct = (num) => {
    setCantidad(cantidad + num);
  };

  return (
    <>
      <div className="columns is-mobile is-vcentered">
        <div className="column is-2">
          <button
            className="button is-black"
            onClick={() => addProduct(-1)}
            disabled={cantidad === inicial}
          >
            -
          </button>
        </div>
        <div className="column is-3 has-text-centered">
          <h1 className="title is-2 has-text-centered">{cantidad}</h1>
        </div>
        <div className="column is-3 has-text-centered">
          <button
            className="button is-black"
            onClick={() => addProduct(+1)}
            disabled={cantidad === stock}
          >
            +
          </button>
        </div>
        <div className="column">
          <button
            className="button is-link is-fullwidth mt-2 mb-2"
            onClick={() => {
              onAdd(cantidad);
            }}
            disabled={stock === 0 ? true : null}
          >
            Añadir al carro
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
