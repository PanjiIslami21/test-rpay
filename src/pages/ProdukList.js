
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({ addToCart }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    console.log(products);
    fetchData();
  }, []);
  const [products, setProducts] = useState([]);
 
    if (!Array.isArray(products)) {
      console.error("Products is not an array:", products);
      return null; 
    }



  const handleDragStart = (event, product) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(product));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            draggable
            onDragStart={(event) => handleDragStart(event, product)}
          >
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
