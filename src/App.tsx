import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { environment } from "./environment/environment";
import CoinPage from "./pages/CoinPage/CoinPage";
import ListPage from "./pages/ListPage/ListPage";

const App = (): JSX.Element => {
  const { urlBase } = environment;
  return (
    <Router>
      <div>
        <Routes>
          <Route path={`${urlBase}:coinId`} element={<CoinPage />} />
          <Route path={`${urlBase}`} element={<ListPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
