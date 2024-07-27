import React, { useState, useEffect } from 'react';
import ProductListing from '../ProductListing/ProductListing';
import './SearchPage.css';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // Filter products, checking for undefined values and using optional chaining
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