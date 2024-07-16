import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ProductListing from './components/ProductListing/ProductListing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import Home from './pages/Home/Home';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
  );
}

export default App;
