import { lazy } from "react";

export const routes = [
  {
    path: "no_encontrado",
    Element: lazy(() => import("../pages/NotFoundPage/NotFoundPage")),
  },
  {
    path: ":coinId",
    Element: lazy(() => import("../pages/CoinPage/CoinPage")),
  },
  {
    path: "",
    Element: lazy(() => import("../pages/ListPage/ListPage")),
  },
  {
    path: "*",
    Element: lazy(() => import("../pages/NotFoundPage/NotFoundPage")),
  },
];
