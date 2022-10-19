import React from "react";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader/Loader";

function ItemDetailContainer() {
  const [elproducto, setElProducto] = useState({});
  const [loader, setLoader] = useState(false);
  const { productoId } = useParams();

  useEffect(() => {
    setLoader(true);
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "suplementos", productoId);
    getDoc(queryDoc).then((res) => {
      setElProducto({ id: res.id, ...res.data() });
      setLoader(false);
    });
  }, [productoId]);

  return <>{loader ? <Loader /> : <ItemDetail {...elproducto} />}</>;
}

export default ItemDetailContainer;
