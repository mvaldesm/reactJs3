import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="mt-3 has-text-centered">
      <img
        src={require("../../img/404.jpg")}
        className="is-3-by-4"
        alt="Arnold Schwarzenegger - Error 404 - Página no encontrada"
      />
      <h2 className="title is-2 has-text-centered">404</h2>
      <p className="has-text-centered pb-3">¡Suplemento no encontrado!</p>
      <p className="has-text-centered pb-5">
        <Link to="/">Volver a la página principal</Link>
      </p>
    </div>
  );
}

export default Error;
