import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails'; // New import
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AuthProvider } from './components/authentication/AuthContext.js';
import { useEffect, useState } from 'react';
import Post from './pages/Post/Post.js';
import AdminHome from './pages/AdminHome/AdminHome.js';
import MyPosts  from './pages/MyPosts/MyPosts.js';
import AboutUs from './pages/About/About.js';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`https://markt-mob.vercel.app/product/all`);
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
  

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<Post/>} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
          <Route path="/admin" element={<AdminHome/>} />
          <Route path="/my-posts" element={<MyPosts/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;