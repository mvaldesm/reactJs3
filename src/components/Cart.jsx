import React from "react";
import { useCartContext } from "./CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cart, totalPrecio, removeItem } = useCartContext();
  const navigate = useNavigate();
  const orden = {
    comprador: {
      nombre: "Marco",
      correo: "mvaldes@gmail.com",
      telefono: "+56933088925",
      domicilio: "Machalí, Chile",
    },
    items: cart.map((producto) => ({
      id: producto.item.id,
      titulo: producto.item.titulo,
      precio: producto.item.precio,
      cantidad: producto.cantidad,
    })),
    total: totalPrecio(),
  };

  const finalizarCompra = () => {
    const db = getFirestore();
    const ordenesCollection = collection(db, "ordenes");
    addDoc(ordenesCollection, orden).then(({ id }) =>
      console.log("ID orden de compra: " + id)
    );
  };

  if (cart.length === 0) {
    return (
      <>
        <div className="columns is-mobile is-centered mt-5">
          <div className="column is-half">
            <p className="has-text-centered">
              No hay productos en el carro de compra
              <br />
              <Link to="/">Ir a comprar</Link>{" "}
            </p>
          </div>
        </div>
      </>
    );
  }
  console.log(cart);
  return (
    <>
      <h1 className="title is-3 has-text-centered mt-5">Carro de compras</h1>
      {cart.map((item) => (
        <div key={item.item.id} className="container box">
          <div className="columns is-mobile is-centered">
            <div className="column is-narrow">
              <img
                src={item.item.img}
                className="image is-128x128"
                alt={item.item.alt}
              />
            </div>
            <div className="column is-narrow">
              <p>
                <strong>{item.item.titulo}</strong>
              </p>
              <p>Cantidad: {item.cantidad}</p>
              <p>Precio unidad: ${item.item.precio}</p>
              <p>Subtotal: ${item.cantidad * parseInt(item.item.precio)}</p>
              <button
                className="button is-link is-small mt-2"
                onClick={() => removeItem(item.item.id)}
              >
                Quitar del carro
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="columns is-mobile is-centered mt-5">
        <div className="column is-half">
          <h2 className="title is-4 has-text-centered mt-2">
            <strong>Total:</strong> ${totalPrecio()}
          </h2>
          <div className="columns is-mobile is-centered mt-5">
            <button
              onClick={() => navigate("/checkout")}
              // onClick={finalizarCompra}
              className="button is-link is-centered"
            >
              Generar orden de compra
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
