import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, name, description, price, seller }) => {
  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <div className="product-card">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          {/* <p className="product-description">{description}</p> */}
          <p className="product-price">{price}</p>
          {/* <p className="product-seller">Seller: {seller}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;