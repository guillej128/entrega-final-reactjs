import { useState } from 'react';
import {  Button } from 'react-bootstrap';




export const ItemCount = ({ stock, onAdd, initial}) => {

  const [count, setCount] = useState(initial);

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleAdd = () => {
    
    if (stock >= initial) {
      onAdd(count);
    } else {
      alert("Este producto no está disponible!!");
    }
    
  };


  return (
    <div id='container-count'>
      <div className='container-controls'>
        <Button className='decrement' variant="dark" disabled={count<2} onClick={handleDecrease} > - </Button>
        <div className='counter'>{count && stock}</div>
        <Button className='increment' variant='dark' disabled={count === stock || stock < 1} 
        onClick={handleIncrease}>+</Button>
      </div>
      <Button id='add-to-cart' variant='dark' onClick={handleAdd}>
        Agreagr al Carrito
      </Button>
    </div>
  )
}