import React from "react";

function Hero() {
  return (
    <section className="hero is-medium is-link has-background">
      <img
        alt="Crossfit Games 2022"
        className="hero-background is-transparent"
        src={require("../img/portada.webp")}
      />
      <div className="hero-body">
        <p className="title">repArep.com</p>
        <p className="subtitle">Suplementos Deportivos</p>
      </div>
    </section>
  );
}

export default Hero;
