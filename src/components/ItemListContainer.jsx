import React from "react";
import catalogo from "../productos/Productos";
import { useState } from "react";
import Item from "./Item";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState(catalogo);

  return (
    <>
      <p className="mt-5 has-text-centered">{greeting}</p>
      <div className="columns mt-5 ml-2 mr-2 is-2 is-variable">
        {products.map((x) => (
          <div className="column is-4-tablet is-3-desktop">
            <Item
              key={x.id}
              img={x.img}
              alt={x.alt}
              precio={x.precio}
              nombre={x.nombre}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ItemListContainer;
