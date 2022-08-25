import React from "react";
import Producto from "./Producto";

function ItemListContainer({ greeting }) {
  return (
    <>
      <p className="mt-5 has-text-centered">{greeting}</p>
      <div className="columns mt-5 ml-2 mr-2 is-2 is-variable">
        <div className="column is-4-tablet is-3-desktop">
          <Producto
            img="https://cdn.shopify.com/s/files/1/0288/3099/0420/products/s101038-15l-1-min-cfe49e33-0698-4281-bbeb-ed8f20ba5522_400x.jpg?v=1656539777"
            alt="Proteína Vegetal"
            precio="$19,990"
            nombre="Proteína Vegetal"
          />
        </div>
        <div className="column is-4-tablet is-3-desktop">
          <Producto
            img="https://cdn.shopify.com/s/files/1/0288/3099/0420/products/s123001-4l-1-min-8e339d19-414d-4807-9075-a3260086118e_400x.jpg?v=1658882007"
            alt="Proteína Carne"
            precio="$49,990"
            nombre="Proteína Carne"
          />
        </div>
        <div className="column is-4-tablet is-3-desktop">
          <Producto
            img="https://cdn.shopify.com/s/files/1/0288/3099/0420/products/s107006-3l-3-28ba08eb-551d-4283-a566-171d82203b0e_37aecc14-63b6-485f-9181-d0e17c08cdb5_400x.jpg?v=1655162026"
            alt="Proteína de Leche"
            precio="$42,990"
            nombre="Proteína Suero Leche"
          />
        </div>
        <div className="column is-4-tablet is-3-desktop">
          <Producto
            img="https://cdn.shopify.com/s/files/1/0288/3099/0420/products/s103019-1000g-0-min-a8b79ab5-d4bb-4d06-8a79-420215b2db68_400x.jpg?v=1661200068"
            alt="Creatina"
            precio="$31,990"
            nombre="Creatina"
          />
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
