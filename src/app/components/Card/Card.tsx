import React from "react";

interface ICard {
  children: JSX.Element;
  className?: string;
}

export const Card = ({ children, className = "" }: ICard) => {
  return <div className={`card ${className}`}>{children}</div>;
};
