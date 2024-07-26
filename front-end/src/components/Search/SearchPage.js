import React, { useState } from 'react';
import ProductListing from '../ProductListing/ProductListing';
import './SearchPage.css';
const SearchPage = () => {
    const [query, setQuery] = useState('');
    const products = [
        {
          image: 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-1200x675.webp',          
          name: 'Handcrafted Ceramic Vase',
          description: 'A beautiful, one-of-a-kind ceramic vase made by a local artist.',
          price: '$45.99',
          seller: '+1234567890',
        },
        {
          image: 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-1200x675.webp',
          name: 'Vintage Leather Satchel',
          description: 'A timeless, high-quality leather satchel perfect for everyday use.',
          price: '$89.99',
          seller: '+1234567890',
        },
        {
          image: 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-1200x675.webp',
          name: 'Artisanal Wooden Cutting Board',
          description: 'A durable and stylish cutting board made from sustainably sourced wood.',
          price: '$29.99',
          seller: '+1234567890',
        },
        {
          image: 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-1200x675.webp',
          name: 'Organic Cotton T-Shirt',
          description: 'A soft and comfortable t-shirt made from 100% organic cotton.',
          price: '$24.99',
          seller: '+1234567890',
        },
    ];

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
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
