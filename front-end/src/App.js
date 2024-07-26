import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails'; // New import
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AuthProvider } from './components/authentication/AuthContext.js';

function App() {
  // Your products data here (or you might fetch it from an API)
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