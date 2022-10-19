import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Error from "./components/Error/Error";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./components/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ItemListContainer greeting="¡Hola! Bienvenido a nuestra tienda 👋" />
                  <Footer />
                </>
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <>
                  <ItemListContainer />
                  <Footer />
                </>
              }
            />
            <Route
              path="/item/:productoId"
              element={
                <>
                  <ItemDetailContainer />
                  <Footer />
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
