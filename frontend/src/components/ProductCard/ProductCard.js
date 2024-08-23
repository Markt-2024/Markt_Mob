import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, name, price }) => {
  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image-container">
          <img src={image} alt={name} className="product-image" />
        </div>
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">₹{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
