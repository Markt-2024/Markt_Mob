import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductListing from '../../components/AdminProductListing/AdminProductListing';
import './AdminHome.css';

const AdminHome = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login'); 
        return;
      }

      try {
        const response = await fetch('/admin/all', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          navigate('/'); 
          return;
        }

        if (response.status === 403) {
          navigate('/'); 
          return;
        }

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        navigate('/'); 
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [navigate]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product?.title?.toLowerCase().includes(query.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='search-container'>
      <h1>Admin Home</h1>
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

export default AdminHome;
