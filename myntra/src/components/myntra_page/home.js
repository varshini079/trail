// src/components/myntra_page/Home.js
import React from 'react';
import categories from './categoriesData';
import './styles.css';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const MyntraPage = () => {
  return (
    <div>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      style={{
        textAlign: 'center', // Center align the text
        fontSize: '5rem', // Increase the font size (adjust as needed)
        marginTop: '20px', // Optional: Add margin top
      }}
    >
      Shop by category
    </Typography>
    <div className="card-container">
      {categories.map((category) => (
        <div className="card" key={category.id}>
          <img src={category.imageUrl} className="card-img-top" alt={category.title} />
          <div className="card-body">
            <h5 className="card-title">{category.title}</h5>
            <p className="card-text">{category.discount}</p>
            <Link to="/shop">
      <Button variant="contained" color="primary">Shop Now</Button>
    </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyntraPage;
