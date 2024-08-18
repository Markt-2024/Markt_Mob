import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, name, description, price, seller, onMarkAsSold, isSold }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-card-link">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">₹{price}</p>
        </div>
      </Link>
      <div className="product-actions">
        {isSold ? (
          <span className="sold-out-label">Sold Out</span>
        ) : (
          <button onClick={() => onMarkAsSold(id)}>
            Mark as Sold
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;