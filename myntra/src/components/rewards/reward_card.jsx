import React from 'react';
import './card.css';
import image1 from './images/img1.avif';
import image2 from './images/img2.png';
import image3 from './images/refer.avif';
import image4 from './images/img4.webp';
import image55 from './images/img55.jpg';

// Card Component
function Card({ image, title, description }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

// App Component
function CardApp() {
    return (
        <div className="app-container">
            <h1>REWARDS</h1>
            <div className="card-container">
                <Card 
                    image={image1} 
                    title="Free Shop" 
                    description="More views on your videos will give you the opportunity of free shopping" 
                />
                <Card 
                    image={image2} 
                    title="Discounts" 
                    description="Get more Discounts on desired products" 
                />
                <Card 
                    image={image3} 
                    title="More Friends" 
                    description="Shop more and get more rewards" 
                />
                <Card 
                    image={image4} 
                    title="Family Access" 
                    description="shop with the family and enjoy rewards" 
                />
                <Card 
                    image={image55} 
                    title="Family Access" 
                    description="shop with the family and enjoy rewards" 
                />
            </div>
        </div>
    );
}

export default CardApp;
