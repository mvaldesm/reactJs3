import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <div className="columns mt-5 ml-2 mr-2 is-2 is-variable">
      {products.map((x) => (
        <div className="column is-4-tablet is-3-desktop">
          <Item
            key={x.id}
            img={x.img}
            alt={x.alt}
            precio={x.precio}
            nombre={x.titulo}
          />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
