import React, { ChangeEvent, forwardRef } from "react";

interface IInput {
  type: string;
  id?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input = forwardRef(({
  type,
  id,
  placeholder,
  onChange,
  value
}: IInput, ref: any): JSX.Element => {
  return (
    <input
      className="list_page__search"
      type={type}
      id={id}
      name={id}
      ref={ref}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      value={value}
    />
  );
});
