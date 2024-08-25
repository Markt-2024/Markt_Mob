import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, name , price}) => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-card-link">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">₹{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;