import React from "react";

interface ICard {
  children: JSX.Element;
}

export const Card = ({ children }: ICard) => {
  return <div className="card">{children}</div>;
};
