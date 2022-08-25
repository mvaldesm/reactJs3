import React from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ItemListContainer greeting="¡Hola! Bienvenido a nuestra tienda 👋" />
      <Footer />
    </>
  );
}

export default App;
