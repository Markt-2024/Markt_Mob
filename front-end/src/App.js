import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ProductListing from './components/ProductListing/ProductListing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router,Routes , Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header />
    <Routes>
    <Route path="/" element={
          <>
            <Search />
            <ProductListing />
            {/* Include Footer here if it should be part of the main layout */}
          </>
        } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/" element={<Footer />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
