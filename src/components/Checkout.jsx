import React from "react";
import { useState, useRef } from "react";
import { useCartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Loader from "../components/Loader/Loader";

function Checkout() {
  const [form, setForm] = useState(true);
  const [ordenNo, setOrdenNo] = useState("");
  const nombreRef = useRef();
  const correoRef = useRef();
  const telefonoRef = useRef();
  const { cart, clearCart, totalPrecio } = useCartContext();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <>
        <h1 className="title is-3 has-text-centered mt-4">Carro vacío</h1>
        <Loader />
      </>
    );
  }

  const finalizarCompra = (e) => {
    e.preventDefault();
    if (
      nombreRef.current.value === "" ||
      correoRef.current.value === "" ||
      telefonoRef.current.value === ""
    ) {
      alert("No pueden existir campos vacíos");
    } else {
      const db = getFirestore();
      const ordenesCollection = collection(db, "ordenes");
      const orden = {
        comprador: {
          nombre: nombreRef.current.value,
          correo: correoRef.current.value,
          telefono: telefonoRef.current.value,
        },
        items: cart.map((producto) => ({
          id: producto.item.id,
          titulo: producto.item.titulo,
          precio: producto.item.precio,
          cantidad: producto.cantidad,
        })),
        total: totalPrecio(),
      };
      addDoc(ordenesCollection, orden).then(({ id }) => {
        setForm(false);
        setOrdenNo(id);
        return <TerminarCompra />;
      });
    }
  };
  const TerminarCompra = () => {
    return (
      <>
        <div className="columns is-centered">
          <div className="column is-half has-text-centered">
            <h1 className="title is-3 mt-4">Orden creada satisfactoriamente</h1>
            <h2 className="title is-4">¡Gracias por tu compra!</h2>
            <p className="is-medium mb-3">El N° de seguimiento es: {ordenNo}</p>
            <button
              className="button is-medium is-centered is-link mt-3"
              onClick={() => {
                clearCart();
                navigate("/");
              }}
            >
              Seguir comprando
            </button>
          </div>
        </div>
      </>
    );
  };
  const Formulario = () => {
    return (
      <>
        <div className="columns is-centered">
          <div className="column is-half">
            <h1 className="title is-3 has-text-centered mt-3">
              Ingresa tus datos
            </h1>
            <form onSubmit={finalizarCompra}>
              <label className="label is-medium" htmlFor="nombre">
                Nombre:
              </label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="input is-medium is-link"
                  placeholder="Marco"
                  ref={nombreRef}
                />
                <span className="icon is-small is-left">
                  <i className="fa-solid fa-user"></i>
                </span>
              </div>
              <label className="label is-medium" htmlFor="correo">
                Correo electrónico:
              </label>
              <div className="control has-icons-left">
                <input
                  type="email"
                  name="correo"
                  className="input is-medium is-link"
                  placeholder="hola@reparep.com"
                  ref={correoRef}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <label className="label is-medium" htmlFor="telefono">
                Teléfono:
              </label>
              <div className="control has-icons-left">
                <input
                  type="tel"
                  name="telefono"
                  className="input is-medium is-link"
                  placeholder="+56933088926"
                  ref={telefonoRef}
                />
                <span className="icon is-small is-left">
                  <i className="fa-solid fa-phone"></i>
                </span>
              </div>
              <div className="control mt-4">
                <button
                  type="submit"
                  className="button is-link is-medium is-fullwidth"
                >
                  Completar orden
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
  return form ? <Formulario /> : <TerminarCompra />;
}

export default Checkout;
