import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <>
      <div className="columns is-multiline is-centered mt-5 ml-2 mr-2 is-2 is-variable">
        {products.map((producto) => (
          <Item key={producto.id} {...producto} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
