import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ProductListing from './components/ProductListing/ProductListing';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
    </div>
  );
}

export default App;
