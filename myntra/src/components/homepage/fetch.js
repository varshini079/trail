import React from 'react';
import Post from './card'; // Ensure the correct path to the component
import './styles.css'; // Ensure this import
import SinglePost from './singlepost';
const FetchApi = () => {
  // Define an array of product objects with manual image URLs
  const products = [
    {
      id: 1,
      category: 'Electronics',
      image: 'https://i.pinimg.com/474x/90/7c/19/907c195fe5f71300c2f054ceeaff6cac.jpg',
    },
    {
      id: 2,
      category: 'Clothing',
      image: 'https://i.pinimg.com/474x/4b/56/6b/4b566b8eee0cf13cccd76abf503ca125.jpg',
    },
    {
      id: 3,
      category: 'Home & Kitchen',
      image: 'https://i.pinimg.com/564x/57/34/6c/57346c430299f23d9f7a9252e7b9d461.jpg',
    },
    {
      id: 4,
      category: 'Electronics',
      image: 'https://i.pinimg.com/474x/03/2e/a2/032ea2039c467f7064e6e66d658d5820.jpg',
    },
    {
      id: 5,
      category: 'Clothing',
      image: 'https://i.pinimg.com/474x/ff/6b/4e/ff6b4ed8f71a14691c364a1a87fc9a50.jpg',
    },
    {
      id: 6,
      category: 'Home & Kitchen',
      image: 'https://i.pinimg.com/474x/ee/3e/30/ee3e3088c9d13673009c8993707bf5b5.jpg',
    },
    {
      id: 7,
      category: 'Electronics',
      image: 'https://i.pinimg.com/474x/0c/de/6e/0cde6ece641463ac025215734be64c58.jpg',
    },
    {
      id: 8,
      category: 'Clothing',
      image: 'https://i.pinimg.com/474x/54/2f/f0/542ff0dce19db126614e5cc390364626.jpg',
    },
    {
      id: 9,
      category: 'Home & Kitchen',
      image: 'https://i.pinimg.com/474x/16/08/3d/16083d3133d41f72e3da04bb832530a4.jpg',
    },
    {
      id: 10,
      category: 'Clothing',
      image: 'https://i.pinimg.com/474x/ac/56/48/ac5648a67eb5ff3ac5e25660072b4db6.jpg',
    },
    {
      id: 11,
      category: 'Home & Kitchen',
      image: 'https://i.pinimg.com/474x/61/34/de/6134dee9323d6255c23ce038f2037520.jpg',
    },
    // Add more product objects as needed
  ];

  return (
    <div className="main">
      {products.map(product => (
        <Post key={product.id} id={product.id} category={product.category} image={product.image} />
      ))}
    </div>
  );

  // return (
  //   <div className="main">
  //     {/* Render SinglePost component and pass products as props */}
  //     <SinglePost products={products} />
  //   </div>
  // );

  
};


export default FetchApi;

