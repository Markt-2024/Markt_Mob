import React from 'react';
import ProductCard from '../posts_Card/ProductCard';

const ProductListing = ({ products, onMarkAsSold }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          id={product._id}  
          image={product.image}
          name={product.title}
          description={product.description}
          price={product.price}
          seller={product.contact}
          isSold={product.isSold}
          onMarkAsSold={onMarkAsSold}
        />
      ))}
    </div>
  );
}

export default ProductListing;
