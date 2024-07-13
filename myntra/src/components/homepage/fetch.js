import React, { useState, useEffect } from 'react';
import Post from './card'; // Ensure the correct path to the component
import './styles.css'; // Ensure this import

const FetchApi = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="main">
      {products.map(product => (
        <Post key={product.id} id={product.id} category={product.category} image={product.image} />

      ))}
    </div>
  );
};

export default FetchApi;
