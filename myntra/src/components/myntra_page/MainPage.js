// src/MainPage.js
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';

const products = [
  {
    image: 'https://i.pinimg.com/474x/84/ef/79/84ef793060ff00d61589fe5e43dc4a9f.jpg', // replace with actual URLs
    brand: 'KALINI',
    name: 'Kurta With Trousers & Dupatta',
    price: 738,
    originalPrice: 4345,
    discount: '(83% OFF)'
  },
  {
    image: 'https://i.pinimg.com/474x/c2/6a/de/c26ade0e56597a7efa5e104d8d8baa9c.jpg',
    brand: 'KALINI',
    name: 'Anarkali Pure Cotton Kurta Set',
    price: 1199,
    originalPrice: 6999,
    discount: '(83% OFF)'
  },
  {
    image: 'https://i.pinimg.com/474x/34/0a/73/340a735ae401dff80e1dbf64f51f4416.jpg',
    brand: 'KALINI',
    name: 'Kurta with Trousers & Dupatta',
    price: 1199,
    originalPrice: 6999,
    discount: '(83% OFF)'
  },
  {
    image: 'https://i.pinimg.com/474x/cd/6e/1c/cd6e1c72a259de68c35c225c19f35b3c.jpg',
    brand: 'VARANGA',
    name: 'Kurs & Dupatta',
    price: 1199,
    originalPrice: 6999,
    discount: '(83% OFF)'
  },
  {
    image: 'https://i.pinimg.com/474x/ab/c9/48/abc948588d330b4b788170831e882bea.jpg',
    brand: 'SINGNI',
    name: 'Kurta with Trousers & Dupatta',
    price: 1199,
    originalPrice: 6999,
    discount: '(83% OFF)'
  },
  {
    image: 'https://i.pinimg.com/474x/2b/da/51/2bda51288f8393519c6628916cdc7d49.jpg',
    brand: 'KALINI',
    name: 'Kurta with Trousers & Dupatta',
    price: 1199,
    originalPrice: 6999,
    discount: '(83% OFF)'
  },
  {
    image: 'https://i.pinimg.com/474x/ab/5c/17/ab5c173c9d9055287bd90e8ad868ddae.jpg',
    brand: 'KALINI',
    name: 'Kurta with Trusers & Dupatta',
    price: 1199,
    originalPrice: 6999,
    discount: '(83% OFF)'
  },
  {
    image: 'https://i.pinimg.com/474x/ca/c1/91/cac191da89b1aa1542cc2141275684c6.jpg',
    brand: 'KALINI',
    name: 'Kurta with Trusers & Dupatta',
    price: 1199,
    originalPrice: 6999,
    discount: '(83% OFF)'
  },
  // Add more products as needed
];

const MainPage = () => {
    const [curations, setCurations] = useState(['ethnic', 'casuals', 'for home']);
  
    const addCuration = (newCuration) => {
      setCurations([...curations, newCuration]);
    };
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, padding: 2 }}>
        <FilterSidebar />
        <Grid container spacing={1}> {/* Reduce spacing */}
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard product={product} curations={curations} addCuration={addCuration} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default MainPage;