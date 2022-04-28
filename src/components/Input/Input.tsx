import React, { ChangeEvent } from 'react'

interface IInput {
    type: string;
    placeholder?: string;
    onChange: (e:ChangeEvent<HTMLInputElement>)=> void;
    value: string;
}

export const Input = ({
    type,
    placeholder,
    onChange,
    value
}:IInput): JSX.Element => {
  return (
    <input
        className="list_page__search"
        type={type}
        placeholder={placeholder}
        onChange={e=> onChange(e)}
        value={value}
      />
  )
}