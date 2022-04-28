import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Loading } from "../components";
import { environment } from "../environment/environment";
import { routes } from "./routes";

const NotFoundLazy = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const RouterApp = () => {
  const { urlBase: prefix } = environment;
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div>
          <Routes>
            {routes.map((route) => {
              const { Element } = route;
              return (
                <Route
                  key={route.path}
                  path={`${prefix}${route.path}`}
                  element={<Element />}
                />
              );
            })}
            <Route path="*" element={<NotFoundLazy />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
};

export default RouterApp;
