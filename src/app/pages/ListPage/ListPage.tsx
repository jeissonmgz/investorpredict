import React from "react";
import { Card, Input } from "src/app/components";
import ScrollList from "./components/ScrollList";
import { ListPageLogic } from "./ListPage.logic";

const ListPage = (): JSX.Element => {
  const { onChangeFilterHandler, filter, coinsFiltered, coins, onInputSearchFocusHandler, searchInputRef } =
    ListPageLogic();
    
  return (
    <div className="list_page">
      <div className="section section--primary">
        <div className="list_page__head">
          <picture>
            <source media="(max-width: 768px)" width="200px" srcSet="/investorpredict/assets/undraw_crypto_portfolio.svg" />
            <source media="(max-width: 992px)" width="300px" srcSet="/investorpredict/assets/undraw_crypto_portfolio.svg" />
            <img  width="500px" src="/investorpredict/assets/undraw_crypto_portfolio.svg" alt="Chris standing up holding his daughter Elva" />
          </picture>
         
          <div className="list_page__head_text">
            <h1 className="coin__title">Bienvenido a Investorpredict</h1>
            <h2 className="coin__subtitle">Descubre el emocionante mundo de las criptomonedas y toma decisiones informadas sobre tus inversiones de la próxima semana</h2>
            <a className="link link--secundary" onClick={onInputSearchFocusHandler} href="#search-coin">¡Empecemos!</a>
          </div>
        </div>
      </div>
      <section className="stripe search_coin--container">
      <div id="search-coin" className="section search_coin">
        <label htmlFor="searchInput"><h2>Busca tu criptomoneda</h2></label>
        <Input
          id="searchInput"
          ref={searchInputRef}
          type="text"
          placeholder="ej: bitcoin"
          onChange={onChangeFilterHandler}
          value={filter}
        />
      </div>
      {coinsFiltered.length === 0 && coins.length !== 0 && filter !== "" && (
        <div>No encontramos tu criptomoneda :(</div>
      )}
      {coinsFiltered.length > 0 && <ScrollList coins={coinsFiltered} />}
      </section>
    
<section className="section">
  <h2>¿Qué ofrecemos?</h2>
  <div className="carousel">
  <Card className="w-200">
    <p>Pronósticos para los próximos 5 días.</p>
  </Card>
  <Card className="w-200">
    <p>Análisis detallado del histórico de precios en dólares.</p>
  </Card>
  <Card className="w-200">
    <p>Herramientas para tomar decisiones sobre tus inversiones en criptomonedas.</p>
  </Card>
  <Card className="w-200">
    <p>Actualizaciones regulares sobre el mercado de criptomonedas y las tendencias emergentes.</p>
  </Card>
  </div>
</section>
      
<section className="section">
  <h2>¿Cómo funciona?</h2>
  <ol>
    <li>Ingresa el nombre de la criptomoneda que te interesa en nuestro buscador.</li>
    <li>Explora el historial de precios en dólares y nuestra estimación para los próximos 5 días.</li>
    <li>¡Toma decisiones informadas y maximiza tus oportunidades de inversión!</li>
  </ol>
</section>
    </div>
  );
};

export default ListPage;
