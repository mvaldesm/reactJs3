import React from "react";
import { useState, useEffect } from "react";
import catalogo from "../productos/Productos";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState(catalogo);
  useEffect(() => {
    const promesaDos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(catalogo);
      }, 2000);
    });
    promesaDos.then(() => {
      setProducts(catalogo);
    });
    promesaDos.catch(() => {
      console.log("Error al cargar los productos.");
    });
  });

  return (
    <>
      <p className="mt-5 has-text-centered">{greeting}</p>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
