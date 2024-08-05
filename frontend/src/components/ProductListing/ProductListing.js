import ProductCard from '../ProductCard/ProductCard';
import './ProductListing.css';

const ProductListing = ({products}) => {
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {products.map((product,index) => (
            <ProductCard
              key={index}
              id={product._id}  
              image={product.image}
              name={product.title}
              description={product.description}
              price={product.price}
              seller={product.contact}
            />
          ))}
        </div>
      );
    }

export default ProductListing;