import React from 'react';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
  const {items} = useContext(CartContext) ;

  const total = items.reduce((acumulador, actual) => acumulador + actual.quantity, 0);

  return(
    <div className='d-flex align-items-center container'>
      <Link to={"/cart"}>
        <i className="bi bi-cart2"></i>
      </Link>
      <Badge bg="secondary">{total}</Badge>
    </div>
  )
}