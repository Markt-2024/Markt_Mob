import ProductCard from '../ProductCard/ProductCard';
import testImage from '../ProductListing/test.jpeg'
import './ProductListing.css';

const ProductListing = () => {
    const products = [
        {
          image: testImage,
          name: 'Handcrafted Ceramic Vase',
          description: 'A beautiful, one-of-a-kind ceramic vase made by a local artist.',
          price: '$45.99',
          seller: '+1234567890',
        },
        {
          image: testImage,
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
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              seller={product.seller}
            />
          ))}
        </div>
      );
    }

export default ProductListing;