import React from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalProductos } = useCartContext();
  return (
    <span className="icon-text has-text-white">
      <span className="icon is-medium has-text-white">
        <Link to="/cart">
          <i className="fas fa-cart-shopping has-text-white"></i>
        </Link>
      </span>
      <p>{totalProductos() || ""}</p>
    </span>
  );
}

export default CartWidget;
