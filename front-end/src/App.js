import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Search from './components/Search/SearchPage.js';
import ProductListing from './components/ProductListing/ProductListing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AuthProvider } from './components/authentication/AuthContext.js';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
