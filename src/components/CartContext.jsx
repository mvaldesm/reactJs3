import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const clearCart = () => setCart([]);
  const isInCart = (id) => {
    return cart.find((producto) => producto.id === id) ? true : false;
  };
  const removeItem = (id) =>
    setCart(cart.filter((producto) => producto.id !== id));
  const addItem = (item, nuevaCantidad) => {
    const nuevoCarro = cart.filter((prod) => prod.id !== item.id);
    nuevoCarro.push({ item, cantidad: nuevaCantidad });
    setCart(nuevoCarro);
  };
  console.log("carro: ", cart);
  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeItem,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
