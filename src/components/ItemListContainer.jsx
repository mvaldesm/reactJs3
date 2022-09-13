import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosPorCategoria } from "../productos/Productos";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    if (!categoryId) {
      getProductos().then((products) => {
        setProducts(products);
      });
    } else {
      getProductosPorCategoria(categoryId).then((products) => {
        setProducts(products);
      });
    }
  }, [categoryId]);
  return (
    <>
      <p className="mt-5 has-text-centered">{greeting}</p>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
