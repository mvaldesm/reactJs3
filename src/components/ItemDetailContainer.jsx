import React from "react";
import { useState, useEffect } from "react";
import catalogo from "../productos/Productos";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(catalogo);
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(catalogo);
      }, 2000);
    });
    promesa.then(() => {
      setItem(catalogo[1]);
    });
    promesa.catch(() => {
      console.log("Error al cargar el producto.");
    });
  });

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
