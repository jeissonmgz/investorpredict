import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage/CoinPage";
import ListPage from "./pages/ListPage/ListPage";

const App = (): JSX.Element => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="investorpredict/:coinId" element={<CoinPage />} />
          <Route path="investorpredict/" element={<ListPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
