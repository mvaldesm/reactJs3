import React from "react";
import { useCartContext } from "./CartContext";

function CartItems({ item }) {
  const { removeItem } = useCartContext();
  return (
    <div>
      <img src={item.img} alt={item.alt} />
      <div>
        <p>Título: {item.titulo}</p>
        <p>Cantidad: {item.cantidad}</p>
        <p>Precio: {item.precio}</p>
        <p>Subtotal: ${item.cantidad * item.precio}</p>
        <button onClick={removeItem(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default CartItems;
