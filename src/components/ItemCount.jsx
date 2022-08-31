import React from "react";
import { useState } from "react";

const ItemCount = ({ onAdd, inicial, stock }) => {
  const [cantidad, setCantidad] = useState(inicial);
  const addProduct = (num) => {
    setCantidad(cantidad + num);
  };

  return (
    <>
      <div className="columns has-text-centered is-mobile is-vcentered">
        <div className="column has-text-centered">
          <button
            className="button is-black ml-2 mt-2 mb-2"
            onClick={() => addProduct(-1)}
            disabled={cantidad === inicial}
          >
            -
          </button>
        </div>
        <div className="column has-text-centered">
          <h1 className="title is-2 mt-1">{cantidad}</h1>
        </div>
        <div className="column has-text-centered">
          <button
            className="button is-black mr-2 mt-2 mb-2"
            onClick={() => addProduct(+1)}
            disabled={cantidad === stock}
          >
            +
          </button>
        </div>
        <div className="column">
          <button
            className="button is-link mt-2 mb-2"
            onClick={() => {
              onAdd(cantidad);
            }}
            disabled={stock === 0 ? true : null}
          >
            Añadir
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
