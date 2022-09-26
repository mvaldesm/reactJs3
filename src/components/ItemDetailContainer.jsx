import React from "react";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { getProductosPorId } from "../productos/Productos";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [elproducto, setElProducto] = useState({});
  const { productoId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "suplementos", productoId);
    getDoc(queryDoc).then((res) =>
      setElProducto({ id: res.id, ...res.data() })
    );
    // código antiguo:
    // getProductosPorId(productoId).then((elproducto) => {
    //   setElProducto(elproducto);
    // });
  }, [productoId]);

  return <ItemDetail {...elproducto} />;
}

export default ItemDetailContainer;
