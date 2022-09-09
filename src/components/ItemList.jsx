import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <>
      <div className="columns is-centered mt-5 ml-2 mr-2 is-2 is-variable">
        {
          products.map((producto) => (
            <Item key={producto.id} {...producto} />
          ))
          // <Item
          //   key={x.id}
          //   id={x.id}
          //   img={x.img}
          //   alt={x.alt}
          //   precio={x.precio}
          //   nombre={x.titulo}
          // />
        }
      </div>
    </>
  );
}

export default ItemList;
