import React, { useEffect, useState } from 'react';
import ProductListing from '../MyPosts/posts_Listing/ProductListing';
import './MyPosts.css';



export default function MyPosts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const userId = localStorage.getItem('userId');
        const response = await fetch(`https://markt-mob.vercel.app/product/my-posts?userId=${userId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        setMessage(`There was a problem with the fetch operation: ${error.message}`);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts(filter);
  }, [products, filter]);

  const filterProducts = (filterType) => {
    switch (filterType) {
      case 'sold':
        setFilteredProducts(products.filter(product => product.isSold));
        break;
      case 'unsold':
        setFilteredProducts(products.filter(product => !product.isSold));
        break;
      default:
        setFilteredProducts(products);
    }
  };

  const markAsSold = async (productId) => {
    try {
      const response = await fetch(`https://markt-mob.vercel.app/product/mark-as-sold/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to mark product as sold');
      }

      const data = await response.json();
      const updatedProducts = products.map(product =>
        product._id === productId ? { ...product, isSold: true } : product
      );
      setProducts(updatedProducts);
      setMessage(data.message);
    } catch (error) {
      setMessage(`Error marking product as sold: ${error.message}`);
    }
  };

  return (
    <div className="MyPosts">
      <h1>Your Posts</h1>
      {message && <p className="message">{message}</p>}
      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}>All Products</button>
        <button
          className={filter === 'sold' ? 'active' : ''}
          onClick={() => setFilter('sold')}>Sold Products</button>
        <button
          className={filter === 'unsold' ? 'active' : ''}
          onClick={() => setFilter('unsold')}>Unsold Products</button>
      </div>
      <ProductListing products={filteredProducts} onMarkAsSold={markAsSold} />
    </div>
  );
}