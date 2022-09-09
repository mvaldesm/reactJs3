import React from "react";
import { useState, useEffect } from "react";
import { getProductosPorId } from "../productos/Productos";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [elproducto, setElProducto] = useState();
  const { productoId } = useParams();
  useEffect(() => {
    getProductosPorId(productoId).then((elproducto) => {
      setElProducto(elproducto);
    });
  }, [productoId]);

  return <ItemDetail {...elproducto} />;
}

export default ItemDetailContainer;
