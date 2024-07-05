import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, description, price, seller }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">{price}</p>
        <p className="product-seller">Seller: {seller}</p>
      </div>
    </div>
  );
};

export default ProductCard;
