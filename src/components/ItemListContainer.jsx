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
import ItemList from "./ItemList";
import Loader from "./Loader/Loader";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const { categoryId } = useParams();
  useEffect(() => {
    setLoader(true);
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "suplementos");
    if (categoryId) {
      const queryFiltro = query(
        queryCollection,
        where("category", "==", categoryId)
      );
      getDocs(queryFiltro).then((res) => {
        setProducts(
          res.docs.map((producto) => ({
            id: producto.id,
            ...producto.data(),
          }))
        );
        setLoader(false);
      });
    } else {
      getDocs(queryCollection).then((res) => {
        setProducts(
          res.docs.map((producto) => ({
            id: producto.id,
            ...producto.data(),
          }))
        );
        setLoader(false);
      });
    }
  }, [categoryId]);
  return (
    <>
      <p className="mt-5 has-text-centered">{greeting}</p>
      {loader ? <Loader /> : <ItemList products={products} />}
    </>
  );
}

export default ItemListContainer;
