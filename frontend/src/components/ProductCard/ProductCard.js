import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, name, price }) => {
  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <article className="product-card">
        <figure className="product-image-container">
          <img src={image} alt={name} className="product-image" />
        </figure>
        <section className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">₹{price}</p>
        </section>
      </article>
    </Link>
  );
};

export default ProductCard;
