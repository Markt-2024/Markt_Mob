import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/product/${id}`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.msg || 'Product not found');
        }
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="product-details-page product-not-found">Product not found</div>;
  }

  return (
    <div className="product-details-page">
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: {product.price}</p>
          <p className="product-seller">Seller: {product.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;