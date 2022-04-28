import React from 'react'
import { Link } from 'react-router-dom';
import { environment } from '../../environment/environment';

interface ILink {
    to: string;
    type?: 'primary' | 'secundary';
    children: string;
}

export const HyperLink = ({to, type="primary", children}: ILink) => {
  return (
      <Link className={`link link--${type}`} to={`/${environment.urlBase}${to}`}>
        {children}
      </Link>
  )
}