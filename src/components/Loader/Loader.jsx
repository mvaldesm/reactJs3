import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <>
      <div className="columns is-centered mt-5">
        <div className="column has-text-centered">
          <span className="loader is-centered"></span>
        </div>
      </div>
    </>
  );
}

export default Loader;
