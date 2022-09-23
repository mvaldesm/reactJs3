import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const totalPrecio = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.item.precio, 0);
  };
  const totalProductos = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.cantidad,
      0
    );
  const clearCart = () => setCart([]);
  const isInCart = (id) => {
    return cart.find((producto) => producto.id === id) ? true : false;
  };
  const removeItem = (id) =>
    setCart(cart.filter((producto) => producto.item.id !== id));
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
        totalPrecio,
        totalProductos,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
