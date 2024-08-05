import React, { useEffect, useState } from 'react';
import ProductListing from '../../components/ProductListing/ProductListing';
import './MyPosts.css';

export default function MyPosts() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const userId = localStorage.getItem('userId');
        const response = await fetch(`http://localhost:8083/product/my-posts?userId=${userId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setMessage(`There was a problem with the fetch operation: ${error.message}`);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="MyPosts">
      <h1>My Posts</h1>
      {message && <p className="message">{message}</p>}
      <ProductListing products={products} />
    </div>
  );
}


