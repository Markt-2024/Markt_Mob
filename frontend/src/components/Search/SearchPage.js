import React, { useState, useEffect } from 'react';
import ProductListing from '../ProductListing/ProductListing';
import './SearchPage.css';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/product/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product?.title?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='search-container'>
      <div className='input'>
        <input 
          type="text" 
          value={query} 
          onChange={handleSearch} 
          placeholder="Search products..." 
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />
      </div>
      <ProductListing products={query ? filteredProducts : products} />
    </div>
  );
};

export default SearchPage;