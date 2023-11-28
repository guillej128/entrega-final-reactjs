import React from 'react';  
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
  const cartItemCount = 5; 

  return (
    <Badge badgeContent={cartItemCount} color="error">
      <ShoppingCartIcon />
    </Badge>
  );
};

export default CartWidget;
