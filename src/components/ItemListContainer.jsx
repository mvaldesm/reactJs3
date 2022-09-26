import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
// import { getProductos, getProductosPorCategoria } from "../productos/Productos";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "suplementos");
    if (categoryId) {
      const queryFiltro = query(
        queryCollection,
        where("category", "==", categoryId)
      );
      getDocs(queryFiltro).then((res) =>
        setProducts(
          res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setProducts(
          res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      );
    }
    // antiguo código:
    // if (!categoryId) {
    //   getProductos().then((products) => {
    //     setProducts(products);
    //   });
    // } else {
    //   getProductosPorCategoria(categoryId).then((products) => {
    //     setProducts(products);
    //   });
    // }
  }, [categoryId]);
  return (
    <>
      <p className="mt-5 has-text-centered">{greeting}</p>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
