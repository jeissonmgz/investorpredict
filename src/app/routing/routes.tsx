import { lazy } from "react";

export const routes = [
  {
    path: "no_encontrado",
    Element: lazy(() => import("src/app/pages/NotFoundPage/NotFoundPage")),
  },
  {
    path: ":coinId",
    Element: lazy(() => import("src/app/pages/CoinPage/CoinPage")),
  },
  {
    path: "",
    Element: lazy(() => import("src/app/pages/ListPage/ListPage")),
  },
  {
    path: "*",
    Element: lazy(() => import("src/app/pages/NotFoundPage/NotFoundPage")),
  },
];
