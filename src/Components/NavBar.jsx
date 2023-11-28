import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import { products } from '../data/products';

const categories = products.map((item) => item.category);
const uniqueCategories = [...new Set(categories)];

export const NavBar = () => {
  return (
    <Container
      sx={{
        pt: 3,
        pb: 3,
        borderBottom: '1px solid #ccc',
      }}
    >
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item xs={4}>
          <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', color: 'primary.main' }}>
            <Link
              component={NavLink}
              to="/"
              variant="inherit"
              sx={{ color: 'inherit', textDecoration: 'none' }}
            >
              Moto Mania
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <nav>
            {uniqueCategories.map((item) => (
              <Link
                key={item}
                component={NavLink}
                to={`/category/${item}`}
                variant="body2"
                sx={{ color: 'text.primary', fontSize: '1rem', fontWeight: 'bold', mx: 3 }}
              >
                {item}
              </Link>
            ))}
          </nav>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CartWidget />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;
