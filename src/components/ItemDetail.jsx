import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail({ titulo, descripcion, precio, img, alt }) {
  const { productoId } = useParams();
  return (
    <div className="columns">
      <div className="column is-two-fifths ml-6 mt-5">
        <div className="card">
          <div className="card-image has-text-centered">
            <img src={img} alt={alt} />
          </div>
        </div>
      </div>
      <div className="column is-6 ml-3 mr-6 mt-5">
        <div className="card pl-5 pr-5 pb-5">
          <h1 className="title is-4 pt-4">
            {titulo} {productoId}
          </h1>
          <h2 className="title is-2">{precio}</h2>
          <h3 className="title is-5">
            <strong>Descripción</strong>
          </h3>
          <p className="pb-4 has-text-justified">
            {descripcion} {descripcion}
          </p>
          <button className="button is-fullwidth is-medium is-link">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
