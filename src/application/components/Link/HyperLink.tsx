import React from "react";
import { Link } from "react-router-dom";
import { environment } from "../../../environment/environment";

interface IHyperLink {
  to: string;
  type?: "primary" | "secundary";
  children: string;
}

export const HyperLink = ({ to, type = "primary", children }: IHyperLink) => {
  return (
    <Link className={`link link--${type}`} to={`/${environment.urlBase}${to}`}>
      {children}
    </Link>
  );
};
