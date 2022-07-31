import React from "react";
import { HyperLink } from "src/app/components";

const NotFoundPage = () => {
  return (
    <div className="list_page">
      <h1 className="coin__title">Oops!</h1>
      <p>No encontramos la página que estas buscando</p>
      <HyperLink to="">Busca criptomonedas</HyperLink>
    </div>
  );
};

export default NotFoundPage;
