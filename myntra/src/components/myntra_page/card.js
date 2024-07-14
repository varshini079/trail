// Card.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const CategoryCard = ({ title, discount, imageUrl }) => {
  return (
    <Card sx={{ width: 300, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {discount}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
