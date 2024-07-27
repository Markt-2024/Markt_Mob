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


function App() {
  const [products, setProducts] = useState([]);

  // Fetch products from the API

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;